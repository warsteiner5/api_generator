import { ViewApplicationsForTrade } from '../../models/view-applications-for-trade.interface';
import { ApiViewApplicationsForTradeDto } from '../../../swagger/models/api-view-applications-for-trade-dto';
import { apiApplicationInfoForTradeDtoAdapter } from './api-application-info-for-trade-dto.adapter';
import { apiApplicationRejectionReasonDtoAdapter } from './api-application-rejection-reason-dto.adapter';
import { apiDealRejectionReasonListDtoAdapter } from './api-deal-rejection-reason-list-dto.adapter';
import { apiDealStateEnumAdapter } from '../enums/api-deal-state-enum.adapter';

export const apiViewApplicationsForTradeDtoAdapter = (source?: ViewApplicationsForTrade | null): ApiViewApplicationsForTradeDto => {
  return {
    Applications: source?.applications?.map((item) => apiApplicationInfoForTradeDtoAdapter(item)),
    DealId: source?.dealId,
    DealRejectionReasonList: source?.dealRejectionReasonList === null ? undefined : apiDealRejectionReasonListDtoAdapter(source?.dealRejectionReasonList),
    DealState: source?.dealState === null ? undefined : apiDealStateEnumAdapter(source?.dealState),
    IsApplicationAlreadyCreated: source?.isApplicationAlreadyCreated,
    IsWaitingPeriodEnabled: source?.isWaitingPeriodEnabled,
    RejectionReasons: source?.rejectionReasons?.map((item) => apiApplicationRejectionReasonDtoAdapter(item)),
  };
}
