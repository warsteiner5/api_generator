import { LotPositionPricesAlt } from '../../models/lot-position-prices-alt.interface';
import { VatCalculateSumFromPositionsApplyVat$Params } from '../../../swagger/fn/vat/vat-calculate-sum-from-positions-apply-vat';
import { apiLotPositionPricesAltDtoAdapter } from '../../adapters/models/api-lot-position-prices.adapter';

// @ts-ignore
export interface VatCalculateSumFromPositionsApplyVatParams {
  isPriceWithoutVat: boolean;
  body?: LotPositionPricesAlt[];
}

export function vatCalculateSumFromPositionsApplyVatAdapter(params?: VatCalculateSumFromPositionsApplyVatParams): VatCalculateSumFromPositionsApplyVat$Params {
  if (!params) {
    return {} as VatCalculateSumFromPositionsApplyVat$Params;
  }
  return {
      isPriceWithoutVat: params.isPriceWithoutVat,
      body: (params.body ?? []).map((item) => apiLotPositionPricesAltDtoAdapter(item)),
  };
}
