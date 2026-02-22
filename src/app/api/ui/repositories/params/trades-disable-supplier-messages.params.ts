import { TradesDisableSupplierMessages$Params } from '../../../swagger/fn/trades/trades-disable-supplier-messages';

// @ts-ignore
export interface TradesDisableSupplierMessagesParams {
  chatId: number;
}

export function tradesDisableSupplierMessagesAdapter(params?: TradesDisableSupplierMessagesParams): TradesDisableSupplierMessages$Params {
  if (!params) {
    return {} as TradesDisableSupplierMessages$Params;
  }
  return {
      chatId: params.chatId,
  };
}
