import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { ResetPasswordResultAlt } from './reset-password-result-alt.interface';

export type MarketJsonResultOfResetPasswordResult = MarketJsonVoidResultAlt & { 'data'?: ResetPasswordResultAlt | null; };
