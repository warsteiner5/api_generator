import { ParticipantOfferImportApproveCharateristicById$Params } from '../../../swagger/fn/participant-offer-import/participant-offer-import-approve-charateristic-by-id';

export interface ParticipantOfferImportApproveCharateristicByIdParams {
  id: number;
}

export const participantOfferImportApproveCharateristicByIdParamsAdapter = {
  adapt(params?: ParticipantOfferImportApproveCharateristicByIdParams): ParticipantOfferImportApproveCharateristicById$Params {
    if (!params) {
      return {} as ParticipantOfferImportApproveCharateristicById$Params;
    }
    return {
      id: params.id,
    };
  }
};
