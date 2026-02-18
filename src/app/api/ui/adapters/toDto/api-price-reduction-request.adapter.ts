import { PriceReductionRequestAlt } from '../../models/price-reduction-request-alt.interface';
import { ApiPriceReductionRequestAltDto } from '../../../swagger/models/api-price-reduction-request';
import { adaptApiPriceReductionPositionAltDto } from './api-price-reduction-position.adapter';

export function adaptApiPriceReductionRequestAltDto(source?: PriceReductionRequestAlt | null): ApiPriceReductionRequestAltDto {
  return {
    Coefficient: source?.coefficient,
    IsPriceWithoutVat: source?.isPriceWithoutVat,
    Positions: (source?.positions ?? []).map((item) => adaptApiPriceReductionPositionAltDto(item)),
  };
}
