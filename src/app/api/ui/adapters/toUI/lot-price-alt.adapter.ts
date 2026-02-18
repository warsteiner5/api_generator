import { ApiLotPriceAltDto } from '../../../swagger/models/api-lot-price';
import { LotPriceAlt } from '../../models/lot-price-alt.interface';

export function adaptLotPriceAltToUI(source?: ApiLotPriceAltDto | null): LotPriceAlt {
  return {
    sumVat: source?.SumVat ?? 0,
    sumWithVat: source?.SumWithVat ?? 0,
    sumWithoutVat: source?.SumWithoutVat ?? 0,
    totalSum: source?.TotalSum ?? 0,
  };
}
