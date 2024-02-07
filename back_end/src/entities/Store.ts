import {  Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany,JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Store  extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

 
}
