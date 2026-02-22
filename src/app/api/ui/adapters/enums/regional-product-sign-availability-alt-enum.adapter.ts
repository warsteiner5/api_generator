import { ApiRegionalProductSignAvailabilityAltEnum } from '../../../swagger/models/api-regional-product-sign-availability';
import { RegionalProductSignAvailabilityAltEnum } from '../../enums/regional-product-sign-availability-alt.enum';

export const regionalProductSignAvailabilityAltEnumAdapter = (source?: ApiRegionalProductSignAvailabilityAltEnum | null): RegionalProductSignAvailabilityAltEnum => {
  switch (source) {
    case ApiRegionalProductSignAvailabilityAltEnum.ForAllSuppliers:
      return RegionalProductSignAvailabilityAltEnum.ForAllSuppliers;
    case ApiRegionalProductSignAvailabilityAltEnum.ForSuppliersFromList:
      return RegionalProductSignAvailabilityAltEnum.ForSuppliersFromList;
    default:
      throw new Error(`Enum value is not defined: ApiRegionalProductSignAvailabilityAltEnum=${String(source)}`);
  }
}
