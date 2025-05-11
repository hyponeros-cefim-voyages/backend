import { EntityStarter } from "src/common/entity/entity-starter.entity";
import { Activity } from "src/modules/activity/entities/activity.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { ILink } from "./link.interface";

@Entity("link")
export class Link extends EntityStarter implements ILink {
	@Column({ length: 100 })
	label: string;

	@Column({ type: "text" })
	url: string;

	@OneToMany(
		() => Activity,
		(activity) => activity.link,
		{ onDelete: "CASCADE" }, // Supprime les activités associées si le lien est supprimé
	)
	activities: Activity[];
}
