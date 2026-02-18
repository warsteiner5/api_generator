/* tslint:disable */
/* eslint-disable */
import { ApiOffersTableCharacteristicDto } from '../models/api-offers-table-characteristic-dto';
import { ApiOffersTableCompetitiveListItemDto } from '../models/api-offers-table-competitive-list-item-dto';
export interface ApiOffersTableDto {
  AdditionalSuppliersInformation?: Array<ApiOffersTableCompetitiveListItemDto> | null;
  Characteristics?: Array<ApiOffersTableCharacteristicDto> | null;
  IsOnlyForSmsp?: boolean;
  ManufacturerCountries?: Array<string> | null;
  Manufacturers?: Array<string> | null;
}
