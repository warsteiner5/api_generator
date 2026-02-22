import { MarketBusinessOperationLog } from '../../models/market-business-operation-log.interface';
import { ApiMarketBusinessOperationLogDto } from '../../../swagger/models/api-market-business-operation-log-dto';

export const apiMarketBusinessOperationLogDtoAdapter = (source?: MarketBusinessOperationLog | null): ApiMarketBusinessOperationLogDto => {
  return {
    Comment: source?.comment,
    Customer: source?.customer,
    CustomerId: source?.customerId,
    Date: source?.date,
    Id: source?.id,
    OperationId: source?.operationId,
    OperationName: source?.operationName,
    Organization: source?.organization,
    OrganizationId: source?.organizationId,
    UserName: source?.userName,
  };
}
