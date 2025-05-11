import { EntityStarter } from "src/common/entity/entity-starter.entity";
import { Participant } from "src/modules/submodules/participant/entities/participant.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { ExpenseType } from "./expense-type.enum";
import { IExpense } from "./expense.interface";

@Entity("expense")
export class Expense extends EntityStarter implements IExpense {
	@Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
	amountEntered: number;

	@Column({ type: "boolean", default: false })
	isRefunded: boolean;

	@Column({ type: "enum", enum: ExpenseType })
	type: ExpenseType;

	@Column({ name: "paid_at", type: "timestamp", nullable: true })
	paidAt?: Date;

	@Column({ type: "text", nullable: true })
	description?: string;

	@OneToMany(
		() => Participant,
		(participant) => participant.expense,
	)
	participants: Participant[];
}
