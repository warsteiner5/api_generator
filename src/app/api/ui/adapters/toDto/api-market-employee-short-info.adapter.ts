import { MarketEmployeeShortInfoAlt } from '../../models/market-employee-short-info-alt.interface';
import { ApiMarketEmployeeShortInfoAltDto } from '../../../swagger/models/api-market-employee-short-info';
import { adaptApiAddressDto } from './api-address-dto.adapter';

export function adaptApiMarketEmployeeShortInfoAltDto(source?: MarketEmployeeShortInfoAlt | null): ApiMarketEmployeeShortInfoAltDto {
  return {
    Address: adaptApiAddressDto(source?.address),
    Email: source?.email,
    FirstName: source?.firstName,
    Id: source?.id,
    LastName: source?.lastName,
    MiddleName: source?.middleName,
    PhoneNumber: source?.phoneNumber,
    Position: source?.position,
    Specialization: source?.specialization,
    UserId: source?.userId,
  };
}
