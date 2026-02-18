import { ApiExternalDealCardSupplierDto } from '../../../swagger/models/api-external-deal-card-supplier-dto';
import { ExternalDealCardSupplier } from '../../models/external-deal-card-supplier.interface';

export function adaptExternalDealCardSupplierToUI(source?: ApiExternalDealCardSupplierDto | null): ExternalDealCardSupplier {
  return {
    email: source?.Email ?? '',
    fullAddress: source?.FullAddress ?? '',
    id: source?.Id ?? 0,
    inn: source?.Inn ?? '',
    kpp: source?.Kpp ?? '',
    name: source?.Name ?? '',
    phoneNumber: source?.PhoneNumber ?? '',
    postCode: source?.PostCode ?? '',
  };
}
