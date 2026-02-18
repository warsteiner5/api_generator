import { ApiMarketBusinessOperationLogDto } from '../../../swagger/models/api-market-business-operation-log-dto';
import { MarketBusinessOperationLog } from '../../models/market-business-operation-log.interface';

export function adaptMarketBusinessOperationLogToUI(source?: ApiMarketBusinessOperationLogDto | null): MarketBusinessOperationLog {
  return {
    comment: source?.Comment ?? '',
    customer: source?.Customer ?? '',
    customerId: source?.CustomerId ?? 0,
    date: source?.Date ?? '',
    id: source?.Id ?? 0,
    operationId: source?.OperationId ?? '',
    operationName: source?.OperationName ?? '',
    organization: source?.Organization ?? '',
    organizationId: source?.OrganizationId ?? 0,
    userName: source?.UserName ?? '',
  };
}
