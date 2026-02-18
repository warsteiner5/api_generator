import { ApiSideFilterStructureDto } from '../../../swagger/models/api-side-filter-structure-dto';
import { SideFilterStructure } from '../../models/side-filter-structure.interface';

export function adaptSideFilterStructureToUI(source?: ApiSideFilterStructureDto | null): SideFilterStructure {
  return {
    isCategoryEnabled: source?.IsCategoryEnabled ?? false,
    isDeliveryRegionsEnabled: source?.IsDeliveryRegionsEnabled ?? false,
    isHomeRegionEnabled: source?.IsHomeRegionEnabled ?? false,
    isImportSubstitutionEnabled: source?.IsImportSubstitutionEnabled ?? false,
    isKsrEnabled: source?.IsKsrEnabled ?? false,
    isManufacturerEnabled: source?.IsManufacturerEnabled ?? false,
    isMspEnabled: source?.IsMspEnabled ?? false,
    isMyRegionEnabled: source?.IsMyRegionEnabled ?? false,
    isOriginCountryAndRegionsEnabled: source?.IsOriginCountryAndRegionsEnabled ?? false,
    isTagCodesEnabled: source?.IsTagCodesEnabled ?? false,
  };
}
