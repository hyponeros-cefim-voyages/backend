import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("country")
export class Country {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ unique: true, length: 2 })
	code: string; // ISO alpha-2 code, ex: 'FR'

	@Column({ length: 100 })
	name: string;
}
