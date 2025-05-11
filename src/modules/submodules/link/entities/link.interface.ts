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
	label: string;
	url: string;
}

/**
 * Propriétés optionnelles
 */
interface IOptionalPart extends EmptyObject {}

/**
 * Modèle principal de la classe de l'entité telle que stockée en base
 */
export interface ILink
	extends IEntityStarter,
		Readonly<IFixedPart>,
		Required<IMandatoryPart>,
		Nullable<IOptionalPart> {}

/**
 * Données requises pour créer une classe de l'entité (DTO création)
 */
export interface ILinkCreator extends Readonly<IFixedPart>, Required<IMandatoryPart>, Nullable<IOptionalPart> {}

/**
 * Données utilisées pour instancier une classe de l'entité dans le code
 */
export interface ILinkConstructor extends Readonly<IFixedPart>, Required<IMandatoryPart>, Nullable<IOptionalPart> {}

/**
 * Structure de retour d'une entité Link
 */
export interface ILinkResponse extends ILink {}

/**
 * Partie éditable obligatoire de l'entité (ex : via PATCH)
 */
export interface ILinkEditorMandatory extends Partial<IMandatoryPart> {}

/**
 * Partie éditable optionnelle de l'entité
 */
export interface ILinkEditorOptional extends Nullable<IOptionalPart> {}

/**
 * Structure complète pour éditer l'entité
 */
export interface ILinkEditor extends ILinkEditorMandatory, ILinkEditorOptional {}
