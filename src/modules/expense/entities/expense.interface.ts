import { IEntityStarter } from "src/common/interfaces/entity-starter.interface";
import { EmptyObject, Nullable } from "src/common/types/utilities.type";
import { ExpenseType } from "./expense-type.enum";

/**
 * Propriétés non modifiables après la création
 */
interface IFixedPart extends EmptyObject {}

/**
 * Propriétés obligatoires
 */
interface IMandatoryPart {
	amountEntered: number;
	isRefunded: boolean;
	type: ExpenseType;
}

/**
 * Propriétés optionnelles
 */
interface IOptionalPart {
	paidAt: Date;
	description: string;
}

/**
 * Modèle principal de la classe de l'entité telle que stockée en base
 */
export interface IExpense
	extends IEntityStarter,
		Readonly<IFixedPart>,
		Required<IMandatoryPart>,
		Partial<IOptionalPart> {}

/**
 * Données requises pour créer une classe de l'entité (DTO création)
 */
export interface IExpenseCreator extends Readonly<IFixedPart>, Required<IMandatoryPart>, Nullable<IOptionalPart> {}

/**
 * Données utilisées pour instancier une classe de l'entité dans le code
 */
export interface IExpenseConstructor extends Readonly<IFixedPart>, Required<IMandatoryPart>, Nullable<IOptionalPart> {}

/**
 * Structure de retour d'une entité Trip
 */
export interface IExpenseResponse extends IExpense {}

/**
 * Partie éditable obligatoire de l'entité (ex : via PATCH)
 */
export interface IExpenseEditorMandatory extends Partial<IMandatoryPart> {}

/**
 * Partie éditable optionnelle de l'entité
 */
export interface IExpenseEditorOptional extends Nullable<IOptionalPart> {}

/**
 * Structure complète pour éditer l'entité
 */
export interface IdExpenseEditor extends IExpenseEditorMandatory, IExpenseEditorOptional {}
