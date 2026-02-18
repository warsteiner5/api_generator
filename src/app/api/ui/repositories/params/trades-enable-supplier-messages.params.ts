import { TradesEnableSupplierMessages$Params } from '../../../swagger/fn/trades/trades-enable-supplier-messages';

export interface TradesEnableSupplierMessagesParams {
  chatId: number;
}

export const tradesEnableSupplierMessagesParamsAdapter = {
  adapt(params?: TradesEnableSupplierMessagesParams): TradesEnableSupplierMessages$Params {
    if (!params) {
      return {} as TradesEnableSupplierMessages$Params;
    }
    return {
      chatId: params.chatId,
    };
  }
};
