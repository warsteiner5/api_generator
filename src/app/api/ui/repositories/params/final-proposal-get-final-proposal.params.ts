import { FinalProposalGetFinalProposal$Params } from '../../../swagger/fn/final-proposal/final-proposal-get-final-proposal';

export interface FinalProposalGetFinalProposalParams {
  tradeId: number;
}

export const finalProposalGetFinalProposalParamsAdapter = {
  adapt(params?: FinalProposalGetFinalProposalParams): FinalProposalGetFinalProposal$Params {
    if (!params) {
      return {} as FinalProposalGetFinalProposal$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
