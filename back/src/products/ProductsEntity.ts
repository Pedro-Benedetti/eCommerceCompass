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

  // Novos campos:
  @Column()
  vaccinated: boolean;

  @Column()
  dewormed: boolean;

  @Column()
  cert: boolean;

  @Column()
  microchip: boolean;

  @Column()
  location: string;

  @Column({ name: 'published_date', type: 'timestamp' })
  publishedDate: Date;

  @Column({ type: 'text' })
  additionalInformation: string;
}
