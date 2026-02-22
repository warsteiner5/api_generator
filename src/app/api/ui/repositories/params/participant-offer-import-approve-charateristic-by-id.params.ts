import { ParticipantOfferImportApproveCharateristicById$Params } from '../../../swagger/fn/participant-offer-import/participant-offer-import-approve-charateristic-by-id';

// @ts-ignore
export interface ParticipantOfferImportApproveCharateristicByIdParams {
  id: number;
}

export function participantOfferImportApproveCharateristicByIdAdapter(params?: ParticipantOfferImportApproveCharateristicByIdParams): ParticipantOfferImportApproveCharateristicById$Params {
  if (!params) {
    return {} as ParticipantOfferImportApproveCharateristicById$Params;
  }
  return {
      id: params.id,
  };
}
