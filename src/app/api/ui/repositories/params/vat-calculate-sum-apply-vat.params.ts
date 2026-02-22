import { CalculateLotSumRequestAlt } from '../../models/calculate-lot-sum-request-alt.interface';
import { VatCalculateSumApplyVat$Params } from '../../../swagger/fn/vat/vat-calculate-sum-apply-vat';
import { apiCalculateLotSumRequestAltDtoAdapter } from '../../adapters/models/api-calculate-lot-sum-request.adapter';

// @ts-ignore
export interface VatCalculateSumApplyVatParams {
  isPriceWithoutVat: boolean;
  body?: CalculateLotSumRequestAlt;
}

export function vatCalculateSumApplyVatAdapter(params?: VatCalculateSumApplyVatParams): VatCalculateSumApplyVat$Params {
  if (!params) {
    return {} as VatCalculateSumApplyVat$Params;
  }
  return {
      isPriceWithoutVat: params.isPriceWithoutVat,
      body: apiCalculateLotSumRequestAltDtoAdapter(params.body),
  };
}
