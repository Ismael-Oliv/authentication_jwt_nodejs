import {
   Entity,
   PrimaryColumn,
   Column,
   CreateDateColumn,
   UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class Users {
   @PrimaryColumn("uuid")
   id: string;

   @Column()
   username: string;

   @Column()
   email: string;

   @Column()
   password: string;

   @CreateDateColumn()
   created_at: Date;

   @UpdateDateColumn()
   updated_at: Date;
}
