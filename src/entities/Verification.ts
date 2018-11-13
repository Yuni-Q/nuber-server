
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BeforeInsert
} from 'typeorm';
import { verificationTarget } from 'src/types/types';

const PHONE = 'PHONE';
const EMAIL = 'EMAIL';

@Entity()
class Verification extends BaseEntity {
  @PrimaryGeneratedColumn() id: number
  @Column({ type: 'text', enum: [PHONE, EMAIL] })
  // PHONE / EMAIL 2개 밖에 존재하지 않기 때문에 사용
  targer: verificationTarget
  @Column({ type: 'text' })
  payload: string
  @Column({ type: 'text' })
  key: string

  @Column({ type: 'boolean', default: false })
  used: boolean

  @CreateDateColumn() createAt: string;
  @UpdateDateColumn() updateAt: string;

  @BeforeInsert()
  createKey(): void {
    if (this.targer === PHONE) {
      this.key = Math.floor(Math.random() * 100000).toString();
    } else if (this.targer === EMAIL) {
      // toString(36)을 통해 소수점 아래를 string값으로 바꿔 줍니다.
      // ex) 0.agahsrhwr1hr
      // substr(2)를 통해 0. 부분을 제거합니다.
      this.key = Math.random()
        .toString(36)
        .substr(2);
    }
  }

}

export default Verification;