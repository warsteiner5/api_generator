import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { RoleDetailResponseAlt } from './role-detail-response-alt.interface';

export type MarketJsonResultOfRoleDetailResponse = MarketJsonVoidResultAlt & { 'data'?: RoleDetailResponseAlt | null; };
