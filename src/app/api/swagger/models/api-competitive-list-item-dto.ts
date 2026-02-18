/* tslint:disable */
/* eslint-disable */
import { ApiCharacteristicValuesDto } from '../models/api-characteristic-values-dto';
import { ApiCompetitiveListItemDocumentDto } from '../models/api-competitive-list-item-document-dto';
import { ApiCompetitiveListItemStateEnum } from '../models/api-competitive-list-item-state-enum';
import { ApiParticipantOfferDto } from '../models/api-participant-offer-dto';
import { ApiPriceRegionDetailDto } from '../models/api-price-region-detail-dto';
import { ApiVatRateStateEnum } from '../models/api-vat-rate-state-enum';
export interface ApiCompetitiveListItemDto {
  CharacteristicsValues?: Array<ApiCharacteristicValuesDto> | null;
  ChatId?: number;
  Comment?: string | null;
  CreatedDate?: string;
  DeliveryRegion?: string | null;
  Id?: number;
  ManufacturerCountries?: Array<string> | null;
  Manufacturers?: Array<string> | null;
  Offers?: Array<ApiParticipantOfferDto> | null;
  OkeiCode?: string | null;
  OkeiName?: string | null;
  ParticipantOfferId?: number;
  ParticipantOrganizationGuid?: string;
  ParticipantOrganizationId?: number | null;
  ParticipantOrganizationName?: string | null;
  PriceListDocuments?: Array<ApiCompetitiveListItemDocumentDto> | null;
  PriceListProductName?: string | null;
  PriceRegionDetails?: Array<ApiPriceRegionDetailDto> | null;
  Quantity?: number | null;
  State?: ApiCompetitiveListItemStateEnum;
  SupplierId?: number | null;
  UnitPrice?: number | null;
  UsePriceForAllRegions?: boolean;
  VatRate?: number | null;
  VatState?: ApiVatRateStateEnum;
}
