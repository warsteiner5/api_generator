import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { OrderAvailableOperations } from './order-available-operations.interface';

export type MarketJsonResultOfOrderAvailableOperations = MarketJsonVoidResultAlt & { 'data'?: OrderAvailableOperations | null; };
