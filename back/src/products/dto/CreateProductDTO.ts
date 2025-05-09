import { IsArray, IsBoolean, IsEnum, IsNumber, IsString, IsDate } from "class-validator";

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
}

export enum Size {
  SMALL = 'Small',
  MEDIUM = 'Medium',
  LARGE = 'Large',
}

export enum Color {
  RED = 'Red',
  APRICOT = 'Apricot',
  BLACK = 'Black',
  BLACK_WHITE = 'Black & White',
  SILVER = 'Silver',
  TAN = 'Tan',
}

export class CreateProductDTO {
  @IsString()
  sku: string;

  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsEnum(Gender)
  gender: Gender;

  @IsString()
  age: string;

  @IsEnum(Size)
  size: Size;

  @IsEnum(Color)
  color: Color;

  @IsArray()
  @IsString({ each: true })
  images: string[];

  // Novos campos:
  @IsBoolean()
  vaccinated: boolean;

  @IsBoolean()
  dewormed: boolean;

  @IsBoolean()
  cert: boolean;

  @IsBoolean()
  microchip: boolean;

  @IsString()
  location: string;

  @IsString()
  publishedDate: string; // Pode vir como string no Postman, será convertido para Date no Nest

  @IsString()
  additionalInformation: string;
}