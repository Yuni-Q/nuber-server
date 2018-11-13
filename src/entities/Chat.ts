
import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';

import Message from './Message';

@Entity()
class Chat extends BaseEntity {
  @PrimaryGeneratedColumn() id: number

  @OneToMany(type => Message, message => message.chat)
  message: Message[];

  @CreateDateColumn() createAt: string;
  @UpdateDateColumn() updateAt: string;

}

export default Chat;