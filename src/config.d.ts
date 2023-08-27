import type { YGExperimentalFeature } from "./YogaSys";

declare class Config {
	public constructor();

	public free(): void;
	public setExperimentalFeatureEnabled(feature: YGExperimentalFeature, enabled: boolean): void;
	public isExperimentalFeatureEnabled(feature: YGExperimentalFeature): boolean;
	public setPointScaleFactor(pixelsInPoint: number): void;
}

export = Config;
