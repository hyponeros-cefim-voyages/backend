import { IEntityStarter } from "src/common/interfaces/entity-starter.interface";
import { EmptyObject, Nullable } from "src/common/types/utilities.type";
import { IContact } from "src/modules/contact/entities/contact.interface";
import { IExpense } from "src/modules/expense/entities/expense.interface";
import { IAddress } from "src/modules/submodules/address/address.interface";
import { ICountry } from "src/modules/submodules/country/entities/country.interface";
import { ILink } from "src/modules/submodules/link/entities/link.interface";
import { ITrip } from "src/modules/trip/entities/trip.interface";

/**
 * Propriétés non modifiables après la création
 */
interface IFixedPart extends EmptyObject {}

/**
 * Propriétés obligatoires
 */
interface IMandatoryPart {
	title: string;
	price: number;
	trip: ITrip;
	expense: IExpense;
}

/**
 * Propriétés optionnelles
 */
interface IOptionalPart {
	startsAt: Date;
	endsAt: Date;
	address: IAddress;
	country: ICountry;
	description: string;
	contacts: IContact[];
	link: ILink;
}

/**
 * Modèle principal de la classe de l'entité telle que stockée en base
 */
export interface IActivity
	extends IEntityStarter,
		Readonly<IFixedPart>,
		Required<IMandatoryPart>,
		Partial<IOptionalPart> {}

/**
 * Données requises pour créer une classe de l'entité (DTO création)
 */
export interface IActivityCreator extends Readonly<IFixedPart>, Required<IMandatoryPart>, Nullable<IOptionalPart> {}

/**
 * Données utilisées pour instancier une classe de l'entité dans le code
 */
export interface IActivityConstructor extends Readonly<IFixedPart>, Required<IMandatoryPart>, Nullable<IOptionalPart> {}

/**
 * Structure de retour d'une entité Activity
 */
export interface IActivityResponse extends IActivity {}

/**
 * Partie éditable obligatoire de l'entité (ex : via PATCH)
 */
export interface IActivityEditorMandatory extends Partial<IMandatoryPart> {}

/**
 * Partie éditable optionnelle de l'entité
 */
export interface IActivityEditorOptional extends Nullable<IOptionalPart> {}

/**
 * Structure complète pour éditer l'entité
 */
export interface IActivityEditor extends IActivityEditorMandatory, IActivityEditorOptional {}
