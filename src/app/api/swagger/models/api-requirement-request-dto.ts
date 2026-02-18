/* tslint:disable */
/* eslint-disable */
import { ApiCatalogItemDto } from '../models/api-catalog-item-dto';
import { ApiCharacteristicDto } from '../models/api-characteristic-dto';
import { ApiCharacteristicsSourceEnum } from '../models/api-characteristics-source-enum';
import { ApiConditionsOfPaymentEnum } from '../models/api-conditions-of-payment-enum';
import { ApiKladrRegionCodeDto } from '../models/api-kladr-region-code-dto';
import { ApiPriceRegionDetailDto } from '../models/api-price-region-detail-dto';
import { ApiRequirementRequestDocumentDto } from '../models/api-requirement-request-document-dto';
import { ApiRequirementRequestStateEnum } from '../models/api-requirement-request-state-enum';
export interface ApiRequirementRequestDto {
  Category?: ApiCatalogItemDto | null;
  CategoryId?: number | null;
  Characteristics?: Array<ApiCharacteristicDto> | null;
  CharacteristicsSource?: ApiCharacteristicsSourceEnum;
  ConditionsOfPayment?: ApiConditionsOfPaymentEnum;
  ContactAdditionalPhone?: string | null;
  ContactFio?: string | null;
  ContactPhone?: string | null;
  DeliveryTerms?: string | null;
  Description?: string | null;
  Documents?: Array<ApiRequirementRequestDocumentDto> | null;
  EndDate?: string | null;
  Id?: number;
  IsOnlyForSmsp?: boolean;
  KladrRegionCodes?: Array<ApiKladrRegionCodeDto> | null;
  ManufacturerCountries?: Array<string> | null;
  Manufacturers?: Array<string> | null;
  MinQuantity?: number | null;
  MinQuantityMax?: number | null;
  MinQuantityMin?: number | null;
  Name?: string | null;
  OkeiCode?: string | null;
  OkeiDescription?: string | null;
  Okpd2?: string | null;
  PriceRegionDetails?: Array<ApiPriceRegionDetailDto> | null;
  ProductName?: string | null;
  Quantity?: number | null;
  RestQuantity?: number;
  SegmentId?: number | null;
  SegmentName?: string | null;
  StartDate?: string | null;
  State?: ApiRequirementRequestStateEnum;
  TotalPrice?: number;
  UnitPrice?: number;
}
