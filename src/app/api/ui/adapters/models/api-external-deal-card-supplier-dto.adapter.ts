import { ExternalDealCardSupplier } from '../../models/external-deal-card-supplier.interface';
import { ApiExternalDealCardSupplierDto } from '../../../swagger/models/api-external-deal-card-supplier-dto';

export const apiExternalDealCardSupplierDtoAdapter = (source?: ExternalDealCardSupplier | null): ApiExternalDealCardSupplierDto => {
  return {
    Email: source?.email,
    FullAddress: source?.fullAddress,
    Id: source?.id,
    Inn: source?.inn,
    Kpp: source?.kpp,
    Name: source?.name,
    PhoneNumber: source?.phoneNumber,
    PostCode: source?.postCode,
  };
}
