import { FinalProposalNewGetFinalProposal$Params } from '../../../swagger/fn/final-proposal-new/final-proposal-new-get-final-proposal';

// @ts-ignore
export interface FinalProposalNewGetFinalProposalParams {
  tradeGuid: string;
}

export function finalProposalNewGetFinalProposalAdapter(params?: FinalProposalNewGetFinalProposalParams): FinalProposalNewGetFinalProposal$Params {
  if (!params) {
    return {} as FinalProposalNewGetFinalProposal$Params;
  }
  return {
      tradeGuid: params.tradeGuid,
  };
}
