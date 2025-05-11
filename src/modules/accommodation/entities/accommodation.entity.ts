import { EntityStarter } from "src/common/entity/entity-starter.entity";
import { Address } from "src/modules/submodules/address/address.embeddable";
import { Country } from "src/modules/submodules/country/entities/country.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
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

	// TODO: Ajoute relation  expense_id, trip_id, link_id
}
