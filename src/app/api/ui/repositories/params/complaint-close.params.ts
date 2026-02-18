import { ComplaintClose$Params } from '../../../swagger/fn/complaint/complaint-close';
import { ComplaintCloseAlt } from '../../models/complaint-close-alt.interface';
import { adaptApiComplaintCloseAltDto } from '../../adapters/toDto/api-complaint-close.adapter';

export interface ComplaintCloseParams {
  body?: ComplaintCloseAlt;
}

export const complaintCloseParamsAdapter = {
  adapt(params?: ComplaintCloseParams): ComplaintClose$Params {
    if (!params) {
      return {} as ComplaintClose$Params;
    }
    return {
      body: adaptApiComplaintCloseAltDto(params.body),
    };
  }
};
