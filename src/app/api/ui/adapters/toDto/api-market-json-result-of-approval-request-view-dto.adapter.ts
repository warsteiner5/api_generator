import { MarketJsonResultOfApprovalRequestView } from '../../models/market-json-result-of-approval-request-view.interface';
import { ApiMarketJsonResultOfApprovalRequestViewDto } from '../../../swagger/models/api-market-json-result-of-approval-request-view-dto';

export function adaptApiMarketJsonResultOfApprovalRequestViewDto(source?: MarketJsonResultOfApprovalRequestView | null): ApiMarketJsonResultOfApprovalRequestViewDto {
  return (source ?? {}) as ApiMarketJsonResultOfApprovalRequestViewDto;
}
