import {  Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany,JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class User  extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email:string;

  @Column()
  password:string;

  @Column()
  type:string;

  @Column()
  dt_created:Date;

  @Column()
  dt_updated:Date;

  @Column()
  id_store:number;

  
} 
