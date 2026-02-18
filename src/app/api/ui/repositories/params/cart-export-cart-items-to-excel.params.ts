import { CartExportCartItemsToExcel$Params } from '../../../swagger/fn/cart/cart-export-cart-items-to-excel';

export interface CartExportCartItemsToExcelParams {
  cartId: string;
}

export const cartExportCartItemsToExcelParamsAdapter = {
  adapt(params?: CartExportCartItemsToExcelParams): CartExportCartItemsToExcel$Params {
    if (!params) {
      return {} as CartExportCartItemsToExcel$Params;
    }
    return {
      cartId: params.cartId,
    };
  }
};
