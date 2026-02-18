import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { OfferStates } from './offer-states.interface';

export type MarketJsonResultOfListOfOfferStates = MarketJsonVoidResultAlt & { 'data'?: Array<OfferStates> | null; };
