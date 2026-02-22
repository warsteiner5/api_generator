import { ApiViewApplicationsForTradeDto } from '../../../swagger/models/api-view-applications-for-trade-dto';
import { ViewApplicationsForTrade } from '../../models/view-applications-for-trade.interface';
import { applicationInfoForTradeAdapter } from './application-info-for-trade.adapter';
import { applicationRejectionReasonAdapter } from './application-rejection-reason.adapter';
import { dealRejectionReasonListAdapter } from './deal-rejection-reason-list.adapter';
import { dealStateEnumAdapter } from '../enums/deal-state-enum.adapter';

export const viewApplicationsForTradeAdapter = (source?: ApiViewApplicationsForTradeDto | null): ViewApplicationsForTrade => {
  return {
    applications: source?.Applications?.map((item) => applicationInfoForTradeAdapter(item)),
    dealId: source?.DealId,
    dealRejectionReasonList: source?.DealRejectionReasonList === null ? undefined : dealRejectionReasonListAdapter(source?.DealRejectionReasonList),
    dealState: source?.DealState === null ? undefined : dealStateEnumAdapter(source?.DealState),
    isApplicationAlreadyCreated: source?.IsApplicationAlreadyCreated,
    isWaitingPeriodEnabled: source?.IsWaitingPeriodEnabled,
    rejectionReasons: source?.RejectionReasons?.map((item) => applicationRejectionReasonAdapter(item)),
  };
}
