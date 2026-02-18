import { ComplaintGetPriceListComplaints$Params } from '../../../swagger/fn/complaint/complaint-get-price-list-complaints';

export interface ComplaintGetPriceListComplaintsParams {
  id: number;
}

export const complaintGetPriceListComplaintsParamsAdapter = {
  adapt(params?: ComplaintGetPriceListComplaintsParams): ComplaintGetPriceListComplaints$Params {
    if (!params) {
      return {} as ComplaintGetPriceListComplaints$Params;
    }
    return {
      id: params.id,
    };
  }
};
