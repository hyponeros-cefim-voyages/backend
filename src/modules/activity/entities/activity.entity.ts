import { EntityStarter } from "src/common/entity/entity-starter.entity";
import { Contact } from "src/modules/contact/entities/contact.entity";
import { Address } from "src/modules/submodules/address/address.embeddable";
import { Country } from "src/modules/submodules/country/entities/country.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { IActivity } from "./activity.interface";

@Entity("activity")
export class Activity extends EntityStarter implements IActivity {
	@Column({ length: 80 })
	title: string;

	@Column({ name: "starts_at", type: "timestamp", nullable: true })
	startsAt?: Date;

	@Column({ name: "ends_at", type: "timestamp", nullable: true })
	endsAt?: Date;

	@Column((type) => Address, { prefix: false })
	address?: Address;

	@ManyToOne(() => Country, { eager: true, nullable: true })
	@JoinColumn({ name: "country_id" })
	country?: Country;

	@Column({ type: "text", nullable: true })
	description?: string;

	@Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
	price: number;

	@ManyToMany(() => Contact, { nullable: true, cascade: true })
	@JoinTable({ name: "activity_contacts" })
	contacts: Contact[];

	// TODO: Ajoute relation  expense_id, trip_id, link_id
}
