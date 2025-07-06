import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true }) title: string;

  @Column({ nullable: true }) imageUrl: string;

  @Column({ nullable: true }) description: string;
}
