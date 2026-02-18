import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MunicipalityOktmo } from './municipality-oktmo.interface';

export type MarketJsonResultOfMunicipalityOktmo = MarketJsonVoidResultAlt & { 'data'?: MunicipalityOktmo | null; };
