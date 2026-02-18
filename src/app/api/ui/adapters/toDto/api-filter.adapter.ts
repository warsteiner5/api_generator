import { FilterAlt } from '../../models/filter-alt.interface';
import { ApiFilterAltDto } from '../../../swagger/models/api-filter';
import { adaptApiStarPurchaseTypeEnum } from './api-star-purchase-type-enum.adapter';

export function adaptApiFilterAltDto(source?: FilterAlt | null): ApiFilterAltDto {
  return {
    AvailableTenantKeys: source?.availableTenantKeys ?? [],
    BusinessFlowTypes: source?.businessFlowTypes ?? [],
    CategoryIds: source?.categoryIds ?? [],
    CollectingEndDateEnd: source?.collectingEndDateEnd,
    CollectingEndDateStart: source?.collectingEndDateStart,
    CountryCodes: source?.countryCodes ?? [],
    DeliveryRegionIds: source?.deliveryRegionIds ?? [],
    ETPCodes: source?.etpCodes ?? [],
    HasPhoto: source?.hasPhoto,
    InnOrganizers: source?.innOrganizers,
    IsExactMatch: source?.isExactMatch,
    IsFromManufacturerOnly: source?.isFromManufacturerOnly,
    IsImmediate: source?.isImmediate,
    IsImportPhaseout: source?.isImportPhaseout,
    IsMarketOffer: source?.isMarketOffer,
    IsSearch223: source?.isSearch223,
    IsSearch44: source?.isSearch44,
    IsSearch615: source?.isSearch615,
    IsSearchAttachment: source?.isSearchAttachment,
    IsSearchCOM: source?.isSearchCOM,
    IsSearchZMO: source?.isSearchZMO,
    IsSmp: source?.isSmp,
    LotStateIds: source?.lotStateIds ?? [],
    NMCFrom: source?.nmcFrom,
    NMCTo: source?.nmcTo,
    NotSourceTenantIds: source?.notSourceTenantIds ?? [],
    OKPD2Codes: source?.okpD2Codes ?? [],
    ProductionRegionCodes: source?.productionRegionCodes ?? [],
    PublishDateEnd: source?.publishDateEnd,
    PublishDateStart: source?.publishDateStart,
    PwsIds: (source?.pwsIds ?? []).map((item) => adaptApiStarPurchaseTypeEnum(item)),
    RegionIds: source?.regionIds ?? [],
    SourceIds: source?.sourceIds ?? [],
    SourceTenantIds: source?.sourceTenantIds ?? [],
  };
}
