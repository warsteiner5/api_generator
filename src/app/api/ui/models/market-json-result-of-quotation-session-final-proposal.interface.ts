import { MarketJsonVoidResultAlt } from './market-json-void-result-alt.interface';
import { QuotationSessionFinalProposalAlt } from './quotation-session-final-proposal-alt.interface';

export type MarketJsonResultOfQuotationSessionFinalProposal = MarketJsonVoidResultAlt & { 'data'?: QuotationSessionFinalProposalAlt | null; };
