import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CountryService } from "./country.service";
import { Country } from "./entities/country.entity";

@Module({
	imports: [HttpModule, TypeOrmModule.forFeature([Country])],
	providers: [CountryService],
	exports: [CountryService],
})
export class CountryModule {}
