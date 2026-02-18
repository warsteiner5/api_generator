import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfNicRegistryGrid } from './market-pagination-result-of-list-of-nic-registry-grid.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfNicRegistryGrid = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfNicRegistryGrid | null; };
