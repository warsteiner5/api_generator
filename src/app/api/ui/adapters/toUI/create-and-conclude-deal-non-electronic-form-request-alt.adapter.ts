import { ApiCreateAndConcludeDealNonElectronicFormRequestAltDto } from '../../../swagger/models/api-create-and-conclude-deal-non-electronic-form-request';
import { CreateAndConcludeDealNonElectronicFormRequestAlt } from '../../models/create-and-conclude-deal-non-electronic-form-request-alt.interface';

export function adaptCreateAndConcludeDealNonElectronicFormRequestAltToUI(source?: ApiCreateAndConcludeDealNonElectronicFormRequestAltDto | null): CreateAndConcludeDealNonElectronicFormRequestAlt {
  return {
    tradeId: source?.TradeId ?? 0,
    tradeLotApplicationId: source?.TradeLotApplicationId ?? 0,
  };
}
