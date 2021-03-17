import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 20 })
  username!: string;

  @Column({ type: 'varchar', length: 30 })
  email!: string;

  @Column({ length: 255 })
  password!: string;
}
