import { ApiMarketOrganizationAdministratorDto } from '../../../swagger/models/api-market-organization-administrator-dto';
import { MarketOrganizationAdministrator } from '../../models/market-organization-administrator.interface';

export const marketOrganizationAdministratorAdapter = (source?: ApiMarketOrganizationAdministratorDto | null): MarketOrganizationAdministrator => {
  return {
    firstName: source?.FirstName,
    lastName: source?.LastName,
    middleName: source?.MiddleName,
    position: source?.Position,
    userId: source?.UserId,
  };
}
