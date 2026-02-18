import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfTagOperatorView } from './market-pagination-result-of-list-of-tag-operator-view.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfTagOperatorView = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfTagOperatorView | null; };
