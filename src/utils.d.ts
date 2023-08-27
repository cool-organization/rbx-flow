import type { YGUnit } from "./YogaSys";

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

export interface Value {
	unit: YGUnit;
	value: number;

	// public constructor(unit: Unit, value: number);
	// public constructor();
}
