declare namespace YGEnum {
	export const YGAlignCount = 8;
	export enum YGAlign {
		Auto = 1,
		FlexStart = 2,
		Center = 3,
		FlexEnd = 4,
		Stretch = 5,
		Baseline = 6,
		SpaceBetween = 7,
		SpaceAround = 8,
	}
	export type YGAlignString =
		| "auto"
		| "flex-start"
		| "center"
		| "flex-end"
		| "stretch"
		| "baseline"
		| "space-between"
		| "space-around";
	export function YGAlignToString(value: YGAlign): YGAlignString | "unknown";

	export const YGDimensionCount = 2;
	export enum YGDimension {
		Width = 1,
		Height = 2,
	}
	export type YGDimensionString = "width" | "height";
	export function YGDimensionToString(value: YGDimension): YGDimensionString | "unknown";

	export enum YGDirection {
		Inherit = 1,
		LTR = 2,
		RTL = 3,
	}
	export type YGDirectionString = "inherit" | "ltr" | "rtl";
	export function YGDirectionToString(value: YGDirection): YGDirectionString | "unknown";

	export const YGDisplayCount = 2;
	export enum YGDisplay {
		Flex = 1,
		None = 2,
	}
	export type YGDisplayString = "flex" | "none";
	export function YGDisplayToString(value: YGDisplay): YGDisplayString | "unknown";

	export const YGEdgeCount = 9;
	export enum YGEdge {
		Left = 1,
		Top = 2,
		Right = 3,
		Bottom = 4,
		Start = 5,
		End = 6,
		Horizontal = 7,
		Vertical = 8,
		All = 9,
	}
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
	export function YGEdgeToString(value: YGEdge): YGEdgeString | "unknown";

	export const YGExperimentalFeatureCount = 1;
	export enum YGExperimentalFeature {
		WebFlexBasis = 1,
	}
	export type YGExperimentalFeatureString = "web-flex-basis";
	export function YGExperimentalFeatureToString(
		value: YGExperimentalFeature,
	): YGExperimentalFeatureString | "unknown";

	export const YGFlexDirectionCount = 4;
	export enum YGFlexDirection {
		Column = 1,
		ColumnReverse = 2,
		Row = 3,
		RowReverse = 4,
	}
	export type YGFlexDirectionString = "column" | "column-reverse" | "row" | "row-reverse";
	export function YGFlexDirectionToString(value: YGFlexDirection): YGFlexDirectionString | "unknown";

	export const YGJustifyCount = 6;
	export enum YGJustify {
		FlexStart = 1,
		Center = 2,
		FlexEnd = 3,
		SpaceBetween = 4,
		SpaceAround = 5,
		SpaceEvenly = 6,
	}
	export type YGJustifyString =
		| "flex-start"
		| "center"
		| "flex-end"
		| "space-between"
		| "space-around"
		| "space-evenly";
	export function YGJustifyToString(value: YGJustify): YGJustifyString | "unknown";

	export const YGLogLevelCount = 6;
	export enum YGLogLevel {
		Error = 1,
		Warn = 2,
		Info = 3,
		Debug = 4,
		Verbose = 5,
		Fatal = 6,
	}
	export type YGLogLevelString = "error" | "warn" | "info" | "debug" | "verbose" | "fatal";
	export function YGLogLevelToString(value: YGLogLevel): YGLogLevelString | "unknown";

	export const YGMeasureModeCount = 3;
	export enum YGMeasureMode {
		Undefined = 1,
		Exactly = 2,
		AtMost = 3,
	}
	export type YGMeasureModeString = "undefined" | "exactly" | "at-most";
	export function YGMeasureModeToString(value: YGMeasureMode): YGMeasureModeString | "unknown";

	export const YGNodeTypeCount = 2;
	export enum YGNodeType {
		Default = 1,
		Text = 2,
	}
	export type YGNodeTypeString = "default" | "text";
	export function YGNodeTypeToString(value: YGNodeType): YGNodeTypeString | "unknown";

	export const YGOverflowCount = 3;
	export enum YGOverflow {
		Visible = 1,
		Hidden = 2,
		Scroll = 3,
	}
	export type YGOverflowString = "visible" | "hidden" | "scroll";
	export function YGOverflowToString(value: YGOverflow): YGOverflowString | "unknown";

	export const YGPositionTypeCount = 2;
	export enum YGPositionType {
		Static = 1,
		Relative = 2,
		Absolute = 3,
	}
	export type YGPositionTypeString = "static" | "relative" | "absolute";
	export function YGPositionTypeToString(value: YGPositionType): YGPositionTypeString | "unknown";

	export const YGPrintOptionsCount = 3;
	export enum YGPrintOptions {
		Layout = 1,
		Style = 2,
		Children = 4,
	}
	export type YGPrintOptionsString = "layout" | "style" | "children";
	export function YGPrintOptionsToString(value: YGPrintOptions): YGPrintOptionsString | "unknown";

	export const YGUnitCount = 4;
	export enum YGUnit {
		Undefined = 1,
		Point = 2,
		Percent = 3,
		Auto = 4,
	}
	export type YGUnitString = "undefined" | "point" | "percent" | "auto";
	export function YGUnitToString(value: YGUnit): YGUnitString | "unknown";

	export const YGWrapCount = 3;
	export enum YGWrap {
		NoWrap = 1,
		Wrap = 2,
		WrapReverse = 3,
	}
	export type YGWrapString = "no-wrap" | "wrap" | "wrap-reverse";
	export function YGWrapToString(value: YGWrap): YGWrapString | "unknown";
}

export = YGEnum;
