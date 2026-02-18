import { ApiViewApplicationsForTradeDto } from '../../../swagger/models/api-view-applications-for-trade-dto';
import { ViewApplicationsForTrade } from '../../models/view-applications-for-trade.interface';
import { adaptApplicationInfoForTradeToUI } from './application-info-for-trade.adapter';
import { adaptApplicationRejectionReasonToUI } from './application-rejection-reason.adapter';
import { adaptDealRejectionReasonListToUI } from './deal-rejection-reason-list.adapter';
import { adaptDealStateEnumToUI } from './deal-state-enum.adapter';

export function adaptViewApplicationsForTradeToUI(source?: ApiViewApplicationsForTradeDto | null): ViewApplicationsForTrade {
  return {
    applications: (source?.Applications ?? []).map((item) => adaptApplicationInfoForTradeToUI(item)),
    dealId: source?.DealId ?? 0,
    dealRejectionReasonList: adaptDealRejectionReasonListToUI(source?.DealRejectionReasonList),
    dealState: adaptDealStateEnumToUI(source?.DealState),
    isApplicationAlreadyCreated: source?.IsApplicationAlreadyCreated ?? false,
    isWaitingPeriodEnabled: source?.IsWaitingPeriodEnabled ?? false,
    rejectionReasons: (source?.RejectionReasons ?? []).map((item) => adaptApplicationRejectionReasonToUI(item)),
  };
}
