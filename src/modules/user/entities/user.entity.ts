import { EntityStarter } from "src/common/entity/entity-starter.entity";
import { Participant } from "src/modules/submodules/participant/entities/participant.entity";
import { Column, Entity, OneToMany } from "typeorm";
import type { IUser } from "./user.interface";

@Entity("user")
export class User extends EntityStarter implements IUser {
	@Column({ length: 254, unique: true })
	email: string;

	@Column({ name: "is_invited", type: "boolean", default: false })
	isInvited: boolean;

	@Column({ length: 72, nullable: true })
	password?: string;

	@Column({ name: "last_name", length: 150, nullable: true })
	lastName?: string;

	@Column({ name: "first_name", length: 150, nullable: true })
	firstName?: string;

	@Column({ name: "registration_date", type: "timestamp", nullable: true })
	registrationDate?: Date;

	@OneToMany(
		() => Participant,
		(participant) => participant.user,
	)
	participants: Participant[];
}
