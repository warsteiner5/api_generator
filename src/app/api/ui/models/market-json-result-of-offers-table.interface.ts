import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { OffersTable } from './offers-table.interface';

export type MarketJsonResultOfOffersTable = MarketJsonVoidResultAlt & { 'data'?: OffersTable | null; };
