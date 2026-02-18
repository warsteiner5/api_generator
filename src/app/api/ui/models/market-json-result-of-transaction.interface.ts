import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { Transaction } from './transaction.interface';

export type MarketJsonResultOfTransaction = MarketJsonVoidResultAlt & { 'data'?: Transaction | null; };
