import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import type { CreateTripDto } from "./dto/create-trip.dto";
import type { UpdateTripDto } from "./dto/update-trip.dto";
import type { TripService } from "./trip.service";

@Controller("trip")
export class TripController {
	constructor(private readonly tripService: TripService) {}

	@Post()
	async create(@Body() createTripDto: CreateTripDto) {
		return this.tripService.create(createTripDto);
	}

	@Get()
	async findAll() {
		return this.tripService.findAll();
	}

	@Get(":id")
	async findOne(@Param("id") id: string) {
		return this.tripService.findOne(+id);
	}

	@Patch(":id")
	async update(@Param("id") id: string, @Body() updateTripDto: UpdateTripDto) {
		return this.tripService.update(+id, updateTripDto);
	}

	@Delete(":id")
	async remove(@Param("id") id: string) {
		return this.tripService.remove(+id);
	}
}
