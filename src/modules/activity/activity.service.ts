import { Injectable } from "@nestjs/common";
import type { CreateActivityDto } from "./dto/create-activity.dto";
import type { UpdateActivityDto } from "./dto/update-activity.dto";

@Injectable()
export class ActivityService {
	create(createActivityDto: CreateActivityDto) {
		return "This action adds a new activity";
	}

	findAll() {
		return "This action returns all activity";
	}

	findOne(id: number) {
		return `This action returns a #${id} activity`;
	}

	update(id: number, updateActivityDto: UpdateActivityDto) {
		return `This action updates a #${id} activity`;
	}

	remove(id: number) {
		return `This action removes a #${id} activity`;
	}
}
