import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { TenantSetting } from './tenant-setting.interface';

export type MarketJsonResultOfTenantSetting = MarketJsonVoidResultAlt & { 'data'?: TenantSetting | null; };
