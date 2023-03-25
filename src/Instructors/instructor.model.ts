import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';


  
@Entity({ name: 'cadets' })
export class Instructor  {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;
  
    @Column()
    Name: string;

    @Column()
    Surname: string;
  
    @Column()
    Category: string;

    @Column()
    Car: string;

}