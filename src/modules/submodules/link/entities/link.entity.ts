import { EntityStarter } from "src/common/entity/entity-starter.entity";
import { Column, Entity } from "typeorm";
import { ILink } from "./link.interface";

@Entity("link")
export class Link extends EntityStarter implements ILink {
	@Column({ length: 100 })
	label: string;

	@Column({ type: "text" })
	url: string;
}
