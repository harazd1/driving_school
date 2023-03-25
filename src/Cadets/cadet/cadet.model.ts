import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';


  
@Entity({ name: 'cadets' })
export class Cadet  {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;
  
    @Column()
    Name: string;

    @Column()
    Surname: string;
  
    @Column()
    GroupNumber: number;

    @Column()
    Subscription: string;

    @Column()
    Category: string;

}