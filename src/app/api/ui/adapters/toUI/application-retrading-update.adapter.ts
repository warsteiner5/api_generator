import { ApiApplicationRetradingUpdateDto } from '../../../swagger/models/api-application-retrading-update-dto';
import { ApplicationRetradingUpdate } from '../../models/application-retrading-update.interface';
import { adaptApplicationItemToUI } from './application-item.adapter';

export function adaptApplicationRetradingUpdateToUI(source?: ApiApplicationRetradingUpdateDto | null): ApplicationRetradingUpdate {
  return {
    applicationItems: (source?.ApplicationItems ?? []).map((item) => adaptApplicationItemToUI(item)),
    id: source?.Id ?? 0,
    isQuotationWithVat: source?.IsQuotationWithVat ?? false,
    price: source?.Price ?? 0,
    sumVat: source?.SumVat ?? 0,
    taxPercent: source?.TaxPercent ?? 0,
    tradeId: source?.TradeId ?? 0,
    tradeLotId: source?.TradeLotId ?? 0,
  };
}
