import { IEntityStarter } from "src/common/interfaces/entity-starter.interface";
import { EmptyObject, Nullable } from "src/common/types/utilities.type";

/**
 * Propriétés non modifiables après la création
 */
interface IFixedPart extends EmptyObject {}

/**
 * Propriétés obligatoires
 */
interface IMandatoryPart {
	title: string;
	isArchived: boolean;
}

/**
 * Propriétés optionnelles
 */
interface IOptionalPart {
	description: string;
	startsAt: Date;
	endsAt: Date;
}

/**
 * Modèle principal de la classe de l'entité telle que stockée en base
 */
export interface ITrip
	extends IEntityStarter,
		Readonly<IFixedPart>,
		Required<IMandatoryPart>,
		Nullable<IOptionalPart> {}

/**
 * Données requises pour créer une classe de l'entité (DTO création)
 */
export interface ITripCreator extends Readonly<IFixedPart>, Required<IMandatoryPart>, Nullable<IOptionalPart> {}

/**
 * Données utilisées pour instancier une classe de l'entité dans le code
 */
export interface ITripConstructor extends Readonly<IFixedPart>, Required<IMandatoryPart>, Nullable<IOptionalPart> {}

/**
 * Structure de retour d'une entité Trip
 */
export interface ITripResponse extends ITrip {}

/**
 * Partie éditable obligatoire de l'entité (ex : via PATCH)
 */
export interface IdTripEditorMandatory extends Partial<IMandatoryPart> {}

/**
 * Partie éditable optionnelle de l'entité
 */
export interface IdTripEditorOptional extends Nullable<IOptionalPart> {}

/**
 * Structure complète pour éditer l'entité
 */
export interface IdTripEditor extends IdTripEditorMandatory, IdTripEditorOptional {}
