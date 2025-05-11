import { IEntityStarter } from "src/common/interfaces/entity-starter.interface";

/**
 * Propriétés non modifiables après la création
 */
interface IFixedPart {
	/** Code ISO 3166-1 alpha-2, en majuscules */
	code: string;
	/** Nom du pays en français */
	name: string;
}

/**
 * Modèle principal de la classe de l'entité telle que stockée en base
 */
export interface ICountry extends IEntityStarter, Readonly<IFixedPart> {}
