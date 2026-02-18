import { ApiMarketJsonResultOfApprovalRequestViewDto } from '../../../swagger/models/api-market-json-result-of-approval-request-view-dto';
import { MarketJsonResultOfApprovalRequestView } from '../../models/market-json-result-of-approval-request-view.interface';

export function adaptMarketJsonResultOfApprovalRequestViewToUI(source?: ApiMarketJsonResultOfApprovalRequestViewDto | null): MarketJsonResultOfApprovalRequestView {
  return (source ?? {}) as MarketJsonResultOfApprovalRequestView;
}
