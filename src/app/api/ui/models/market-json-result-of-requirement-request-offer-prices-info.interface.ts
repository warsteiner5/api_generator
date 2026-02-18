import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { RequirementRequestOfferPricesInfo } from './requirement-request-offer-prices-info.interface';

export type MarketJsonResultOfRequirementRequestOfferPricesInfo = MarketJsonVoidResultAlt & { 'data'?: RequirementRequestOfferPricesInfo | null; };
