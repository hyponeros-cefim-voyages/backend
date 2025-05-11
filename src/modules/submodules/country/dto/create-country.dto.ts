import { IsISO31661Alpha2, IsString, Length } from "class-validator";

export class CreateCountryDto {
	/** Code du pays en ISO 3166-1 alpha-2 */
	@IsISO31661Alpha2({ message: "Le code doit être un code ISO alpha-2 valide" })
	code: string;

	/** Nom du pays en français et limiter à 100 caractères */
	@IsString()
	@Length(1, 100, { message: "Le nom du pays doit être compris entre 1 et 100 caractères" })
	name: string;
}
