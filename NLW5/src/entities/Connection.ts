import { Entity, PrimaryColumn, CreateDateColumn, Column, ManyToOne, JoinColumn, UpdateDateColumn} from "typeorm"
import {v4 as uuid} from "uuid"
import { User } from "./user"

@Entity("connections")
class Connection {
    
    @PrimaryColumn()
    id: string; 

    @Column()
    admin_id: string;

    @Column()
    socket_id: string; 

   
    @ManyToOne(()=> User) 
    @JoinColumn({name: "user_id"})
    User: User;

    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: string;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id){
            this.id = uuid();
        }
    }
} 

export { Connection }