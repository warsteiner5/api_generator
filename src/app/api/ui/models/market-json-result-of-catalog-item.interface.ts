import { CatalogItem } from './catalog-item.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfCatalogItem = MarketJsonVoidResultAlt & { 'data'?: CatalogItem | null; };
