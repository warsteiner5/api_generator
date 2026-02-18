import { StarPurchaseTypeEnum } from '../enums/star-purchase-type.enum';

export interface FilterAlt {
  availableTenantKeys: number[];
  businessFlowTypes: number[];
  categoryIds: string[];
  collectingEndDateEnd: string;
  collectingEndDateStart: string;
  countryCodes: string[];
  deliveryRegionIds: number[];
  etpCodes: string[];
  hasPhoto: boolean;
  innOrganizers: string;
  isExactMatch: boolean;
  isFromManufacturerOnly: boolean;
  isImmediate: boolean;
  isImportPhaseout: boolean;
  isMarketOffer: boolean;
  isSearch223: boolean;
  isSearch44: boolean;
  isSearch615: boolean;
  isSearchAttachment: boolean;
  isSearchCOM: boolean;
  isSearchZMO: boolean;
  isSmp: boolean;
  lotStateIds: number[];
  nmcFrom: number;
  nmcTo: number;
  notSourceTenantIds: number[];
  okpD2Codes: string[];
  productionRegionCodes: string[];
  publishDateEnd: string;
  publishDateStart: string;
  pwsIds: StarPurchaseTypeEnum[];
  regionIds: number[];
  sourceIds: number[];
  sourceTenantIds: number[];
}
