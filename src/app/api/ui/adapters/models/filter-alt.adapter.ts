import { ApiFilterAltDto } from '../../../swagger/models/api-filter';
import { FilterAlt } from '../../models/filter-alt.interface';
import { starPurchaseTypeEnumAdapter } from '../enums/star-purchase-type-enum.adapter';

export const filterAltAdapter = (source?: ApiFilterAltDto | null): FilterAlt => {
  return {
    availableTenantKeys: source?.AvailableTenantKeys,
    businessFlowTypes: source?.BusinessFlowTypes,
    categoryIds: source?.CategoryIds,
    collectingEndDateEnd: source?.CollectingEndDateEnd,
    collectingEndDateStart: source?.CollectingEndDateStart,
    countryCodes: source?.CountryCodes,
    deliveryRegionIds: source?.DeliveryRegionIds,
    etpCodes: source?.ETPCodes,
    hasPhoto: source?.HasPhoto,
    innOrganizers: source?.InnOrganizers,
    isExactMatch: source?.IsExactMatch,
    isFromManufacturerOnly: source?.IsFromManufacturerOnly,
    isImmediate: source?.IsImmediate,
    isImportPhaseout: source?.IsImportPhaseout,
    isMarketOffer: source?.IsMarketOffer,
    isSearch223: source?.IsSearch223,
    isSearch44: source?.IsSearch44,
    isSearch615: source?.IsSearch615,
    isSearchAttachment: source?.IsSearchAttachment,
    isSearchCOM: source?.IsSearchCOM,
    isSearchZMO: source?.IsSearchZMO,
    isSmp: source?.IsSmp,
    lotStateIds: source?.LotStateIds,
    nmcFrom: source?.NMCFrom,
    nmcTo: source?.NMCTo,
    notSourceTenantIds: source?.NotSourceTenantIds,
    okpD2Codes: source?.OKPD2Codes,
    productionRegionCodes: source?.ProductionRegionCodes,
    publishDateEnd: source?.PublishDateEnd,
    publishDateStart: source?.PublishDateStart,
    pwsIds: source?.PwsIds?.map((item) => starPurchaseTypeEnumAdapter(item)),
    regionIds: source?.RegionIds,
    sourceIds: source?.SourceIds,
    sourceTenantIds: source?.SourceTenantIds,
  };
}
