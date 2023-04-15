import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,UpdateDateColumn  } from "typeorm"

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @CreateDateColumn()
    created_at: string;
  
    @UpdateDateColumn()
    updated_at: string;
}
