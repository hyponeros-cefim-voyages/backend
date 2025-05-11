import { EmptyObject, Nullable } from "src/common/types/utilities.type";
/**
 * Propriétés non modifiables après création
 */
interface IFixedPart extends EmptyObject {
	// aucune propriété fixe dans l’address embarquée
}

/**
 * Propriétés obligatoires pour toute adresse
 */
interface IMandatoryPart {
	streetLine1: string;
	zipCode: string;
	city: string;
}

/**
 * Propriétés optionnelles
 */
interface IOptionalPart {
	streetLine2: string;
}

/**
 * Modèle complet de l’Address imbriquée dans une entité
 */
export interface IAddress extends Readonly<IFixedPart>, Required<IMandatoryPart>, Nullable<IOptionalPart> {}

/**
 * Données requises pour créer une adresse (DTO)
 */
export interface IAddressCreator extends Readonly<IFixedPart>, Required<IMandatoryPart>, Nullable<IOptionalPart> {}

/**
 * Structure de l’objet Address exposé en réponse
 */
export interface IAddressResponse extends IAddress {}
