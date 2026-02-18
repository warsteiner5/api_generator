import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { OkServiceBriefReport } from './ok-service-brief-report.interface';

export type MarketJsonResultOfOkServiceBriefReportDtoOf = MarketJsonVoidResultAlt & { 'data'?: Array<OkServiceBriefReport> | null; };
