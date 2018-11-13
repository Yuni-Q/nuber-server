
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { verificationTarget } from 'src/types/types';

@Entity()
class Verification extends BaseEntity {
  @PrimaryGeneratedColumn() id: number
@Column({type: 'text', enum: ['PHONE', 'EMAIL']})
// PHONE / EMAIL 2개 밖에 존재하지 않기 때문에 사용
targer: verificationTarget
@Column({type: 'text'})
payload: string
@Column({type: 'text'})
key: string

@Column({type: 'boolean', default: false})
used: boolean

@CreateDateColumn() createAt: string;
@UpdateDateColumn() updateAt: string;


}

export default Verification;