
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import User from './User';

@Entity()
class Ride extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({
    type: 'text', enum: ['ACCEPTED', 'FINISHED', 'CANCELED', 'REQUESTING', 'QNROUTE']
  })
  status: string;

  @Column({ type: 'text' })
  pickUpAddress: string;

  @Column({ type: 'double precision', default: 0 })
  pickUpLat: number;

  @Column({ type: 'double precision', default: 0 })
  pickUpLng: number;

  @Column({ type: 'text' })
  dropOfAddress: string;

  @Column({ type: 'double precision', default: 0 })
  dropOfLat: number;

  @Column({ type: 'double precision', default: 0 })
  dropOfLng: number;

  @Column({ type: 'double precision', default: 0 })
  price: number;

  @Column({ type: 'text' })
  distance: string;

  @Column({ type: 'text' })
  duration: string;

  @ManyToOne(type => User, user=> user.ridesAsPassenger)
  passenger: User;

  @ManyToOne(type => User, user=> user.ridesAsDriver)
  driver: User;

  @CreateDateColumn() createAt: string;
  @UpdateDateColumn() updateAt: string;

}

export default Ride;