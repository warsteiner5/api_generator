import { AvailableVatTypeEnum } from '../../enums/available-vat-type.enum';
import { VatGetPriceApplyVat$Params } from '../../../swagger/fn/vat/vat-get-price-apply-vat';
import { apiAvailableVatTypeEnumAdapter } from '../../adapters/enums/api-available-vat-type-enum.adapter';

// @ts-ignore
export interface VatGetPriceApplyVatParams {
  price: number;
  rate: AvailableVatTypeEnum;
  getPriceWithTax: boolean;
}

export function vatGetPriceApplyVatAdapter(params?: VatGetPriceApplyVatParams): VatGetPriceApplyVat$Params {
  if (!params) {
    return {} as VatGetPriceApplyVat$Params;
  }
  return {
      price: params.price,
      rate: apiAvailableVatTypeEnumAdapter(params.rate),
      getPriceWithTax: params.getPriceWithTax,
  };
}
