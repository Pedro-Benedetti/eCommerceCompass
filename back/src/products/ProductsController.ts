import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductsService } from "./ProductsService";
import { CreateProductDTO } from "./dto/CreateProductDTO";
import { Products } from "./ProductsEntity";
import { Query } from "@nestjs/common";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    //@Post()
    //async create(@Body() createProductDTO: CreateProductDTO): Promise<Products> {
    //    return this.productsService.create(createProductDTO);
    //}

    @Post()
    createMany(@Body() products: CreateProductDTO[]) {
      return this.productsService.createMany(products);
    }
    

    @Get()
    async findAll(): Promise<Array<Omit<Products, 'images'> & { images: string[] }>> {
        return this.productsService.findAll();
    }

    @Get('filter')
    async filterProducts(
        @Query('gender') gender?: string,
        @Query('color') color?: string,
        @Query('size') size?: string,
        @Query('age') age?: string
    ): Promise<Array<Omit<Products, 'images'> & { images: string[] }>> {
        return this.productsService.filterProducts({ gender, color, size, age });
  }

}
