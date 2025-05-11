import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Link } from "./entities/link.entity";
import { LinkService } from "./link.service";

@Module({
	imports: [TypeOrmModule.forFeature([Link])],
	controllers: [],
	providers: [LinkService],
})
export class LinkModule {}
