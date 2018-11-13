
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @CreateDateColumn() createAt: string;
  @UpdateDateColumn() updateAt: string;

}

export default Ride;