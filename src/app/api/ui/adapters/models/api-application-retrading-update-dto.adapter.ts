import { ApplicationRetradingUpdate } from '../../models/application-retrading-update.interface';
import { ApiApplicationRetradingUpdateDto } from '../../../swagger/models/api-application-retrading-update-dto';
import { apiApplicationItemDtoAdapter } from './api-application-item-dto.adapter';

export const apiApplicationRetradingUpdateDtoAdapter = (source?: ApplicationRetradingUpdate | null): ApiApplicationRetradingUpdateDto => {
  return {
    ApplicationItems: source?.applicationItems?.map((item) => apiApplicationItemDtoAdapter(item)),
    Id: source?.id,
    IsQuotationWithVat: source?.isQuotationWithVat,
    Price: source?.price,
    SumVat: source?.sumVat,
    TaxPercent: source?.taxPercent,
    TradeId: source?.tradeId,
    TradeLotId: source?.tradeLotId,
  };
}
