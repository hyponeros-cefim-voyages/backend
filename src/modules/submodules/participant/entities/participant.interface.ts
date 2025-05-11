import { IEntityStarter } from "src/common/interfaces/entity-starter.interface";
import { EmptyObject, Nullable } from "src/common/types/utilities.type";
import { IExpense } from "src/modules/expense/entities/expense.interface";
import { ITrip } from "src/modules/trip/entities/trip.interface";
import { IUser } from "src/modules/user/entities/user.interface";

/**
 * Propriétés non modifiables après la création
 */
interface IFixedPart {
	expense: IExpense;
	trip: ITrip;
}

/**
 * Propriétés obligatoires
 */
interface IMandatoryPart {
	user: IUser;
}

/**
 * Propriétés optionnelles
 */
interface IOptionalPart extends EmptyObject {}

/**
 * Modèle principal de la classe de l'entité telle que stockée en base
 */
export interface IParticipant
	extends IEntityStarter,
		Readonly<IFixedPart>,
		Required<IMandatoryPart>,
		Partial<IOptionalPart> {}

/**
 * Données requises pour créer une classe de l'entité (DTO création)
 */
export interface IParticipantCreator extends Readonly<IFixedPart>, Required<IMandatoryPart>, Nullable<IOptionalPart> {}

/**
 * Données utilisées pour instancier une classe de l'entité dans le code
 */
export interface IParticipantConstructor
	extends Readonly<IFixedPart>,
		Required<IMandatoryPart>,
		Nullable<IOptionalPart> {}

/**
 * Structure de retour d'une entité Participant
 */
export interface IParticipantResponse extends IParticipant {}

/**
 * Partie éditable obligatoire de l'entité (ex : via PATCH)
 */
export interface IParticipantEditorMandatory extends Partial<IMandatoryPart> {}

/**
 * Partie éditable optionnelle de l'entité
 */
export interface IParticipantEditorOptional extends Nullable<IOptionalPart> {}

/**
 * Structure complète pour éditer l'entité
 */
export interface IParticipantEditor extends IParticipantEditorMandatory, IParticipantEditorOptional {}
