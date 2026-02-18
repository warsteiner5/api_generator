import { ApiMarketEmployeeShortInfoAltDto } from '../../../swagger/models/api-market-employee-short-info';
import { MarketEmployeeShortInfoAlt } from '../../models/market-employee-short-info-alt.interface';
import { adaptAddressToUI } from './address.adapter';

export function adaptMarketEmployeeShortInfoAltToUI(source?: ApiMarketEmployeeShortInfoAltDto | null): MarketEmployeeShortInfoAlt {
  return {
    address: adaptAddressToUI(source?.Address),
    email: source?.Email ?? '',
    firstName: source?.FirstName ?? '',
    id: source?.Id ?? 0,
    lastName: source?.LastName ?? '',
    middleName: source?.MiddleName ?? '',
    phoneNumber: source?.PhoneNumber ?? '',
    position: source?.Position ?? '',
    specialization: source?.Specialization ?? '',
    userId: source?.UserId ?? 0,
  };
}
