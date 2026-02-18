import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { UpdateOrganizationBaseInfoDataToSignAlt } from './update-organization-base-info-data-to-sign-alt.interface';

export type MarketJsonResultOfUpdateOrganizationBaseInfoDataToSign = MarketJsonVoidResultAlt & { 'data'?: UpdateOrganizationBaseInfoDataToSignAlt | null; };
