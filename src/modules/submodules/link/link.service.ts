import { Injectable } from "@nestjs/common";

@Injectable()
export class LinkService {
	create(label: string, url: string) {
		return `This action adds a new link with label ${label} and url ${url}`;
	}

	findAll() {
		return "This action returns all links";
	}

	findOne(id: number) {
		return `This action returns a #${id} link`;
	}

	update(id: number, label: string, url: string) {
		return `This action updates a #${id} link with label ${label} and url ${url}`;
	}

	remove(id: number) {
		return `This action removes a #${id} link`;
	}
}
