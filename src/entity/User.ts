import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string = '';

  @Column({
    length: 255,
    unique: true,
  })
  email: string = '';

  @Column({
    length: 255,
  })
  password: string = '';
}
