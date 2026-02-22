import { CartExportCartItemsToExcel$Params } from '../../../swagger/fn/cart/cart-export-cart-items-to-excel';

// @ts-ignore
export interface CartExportCartItemsToExcelParams {
  cartId: string;
}

export function cartExportCartItemsToExcelAdapter(params?: CartExportCartItemsToExcelParams): CartExportCartItemsToExcel$Params {
  if (!params) {
    return {} as CartExportCartItemsToExcel$Params;
  }
  return {
      cartId: params.cartId,
  };
}
