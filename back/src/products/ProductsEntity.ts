import { ProductType } from "src/common/enum/ProductType";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  sku: number;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: ProductType })
  product_type: ProductType;

  @Column()
  price: number;

  @Column()
  size: string;

  @Column('text')
  images: string;
}