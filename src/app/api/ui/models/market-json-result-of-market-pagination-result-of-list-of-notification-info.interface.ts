import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { MarketPaginationResultOfListOfNotificationInfoAlt } from './market-pagination-result-of-list-of-notification-info-alt.interface';

export type MarketJsonResultOfMarketPaginationResultOfListOfNotificationInfo = MarketJsonVoidResultAlt & { 'data'?: MarketPaginationResultOfListOfNotificationInfoAlt | null; };
