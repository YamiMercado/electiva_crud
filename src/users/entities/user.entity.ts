import { Column, Entity, PrimaryColumnCannotBeNullableError, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: String;
  
    @Column({nullable: true})
    lastName: String;
      
    @Column()
    email: String;
}
