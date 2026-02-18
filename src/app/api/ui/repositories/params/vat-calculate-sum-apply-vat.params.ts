import { CalculateLotSumRequestAlt } from '../../models/calculate-lot-sum-request-alt.interface';
import { VatCalculateSumApplyVat$Params } from '../../../swagger/fn/vat/vat-calculate-sum-apply-vat';
import { adaptApiCalculateLotSumRequestAltDto } from '../../adapters/toDto/api-calculate-lot-sum-request.adapter';

export interface VatCalculateSumApplyVatParams {
  isPriceWithoutVat: boolean;
  body?: CalculateLotSumRequestAlt;
}

export const vatCalculateSumApplyVatParamsAdapter = {
  adapt(params?: VatCalculateSumApplyVatParams): VatCalculateSumApplyVat$Params {
    if (!params) {
      return {} as VatCalculateSumApplyVat$Params;
    }
    return {
      isPriceWithoutVat: params.isPriceWithoutVat,
      body: adaptApiCalculateLotSumRequestAltDto(params.body),
    };
  }
};
