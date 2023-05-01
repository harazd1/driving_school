import { Cadet } from '../Cadets/cadet/cadet.model';
import { Fleet } from '../Fleets/fleet.model';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
    JoinColumn
  } from 'typeorm';


  
@Entity({ name: 'instructors' })
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
    carId: number;
    
    // @OneToMany(() => Fleet, (fleet) => fleet.instructor)
    // fleet: Fleet[];


    // @ManyToOne(() => Cadet, (cadet) => cadet.instructors)
    // @JoinColumn({ name: 'cadet_id' })
    // cadet: Cadet;
}