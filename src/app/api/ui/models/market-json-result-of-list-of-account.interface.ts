import { Account } from './account.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfListOfAccount = MarketJsonVoidResultAlt & { 'data'?: Array<Account> | null; };
