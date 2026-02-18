/* tslint:disable */
/* eslint-disable */
import { ApiCharacteristicValuesDto } from '../models/api-characteristic-values-dto';
import { ApiCompetitiveListItemDocumentDto } from '../models/api-competitive-list-item-document-dto';
import { ApiPriceRegionDetailDto } from '../models/api-price-region-detail-dto';
import { ApiSupplierCharacteristicForViewDto } from '../models/api-supplier-characteristic-for-view-dto';
export interface ApiCompetitiveListItemForViewDto {
  CharacteristicsValues?: Array<ApiCharacteristicValuesDto> | null;
  Comment?: string | null;
  Documents?: Array<ApiCompetitiveListItemDocumentDto> | null;
  Id?: number;
  Manufacture?: string | null;
  ManufactureCountry?: string | null;
  OkeiCode?: string | null;
  Okpd2?: string | null;
  PriceRegionDetails?: Array<ApiPriceRegionDetailDto> | null;
  Quantity?: number | null;
  RequirementRequestId?: number;
  SupplierCharacteristics?: Array<ApiSupplierCharacteristicForViewDto> | null;
  SupplierId?: number;
  UnitPrice?: number | null;
  UsePriceForAllRegions?: boolean;
}
