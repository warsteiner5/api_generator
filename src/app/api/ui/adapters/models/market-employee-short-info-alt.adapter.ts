import { ApiMarketEmployeeShortInfoAltDto } from '../../../swagger/models/api-market-employee-short-info';
import { MarketEmployeeShortInfoAlt } from '../../models/market-employee-short-info-alt.interface';
import { addressAdapter } from './address.adapter';

export const marketEmployeeShortInfoAltAdapter = (source?: ApiMarketEmployeeShortInfoAltDto | null): MarketEmployeeShortInfoAlt => {
  return {
    address: source?.Address === null ? undefined : addressAdapter(source?.Address),
    email: source?.Email,
    firstName: source?.FirstName,
    id: source?.Id,
    lastName: source?.LastName,
    middleName: source?.MiddleName,
    phoneNumber: source?.PhoneNumber,
    position: source?.Position,
    specialization: source?.Specialization,
    userId: source?.UserId,
  };
}
