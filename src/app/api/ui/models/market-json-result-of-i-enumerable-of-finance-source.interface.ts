import { FinanceSource } from './finance-source.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfIEnumerableOfFinanceSource = MarketJsonVoidResultAlt & { 'data'?: Array<FinanceSource> | null; };
