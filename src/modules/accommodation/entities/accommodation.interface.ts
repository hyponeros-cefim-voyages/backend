import { IEntityStarter } from "src/common/interfaces/entity-starter.interface";
import { EmptyObject, Nullable } from "src/common/types/utilities.type";
import { IAddress } from "src/modules/submodules/address/address.interface";
import { Country } from "src/modules/submodules/country/entities/country.entity";
import { AccommodationType } from "./accommodation-type.enum";

/**
 * Propriétés non modifiables après la création
 */
interface IFixedPart extends EmptyObject {}

/**
 * Propriétés obligatoires
 */
interface IMandatoryPart {
	name: string;
	price: number;
	type: AccommodationType;
	// TODO: expense_id, trip_id
}

/**
 * Propriétés optionnelles
 */
interface IOptionalPart {
	condition: string;
	checkIn: Date;
	checkOut: Date;
	meal: string;
	address: IAddress;
	country: Country | null;
}

/**
 * Modèle principal de la classe de l'entité telle que stockée en base
 */
export interface IAccommodation
	extends IEntityStarter,
		Readonly<IFixedPart>,
		Required<IMandatoryPart>,
		Partial<IOptionalPart> {}

/**
 * Données requises pour créer une classe de l'entité (DTO création)
 */
export interface IAccommodationCreator
	extends Readonly<IFixedPart>,
		Required<IMandatoryPart>,
		Nullable<IOptionalPart> {}

/**
 * Données utilisées pour instancier une classe de l'entité dans le code
 */
export interface IAccommodationConstructor
	extends Readonly<IFixedPart>,
		Required<IMandatoryPart>,
		Nullable<IOptionalPart> {}

/**
 * Structure de retour d'une entité Accommodation
 */
export interface IAccommodationResponse extends IAccommodation {}

/**
 * Partie éditable obligatoire de l'entité (ex : via PATCH)
 */
export interface IAccommodationEditorMandatory extends Partial<IMandatoryPart> {}

/**
 * Partie éditable optionnelle de l'entité
 */
export interface IAccommodationEditorOptional extends Nullable<IOptionalPart> {}

/**
 * Structure complète pour éditer l'entité
 */
export interface IAccommodationEditor extends IAccommodationEditorMandatory, IAccommodationEditorOptional {}
