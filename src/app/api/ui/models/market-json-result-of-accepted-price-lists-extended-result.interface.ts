import { AcceptedPriceListsExtendedResultAlt } from './accepted-price-lists-extended-result-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfAcceptedPriceListsExtendedResult = MarketJsonVoidResultAlt & { 'data'?: AcceptedPriceListsExtendedResultAlt | null; };
