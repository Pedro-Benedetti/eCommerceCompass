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
}
