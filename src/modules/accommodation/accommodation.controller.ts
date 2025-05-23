import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { AccommodationService } from "./accommodation.service";
import type { CreateAccommodationDto } from "./dto/create-accommodation.dto";
import type { UpdateAccommodationDto } from "./dto/update-accommodation.dto";

@Controller("accommodation")
export class AccommodationController {
	constructor(private readonly accommodationService: AccommodationService) {}

	@Post()
	create(@Body() createAccommodationDto: CreateAccommodationDto) {
		return this.accommodationService.create(createAccommodationDto);
	}

	@Get()
	findAll() {
		return this.accommodationService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.accommodationService.findOne(+id);
	}

	@Patch(":id")
	update(@Param("id") id: string, @Body() updateAccommodationDto: UpdateAccommodationDto) {
		return this.accommodationService.update(+id, updateAccommodationDto);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.accommodationService.remove(+id);
	}
}
