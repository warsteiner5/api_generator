import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { PartnerRequest } from './partner-request.interface';

export type MarketJsonResultOfListOfPartnerRequest = MarketJsonVoidResultAlt & { 'data'?: Array<PartnerRequest> | null; };
