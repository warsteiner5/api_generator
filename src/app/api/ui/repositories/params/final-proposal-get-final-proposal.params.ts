import { FinalProposalGetFinalProposal$Params } from '../../../swagger/fn/final-proposal/final-proposal-get-final-proposal';

// @ts-ignore
export interface FinalProposalGetFinalProposalParams {
  tradeId: number;
}

export function finalProposalGetFinalProposalAdapter(params?: FinalProposalGetFinalProposalParams): FinalProposalGetFinalProposal$Params {
  if (!params) {
    return {} as FinalProposalGetFinalProposal$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
