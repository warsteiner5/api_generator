import { NotificationsSendPreliminaryOfferRequestsToSupplier$Params } from '../../../swagger/fn/notifications/notifications-send-preliminary-offer-requests-to-supplier';

export interface NotificationsSendPreliminaryOfferRequestsToSupplierParams {
  tradeId: number;
}

export const notificationsSendPreliminaryOfferRequestsToSupplierParamsAdapter = {
  adapt(params?: NotificationsSendPreliminaryOfferRequestsToSupplierParams): NotificationsSendPreliminaryOfferRequestsToSupplier$Params {
    if (!params) {
      return {} as NotificationsSendPreliminaryOfferRequestsToSupplier$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
