import { MarketOrganizationAdministrator } from '../../models/market-organization-administrator.interface';
import { ApiMarketOrganizationAdministratorDto } from '../../../swagger/models/api-market-organization-administrator-dto';

export const apiMarketOrganizationAdministratorDtoAdapter = (source?: MarketOrganizationAdministrator | null): ApiMarketOrganizationAdministratorDto => {
  return {
    FirstName: source?.firstName,
    LastName: source?.lastName,
    MiddleName: source?.middleName,
    Position: source?.position,
    UserId: source?.userId,
  };
}
