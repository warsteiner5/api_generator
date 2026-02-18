import { ApiMarketJsonResultOfQuotationSessionFinalProposal } from '../../../swagger/models/api-market-json-result-of-quotation-session-final-proposal';
import { MarketJsonResultOfQuotationSessionFinalProposal } from '../../models/market-json-result-of-quotation-session-final-proposal.interface';

export function adaptMarketJsonResultOfQuotationSessionFinalProposalToUI(source?: ApiMarketJsonResultOfQuotationSessionFinalProposal | null): MarketJsonResultOfQuotationSessionFinalProposal {
  return (source ?? {}) as MarketJsonResultOfQuotationSessionFinalProposal;
}
