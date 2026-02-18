import { ViewApplicationsForTrade } from '../../models/view-applications-for-trade.interface';
import { ApiViewApplicationsForTradeDto } from '../../../swagger/models/api-view-applications-for-trade-dto';
import { adaptApiApplicationInfoForTradeDto } from './api-application-info-for-trade-dto.adapter';
import { adaptApiApplicationRejectionReasonDto } from './api-application-rejection-reason-dto.adapter';
import { adaptApiDealRejectionReasonListDto } from './api-deal-rejection-reason-list-dto.adapter';
import { adaptApiDealStateEnum } from './api-deal-state-enum.adapter';

export function adaptApiViewApplicationsForTradeDto(source?: ViewApplicationsForTrade | null): ApiViewApplicationsForTradeDto {
  return {
    Applications: (source?.applications ?? []).map((item) => adaptApiApplicationInfoForTradeDto(item)),
    DealId: source?.dealId,
    DealRejectionReasonList: adaptApiDealRejectionReasonListDto(source?.dealRejectionReasonList),
    DealState: adaptApiDealStateEnum(source?.dealState),
    IsApplicationAlreadyCreated: source?.isApplicationAlreadyCreated,
    IsWaitingPeriodEnabled: source?.isWaitingPeriodEnabled,
    RejectionReasons: (source?.rejectionReasons ?? []).map((item) => adaptApiApplicationRejectionReasonDto(item)),
  };
}
