import { ComplaintCreate$Params } from '../../../swagger/fn/complaint/complaint-create';
import { ParticipantOfferComplaintCreateRequestAlt } from '../../models/participant-offer-complaint-create-request-alt.interface';
import { apiParticipantOfferComplaintCreateRequestAltDtoAdapter } from '../../adapters/models/api-participant-offer-complaint-create-request.adapter';

// @ts-ignore
export interface ComplaintCreateParams {
  body?: ParticipantOfferComplaintCreateRequestAlt;
}

export function complaintCreateAdapter(params?: ComplaintCreateParams): ComplaintCreate$Params {
  if (!params) {
    return {} as ComplaintCreate$Params;
  }
  return {
      body: apiParticipantOfferComplaintCreateRequestAltDtoAdapter(params.body),
  };
}
