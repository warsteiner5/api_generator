import { ApiExternalDealSupplierForPublishAltDto } from '../../../swagger/models/api-external-deal-supplier-for-publish';
import { ExternalDealSupplierForPublishAlt } from '../../models/external-deal-supplier-for-publish-alt.interface';

export const externalDealSupplierForPublishAltAdapter = (source?: ApiExternalDealSupplierForPublishAltDto | null): ExternalDealSupplierForPublishAlt => {
  return {
    email: source?.Email,
    fullAddress: source?.FullAddress,
    inn: source?.Inn,
    kpp: source?.Kpp,
    name: source?.Name,
    phoneNumber: source?.PhoneNumber,
  };
}
