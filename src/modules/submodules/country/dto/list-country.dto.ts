import { ICountry } from "../entities/country.interface";

export class CountryDto implements ICountry {
	id: number;
	code: string;
	name: string;

	constructor(partial: Partial<CountryDto>) {
		Object.assign(this, partial);
	}
}
