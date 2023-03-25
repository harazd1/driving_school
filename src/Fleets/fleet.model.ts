import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';


  
@Entity({ name: 'fleets' })
export class Fleet  {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;
  
    @Column()
    Plate: string;

    @Column()
    Brand: string;
  
    @Column()
    Model: string;

    @Column()
    Fuel: string;

    @Column()
    Transmission: string;

}