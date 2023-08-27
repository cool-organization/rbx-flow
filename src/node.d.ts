import type Config from "./config";
import type { YGDirtiedFunc, YGMeasureFunc, YGNode } from "./YogaSys";
import type {
	YGAlign,
	YGDirection,
	YGDisplay,
	YGEdge,
	YGFlexDirection,
	YGJustify,
	YGOverflow,
	YGPositionType,
	YGWrap,
} from "./YogaSys/enums";
import type { Layout, Value } from "./utils";

declare class Node {
	public constructor(config?: Config);

	public calculateLayout(width?: number, height?: number, direction?: YGDirection): void;
	public copyStyle(node: YGNode): void;

	public free(): void;
	public freeRecursive(): void;

	public getAlignContent(): YGAlign;
	public getAlignItems(): YGAlign;
	public getAlignSelf(): YGAlign;

	public getAspectRatio(): number;

	public getBorder(edge: YGEdge): number;
	public getChild(index: number): Node | undefined;
	public getChildCount(): number;

	public getComputedBorder(edge: YGEdge): number;
	public getComputedBottom(): number;
	public getComputedHeight(): number;
	public getComputedLayout(): Layout;
	public getComputedLeft(): number;
	public getComputedMargin(edge: YGEdge): number;
	public getComputedPadding(edge: YGEdge): number;
	public getComputedRight(): number;
	public getComputedTop(): number;
	public getComputedWidth(): number;

	public getDisplay(): YGDisplay;

	public getFlexBasis(): Value;
	public getFlexDirection(): YGFlexDirection;
	public getFlexGrow(): number;
	public getFlexShrink(): number;
	public getFlexWrap(): YGWrap;

	public getHeight(): Value;
	public getWidth(): Value;

	public getJustifyContent(): YGJustify;
	public getMargin(edge: YGEdge): Value;

	public getMaxHeight(): Value;
	public getMaxWidth(): Value;
	public getMinHeight(): Value;
	public getMinWidth(): Value;
	public getOverflow(): YGOverflow;

	public getPadding(edge: YGEdge): Value;
	public getParent(): Node | undefined;
	public getPosition(edge: YGEdge): Value;
	public getPositionType(): YGPositionType;

	public getDirtied(): YGDirtiedFunc;
	public isDirty(): boolean;
	public markDirty(): void;

	public insertChild(child: Node, index: number): void;
	public removeChild(child: Node): void;
	public reset(): void;

	public setAlignContent(alignContent: YGAlign): void;
	public setAlignItems(alignItems: YGAlign): void;
	public setAlignSelf(alignSelf: YGAlign): void;

	public setAspectRatio(aspectRatio: number): void;
	public setBorder(edge: YGEdge, borderWidth: number): void;
	public setDisplay(display: YGDisplay): void;

	public setFlex(flex: number): void;
	public setFlexBasis(flexBasis: number | string): void;
	public setFlexBasisPercent(flexBasis: number): void;
	public setFlexBasisAuto(): void;
	public setFlexDirection(flexDirection: YGFlexDirection): void;
	public setFlexGrow(flexGrow: number): void;
	public setFlexShrink(flexShrink: number): void;
	public setFlexWrap(flexWrap: YGWrap): void;

	public setHeight(height: number | string): void;
	public setHeightPercent(height: number): void;
	public setHeightAuto(): void;
	public setMaxHeight(maxHeight: number | string): void;
	public setMaxHeightPercent(maxHeight: number): void;
	public setMinHeight(minHeight: number | string): void;
	public setMinHeightPercent(minHeight: number): void;

	public setJustifyContent(justifyContent: YGJustify): void;

	public setMargin(edge: YGEdge, margin: number | string): void;
	public setMarginPercent(edge: YGEdge, margin: number): void;
	public setMarginAuto(edge: YGEdge): void;

	public setWidth(width: number | string): void;
	public setWidthPercent(width: number): void;
	public setWidthAuto(): void;
	public setMaxWidth(maxWidth: number | string): void;
	public setMaxWidthPercent(maxWidth: number): void;
	public setMinWidth(minWidth: number | string): void;
	public setMinWidthPercent(minWidth: number): void;

	public setMeasureFunc(measureFunc?: YGMeasureFunc): void;
	public unsetMeasureFunc(): void;

	public setOverflow(overflow: YGOverflow): void;

	public setPadding(edge: YGEdge, padding: number | string): void;
	public setPaddingPercent(edge: YGEdge, padding: number): void;

	public setPosition(edge: YGEdge, position: number | string): void;
	public setPositionPercent(edge: YGEdge, position: number): void;
	public setPositionType(positionType: YGPositionType): void;

	public setDirtiedFunc(dirtiedFunc: YGDirtiedFunc): void;
	public unsetMeasureFun(): void;

	/**
	 * @deprecated This isn't a real function. There's a typo in the code at the time of writing this. Use {@link unsetMeasureFun}.
	 */
	public unsetMeasureFunc(): void;

	public isReferenceBaseline(): boolean;
	public setReferenceBaseline(referenceBaseline: boolean): void;
}

export = Node;
