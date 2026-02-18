import { ExternalDealSupplierForPublishAlt } from '../../models/external-deal-supplier-for-publish-alt.interface';
import { ApiExternalDealSupplierForPublishAltDto } from '../../../swagger/models/api-external-deal-supplier-for-publish';

export function adaptApiExternalDealSupplierForPublishAltDto(source?: ExternalDealSupplierForPublishAlt | null): ApiExternalDealSupplierForPublishAltDto {
  return {
    Email: source?.email,
    FullAddress: source?.fullAddress,
    Inn: source?.inn,
    Kpp: source?.kpp,
    Name: source?.name,
    PhoneNumber: source?.phoneNumber,
  };
}
