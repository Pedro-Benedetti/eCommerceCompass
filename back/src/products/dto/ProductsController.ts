import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductsService } from "../ProductsService";
import { CreateProductDTO } from "./CreateProductDTO";
import { Products } from "../ProductsEntity";

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
}
