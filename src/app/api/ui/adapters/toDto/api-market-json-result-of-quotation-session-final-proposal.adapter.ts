import { MarketJsonResultOfQuotationSessionFinalProposal } from '../../models/market-json-result-of-quotation-session-final-proposal.interface';
import { ApiMarketJsonResultOfQuotationSessionFinalProposal } from '../../../swagger/models/api-market-json-result-of-quotation-session-final-proposal';

export function adaptApiMarketJsonResultOfQuotationSessionFinalProposal(source?: MarketJsonResultOfQuotationSessionFinalProposal | null): ApiMarketJsonResultOfQuotationSessionFinalProposal {
  return (source ?? {}) as ApiMarketJsonResultOfQuotationSessionFinalProposal;
}
