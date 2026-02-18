/* tslint:disable */
/* eslint-disable */
import { ApiApplicationDocumentDto } from '../models/api-application-document-dto';
export interface ApiApplicationItemDto {
  CountryConfirmation?: string | null;
  Documents?: Array<ApiApplicationDocumentDto> | null;
  LotItemApplicationId?: number;
  LotItemId?: number;
  LotItemOrder?: number;
  ManufacturerCountryCode?: string | null;
  ParticipantOfferId?: number | null;
  Price?: number;
  SumVat?: number | null;
  TaxPercent?: number | null;
}
