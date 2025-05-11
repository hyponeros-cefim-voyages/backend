import { EntityStarter } from "src/common/entity/entity-starter.entity";
import { Column, Entity } from "typeorm";
import { IContact } from "./contact.interface";

@Entity("contact")
export class Contact extends EntityStarter implements IContact {
	@Column()
	name: string;

	@Column({ length: 45, nullable: true })
	phone?: string;

	@Column({ length: 254, nullable: true })
	email?: string;

	// TODO: Ajout relation vers Accommodation et Contact
}
