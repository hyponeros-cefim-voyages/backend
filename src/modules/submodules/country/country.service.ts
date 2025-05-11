import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { firstValueFrom } from "rxjs";
import { Repository } from "typeorm";
import { Country } from "./entities/country.entity";

interface RestCountry {
	cca2: string;
	translations: {
		[key: string]: { common: string };
	};
}

@Injectable()
export class CountryService {
	private readonly logger = new Logger(CountryService.name);
	private readonly apiUrl = "https://restcountries.com/v3.1/all?fields=cca2,translations";

	constructor(
		private readonly http: HttpService,
		@InjectRepository(Country)
		private readonly repo: Repository<Country>,
	) {}

	async importAll(): Promise<void> {
		this.logger.log("Fetching countries from REST Countries API...");
		const response$ = this.http.get<RestCountry[]>(this.apiUrl);
		const countries = await firstValueFrom(response$).then((res) => res.data);

		const payload = countries.map((c) => ({
			code: c.cca2,
			name: c.translations?.fra?.common ?? c.cca2,
		}));

		this.logger.log(`Upserting ${payload.length} countries into DB...`);
		await this.repo.upsert(payload, ["code"]);
		this.logger.log("Import terminé.");
	}
}
