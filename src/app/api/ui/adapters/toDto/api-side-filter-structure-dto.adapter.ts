import { SideFilterStructure } from '../../models/side-filter-structure.interface';
import { ApiSideFilterStructureDto } from '../../../swagger/models/api-side-filter-structure-dto';

export function adaptApiSideFilterStructureDto(source?: SideFilterStructure | null): ApiSideFilterStructureDto {
  return {
    IsCategoryEnabled: source?.isCategoryEnabled,
    IsDeliveryRegionsEnabled: source?.isDeliveryRegionsEnabled,
    IsHomeRegionEnabled: source?.isHomeRegionEnabled,
    IsImportSubstitutionEnabled: source?.isImportSubstitutionEnabled,
    IsKsrEnabled: source?.isKsrEnabled,
    IsManufacturerEnabled: source?.isManufacturerEnabled,
    IsMspEnabled: source?.isMspEnabled,
    IsMyRegionEnabled: source?.isMyRegionEnabled,
    IsOriginCountryAndRegionsEnabled: source?.isOriginCountryAndRegionsEnabled,
    IsTagCodesEnabled: source?.isTagCodesEnabled,
  };
}
