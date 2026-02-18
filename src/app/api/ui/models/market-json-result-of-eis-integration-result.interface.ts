import { EisIntegrationResult } from './eis-integration-result.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfEisIntegrationResult = MarketJsonVoidResultAlt & { 'data'?: EisIntegrationResult | null; };
