import { Module } from "@nestjs/common";
import { LinkService } from "./link.service";

@Module({
	controllers: [],
	providers: [LinkService],
})
export class LinkModule {}
