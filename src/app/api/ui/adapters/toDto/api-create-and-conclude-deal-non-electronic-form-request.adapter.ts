import { CreateAndConcludeDealNonElectronicFormRequestAlt } from '../../models/create-and-conclude-deal-non-electronic-form-request-alt.interface';
import { ApiCreateAndConcludeDealNonElectronicFormRequestAltDto } from '../../../swagger/models/api-create-and-conclude-deal-non-electronic-form-request';

export function adaptApiCreateAndConcludeDealNonElectronicFormRequestAltDto(source?: CreateAndConcludeDealNonElectronicFormRequestAlt | null): ApiCreateAndConcludeDealNonElectronicFormRequestAltDto {
  return {
    TradeId: source?.tradeId,
    TradeLotApplicationId: source?.tradeLotApplicationId,
  };
}
