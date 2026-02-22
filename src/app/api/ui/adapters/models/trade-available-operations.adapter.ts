import { ApiTradeAvailableOperationsDto } from '../../../swagger/models/api-trade-available-operations-dto';
import { TradeAvailableOperations } from '../../models/trade-available-operations.interface';

export const tradeAvailableOperationsAdapter = (source?: ApiTradeAvailableOperationsDto | null): TradeAvailableOperations => {
  return {
    isCreateClarificationRequestAllowed: source?.IsCreateClarificationRequestAllowed,
    isFinishReviewApplicationAllowed: source?.IsFinishReviewApplicationAllowed,
    isLinkNotTookPlaceTradeAllowed: source?.IsLinkNotTookPlaceTradeAllowed,
    isRepublishAllowed: source?.IsRepublishAllowed,
    isReturnToReviewApplicationsAllowed: source?.IsReturnToReviewApplicationsAllowed,
    isSelectFromParticipantOffersAllowed: source?.IsSelectFromParticipantOffersAllowed,
    isSetContractAllowed: source?.IsSetContractAllowed,
    isSetLapsedTradeAllowed: source?.IsSetLapsedTradeAllowed,
    isTradeProtocolDownloadAllowed: source?.IsTradeProtocolDownloadAllowed,
  };
}
