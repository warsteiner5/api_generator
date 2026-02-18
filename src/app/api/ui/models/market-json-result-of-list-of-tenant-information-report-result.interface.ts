import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { TenantInformationReportResult } from './tenant-information-report-result.interface';

export type MarketJsonResultOfListOfTenantInformationReportResult = MarketJsonVoidResultAlt & { 'data'?: Array<TenantInformationReportResult> | null; };
