import { ApiSideFilterStructureDto } from '../../../swagger/models/api-side-filter-structure-dto';
import { SideFilterStructure } from '../../models/side-filter-structure.interface';

export const sideFilterStructureAdapter = (source?: ApiSideFilterStructureDto | null): SideFilterStructure => {
  return {
    isCategoryEnabled: source?.IsCategoryEnabled,
    isDeliveryRegionsEnabled: source?.IsDeliveryRegionsEnabled,
    isHomeRegionEnabled: source?.IsHomeRegionEnabled,
    isImportSubstitutionEnabled: source?.IsImportSubstitutionEnabled,
    isKsrEnabled: source?.IsKsrEnabled,
    isManufacturerEnabled: source?.IsManufacturerEnabled,
    isMspEnabled: source?.IsMspEnabled,
    isMyRegionEnabled: source?.IsMyRegionEnabled,
    isOriginCountryAndRegionsEnabled: source?.IsOriginCountryAndRegionsEnabled,
    isTagCodesEnabled: source?.IsTagCodesEnabled,
  };
}
