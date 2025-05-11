import { IEntityStarter } from "src/common/interfaces/entity-starter.interface";
import { EmptyObject, Nullable } from "src/common/types/utilities.type";
import { IAddress } from "src/modules/submodules/address/address.interface";
import { Country } from "src/modules/submodules/country/entities/country.entity";

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
}

/**
 * Propriétés optionnelles
 */
interface IOptionalPart {
	startsAt: Date;
	endsAt: Date;
	address: IAddress;
	country: Country | null;
	description: string;
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
