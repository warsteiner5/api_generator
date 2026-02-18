import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { OpenPartDistrict } from './open-part-district.interface';

export type MarketJsonResultOfOpenPartDistrictDtoOf = MarketJsonVoidResultAlt & { 'data'?: Array<OpenPartDistrict> | null; };
