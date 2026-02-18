import { LotPriceAlt } from '../../models/lot-price-alt.interface';
import { ApiLotPriceAltDto } from '../../../swagger/models/api-lot-price';

export function adaptApiLotPriceAltDto(source?: LotPriceAlt | null): ApiLotPriceAltDto {
  return {
    SumVat: source?.sumVat,
    SumWithVat: source?.sumWithVat,
    SumWithoutVat: source?.sumWithoutVat,
    TotalSum: source?.totalSum,
  };
}
