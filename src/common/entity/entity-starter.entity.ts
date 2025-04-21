import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import type { IEntityStarter } from "../interfaces/entity-starter.interface";

export abstract class EntityStarter implements IEntityStarter {
	@PrimaryGeneratedColumn("uuid")
	readonly id: string;

	@CreateDateColumn({ name: "created_at", type: "timestamp" })
	readonly createdAt: Date;

	@UpdateDateColumn({ name: "updated_at", type: "timestamp" })
	updatedAt?: Date;
}
