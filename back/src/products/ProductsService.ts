import { InjectRepository } from "@nestjs/typeorm";
import { Products } from "./ProductsEntity";
import { CreateProductDTO } from "./dto/CreateProductDTO";
import { Repository } from "typeorm";

export class ProductsService {
    constructor(
        @InjectRepository(Products)
        private readonly productRepository: Repository<Products>
    ) {}

    async create(createPetDTO: CreateProductDTO): Promise<Products> {
        const imagesAsString = createPetDTO.images.join(',');
        const productToSave = {
            ...createPetDTO,
            images: imagesAsString,
        };

        return await this.productRepository.save(productToSave);
    }

    async createMany(products: CreateProductDTO[]): Promise<Products[]> {
        const formattedProducts = products.map(product => ({
            ...product,
            images: product.images.join(','),
        }));

        return await this.productRepository.save(formattedProducts);
    }

    async findAll(): Promise<Array<Omit<Products, 'images'> & { images: string[] }>> {
        const products = await this.productRepository.find();

        const parsedProducts: Array<Omit<Products, 'images'> & { images: string[] }> = products.map(product => ({
            ...product,
            images: product.images.split(',').map(img => 
                img.startsWith('/uploads') ? img : `/uploads/${img}`),
        }));

        return parsedProducts;
    }

    async filterProducts(filters: {
       gender?: string;
       color?: string;
       size?: string;
       age?: string;
  }): Promise<Array<Omit<Products, 'images'> & { images: string[] }>> {
        const query = this.productRepository.createQueryBuilder('product');

        if (filters.gender) {
    query.andWhere('product.gender = :gender', { gender: filters.gender });
  }
        if (filters.color) {
    query.andWhere('product.color = :color', { color: filters.color });
  }
        if (filters.size) {
    query.andWhere('product.size = :size', { size: filters.size });
  }
        if (filters.age) {
    query.andWhere('product.age = :age', { age: filters.age });
  }

  const products = await query.getMany();

        return products.map(product => ({
            ...product,
      images: product.images.split(',').map(img =>
      img.startsWith('/uploads') ? img : `/uploads/${img}`
    ),
  }));
        }

}
