import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 30 })
  title!: string;

  @Column({ type: 'text' })
  body!: string;

  @Column({ type: 'varchar', length: 30 })
  thumbnail!: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @Column({ type: 'int', nullable: false })
  user_id!: number;
}
