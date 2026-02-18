import { ExternalUserInfoAlt } from './external-user-info-alt.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfExternalUserInfo = MarketJsonVoidResultAlt & { 'data'?: ExternalUserInfoAlt | null; };
