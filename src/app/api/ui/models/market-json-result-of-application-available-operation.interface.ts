import { ApplicationAvailableOperation } from './application-available-operation.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfApplicationAvailableOperation = MarketJsonVoidResultAlt & { 'data'?: ApplicationAvailableOperation | null; };
