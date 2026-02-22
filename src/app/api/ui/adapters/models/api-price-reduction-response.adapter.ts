import { PriceReductionResponseAlt } from '../../models/price-reduction-response-alt.interface';
import { ApiPriceReductionResponseAltDto } from '../../../swagger/models/api-price-reduction-response';
import { apiPriceReductionPositionAltDtoAdapter } from './api-price-reduction-position.adapter';

export const apiPriceReductionResponseAltDtoAdapter = (source?: PriceReductionResponseAlt | null): ApiPriceReductionResponseAltDto => {
  return {
    Positions: source?.positions?.map((item) => apiPriceReductionPositionAltDtoAdapter(item)),
    SumVat: source?.sumVat,
    SumWithVat: source?.sumWithVat,
    SumWithoutVat: source?.sumWithoutVat,
    TotalSum: source?.totalSum,
  };
}
