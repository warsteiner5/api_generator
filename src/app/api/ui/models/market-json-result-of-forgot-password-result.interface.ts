import { ForgotPasswordResultAlt } from './forgot-password-result-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfForgotPasswordResult = MarketJsonVoidResultAlt & { 'data'?: ForgotPasswordResultAlt | null; };
