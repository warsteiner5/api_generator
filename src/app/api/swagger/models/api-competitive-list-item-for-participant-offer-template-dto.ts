/* tslint:disable */
/* eslint-disable */
import { ApiCharacteristicValuesDto } from '../models/api-characteristic-values-dto';
import { ApiCompetitiveListItemDocumentDto } from '../models/api-competitive-list-item-document-dto';
import { ApiCompetitiveListItemStateEnum } from '../models/api-competitive-list-item-state-enum';
import { ApiPriceRegionDetailDto } from '../models/api-price-region-detail-dto';
import { ApiRequirementRequestForViewDto } from '../models/api-requirement-request-for-view-dto';
import { ApiVatRateStateEnum } from '../models/api-vat-rate-state-enum';
export interface ApiCompetitiveListItemForParticipantOfferTemplateDto {
  CharacteristicsValues?: Array<ApiCharacteristicValuesDto> | null;
  ChatId?: number;
  Comment?: string | null;
  CreatedDate?: string;
  DeliveryRegion?: string | null;
  Id?: number;
  OkeiCode?: string | null;
  OkeiName?: string | null;
  PriceListDocuments?: Array<ApiCompetitiveListItemDocumentDto> | null;
  PriceListProductName?: string | null;
  PriceRegionDetails?: Array<ApiPriceRegionDetailDto> | null;
  Quantity?: number | null;
  RequirementRequest?: ApiRequirementRequestForViewDto | null;
  State?: ApiCompetitiveListItemStateEnum;
  UnitPrice?: number | null;
  UsePriceForAllRegions?: boolean;
  VatRate?: number | null;
  VatState?: ApiVatRateStateEnum;
}
