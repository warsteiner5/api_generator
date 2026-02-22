import { TradesEnableSupplierMessages$Params } from '../../../swagger/fn/trades/trades-enable-supplier-messages';

// @ts-ignore
export interface TradesEnableSupplierMessagesParams {
  chatId: number;
}

export function tradesEnableSupplierMessagesAdapter(params?: TradesEnableSupplierMessagesParams): TradesEnableSupplierMessages$Params {
  if (!params) {
    return {} as TradesEnableSupplierMessages$Params;
  }
  return {
      chatId: params.chatId,
  };
}
