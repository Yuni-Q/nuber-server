
import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Chat from './Chat';

@Entity()
class Message extends BaseEntity {
  @PrimaryGeneratedColumn() id: number

  @ManyToOne(type => Chat, chat=> chat.message)
  chat: Chat;

  @CreateDateColumn() createAt: string;
  @UpdateDateColumn() updateAt: string;

}

export default Message;