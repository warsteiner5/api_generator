import { ApiPriceReductionRequestAltDto } from '../../../swagger/models/api-price-reduction-request';
import { PriceReductionRequestAlt } from '../../models/price-reduction-request-alt.interface';
import { priceReductionPositionAltAdapter } from './price-reduction-position-alt.adapter';

export const priceReductionRequestAltAdapter = (source?: ApiPriceReductionRequestAltDto | null): PriceReductionRequestAlt => {
  return {
    coefficient: source?.Coefficient,
    isPriceWithoutVat: source?.IsPriceWithoutVat,
    positions: source?.Positions?.map((item) => priceReductionPositionAltAdapter(item)),
  };
}
