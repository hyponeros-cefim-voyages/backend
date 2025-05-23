import { Injectable } from "@nestjs/common";
import type { CreateExpenseDto } from "./dto/create-expense.dto";
import type { UpdateExpenseDto } from "./dto/update-expense.dto";

@Injectable()
export class ExpenseService {
	create(createExpenseDto: CreateExpenseDto) {
		return "This action adds a new expense";
	}

	findAll() {
		return "This action returns all expense";
	}

	findOne(id: number) {
		return `This action returns a #${id} expense`;
	}

	update(id: number, updateExpenseDto: UpdateExpenseDto) {
		return `This action updates a #${id} expense`;
	}

	remove(id: number) {
		return `This action removes a #${id} expense`;
	}
}
