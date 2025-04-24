export type Nullable<T> = {
	[P in keyof T]?: T[P] | null;
};

export type EmptyObject = Record<never, never>;

export type Remove<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
