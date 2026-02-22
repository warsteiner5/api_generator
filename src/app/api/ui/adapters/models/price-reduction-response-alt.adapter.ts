import { ApiPriceReductionResponseAltDto } from '../../../swagger/models/api-price-reduction-response';
import { PriceReductionResponseAlt } from '../../models/price-reduction-response-alt.interface';
import { priceReductionPositionAltAdapter } from './price-reduction-position-alt.adapter';

export const priceReductionResponseAltAdapter = (source?: ApiPriceReductionResponseAltDto | null): PriceReductionResponseAlt => {
  return {
    positions: source?.Positions?.map((item) => priceReductionPositionAltAdapter(item)),
    sumVat: source?.SumVat,
    sumWithVat: source?.SumWithVat,
    sumWithoutVat: source?.SumWithoutVat,
    totalSum: source?.TotalSum,
  };
}
