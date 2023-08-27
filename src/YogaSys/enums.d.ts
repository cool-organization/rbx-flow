declare namespace YGEnum {
	type ValueOf<T> = T[keyof T];

	export const YGAlignCount = 8;
	export const YGAlign: {
		Auto: 1;
		FlexStart: 2;
		Center: 3;
		FlexEnd: 4;
		Stretch: 5;
		Baseline: 6;
		SpaceBetween: 7;
		SpaceAround: 8;
	};
	export type YGAlignString =
		| "auto"
		| "flex-start"
		| "center"
		| "flex-end"
		| "stretch"
		| "baseline"
		| "space-between"
		| "space-around";
	export function YGAlignToString(value: ValueOf<typeof YGAlign>): YGAlignString | "unknown";

	export const YGDimensionCount = 2;
	export const YGDimension: {
		Width: 1;
		Height: 2;
	};
	export type YGDimensionString = "width" | "height";
	export function YGDimensionToString(value: ValueOf<typeof YGDimension>): YGDimensionString | "unknown";

	export const YGDirection: {
		Inherit: 1;
		LTR: 2;
		RTL: 3;
	};
	export type YGDirectionString = "inherit" | "ltr" | "rtl";
	export function YGDirectionToString(value: ValueOf<typeof YGDirection>): YGDirectionString | "unknown";

	export const YGDisplayCount = 2;
	export const YGDisplay: {
		Flex: 1;
		None: 2;
	};
	export type YGDisplayString = "flex" | "none";
	export function YGDisplayToString(value: ValueOf<typeof YGDisplay>): YGDisplayString | "unknown";

	export const YGEdgeCount = 9;
	export const YGEdge: {
		Left: 1;
		Top: 2;
		Right: 3;
		Bottom: 4;
		Start: 5;
		End: 6;
		Horizontal: 7;
		Vertical: 8;
		All: 9;
	};
	export type YGEdgeString =
		| "left"
		| "top"
		| "right"
		| "bottom"
		| "start"
		| "end"
		| "horizontal"
		| "vertical"
		| "all";
	export function YGEdgeToString(value: ValueOf<typeof YGEdge>): YGEdgeString | "unknown";

	export const YGExperimentalFeatureCount = 1;
	export const YGExperimentalFeature: {
		WebFlexBasis: 1;
	};
	export type YGExperimentalFeatureString = "web-flex-basis";
	export function YGExperimentalFeatureToString(
		value: ValueOf<typeof YGExperimentalFeature>,
	): YGExperimentalFeatureString | "unknown";

	export const YGFlexDirectionCount = 4;
	export const YGFlexDirection: {
		Column: 1;
		ColumnReverse: 2;
		Row: 3;
		RowReverse: 4;
	};
	export type YGFlexDirectionString = "column" | "column-reverse" | "row" | "row-reverse";
	export function YGFlexDirectionToString(value: ValueOf<typeof YGFlexDirection>): YGFlexDirectionString | "unknown";

	export const YGJustifyCount = 6;
	export const YGJustify: {
		FlexStart: 1;
		Center: 2;
		FlexEnd: 3;
		SpaceBetween: 4;
		SpaceAround: 5;
		SpaceEvenly: 6;
	};
	export type YGJustifyString =
		| "flex-start"
		| "center"
		| "flex-end"
		| "space-between"
		| "space-around"
		| "space-evenly";
	export function YGJustifyToString(value: keyof typeof YGJustify): YGJustifyString | "unknown";

	export const YGLogLevelCount = 6;
	export const YGLogLevel: {
		Error: 1;
		Warn: 2;
		Info: 3;
		Debug: 4;
		Verbose: 5;
		Fatal: 6;
	};
	export type YGLogLevelString = "error" | "warn" | "info" | "debug" | "verbose" | "fatal";
	export function YGLogLevelToString(value: ValueOf<typeof YGLogLevel>): YGLogLevelString | "unknown";

	export const YGMeasureModeCount = 3;
	export const YGMeasureMode: {
		Undefined: 1;
		Exactly: 2;
		AtMost: 3;
	};
	export type YGMeasureModeString = "undefined" | "exactly" | "at-most";
	export function YGMeasureModeToString(value: ValueOf<typeof YGMeasureMode>): YGMeasureModeString | "unknown";

	export const YGNodeTypeCount = 2;
	export const YGNodeType: {
		Default: 1;
		Text: 2;
	};
	export type YGNodeTypeString = "default" | "text";
	export function YGNodeTypeToString(value: ValueOf<typeof YGNodeType>): YGNodeTypeString | "unknown";

	export const YGOverflowCount = 3;
	export const YGOverflow: {
		Visible: 1;
		Hidden: 2;
		Scroll: 3;
	};
	export type YGOverflowString = "visible" | "hidden" | "scroll";
	export function YGOverflowToString(value: ValueOf<typeof YGOverflow>): YGOverflowString | "unknown";

	export const YGPositionTypeCount = 2;
	export const YGPositionType: {
		Static: 1;
		Relative: 2;
		Absolute: 3;
	};
	export type YGPositionTypeString = "static" | "relative" | "absolute";
	export function YGPositionTypeToString(value: ValueOf<typeof YGPositionType>): YGPositionTypeString | "unknown";

	export const YGPrintOptionsCount = 3;
	export const YGPrintOptions: {
		Layout: 1;
		Style: 2;
		Children: 4;
	};
	export type YGPrintOptionsString = "layout" | "style" | "children";
	export function YGPrintOptionsToString(value: ValueOf<typeof YGPrintOptions>): YGPrintOptionsString | "unknown";

	export const YGUnitCount = 4;
	export const YGUnit: {
		Undefined: 1;
		Point: 2;
		Percent: 3;
		Auto: 4;
	};
	export type YGUnitString = "undefined" | "point" | "percent" | "auto";
	export function YGUnitToString(value: ValueOf<typeof YGUnit>): YGUnitString | "unknown";

	export const YGWrapCount = 3;
	export const YGWrap: {
		NoWrap: 1;
		Wrap: 2;
		WrapReverse: 3;
	};
	export type YGWrapString = "no-wrap" | "wrap" | "wrap-reverse";
	export function YGWrapToString(value: ValueOf<typeof YGWrap>): YGWrapString | "unknown";
}

export = YGEnum;
