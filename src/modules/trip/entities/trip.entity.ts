import { EntityStarter } from "src/common/entity/entity-starter.entity";
import { Column, Entity } from "typeorm";
import { ITrip } from "./trip.interface";

@Entity("trip")
export class Trip extends EntityStarter implements ITrip {
	@Column({ length: 80 })
	title: string;

	@Column({ nullable: true })
	description: string;

	@Column({ name: "starts_at", nullable: true, type: "timestamp" })
	startsAt: Date;

	@Column({ name: "ends_at", nullable: true, type: "timestamp" })
	endsAt: Date;

	@Column({ name: "is_archived", type: "boolean", default: false })
	isArchived: boolean;
}
