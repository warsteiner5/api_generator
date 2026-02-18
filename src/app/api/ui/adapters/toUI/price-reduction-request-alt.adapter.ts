import { ApiPriceReductionRequestAltDto } from '../../../swagger/models/api-price-reduction-request';
import { PriceReductionRequestAlt } from '../../models/price-reduction-request-alt.interface';
import { adaptPriceReductionPositionAltToUI } from './price-reduction-position-alt.adapter';

export function adaptPriceReductionRequestAltToUI(source?: ApiPriceReductionRequestAltDto | null): PriceReductionRequestAlt {
  return {
    coefficient: source?.Coefficient ?? 0,
    isPriceWithoutVat: source?.IsPriceWithoutVat ?? false,
    positions: (source?.Positions ?? []).map((item) => adaptPriceReductionPositionAltToUI(item)),
  };
}
