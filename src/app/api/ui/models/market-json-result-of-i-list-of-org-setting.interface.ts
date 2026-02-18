import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { OrgSetting } from './org-setting.interface';

export type MarketJsonResultOfIListOfOrgSetting = MarketJsonVoidResultAlt & { 'data'?: Array<OrgSetting> | null; };
