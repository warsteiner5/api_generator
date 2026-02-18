import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { PagedCollectionOfKtruShort } from './paged-collection-of-ktru-short.interface';

export type MarketJsonResultOfPagedCollectionOfKtruShort = MarketJsonVoidResultAlt & { 'data'?: PagedCollectionOfKtruShort | null; };
