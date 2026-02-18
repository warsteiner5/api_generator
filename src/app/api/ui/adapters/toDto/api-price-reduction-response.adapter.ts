import { PriceReductionResponseAlt } from '../../models/price-reduction-response-alt.interface';
import { ApiPriceReductionResponseAltDto } from '../../../swagger/models/api-price-reduction-response';
import { adaptApiPriceReductionPositionAltDto } from './api-price-reduction-position.adapter';

export function adaptApiPriceReductionResponseAltDto(source?: PriceReductionResponseAlt | null): ApiPriceReductionResponseAltDto {
  return {
    Positions: (source?.positions ?? []).map((item) => adaptApiPriceReductionPositionAltDto(item)),
    SumVat: source?.sumVat,
    SumWithVat: source?.sumWithVat,
    SumWithoutVat: source?.sumWithoutVat,
    TotalSum: source?.totalSum,
  };
}
