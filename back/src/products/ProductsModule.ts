import { Module } from "@nestjs/common";
import { ProductsController } from "./ProductsController";
import { ProductsService } from "./ProductsService";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Products } from "./ProductsEntity";


@Module({
    imports: [TypeOrmModule.forFeature([Products])],
    controllers: [ProductsController],
    providers: [ProductsService],
    exports: [ProductsService],
})

export class ProductsModule {}