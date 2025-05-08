import { ProductType } from "src/common/enum/ProductType";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  sku: string;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: ProductType })
  product_type: ProductType;

  @Column()
  price: number;

  @Column()
  size: string;

  @Column()
  gender: string;

  @Column()
  age: string;

  @Column()
  color: string;

  @Column('text')
  images: string;
}
