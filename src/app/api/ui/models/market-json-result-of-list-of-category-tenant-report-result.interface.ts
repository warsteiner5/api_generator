import { CategoryTenantReportResult } from './category-tenant-report-result.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfListOfCategoryTenantReportResult = MarketJsonVoidResultAlt & { 'data'?: Array<CategoryTenantReportResult> | null; };
