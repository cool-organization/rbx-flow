import type { YGExperimentalFeature } from "./YogaSys";
import type { ValueOf } from "./utility-types";

declare class Config {
	public constructor();

	public free(): void;
	public setExperimentalFeatureEnabled(feature: ValueOf<typeof YGExperimentalFeature>, enabled: boolean): void;
	public isExperimentalFeatureEnabled(feature: ValueOf<typeof YGExperimentalFeature>): boolean;
	public setPointScaleFactor(pixelsInPoint: number): void;
}

export = Config;
