import { ApiLotPriceAltDto } from '../../../swagger/models/api-lot-price';
import { LotPriceAlt } from '../../models/lot-price-alt.interface';

export const lotPriceAltAdapter = (source?: ApiLotPriceAltDto | null): LotPriceAlt => {
  return {
    sumVat: source?.SumVat,
    sumWithVat: source?.SumWithVat,
    sumWithoutVat: source?.SumWithoutVat,
    totalSum: source?.TotalSum,
  };
}
