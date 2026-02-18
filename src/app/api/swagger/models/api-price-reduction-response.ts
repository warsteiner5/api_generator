/* tslint:disable */
/* eslint-disable */
import { ApiPriceReductionPositionAltDto } from '../models/api-price-reduction-position';
export interface ApiPriceReductionResponseAltDto {
  Positions?: Array<ApiPriceReductionPositionAltDto> | null;
  SumVat?: number | null;
  SumWithVat?: number | null;
  SumWithoutVat?: number | null;
  TotalSum?: number | null;
}
