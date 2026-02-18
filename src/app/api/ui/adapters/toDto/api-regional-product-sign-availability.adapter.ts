import { RegionalProductSignAvailabilityAltEnum } from '../../enums/regional-product-sign-availability-alt.enum';
import { ApiRegionalProductSignAvailabilityAltEnum } from '../../../swagger/models/api-regional-product-sign-availability';

export function adaptApiRegionalProductSignAvailabilityAltEnum(source?: RegionalProductSignAvailabilityAltEnum | null): ApiRegionalProductSignAvailabilityAltEnum {
  switch (source) {
    case RegionalProductSignAvailabilityAltEnum.ForAllSuppliers:
      return ApiRegionalProductSignAvailabilityAltEnum.ForAllSuppliers;
    case RegionalProductSignAvailabilityAltEnum.ForSuppliersFromList:
      return ApiRegionalProductSignAvailabilityAltEnum.ForSuppliersFromList;
    default:
      throw new Error(`Enum value is not defined: RegionalProductSignAvailabilityAltEnum=${String(source)}`);
  }
}
