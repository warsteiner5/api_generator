import { ApiFilterAltDto } from '../../../swagger/models/api-filter';
import { FilterAlt } from '../../models/filter-alt.interface';
import { adaptStarPurchaseTypeEnumToUI } from './star-purchase-type-enum.adapter';

export function adaptFilterAltToUI(source?: ApiFilterAltDto | null): FilterAlt {
  return {
    availableTenantKeys: source?.AvailableTenantKeys ?? [],
    businessFlowTypes: source?.BusinessFlowTypes ?? [],
    categoryIds: source?.CategoryIds ?? [],
    collectingEndDateEnd: source?.CollectingEndDateEnd ?? '',
    collectingEndDateStart: source?.CollectingEndDateStart ?? '',
    countryCodes: source?.CountryCodes ?? [],
    deliveryRegionIds: source?.DeliveryRegionIds ?? [],
    etpCodes: source?.ETPCodes ?? [],
    hasPhoto: source?.HasPhoto ?? false,
    innOrganizers: source?.InnOrganizers ?? '',
    isExactMatch: source?.IsExactMatch ?? false,
    isFromManufacturerOnly: source?.IsFromManufacturerOnly ?? false,
    isImmediate: source?.IsImmediate ?? false,
    isImportPhaseout: source?.IsImportPhaseout ?? false,
    isMarketOffer: source?.IsMarketOffer ?? false,
    isSearch223: source?.IsSearch223 ?? false,
    isSearch44: source?.IsSearch44 ?? false,
    isSearch615: source?.IsSearch615 ?? false,
    isSearchAttachment: source?.IsSearchAttachment ?? false,
    isSearchCOM: source?.IsSearchCOM ?? false,
    isSearchZMO: source?.IsSearchZMO ?? false,
    isSmp: source?.IsSmp ?? false,
    lotStateIds: source?.LotStateIds ?? [],
    nmcFrom: source?.NMCFrom ?? 0,
    nmcTo: source?.NMCTo ?? 0,
    notSourceTenantIds: source?.NotSourceTenantIds ?? [],
    okpD2Codes: source?.OKPD2Codes ?? [],
    productionRegionCodes: source?.ProductionRegionCodes ?? [],
    publishDateEnd: source?.PublishDateEnd ?? '',
    publishDateStart: source?.PublishDateStart ?? '',
    pwsIds: (source?.PwsIds ?? []).map((item) => adaptStarPurchaseTypeEnumToUI(item)),
    regionIds: source?.RegionIds ?? [],
    sourceIds: source?.SourceIds ?? [],
    sourceTenantIds: source?.SourceTenantIds ?? [],
  };
}
