
import { IsEmail } from 'class-validator';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', unique: true })
  @IsEmail()
  email: string;

  @Column({ type: 'boolean', default: false })
  verifiedEmail: boolean

  @Column({ type: 'text' })
  firstName: string;

  @Column({ type: 'text' })
  lastName: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'text' })
  phoneNumber: string;

  @Column({ type: 'boolean', default: false })
  verifiedphoneNumber: boolean

  @Column({ type: 'text' })
  profilePhoto: string;

  @Column({ type: 'boolean', default: false })
  isDriving: boolean

  @Column({ type: 'boolean', default: false })
  isRiding: boolean

  @Column({ type: 'boolean', default: false })
  isTaken: boolean

  // Float가 지원이 잘 안된다고 합니다
  // double precision가 Float랑 같다고 합니다.
  @Column({ type: 'double precision', default: 0 })
  lastLng: number
  @Column({ type: 'double precision', default: 0 })
  lastLat: number
  @Column({ type: 'double precision', default: 0 })
  lastOrientation: number

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @CreateDateColumn() createAt: string;
  @UpdateDateColumn() updateAt: string;
}

export default User;