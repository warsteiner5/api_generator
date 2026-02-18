import { LoginVerifyResultAlt } from './login-verify-result-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfLoginVerifyResult = MarketJsonVoidResultAlt & { 'data'?: LoginVerifyResultAlt | null; };
