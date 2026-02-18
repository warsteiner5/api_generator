import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { OkServiceBriefReport } from './ok-service-brief-report.interface';

export type MarketJsonResultOfOkServiceBriefReport = MarketJsonVoidResultAlt & { 'data'?: OkServiceBriefReport | null; };
