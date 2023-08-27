import type { YGUnit } from "./YogaSys";
import type { ValueOf } from "./utility-types";

export interface Layout {
	left: number;
	right: number;
	bottom: number;
	top: number;
	width: number;
	height: number;
}

export interface Size {
	width: number;
	height: number;

	// public constructor(width?: number, height?: number);
	// public constructor();
}

export type Unit = ValueOf<typeof YGUnit>;
export interface Value {
	unit: Unit;
	value: number;

	// public constructor(unit: Unit, value: number);
	// public constructor();
}
