import { EntityStarter } from "src/common/entity/entity-starter.entity";
import { Contact } from "src/modules/contact/entities/contact.entity";
import { Expense } from "src/modules/expense/entities/expense.entity";
import { Address } from "src/modules/submodules/address/address.embeddable";
import { Country } from "src/modules/submodules/country/entities/country.entity";
import { Trip } from "src/modules/trip/entities/trip.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { AccommodationType } from "./accommodation-type.enum";
import { IAccommodation } from "./accommodation.interface";

@Entity("accommodation")
export class Accommodation extends EntityStarter implements IAccommodation {
	@Column({ length: 80 })
	name: string;

	@Column({ type: "enum", enum: AccommodationType })
	type: AccommodationType;

	@Column({ type: "text", nullable: true })
	condition?: string;

	@Column({ name: "check_in", type: "timestamp", nullable: true })
	checkIn?: Date;

	@Column({ name: "check_out", type: "timestamp", nullable: true })
	checkOut?: Date;

	@Column({ type: "text", nullable: true })
	meal?: string;

	@Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
	price: number;

	@Column((type) => Address, { prefix: false })
	address?: Address;

	@ManyToOne(() => Country, { eager: true, nullable: true })
	@JoinColumn({ name: "country_id" })
	country?: Country;

	@ManyToMany(() => Contact, { nullable: true, cascade: true })
	@JoinTable({ name: "accommodation_contacts" })
	contacts: Contact[];

	@ManyToOne(
		() => Trip,
		(trip) => trip.accommodations,
	)
	@JoinColumn({ name: "trip_id" })
	trip: Trip;

	@ManyToOne(
		() => Expense,
		(expense) => expense.accommodations,
	)
	@JoinColumn({ name: "expense_id" })
	expense: Expense;
}
