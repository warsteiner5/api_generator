import { AvailableVatTypeEnum } from '../../enums/available-vat-type.enum';
import { VatGetPriceApplyVat$Params } from '../../../swagger/fn/vat/vat-get-price-apply-vat';
import { adaptApiAvailableVatTypeEnum } from '../../adapters/toDto/api-available-vat-type-enum.adapter';

export interface VatGetPriceApplyVatParams {
  price: number;
  rate: AvailableVatTypeEnum;
  getPriceWithTax: boolean;
}

export const vatGetPriceApplyVatParamsAdapter = {
  adapt(params?: VatGetPriceApplyVatParams): VatGetPriceApplyVat$Params {
    if (!params) {
      return {} as VatGetPriceApplyVat$Params;
    }
    return {
      price: params.price,
      rate: adaptApiAvailableVatTypeEnum(params.rate),
      getPriceWithTax: params.getPriceWithTax,
    };
  }
};
