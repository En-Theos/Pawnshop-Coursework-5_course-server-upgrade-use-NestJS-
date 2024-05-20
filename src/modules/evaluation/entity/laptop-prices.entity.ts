import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class LaptopPrices {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  type: string;

}