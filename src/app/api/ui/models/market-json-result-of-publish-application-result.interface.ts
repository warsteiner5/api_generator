import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { PublishApplicationResultAlt } from './publish-application-result-alt.interface';

export type MarketJsonResultOfPublishApplicationResult = MarketJsonVoidResultAlt & { 'data'?: PublishApplicationResultAlt | null; };
