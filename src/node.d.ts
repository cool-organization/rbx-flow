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
import type { ValueOf } from "./utility-types";
import type { Layout, Value } from "./utils";

type Align = ValueOf<typeof YGAlign>;
type Edge = ValueOf<typeof YGEdge>;
type Display = ValueOf<typeof YGDisplay>;
type FlexDirection = ValueOf<typeof YGFlexDirection>;
type Wrap = ValueOf<typeof YGWrap>;
type Justify = ValueOf<typeof YGJustify>;
type Overflow = ValueOf<typeof YGOverflow>;
type PositionType = ValueOf<typeof YGPositionType>;

declare class Node {
	public constructor(config?: Config);

	public calculateLayout(width?: number, height?: number, direction?: ValueOf<typeof YGDirection>): void;
	public copyStyle(node: YGNode): void;

	public free(): void;
	public freeRecursive(): void;

	public getAlignContent(): Align;
	public getAlignItems(): Align;
	public getAlignSelf(): Align;

	public getAspectRatio(): number;

	public getBorder(edge: Edge): number;
	public getChild(index: number): Node | undefined;
	public getChildCount(): number;

	public getComputedBorder(edge: Edge): number;
	public getComputedBottom(): number;
	public getComputedHeight(): number;
	public getComputedLayout(): Layout;
	public getComputedLeft(): number;
	public getComputedMargin(edge: Edge): number;
	public getComputedPadding(edge: Edge): number;
	public getComputedRight(): number;
	public getComputedTop(): number;
	public getComputedWidth(): number;

	public getDisplay(): Display;

	public getFlexBasis(): Value;
	public getFlexDirection(): FlexDirection;
	public getFlexGrow(): number;
	public getFlexShrink(): number;
	public getFlexWrap(): Wrap;

	public getHeight(): Value;
	public getWidth(): Value;

	public getJustifyContent(): Justify;
	public getMargin(edge: Edge): Value;

	public getMaxHeight(): Value;
	public getMaxWidth(): Value;
	public getMinHeight(): Value;
	public getMinWidth(): Value;
	public getOverflow(): Overflow;

	public getPadding(edge: Edge): Value;
	public getParent(): Node | undefined;
	public getPosition(edge: Edge): Value;
	public getPositionType(): PositionType;

	public getDirtied(): YGDirtiedFunc;
	public isDirty(): boolean;
	public markDirty(): void;

	public insertChild(child: Node, index: number): void;
	public removeChild(child: Node): void;
	public reset(): void;

	public setAlignContent(alignContent: Align): void;
	public setAlignItems(alignItems: Align): void;
	public setAlignSelf(alignSelf: Align): void;

	public setAspectRatio(aspectRatio: number): void;
	public setBorder(edge: Edge, borderWidth: number): void;
	public setDisplay(display: Display): void;

	public setFlex(flex: number): void;
	public setFlexBasis(flexBasis: number | string): void;
	public setFlexBasisPercent(flexBasis: number): void;
	public setFlexBasisAuto(): void;
	public setFlexDirection(flexDirection: FlexDirection): void;
	public setFlexGrow(flexGrow: number): void;
	public setFlexShrink(flexShrink: number): void;
	public setFlexWrap(flexWrap: Wrap): void;

	public setHeight(height: number | string): void;
	public setHeightPercent(height: number): void;
	public setHeightAuto(): void;
	public setMaxHeight(maxHeight: number | string): void;
	public setMaxHeightPercent(maxHeight: number): void;
	public setMinHeight(minHeight: number | string): void;
	public setMinHeightPercent(minHeight: number): void;

	public setJustifyContent(justifyContent: Justify): void;

	public setMargin(edge: Edge, margin: number | string): void;
	public setMarginPercent(edge: Edge, margin: number): void;
	public setMarginAuto(edge: Edge): void;

	public setWidth(width: number | string): void;
	public setWidthPercent(width: number): void;
	public setWidthAuto(): void;
	public setMaxWidth(maxWidth: number | string): void;
	public setMaxWidthPercent(maxWidth: number): void;
	public setMinWidth(minWidth: number | string): void;
	public setMinWidthPercent(minWidth: number): void;

	public setMeasureFunc(measureFunc?: YGMeasureFunc): void;
	public unsetMeasureFunc(): void;

	public setOverflow(overflow: Overflow): void;

	public setPadding(edge: Edge, padding: number | string): void;
	public setPaddingPercent(edge: Edge, padding: number): void;

	public setPosition(edge: Edge, position: number | string): void;
	public setPositionPercent(edge: Edge, position: number): void;
	public setPositionType(positionType: PositionType): void;

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
