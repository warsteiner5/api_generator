import { FinalProposalSaveFinalProposal$Params } from '../../../swagger/fn/final-proposal/final-proposal-save-final-proposal';
import { QuotationSessionFinalProposalAlt } from '../../models/quotation-session-final-proposal-alt.interface';
import { adaptApiQuotationSessionFinalProposalAltDto } from '../../adapters/toDto/api-quotation-session-final-proposal.adapter';

export interface FinalProposalSaveFinalProposalParams {
  body?: QuotationSessionFinalProposalAlt;
}

export const finalProposalSaveFinalProposalParamsAdapter = {
  adapt(params?: FinalProposalSaveFinalProposalParams): FinalProposalSaveFinalProposal$Params {
    if (!params) {
      return {} as FinalProposalSaveFinalProposal$Params;
    }
    return {
      body: adaptApiQuotationSessionFinalProposalAltDto(params.body),
    };
  }
};
