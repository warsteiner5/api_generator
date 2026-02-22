import { FinalProposalNewSaveFinalProposal$Params } from '../../../swagger/fn/final-proposal-new/final-proposal-new-save-final-proposal';
import { QuotationSessionFinalProposalNewAlt } from '../../models/quotation-session-final-proposal-new-alt.interface';
import { apiQuotationSessionFinalProposalNewAltDtoAdapter } from '../../adapters/models/api-quotation-session-final-proposal-new.adapter';

// @ts-ignore
export interface FinalProposalNewSaveFinalProposalParams {
  body?: QuotationSessionFinalProposalNewAlt;
}

export function finalProposalNewSaveFinalProposalAdapter(params?: FinalProposalNewSaveFinalProposalParams): FinalProposalNewSaveFinalProposal$Params {
  if (!params) {
    return {} as FinalProposalNewSaveFinalProposal$Params;
  }
  return {
      body: apiQuotationSessionFinalProposalNewAltDtoAdapter(params.body),
  };
}
