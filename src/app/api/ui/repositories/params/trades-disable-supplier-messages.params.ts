import { TradesDisableSupplierMessages$Params } from '../../../swagger/fn/trades/trades-disable-supplier-messages';

export interface TradesDisableSupplierMessagesParams {
  chatId: number;
}

export const tradesDisableSupplierMessagesParamsAdapter = {
  adapt(params?: TradesDisableSupplierMessagesParams): TradesDisableSupplierMessages$Params {
    if (!params) {
      return {} as TradesDisableSupplierMessages$Params;
    }
    return {
      chatId: params.chatId,
    };
  }
};
