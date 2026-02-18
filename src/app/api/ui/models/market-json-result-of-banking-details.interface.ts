import { BankingDetails } from './banking-details.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfBankingDetails = MarketJsonVoidResultAlt & { 'data'?: BankingDetails | null; };
