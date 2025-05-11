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
	name: string;
}

/**
 * Propriétés optionnelles
 */
interface IOptionalPart {
	phone: string;
	email: string;
}

/**
 * Modèle principal de la classe de l'entité telle que stockée en base
 */
export interface IContact
	extends IEntityStarter,
		Readonly<IFixedPart>,
		Required<IMandatoryPart>,
		Partial<IOptionalPart> {}

/**
 * Données requises pour créer une classe de l'entité (DTO création)
 */
export interface IContactCreator extends Readonly<IFixedPart>, Required<IMandatoryPart>, Nullable<IOptionalPart> {}

/**
 * Données utilisées pour instancier une classe de l'entité dans le code
 */
export interface IContactConstructor extends Readonly<IFixedPart>, Required<IMandatoryPart>, Nullable<IOptionalPart> {}

/**
 * Structure de retour d'une entité Contact
 */
export interface IContactResponse extends IContact {}

/**
 * Partie éditable obligatoire de l'entité (ex : via PATCH)
 */
export interface IContactEditorMandatory extends Partial<IMandatoryPart> {}

/**
 * Partie éditable optionnelle de l'entité
 */
export interface IContactEditorOptional extends Nullable<IOptionalPart> {}

/**
 * Structure complète pour éditer l'entité
 */
export interface IContactEditor extends IContactEditorMandatory, IContactEditorOptional {}
