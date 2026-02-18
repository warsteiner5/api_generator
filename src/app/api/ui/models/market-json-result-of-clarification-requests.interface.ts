import { ClarificationRequests } from './clarification-requests.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfClarificationRequests = MarketJsonVoidResultAlt & { 'data'?: ClarificationRequests | null; };
