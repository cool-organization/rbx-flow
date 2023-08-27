// todo: probably finish this

import YGEnum, {
	type YGAlign,
	type YGDimension,
	type YGDimensionCount,
	type YGDirection,
	type YGDisplay,
	type YGEdge,
	type YGExperimentalFeature,
	type YGFlexDirection,
	type YGJustify,
	type YGLogLevel,
	type YGMeasureMode,
	type YGNodeType,
	type YGOverflow,
	type YGPositionType,
	type YGPrintOptions,
	type YGUnit,
	type YGWrap,
} from "./enums";
import type { LayoutData, LayoutPassReason } from "./event";

import type {
	YGNode,
	YGConfig,
	YGLayout,
	YGStyle,
	YGFloatOptional,
	YGValue,
	YGCachedMeasurement,
	YGSize,
	YGPrintFunc,
	YGMeasureFunc,
	YGBaselineFunc,
	YGDirtiedFunc,
	YGLogger,
	YGCloneNodeFunc,
	YGNodeCleanupFunc,
} from "./types";
import type { ValueOf } from "../utility-types";

export function YGSpacer(level: number): string;
export function YGMeasureModeName(mode: ValueOf<typeof YGMeasureMode>, performLayout: boolean): string;
export function YGMeasureModeSizeIsExactAndMatchesOldMeasuredSize(
	sizeMode: ValueOf<typeof YGMeasureMode>,
	size: number,
	lastComputedSize: number,
): boolean;

export function YGMeasureModeOldSizeIsUnspecifiedAndStillFits(
	sizeMode: ValueOf<typeof YGMeasureMode>,
	size: number,
	lastSizeMode: ValueOf<typeof YGMeasureMode>,
	lastComputedSize: number,
): boolean;

export function YGMeasureModeNewMeasureSizeIsStricterAndStillValid(
	sizeMode: ValueOf<typeof YGMeasureMode>,
	size: number,
	lastSizeMode: ValueOf<typeof YGMeasureMode>,
	lastSize: number,
	lastComputedSize: number,
): boolean;

export function YGRoundValueToPixelGrid(
	value: number,
	pointScaleFactor: number,
	forceCeil: boolean,
	forceFloor: boolean,
): number;

export function YGNodeCanUseCachedMeasurement(
	widthMode: ValueOf<typeof YGMeasureMode>,
	width: number,
	heightMode: ValueOf<typeof YGMeasureMode>,
	height: number,
	lastWidthMode: ValueOf<typeof YGMeasureMode>,
	lastWidth: number,
	lastHeightMode: ValueOf<typeof YGMeasureMode>,
	lastHeight: number,
	lastComputedWidth: number,
	lastComputedHeight: number,
	marginRow: number,
	marginColumn: number,
	config: YGConfig,
): boolean;

export function YGLayoutNodeInternal(
	node: YGNode,
	availableWidth: number,
	availableHeight: number,
	ownerDirection: ValueOf<typeof YGDirection>,
	widthMeasureMode: ValueOf<typeof YGMeasureMode>,
	heightMeasureMode: ValueOf<typeof YGMeasureMode>,
	ownerWidth: number,
	ownerHeight: number,
	performLayout: boolean,
	reason: LayoutPassReason,
	config: YGConfig,
	layoutMarkerData: LayoutData,
	layoutContext: any,
	depth: number,
	generationCount: number,
): boolean;

export function YGConfigSetPointScaleFactor(config: YGConfig, pixelsInPoint: number): void;
export function YGRoundToPixelGrid(
	node: YGNode,
	pointScaleFactor: number,
	absoluteLeft: number,
	absoluteTop: number,
): void;

export function YGNodeCalculateLayoutWithContext(
	node: YGNode,
	ownerWidth: number,
	ownerHeight: number,
	ownerDirection: ValueOf<typeof YGDirection>,
	layoutContext: any,
): void;

export function YGNodeCalculateLayout(
	node: YGNode,
	ownerWidth: number,
	ownerHeight: number,
	ownerDirection: ValueOf<typeof YGDirection>,
): void;

export function YGConfigSetLogger(config: YGConfig, logger: YGLogger): void;

export function YGConfigSetShouldDiffLayoutWithoutLegacyStretchBehaviour(
	config: YGConfig,
	shouldDiffLayout: boolean,
): void;

export {
	YGEnum,
	YGUnit,
	YGEdge,
	YGNodeType,
	YGFlexDirection,
	YGAlign,
	YGMeasureMode,
	YGLogLevel,
	YGDimension,
	YGJustify,
	YGPositionType,
	YGWrap,
	YGOverflow,
	YGDisplay,
	YGDimensionCount,
	YGPrintOptions,
	YGExperimentalFeature,
	YGNode,
	YGConfig,
	YGLayout,
	YGStyle,
	YGFloatOptional,
	YGValue,
	YGCachedMeasurement,
	YGSize,
	YGPrintFunc,
	YGMeasureFunc,
	YGBaselineFunc,
	YGDirtiedFunc,
	YGLogger,
	YGCloneNodeFunc,
	YGNodeCleanupFunc,
};
