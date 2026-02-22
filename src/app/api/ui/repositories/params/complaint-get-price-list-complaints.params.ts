import { ComplaintGetPriceListComplaints$Params } from '../../../swagger/fn/complaint/complaint-get-price-list-complaints';

// @ts-ignore
export interface ComplaintGetPriceListComplaintsParams {
  id: number;
}

export function complaintGetPriceListComplaintsAdapter(params?: ComplaintGetPriceListComplaintsParams): ComplaintGetPriceListComplaints$Params {
  if (!params) {
    return {} as ComplaintGetPriceListComplaints$Params;
  }
  return {
      id: params.id,
  };
}
