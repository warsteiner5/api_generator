/* tslint:disable */
/* eslint-disable */
import { ApiPriceReductionPositionAltDto } from '../models/api-price-reduction-position';
export interface ApiPriceReductionRequestAltDto {
  Coefficient?: number;
  IsPriceWithoutVat?: boolean;
  Positions?: Array<ApiPriceReductionPositionAltDto> | null;
}
