import { ApiExternalDealCardSupplierDto } from '../../../swagger/models/api-external-deal-card-supplier-dto';
import { ExternalDealCardSupplier } from '../../models/external-deal-card-supplier.interface';

export const externalDealCardSupplierAdapter = (source?: ApiExternalDealCardSupplierDto | null): ExternalDealCardSupplier => {
  return {
    email: source?.Email,
    fullAddress: source?.FullAddress,
    id: source?.Id,
    inn: source?.Inn,
    kpp: source?.Kpp,
    name: source?.Name,
    phoneNumber: source?.PhoneNumber,
    postCode: source?.PostCode,
  };
}
