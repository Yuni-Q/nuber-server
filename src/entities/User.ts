
import bcrypt from 'bcrypt';
import { IsEmail } from 'class-validator';
import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Chat from './Chat';
import Message from './Message';
import Ride from './Ride';

const BCRYPT_ROUNDS = 10;

@Entity()
class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  @IsEmail()
  email: string | null;

  @Column({ type: 'boolean', default: false })
  verifiedEmail: boolean;

  @Column({ type: 'text' })
  firstName: string;

  @Column({ type: 'text' })
  lastName: string;

  @Column({ type: 'int', nullable: true })
  age: number;

  @Column({ type: 'text', nullable: true })
  password: string;

  @Column({ type: 'text', nullable: true })
  phoneNumber: string;

  @Column({ type: 'boolean', default: false })
  verifiedphoneNumber: boolean;

  @Column({ type: 'text' })
  profilePhoto: string;

  @Column({ type: 'boolean', default: false })
  isDriving: boolean;

  @Column({ type: 'boolean', default: false })
  isRiding: boolean;

  @Column({ type: 'boolean', default: false })
  isTaken: boolean;

  // Float가 지원이 잘 안된다고 합니다
  // double precision가 Float랑 같다고 합니다.
  @Column({ type: 'double precision', default: 0 })
  lastLng: number;

  @Column({ type: 'double precision', default: 0 })
  lastLat: number;

  @Column({ type: 'double precision', default: 0 })
  lastOrientation: number;

  @Column({type: 'text', nullable: true})
  fbId: string;

  @ManyToOne(type => Chat, chat=> chat.participants)
  chat: Chat;

  @OneToMany(tepe => Message, message => message.user)
  messages: Message[];  

  @OneToMany(type => Ride, ride => ride.passenger)
  ridesAsPassenger: Ride[];

  @OneToMany(type => Ride, ride => ride.driver)
  ridesAsDriver: Ride[];

  @CreateDateColumn() createAt: string;
  @UpdateDateColumn() updateAt: string;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }

  // 새로운 object를 만들기 전에 불려지는 메소드
  @BeforeInsert()
  // object update하기 전에 불려지는 메소드
  @BeforeUpdate()
  async savePassword(): Promise<void> {
    if (this.password) {
      const hashPassword = await this.hashPassword(this.password);
      this.password = hashPassword;
    }
  }

  private hashPassword(password:string): Promise<string> {
    return bcrypt.hash(password, BCRYPT_ROUNDS)
  }
}

export default User;