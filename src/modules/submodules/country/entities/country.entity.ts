import { EntityStarter } from "src/common/entity/entity-starter.entity";
import { Column, Entity } from "typeorm";
import { ICountry } from "./country.interface";

@Entity("country")
export class Country extends EntityStarter implements ICountry {
	@Column({ unique: true, length: 2 })
	code: string; // ISO alpha-2 code, ex: 'FR'

	@Column({ length: 100 })
	name: string;
}
