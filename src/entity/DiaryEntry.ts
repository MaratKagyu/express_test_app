import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({
  name: "diary_entry",
})
export class DiaryEntry {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string = '';

  @Column()
  content: string = '';

  @Column()
  createDateTime?: Date;
}
