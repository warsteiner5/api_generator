import { FinalProposalNewSaveFinalProposal$Params } from '../../../swagger/fn/final-proposal-new/final-proposal-new-save-final-proposal';
import { QuotationSessionFinalProposalNewAlt } from '../../models/quotation-session-final-proposal-new-alt.interface';
import { adaptApiQuotationSessionFinalProposalNewAltDto } from '../../adapters/toDto/api-quotation-session-final-proposal-new.adapter';

export interface FinalProposalNewSaveFinalProposalParams {
  body?: QuotationSessionFinalProposalNewAlt;
}

export const finalProposalNewSaveFinalProposalParamsAdapter = {
  adapt(params?: FinalProposalNewSaveFinalProposalParams): FinalProposalNewSaveFinalProposal$Params {
    if (!params) {
      return {} as FinalProposalNewSaveFinalProposal$Params;
    }
    return {
      body: adaptApiQuotationSessionFinalProposalNewAltDto(params.body),
    };
  }
};
