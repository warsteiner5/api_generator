import { ApiTradeAvailableOperationsDto } from '../../../swagger/models/api-trade-available-operations-dto';
import { TradeAvailableOperations } from '../../models/trade-available-operations.interface';

export function adaptTradeAvailableOperationsToUI(source?: ApiTradeAvailableOperationsDto | null): TradeAvailableOperations {
  return {
    isCreateClarificationRequestAllowed: source?.IsCreateClarificationRequestAllowed ?? false,
    isFinishReviewApplicationAllowed: source?.IsFinishReviewApplicationAllowed ?? false,
    isLinkNotTookPlaceTradeAllowed: source?.IsLinkNotTookPlaceTradeAllowed ?? false,
    isRepublishAllowed: source?.IsRepublishAllowed ?? false,
    isReturnToReviewApplicationsAllowed: source?.IsReturnToReviewApplicationsAllowed ?? false,
    isSelectFromParticipantOffersAllowed: source?.IsSelectFromParticipantOffersAllowed ?? false,
    isSetContractAllowed: source?.IsSetContractAllowed ?? false,
    isSetLapsedTradeAllowed: source?.IsSetLapsedTradeAllowed ?? false,
    isTradeProtocolDownloadAllowed: source?.IsTradeProtocolDownloadAllowed ?? false,
  };
}
