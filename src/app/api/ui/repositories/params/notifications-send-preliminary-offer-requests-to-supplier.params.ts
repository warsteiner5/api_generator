import { NotificationsSendPreliminaryOfferRequestsToSupplier$Params } from '../../../swagger/fn/notifications/notifications-send-preliminary-offer-requests-to-supplier';

// @ts-ignore
export interface NotificationsSendPreliminaryOfferRequestsToSupplierParams {
  tradeId: number;
}

export function notificationsSendPreliminaryOfferRequestsToSupplierAdapter(params?: NotificationsSendPreliminaryOfferRequestsToSupplierParams): NotificationsSendPreliminaryOfferRequestsToSupplier$Params {
  if (!params) {
    return {} as NotificationsSendPreliminaryOfferRequestsToSupplier$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
