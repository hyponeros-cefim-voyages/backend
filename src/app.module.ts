import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccommodationModule } from "./modules/accommodation/accommodation.module";
import { ActivityModule } from "./modules/activity/activity.module";
import { ContactModule } from "./modules/contact/contact.module";
import { CountryModule } from "./modules/country/country.module";
import { ExpenseModule } from "./modules/expense/expense.module";
import { LinkModule } from "./modules/link/link.module";
import { NotificationModule } from "./modules/notification/notification.module";
import { ParticipantModule } from "./modules/participant/participant.module";
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
		ParticipantModule,
		NotificationModule,
		LinkModule,
		ExpenseModule,
		CountryModule,
		ContactModule,
		ActivityModule,
		AccommodationModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
