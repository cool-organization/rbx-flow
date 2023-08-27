import type { YGMeasureMode } from "./enums";
import type { YGConfig, YGNode } from "./types";

declare namespace Event {
	export enum LayoutType {
		kLayout = 1,
		kMeasure = 2,
		kCachedLayout = 3,
		kCachedMeasure = 4,
	}

	export enum LayoutPassReason {
		kInitial = 1,
		kAbsLayout = 2,
		kStretch = 3,
		kMultilineStretch = 4,
		kFlexLayout = 5,
		kMeasureChild = 6,
		kAbsMeasureChild = 7,
		kFlexMeasure = 8,
	}
	export type LayoutPassReasonString =
		| "initial"
		| "abs_layout"
		| "stretch"
		| "multiline_stretch"
		| "flex_layout"
		| "measure"
		| "abs_measure"
		| "flex_measure";

	type LayoutPassCounts = Array<number>;
	export class LayoutData {
		public layouts: number;
		public measures: number;
		public maxMeasureCache: number;
		public cachedLayouts: number;
		public cachedMeasures: number;
		public measureCallbacks: number;
		public measureCallbackReasonsCount: LayoutPassCounts;

		public constructor(
			layouts?: number,
			measures?: number,
			maxMeasureCache?: number,
			cachedLayouts?: number,
			cachedMeasures?: number,
			measureCallbacks?: number,
			measureCallbackReasonsCount?: LayoutPassCounts,
		);
	}
	export function LayoutPassReasonToString(reason: LayoutPassReason): LayoutPassReasonString | "unknown";

	export enum EventType {
		NodeAllocation = 1,
		NodeDeallocation = 2,
		NodeLayout = 3,
		LayoutPassStart = 4,
		LayoutPassEnd = 5,
		MeasureCallbackStart = 6,
		MeasureCallbackEnd = 7,
		NodeBaselineStart = 8,
		NodeBaselineEnd = 9,
	}

	interface Subscriber<T = unknown> {
		(node: YGNode, type: EventType, data: T): void;
	}

	export class YGEvent {
		public constructor();

		public static reset(this: void): void;
		public static subscribe<T = unknown>(this: void, subscriber: Subscriber<T>): void;
		public static publish(this: void, node: YGNode, eventType: EventType, eventData?: EventData): void;
	}

	export interface NodeAllocationData {
		config: YGConfig;
	}

	export interface NodeDeallocationData {
		config: YGConfig;
	}

	export interface LayoutPassStartData {
		layoutContext: unknown;
	}

	export interface LayoutPassEndData {
		layoutContext: unknown;
		layoutData: LayoutData;
	}

	export interface MeasureCallbackEndData {
		layoutContext: unknown;
		width: number;
		widthMeasureMode: YGMeasureMode;
		height: number;
		heightMeasureMode: YGMeasureMode;
		measuredWidth: number;
		measuredHeight: number;
		reason: LayoutPassReason;
	}

	export interface NodeLayoutData {
		layoutContext: unknown;
		layoutType: LayoutType;
	}

	export type EventData =
		| NodeAllocationData
		| NodeDeallocationData
		| LayoutPassStartData
		| LayoutPassEndData
		| MeasureCallbackEndData
		| NodeLayoutData;
}

export = Event;
