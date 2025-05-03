import { IsArray, IsEnum, IsNumber, IsString } from "class-validator";
import { ProductType } from "src/common/enum/ProductType";

export class CreateProductDTO{
    @IsNumber()
    sku: number;

    @IsString()
    name: string;

    @IsEnum(ProductType)
    product_type: ProductType;

    @IsNumber()
    price: number;

    @IsString()
    size: string;

    @IsArray()
    @IsString({ each: true })
    images: string[];
}