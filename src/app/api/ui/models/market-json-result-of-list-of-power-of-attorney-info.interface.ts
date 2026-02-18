import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { PowerOfAttorneyInfo } from './power-of-attorney-info.interface';

export type MarketJsonResultOfListOfPowerOfAttorneyInfo = MarketJsonVoidResultAlt & { 'data'?: Array<PowerOfAttorneyInfo> | null; };
