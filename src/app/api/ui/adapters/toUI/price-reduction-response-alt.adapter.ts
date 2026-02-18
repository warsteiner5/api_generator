import { ApiPriceReductionResponseAltDto } from '../../../swagger/models/api-price-reduction-response';
import { PriceReductionResponseAlt } from '../../models/price-reduction-response-alt.interface';
import { adaptPriceReductionPositionAltToUI } from './price-reduction-position-alt.adapter';

export function adaptPriceReductionResponseAltToUI(source?: ApiPriceReductionResponseAltDto | null): PriceReductionResponseAlt {
  return {
    positions: (source?.Positions ?? []).map((item) => adaptPriceReductionPositionAltToUI(item)),
    sumVat: source?.SumVat ?? 0,
    sumWithVat: source?.SumWithVat ?? 0,
    sumWithoutVat: source?.SumWithoutVat ?? 0,
    totalSum: source?.TotalSum ?? 0,
  };
}
