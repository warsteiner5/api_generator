import { OrdersCreateAgreementAndDiscussion$Params } from '../../../swagger/fn/orders/orders-create-agreement-and-discussion';

// @ts-ignore
export interface OrdersCreateAgreementAndDiscussionParams {
  orderId: number;
}

export function ordersCreateAgreementAndDiscussionAdapter(params?: OrdersCreateAgreementAndDiscussionParams): OrdersCreateAgreementAndDiscussion$Params {
  if (!params) {
    return {} as OrdersCreateAgreementAndDiscussion$Params;
  }
  return {
      orderId: params.orderId,
  };
}
