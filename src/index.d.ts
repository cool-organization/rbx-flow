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

declare namespace Flow {
	export const Align: typeof YGAlign;
	export const Dimension: typeof YGDimension;
	export const Direction: typeof YGDirection;
	export const Display: typeof YGDisplay;
	export const Edge: typeof YGEdge;
	export const ExperimentalFeature: typeof YGExperimentalFeature;
	export const FlexDirection: typeof YGFlexDirection;
	export const Justify: typeof YGJustify;
	export const LogLevel: typeof YGLogLevel;
	export const MeasureMode: typeof YGMeasureMode;
	export const NodeType: typeof YGNodeType;
	export const Overflow: typeof YGOverflow;
	export const PositionType: typeof YGPositionType;
	export const Unit: typeof YGUnit;
	export const Wrap: typeof YGWrap;
}

export = Flow;
