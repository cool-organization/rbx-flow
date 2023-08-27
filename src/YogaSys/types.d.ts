import type {
	YGAlign,
	YGDirection,
	YGDisplay,
	YGEdge,
	YGFlexDirection,
	YGJustify,
	YGLogLevel,
	YGMeasureMode,
	YGNodeType,
	YGOverflow,
	YGPositionType,
	YGUnit,
	YGWrap,
} from "./enums";

export class YGSize {
	public width: number;
	public height: number;

	public constructor();
}

export type YGPrintFunc = (node: YGNode, contextFunction: any) => void;
export type YGMeasureFunc = (
	node: YGNode,
	width: number,
	widthMode: YGMeasureMode,
	height: number,
	heightMode: YGMeasureMode,
	contextFn: any,
) => YGSize;

export type YGBaselineFunc = (node: YGNode, width: number, height: number, contextFn: any) => number;
export type YGDirtiedFunc = (node: YGNode) => void;
export type YGLogger = (
	config: YGConfig,
	node: YGNode,
	level: YGLogLevel,
	format: string,
	args: Array<unknown>,
) => void;

export type YGCloneNodeFunc = (oldNode: YGNode, owner: YGNode, childIndex: number, cloneContext: any) => YGNode;
export type YGNodeCleanupFunc = (node: YGNode) => void;

export interface YGCachedMeasurement {
	availableWidth: number;
	availableHeight: number;
	widthMeasureMode: YGMeasureMode;
	heightMeasureMode: YGMeasureMode;
	computedWidth: number;
	computedHeight: number;
}

export class YGFloatOptional {
	private value_: number;
	private isUndefined_: boolean;

	public constructor(value?: number | YGFloatOptional);

	public isUndefined(): boolean;
	public unwrap(): number;
	public clone(): YGFloatOptional;

	public getValue(): number;
	public setValue(value: number): void;

	public add(other: YGFloatOptional): YGFloatOptional;

	public isBigger(other: YGFloatOptional): boolean;
	public isSmaller(other: YGFloatOptional): boolean;
	public isBiggerEqual(other: YGFloatOptional): boolean;
	public isSmallerEqual(other: YGFloatOptional): boolean;
	public isEqual(other: YGFloatOptional): boolean;
	public isDiff(other: YGFloatOptional): boolean;

	public isEqualValue(value: number): boolean;
	public isDiffValue(value: number): boolean;
}

export class YGStyle {
	public direction: YGDirection;
	public flexDirection: YGFlexDirection;
	public justifyContent: YGJustify;
	public alignContent: YGAlign;
	public alignItems: YGAlign;
	public alignSelf: YGAlign;
	public positionType: YGPositionType;
	public flexWrap: YGWrap;
	public overflow: YGOverflow;
	public display: YGDisplay;
	public flex: YGFloatOptional;
	public flexGrow: YGFloatOptional;
	public flexShrink: YGFloatOptional;
	public flexBasis: YGValue;
	public margin: Array<YGValue>;
	public position: Array<YGValue>;
	public padding: Array<YGValue>;
	public border: Array<YGValue>;
	public dimensions: Array<YGValue>;
	public minDimensions: Array<YGValue>;
	public maxDimensions: Array<YGValue>;
	public aspectRatio: YGFloatOptional;

	public constructor();

	public isEqual(style: YGStyle): boolean;
	public clone(): YGStyle;
	public isDiff(style: YGStyle): boolean;
}

export class YGValue {
	public value: number;
	public unit: YGUnit;

	public constructor(value: number, unit: YGUnit);

	public eq(value: YGValue): boolean;
	public neq(value: YGValue): boolean;

	public subtract(value: YGValue): number;
	public clone(): YGValue;
	public isUndefined(): boolean;
}

export class YGConfig {
	public experimentalFeatures: Array<boolean>;
	public useWebDefaults: boolean;
	public useLegacyStretchBehaviour: boolean;
	public shouldDiffLayoutWithoutLegacyStretchBehaviour: boolean;
	public printTree: boolean;
	public pointScaleFactor: number;
	public logger: YGLogger;
	public cloneNodeCallback: YGCloneNodeFunc;
	public context: any;

	public constructor(logger: YGLogger);

	public log(config: YGConfig, node: YGNode, logLevel: YGLogLevel, format: string, ...args: Array<unknown>): void;
	public cloneNode(node: YGNode, owner: YGNode, childIndex: number, cloneContext?: any): YGNode;
	public setLogger(logger?: YGLogger): void;
	public setCloneNodeCallback(cloneNode?: YGCloneNodeFunc): void;
}

export class YGLayout {
	public readonly position: Array<number>;
	public readonly dimensions: Array<number>;
	public readonly margin: Array<number>;
	public readonly border: Array<number>;
	public readonly padding: Array<number>;
	public readonly direction: YGDirection;

	public computedFlexBasisGeneration: number;
	public computedFlexBasis: YGFloatOptional;
	public hadOverflow: boolean;

	public generationCount: number;
	public lastOwnerDirection: YGDirection;

	public nextCachedMeasurementsIndex: number;
	public cachedMeasurements: Array<YGCachedMeasurement>;
	public measuredDimensions: Array<number>;

	public cachedLayout: YGCachedMeasurement;
	public didUseLegacyFlag: boolean;
	public doesLegacyStretchFlagAffectsLayout: boolean;

	public constructor();

	public getDirection(): YGDirection;
	public setDirection(direction: YGDirection): void;
	public getDidUseLegacyFlag(): boolean;
	public setDidUseLegacyFlag(val: boolean): void;
	public getDoesLegacyStretchFlagAffectsLayout(): boolean;
	public setDoesLegacyStretchFlagAffectsLayout(val: boolean): void;
	public getHadOverflow(): boolean;
	public setHadOverflow(hadOverflow: boolean): void;
	public equal(layout: YGLayout): boolean;
	public diff(layout: YGLayout): boolean;
	public clean(): void;
	public clone(): YGLayout;
}

export type IterChildrenCallback = (node: YGNodeCleanupFunc, cloneContext: any) => void;

export class YGNode {
	private context_: any;
	private print_: YGPrintFunc;
	private hasNewLayout_: boolean;
	private isReferenceBaseline_: boolean;
	private nodeType_: YGNodeType;
	private measure_: YGMeasureFunc;
	private baseline_: YGBaselineFunc;
	private dirtied_: YGDirtiedFunc;
	private style_: YGStyle;
	private layout_: YGLayout;
	private lineIndex_: number;
	private owner_: YGNode;
	private children_: Array<YGNode>;
	private config_?: YGConfig;
	private isDirty_: boolean;
	private resolvedDimensions_: Array<YGValue>;

	public constructor(
		contextOrNodeOrConfig?: any | YGNode | YGConfig,
		print_?: YGPrintFunc,
		hasNewLayout?: boolean,
		isReferenceBaseline?: boolean,
		nodeType?: YGNodeType,
		measure?: YGMeasureFunc,
		baseline?: YGBaselineFunc,
		dirtied?: YGDirtiedFunc,
		style?: YGStyle,
		layout?: YGLayout,
		lineIndex?: number,
		owner?: YGNode,
		children?: Array<YGNode>,
		config?: YGConfig,
		isDirty?: boolean,
		resolvedDimensions?: Array<YGValue | YGValue>,
	);

	public initialize(
		print_?: YGPrintFunc,
		hasNewLayout?: boolean,
		isReferenceBaseline?: boolean,
		nodeType?: YGNodeType,
		measure?: YGMeasureFunc,
		baseline?: YGBaselineFunc,
		dirtied?: YGDirtiedFunc,
		style?: YGStyle,
		layout?: YGLayout,
		lineIndex?: number,
		owner?: YGNode,
		children?: Array<YGNode>,
		config?: YGConfig,
		isDirty?: boolean,
		resolvedDimensions?: Array<YGValue | YGValue>,
	): void;

	public operatorAtrib(node: YGNode): YGNode;
	public fromNode(node: YGNode): void;
	public print(printContext?: any): void;
	public computeEdgeValueForRow(edges: Array<YGValue>, rowEdge: YGEdge, edge: YGEdge, defaultValue: YGValue): YGValue;

	public computeEdgeValueForColumn(edges: Array<YGValue>, edge: YGEdge, defaultValue: YGValue): YGValue;
	public measure(
		width: number,
		widthMode: YGMeasureMode,
		height: number,
		heightMode: YGMeasureMode,
		layoutContext?: any,
	): YGSize;
	public baseline(width: number, height: number, layoutContext?: any): number;
	public useWebDefaults(): void;
	public hasMeasureFunc(): boolean;
	public hasBaselineFunc(): boolean;
	public getContext(): any;
	public getHasNewLayout(): boolean;
	public getNodeType(): YGNodeType;
	public getDirtied(): YGDirtiedFunc;
	public getStyle(): YGStyle;
	public getLayout(): YGLayout;
	public getLineIndex(): number;
	public isReferenceBaseline(): boolean;
	public getOwner(): YGNode;
	public getParent(): YGNode;
	public getChildren(): Array<YGNode>;
	public getChildrenCount(): number;
	public getChild(index: number): YGNode;
	public getConfig(): YGConfig;
	public isDirty(): boolean;
	public getResolvedDimensions(): Array<YGValue>;
	public getResolvedDimension(index: number): YGValue;
	public getLeadingPosition(axis: YGFlexDirection, axisSize: number): YGFloatOptional;
	public isLeadingPositionDefined(axis: YGFlexDirection): boolean;
	public isTrailingPosDefined(axis: YGFlexDirection): boolean;
	public getTrailingPosition(axis: YGFlexDirection, axisSize: number): YGFloatOptional;
	public getLeadingMargin(axis: YGFlexDirection, widthSize: number): YGFloatOptional;
	public getTrailingMargin(axis: YGFlexDirection, widthSize: number): YGFloatOptional;
	public getLeadingBorder(axis: YGFlexDirection): number;
	public getTrailingBorder(axis: YGFlexDirection): number;
	public getLeadingPadding(axis: YGFlexDirection, widthSize: number): YGFloatOptional;
	public getTrailingPadding(axis: YGFlexDirection, widthSize: number): YGFloatOptional;
	public getLeadingPaddingAndBorder(axis: YGFlexDirection, widthSize: number): YGFloatOptional;
	public getTrailingPaddingAndBorder(axis: YGFlexDirection, widthSize: number): YGFloatOptional;
	public getMarginForAxis(axis: YGFlexDirection, widthSize: number): YGFloatOptional;
	public setContext(context: any): void;
	public setPrintFunc(printFunc: YGPrintFunc): void;
	public setHasNewLayout(hasNewLayout: boolean): void;
	public setNodeType(nodeType: YGNodeType): void;
	public setMeasureFunc(measureFunc: YGMeasureFunc): void;
	public setBaseLineFunc(baseLineFunc: YGBaselineFunc): void;
	public setDirtiedFunc(dirtiedFunc: YGDirtiedFunc): void;
	public setStyle(style: YGStyle): void;
	public setStyleFlexDirection(direction: YGFlexDirection): void;
	public setStyleAlignContent(alignContent: YGAlign): void;
	public setLayout(layout: YGLayout): void;
	public setLineIndex(lineIndex: number): void;
	public setIsReferenceBaseline(isReferenceBaseline: boolean): void;
	public setOwner(owner?: YGNode): void;
	public setChildren(children: Array<YGNode>): void;
	public setConfig(config?: YGConfig): void;
	public setDirty(isDirty: boolean): void;
	public setLayoutLastOwnerDirection(direction: YGDirection): void;
	public setLayoutComputedFlexBasis(computedFlexBasis: YGFloatOptional): void;
	public setLayoutComputedFlexBasisGeneration(computedFlexBasisGeneration: number): void;
	public setLayoutMeasuredDimension(measuredDimension: number, index: number): void;
	public setLayoutHadOverflow(hadOverflow: boolean): void;
	public setLayoutDimension(dimension: number, index: number): void;
	public setLayoutDirection(direction: YGDirection): void;
	public setLayoutMargin(margin: number, index: number): void;
	public setLayoutBorder(border: number, index: number): void;
	public setLayoutPadding(padding: number, index: number): void;
	public setLayoutPosition(position: number, index: number): void;
	public setPosition(direction: YGDirection, mainSize: number, crossSize: number, ownerWidth: number): void;
	public setLayoutDoesLegacyFlagAffectsLayout(doesLegacyFlagAffectsLayout: boolean): void;
	public setLayoutDidUseLegacyFlag(didUseLegacyFlag: boolean): void;
	public markDirtyAndPropogateDownwards(): void;
	public marginLeadingValue(axis: YGFlexDirection): YGValue;
	public marginTrailingValue(axis: YGFlexDirection): YGValue;
	public resolveFlexBasisPtr(): YGValue;
	public resolveDimension(): void;
	public resolveDirection(ownerDirection: YGDirection): YGDirection;
	public clearChildren(): void;
	public replaceChild(oldChild: YGNode, newChild: YGNode): void;
	public replaceChildIndex(child: YGNode, index: number): void;
	public insertChildIndex(child: YGNode, index: number): void;
	public removeChild(child: YGNode): boolean;
	public removeChildIndex(index: number): void;
	public iterChildrenAfterCloningIfNeeded(callback: IterChildrenCallback, cloneContext: any): void;
	public cloneChildrenIfNeeded(cloneContext?: any): void;
	public markDirtyAndPropogate(): void;
	public resolveFlexGrow(): number;
	public resolveFlexShrink(): number;
	public isNodeFlexible(): boolean;
	public didUseLegacyFlag(): boolean;
	public isLayoutTreeEqualToNode(node: YGNode): boolean;
	public reset(): void;
}
