import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { SignInResultAlt } from './sign-in-result-alt.interface';

export type MarketJsonResultOfSignInResult = MarketJsonVoidResultAlt & { 'data'?: SignInResultAlt | null; };
