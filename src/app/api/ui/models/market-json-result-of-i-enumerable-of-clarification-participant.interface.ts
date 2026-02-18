import { ClarificationParticipant } from './clarification-participant.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfIEnumerableOfClarificationParticipant = MarketJsonVoidResultAlt & { 'data'?: Array<ClarificationParticipant> | null; };
