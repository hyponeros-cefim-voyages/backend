import { Column } from "typeorm";
import { IAddress } from "./address.interface";

export class Address implements IAddress {
	@Column({ name: "street_line_1", length: 255 })
	streetLine1: string;

	@Column({ name: "street_line_2", length: 255, nullable: true })
	streetLine2?: string;

	@Column({ name: "zip_code", length: 15 })
	zipCode: string;

	@Column({ length: 100 })
	city: string;
}
