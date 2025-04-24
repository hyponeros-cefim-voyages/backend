import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExpenseModule } from "./modules/expense/expense.module";
import { TripModule } from "./modules/trip/trip.module";
import { UserModule } from "./modules/user/user.module";

@Module({
	imports: [
		// Charger les variables d'environnement
		ConfigModule.forRoot({
			isGlobal: true, // Rend ConfigService accessible partout
		}),
		// Configuration de TypeORM avec ConfigService
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				type: "postgres",
				host: configService.get<string>("DB_HOST"),
				port: configService.get<number>("DB_PORT"),
				username: configService.get<string>("DB_USERNAME"),
				password: configService.get<string>("DB_PASSWORD"),
				database: configService.get<string>("DB_NAME"),
				autoLoadEntities: true,
				synchronize: true,
			}),
		}),
		UserModule,
		TripModule,
		// ParticipantModule,
		// LinkModule,
		ExpenseModule,
		// CountryModule,
		// ContactModule,
		// ActivityModule,
		// AccommodationModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
