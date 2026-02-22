import { ApiMarketBusinessOperationLogDto } from '../../../swagger/models/api-market-business-operation-log-dto';
import { MarketBusinessOperationLog } from '../../models/market-business-operation-log.interface';

export const marketBusinessOperationLogAdapter = (source?: ApiMarketBusinessOperationLogDto | null): MarketBusinessOperationLog => {
  return {
    comment: source?.Comment,
    customer: source?.Customer,
    customerId: source?.CustomerId,
    date: source?.Date,
    id: source?.Id,
    operationId: source?.OperationId,
    operationName: source?.OperationName,
    organization: source?.Organization,
    organizationId: source?.OrganizationId,
    userName: source?.UserName,
  };
}
