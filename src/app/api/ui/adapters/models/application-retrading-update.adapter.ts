import { ApiApplicationRetradingUpdateDto } from '../../../swagger/models/api-application-retrading-update-dto';
import { ApplicationRetradingUpdate } from '../../models/application-retrading-update.interface';
import { applicationItemAdapter } from './application-item.adapter';

export const applicationRetradingUpdateAdapter = (source?: ApiApplicationRetradingUpdateDto | null): ApplicationRetradingUpdate => {
  return {
    applicationItems: source?.ApplicationItems?.map((item) => applicationItemAdapter(item)),
    id: source?.Id,
    isQuotationWithVat: source?.IsQuotationWithVat,
    price: source?.Price,
    sumVat: source?.SumVat,
    taxPercent: source?.TaxPercent,
    tradeId: source?.TradeId,
    tradeLotId: source?.TradeLotId,
  };
}
