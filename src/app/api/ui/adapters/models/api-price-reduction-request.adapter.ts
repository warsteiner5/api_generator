import { PriceReductionRequestAlt } from '../../models/price-reduction-request-alt.interface';
import { ApiPriceReductionRequestAltDto } from '../../../swagger/models/api-price-reduction-request';
import { apiPriceReductionPositionAltDtoAdapter } from './api-price-reduction-position.adapter';

export const apiPriceReductionRequestAltDtoAdapter = (source?: PriceReductionRequestAlt | null): ApiPriceReductionRequestAltDto => {
  return {
    Coefficient: source?.coefficient,
    IsPriceWithoutVat: source?.isPriceWithoutVat,
    Positions: source?.positions?.map((item) => apiPriceReductionPositionAltDtoAdapter(item)),
  };
}
