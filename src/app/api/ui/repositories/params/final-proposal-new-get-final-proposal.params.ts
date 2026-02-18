import { FinalProposalNewGetFinalProposal$Params } from '../../../swagger/fn/final-proposal-new/final-proposal-new-get-final-proposal';

export interface FinalProposalNewGetFinalProposalParams {
  tradeGuid: string;
}

export const finalProposalNewGetFinalProposalParamsAdapter = {
  adapt(params?: FinalProposalNewGetFinalProposalParams): FinalProposalNewGetFinalProposal$Params {
    if (!params) {
      return {} as FinalProposalNewGetFinalProposal$Params;
    }
    return {
      tradeGuid: params.tradeGuid,
    };
  }
};
