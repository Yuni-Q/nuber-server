import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';

import Message from './Message';
import User from './User';

@Entity()
class Chat extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@OneToMany((type) => Message, (message) => message.chat)
	messages: Message[];

	@Column({ nullable: true })
	passengerId: number;

	@OneToMany((type) => User, (user) => user.chatsAsPassenger)
	passenger: User;

	@Column({ nullable: true })
	driverId: number;

	@OneToMany((type) => User, (user) => user.chatsAsDriver)
	driver: User;

	@CreateDateColumn() createAt: string;
	@UpdateDateColumn() updateAt: string;
}

export default Chat;
