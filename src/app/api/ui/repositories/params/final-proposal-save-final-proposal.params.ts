import { FinalProposalSaveFinalProposal$Params } from '../../../swagger/fn/final-proposal/final-proposal-save-final-proposal';
import { QuotationSessionFinalProposalAlt } from '../../models/quotation-session-final-proposal-alt.interface';
import { apiQuotationSessionFinalProposalAltDtoAdapter } from '../../adapters/models/api-quotation-session-final-proposal.adapter';

// @ts-ignore
export interface FinalProposalSaveFinalProposalParams {
  body?: QuotationSessionFinalProposalAlt;
}

export function finalProposalSaveFinalProposalAdapter(params?: FinalProposalSaveFinalProposalParams): FinalProposalSaveFinalProposal$Params {
  if (!params) {
    return {} as FinalProposalSaveFinalProposal$Params;
  }
  return {
      body: apiQuotationSessionFinalProposalAltDtoAdapter(params.body),
  };
}
