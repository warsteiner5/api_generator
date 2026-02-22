import { ApiCreateAndConcludeDealNonElectronicFormRequestAltDto } from '../../../swagger/models/api-create-and-conclude-deal-non-electronic-form-request';
import { CreateAndConcludeDealNonElectronicFormRequestAlt } from '../../models/create-and-conclude-deal-non-electronic-form-request-alt.interface';

export const createAndConcludeDealNonElectronicFormRequestAltAdapter = (source?: ApiCreateAndConcludeDealNonElectronicFormRequestAltDto | null): CreateAndConcludeDealNonElectronicFormRequestAlt => {
  return {
    tradeId: source?.TradeId,
    tradeLotApplicationId: source?.TradeLotApplicationId,
  };
}
