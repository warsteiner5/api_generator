import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { RequirementRequestForView } from './requirement-request-for-view.interface';

export type MarketJsonResultOfRequirementRequestForView = MarketJsonVoidResultAlt & { 'data'?: RequirementRequestForView | null; };
