import { ComplaintClose$Params } from '../../../swagger/fn/complaint/complaint-close';
import { ComplaintCloseAlt } from '../../models/complaint-close-alt.interface';
import { apiComplaintCloseAltDtoAdapter } from '../../adapters/models/api-complaint-close.adapter';

// @ts-ignore
export interface ComplaintCloseParams {
  body?: ComplaintCloseAlt;
}

export function complaintCloseAdapter(params?: ComplaintCloseParams): ComplaintClose$Params {
  if (!params) {
    return {} as ComplaintClose$Params;
  }
  return {
      body: apiComplaintCloseAltDtoAdapter(params.body),
  };
}
