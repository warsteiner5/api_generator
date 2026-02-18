import { CheckForAvailableGenerateReportResult } from './check-for-available-generate-report-result.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfCheckForAvailableGenerateReportResult = MarketJsonVoidResultAlt & { 'data'?: CheckForAvailableGenerateReportResult | null; };
