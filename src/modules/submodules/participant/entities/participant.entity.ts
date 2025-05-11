import { EntityStarter } from "src/common/entity/entity-starter.entity";
import { Expense } from "src/modules/expense/entities/expense.entity";
import { Trip } from "src/modules/trip/entities/trip.entity";
import { User } from "src/modules/user/entities/user.entity";
import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { IParticipant } from "./participant.interface";

// Participant contient id, user_id, trip_id, expense_id
@Entity("participant")
export class Participant extends EntityStarter implements IParticipant {
	@ManyToOne(
		() => User,
		(user) => user.participants,
	)
	@JoinColumn({ name: "user_id" })
	user: User;

	@ManyToOne(
		() => Trip,
		(trip) => trip.participants,
	)
	@JoinColumn({ name: "trip_id" })
	trip: Trip;

	@ManyToOne(
		() => Expense,
		(expense) => expense.participants,
	)
	@JoinColumn({ name: "expense_id" })
	expense: Expense;
}
