import { LotPositionPricesAlt } from '../../models/lot-position-prices-alt.interface';
import { VatCalculateSumFromPositionsApplyVat$Params } from '../../../swagger/fn/vat/vat-calculate-sum-from-positions-apply-vat';
import { adaptApiLotPositionPricesAltDto } from '../../adapters/toDto/api-lot-position-prices.adapter';

export interface VatCalculateSumFromPositionsApplyVatParams {
  isPriceWithoutVat: boolean;
  body?: LotPositionPricesAlt[];
}

export const vatCalculateSumFromPositionsApplyVatParamsAdapter = {
  adapt(params?: VatCalculateSumFromPositionsApplyVatParams): VatCalculateSumFromPositionsApplyVat$Params {
    if (!params) {
      return {} as VatCalculateSumFromPositionsApplyVat$Params;
    }
    return {
      isPriceWithoutVat: params.isPriceWithoutVat,
      body: (params.body ?? []).map((item) => adaptApiLotPositionPricesAltDto(item)),
    };
  }
};
