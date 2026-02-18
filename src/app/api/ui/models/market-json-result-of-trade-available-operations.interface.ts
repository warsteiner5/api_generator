import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { TradeAvailableOperations } from './trade-available-operations.interface';

export type MarketJsonResultOfTradeAvailableOperations = MarketJsonVoidResultAlt & { 'data'?: TradeAvailableOperations | null; };
