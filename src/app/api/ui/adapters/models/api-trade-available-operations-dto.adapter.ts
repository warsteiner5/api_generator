import { TradeAvailableOperations } from '../../models/trade-available-operations.interface';
import { ApiTradeAvailableOperationsDto } from '../../../swagger/models/api-trade-available-operations-dto';

export const apiTradeAvailableOperationsDtoAdapter = (source?: TradeAvailableOperations | null): ApiTradeAvailableOperationsDto => {
  return {
    IsCreateClarificationRequestAllowed: source?.isCreateClarificationRequestAllowed,
    IsFinishReviewApplicationAllowed: source?.isFinishReviewApplicationAllowed,
    IsLinkNotTookPlaceTradeAllowed: source?.isLinkNotTookPlaceTradeAllowed,
    IsRepublishAllowed: source?.isRepublishAllowed,
    IsReturnToReviewApplicationsAllowed: source?.isReturnToReviewApplicationsAllowed,
    IsSelectFromParticipantOffersAllowed: source?.isSelectFromParticipantOffersAllowed,
    IsSetContractAllowed: source?.isSetContractAllowed,
    IsSetLapsedTradeAllowed: source?.isSetLapsedTradeAllowed,
    IsTradeProtocolDownloadAllowed: source?.isTradeProtocolDownloadAllowed,
  };
}
