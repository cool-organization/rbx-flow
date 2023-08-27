// todo: probably finish this

import YGEnum, {
	type YGUnit,
	type YGEdge,
	type YGNodeType,
	type YGFlexDirection,
	type YGAlign,
	type YGMeasureMode,
	type YGLogLevel,
	type YGDimension,
	type YGJustify,
	type YGPositionType,
	type YGWrap,
	type YGOverflow,
	type YGDisplay,
	type YGDimensionCount,
	type YGPrintOptions,
	type YGExperimentalFeature,
	YGDirection,
} from "./enums";
import { LayoutData, LayoutPassReason } from "./event";

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

export function YGSpacer(level: number): string;
export function YGMeasureModeName(mode: YGMeasureMode, performLayout: boolean): string;
export function YGMeasureModeSizeIsExactAndMatchesOldMeasuredSize(
	sizeMode: YGMeasureMode,
	size: number,
	lastComputedSize: number,
): boolean;

export function YGMeasureModeOldSizeIsUnspecifiedAndStillFits(
	sizeMode: YGMeasureMode,
	size: number,
	lastSizeMode: YGMeasureMode,
	lastComputedSize: number,
): boolean;

export function YGMeasureModeNewMeasureSizeIsStricterAndStillValid(
	sizeMode: YGMeasureMode,
	size: number,
	lastSizeMode: YGMeasureMode,
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
	widthMode: YGMeasureMode,
	width: number,
	heightMode: YGMeasureMode,
	height: number,
	lastWidthMode: YGMeasureMode,
	lastWidth: number,
	lastHeightMode: YGMeasureMode,
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
	ownerDirection: YGDirection,
	widthMeasureMode: YGMeasureMode,
	heightMeasureMode: YGMeasureMode,
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
	ownerDirection: YGDirection,
	layoutContext: any,
): void;

export function YGNodeCalculateLayout(
	node: YGNode,
	ownerWidth: number,
	ownerHeight: number,
	ownerDirection: YGDirection,
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
