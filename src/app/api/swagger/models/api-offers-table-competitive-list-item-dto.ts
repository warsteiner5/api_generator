/* tslint:disable */
/* eslint-disable */
import { ApiCompetitiveListItemDocumentDto } from '../models/api-competitive-list-item-document-dto';
import { ApiCompetitiveListItemStateEnum } from '../models/api-competitive-list-item-state-enum';
import { ApiPriceRegionDetailDto } from '../models/api-price-region-detail-dto';
export interface ApiOffersTableCompetitiveListItemDto {
  Comment?: string | null;
  CompetitiveListItemId?: number;
  ManufacturerCountries?: Array<string> | null;
  Manufacturers?: Array<string> | null;
  ParticipantOfferDocuments?: Array<ApiCompetitiveListItemDocumentDto> | null;
  ParticipantOfferId?: number | null;
  PriceRegionDetails?: Array<ApiPriceRegionDetailDto> | null;
  State?: ApiCompetitiveListItemStateEnum;
  SupplierId?: number;
  SupplierName?: string | null;
  UnitPrice?: number | null;
  UsePriceForAllRegions?: boolean;
}
