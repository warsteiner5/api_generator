import { ApplicationRejectionReason } from './application-rejection-reason.interface';
import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';

export type MarketJsonResultOfListOfApplicationRejectionReason = MarketJsonVoidResultAlt & { 'data'?: Array<ApplicationRejectionReason> | null; };
