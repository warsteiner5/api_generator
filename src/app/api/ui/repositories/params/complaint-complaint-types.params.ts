import { ComplaintComplaintTypes$Params } from '../../../swagger/fn/complaint/complaint-complaint-types';

export interface ComplaintComplaintTypesParams {
}

export const complaintComplaintTypesParamsAdapter = {
  adapt(params?: ComplaintComplaintTypesParams): ComplaintComplaintTypes$Params {
    if (!params) {
      return {} as ComplaintComplaintTypes$Params;
    }
    return {
    };
  }
};
