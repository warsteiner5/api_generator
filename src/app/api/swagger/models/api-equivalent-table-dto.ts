/* tslint:disable */
/* eslint-disable */
import { ApiEquivalentTableCharacteristicDto } from '../models/api-equivalent-table-characteristic-dto';
import { ApiEquivalentTableCompetitiveListItemDto } from '../models/api-equivalent-table-competitive-list-item-dto';
export interface ApiEquivalentTableDto {
  AdditionalSuppliersInformation?: Array<ApiEquivalentTableCompetitiveListItemDto> | null;
  Characteristics?: Array<ApiEquivalentTableCharacteristicDto> | null;
  IsOnlyForSmsp?: boolean;
  ManufacturerCountries?: Array<string> | null;
  Manufacturers?: Array<string> | null;
}
