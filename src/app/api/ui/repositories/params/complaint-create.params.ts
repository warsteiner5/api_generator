import { ComplaintCreate$Params } from '../../../swagger/fn/complaint/complaint-create';
import { ParticipantOfferComplaintCreateRequestAlt } from '../../models/participant-offer-complaint-create-request-alt.interface';
import { adaptApiParticipantOfferComplaintCreateRequestAltDto } from '../../adapters/toDto/api-participant-offer-complaint-create-request.adapter';

export interface ComplaintCreateParams {
  body?: ParticipantOfferComplaintCreateRequestAlt;
}

export const complaintCreateParamsAdapter = {
  adapt(params?: ComplaintCreateParams): ComplaintCreate$Params {
    if (!params) {
      return {} as ComplaintCreate$Params;
    }
    return {
      body: adaptApiParticipantOfferComplaintCreateRequestAltDto(params.body),
    };
  }
};
