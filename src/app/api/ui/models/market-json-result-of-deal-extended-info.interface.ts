import { DealExtendedInfoAlt } from './deal-extended-info-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfDealExtendedInfo = MarketJsonVoidResultAlt & { 'data'?: DealExtendedInfoAlt | null; };
