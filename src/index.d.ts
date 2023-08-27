import type {
	YGAlign,
	YGDimension,
	YGDirection,
	YGDisplay,
	YGEdge,
	YGExperimentalFeature,
	YGFlexDirection,
	YGJustify,
	YGLogLevel,
	YGMeasureMode,
	YGNodeType,
	YGOverflow,
	YGPositionType,
	YGUnit,
	YGWrap,
} from "./YogaSys/enums";
import type Config from "./config";
import type Node from "./node";
import type { Size, Value } from "./utils";

declare namespace Flow {
	export const Align: typeof YGAlign;
	export type Align = YGAlign;

	export const Dimension: typeof YGDimension;
	export type Dimension = YGDimension;

	export const Direction: typeof YGDirection;
	export type Direction = YGDirection;

	export const Display: typeof YGDisplay;
	export type Display = YGDisplay;

	export const Edge: typeof YGEdge;
	export type Edge = YGEdge;

	export const ExperimentalFeature: typeof YGExperimentalFeature;
	export type ExperimentalFeature = YGExperimentalFeature;

	export const FlexDirection: typeof YGFlexDirection;
	export type FlexDirection = YGFlexDirection;

	export const Justify: typeof YGJustify;
	export type Justify = YGJustify;

	export const LogLevel: typeof YGLogLevel;
	export type LogLevel = YGLogLevel;

	export const MeasureMode: typeof YGMeasureMode;
	export type MeasureMode = YGMeasureMode;

	export const NodeType: typeof YGNodeType;
	export type NodeType = YGNodeType;

	export const Overflow: typeof YGOverflow;
	export type Overflow = YGOverflow;

	export const PositionType: typeof YGPositionType;
	export type PositionType = YGPositionType;

	export const Unit: typeof YGUnit;
	export type Unit = YGUnit;

	export const Wrap: typeof YGWrap;
	export type Wrap = YGWrap;

	export type FlowConfig = Config;
	export type FlowNode = Node;
	export type FlowSize = Size;
	export type FlowValue = Value;

	export const Config: new () => FlowConfig;
	export const Node: new (config?: FlowConfig) => FlowNode;

	export const Size: (new (width: number, height?: number) => FlowSize) | (new () => FlowSize);
	export const Value: (new (unit: YGUnit, value?: number) => FlowValue) | (new () => FlowValue);
}

export = Flow;
