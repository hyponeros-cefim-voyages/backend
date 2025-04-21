import type { IEntityStarter } from "src/common/interfaces/entity-starter.interface";
import type { EmptyObject, Nullable } from "src/common/types/utilities.type";

/**
 * Propriétés non modifiables après la création
 */
interface IFixedPart extends EmptyObject {}

/**
 * Propriétés obligatoires
 */
interface IMandatoryPart {
	email: string;
	isInvited: boolean;
}

/**
 * Propriétés optionnelles
 */
interface IOptionalPart {
	lastName: string;
	firstName: string;
	password: string;
	registrationDate: Date;
}

/**
 * Modèle principal de la classe de l'entité telle que stockée en base
 */
export interface IUser
	extends IEntityStarter,
		Readonly<IFixedPart>,
		Required<IMandatoryPart>,
		Nullable<IOptionalPart> {}

/**
 * Données requises pour créer une classe de l'entité (DTO création)
 */
export interface IdUserCreator extends Readonly<IFixedPart>, Required<IMandatoryPart>, Partial<IOptionalPart> {}

/**
 * Données utilisées pour instancier une classe de l'entité dans le code
 */
export interface IdUserConstructor extends Readonly<IFixedPart>, Required<IMandatoryPart>, Partial<IOptionalPart> {}

/**
 * Structure de retour d'une entité Trip
 */
export interface IdUserResponse extends IUser {}

/**
 * Partie éditable obligatoire de l'entité (ex : via PATCH)
 */
export interface IdUserEditorMandatory extends Partial<IMandatoryPart> {}

/**
 * Partie éditable optionnelle de l'entité
 */
export interface IdUserEditorOptional extends Nullable<IOptionalPart> {}

/**
 * Structure complète pour éditer l'entité
 */
export interface IdUserEditor extends IdUserEditorMandatory, IdUserEditorOptional {}
