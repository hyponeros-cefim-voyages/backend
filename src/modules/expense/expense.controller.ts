import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import type { CreateExpenseDto } from "./dto/create-expense.dto";
import type { UpdateExpenseDto } from "./dto/update-expense.dto";
import { ExpenseService } from "./expense.service";

@Controller("expense")
export class ExpenseController {
	constructor(private readonly expenseService: ExpenseService) {}

	@Post()
	create(@Body() createExpenseDto: CreateExpenseDto) {
		return this.expenseService.create(createExpenseDto);
	}

	@Get()
	findAll() {
		return this.expenseService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.expenseService.findOne(+id);
	}

	@Patch(":id")
	update(@Param("id") id: string, @Body() updateExpenseDto: UpdateExpenseDto) {
		return this.expenseService.update(+id, updateExpenseDto);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.expenseService.remove(+id);
	}
}
