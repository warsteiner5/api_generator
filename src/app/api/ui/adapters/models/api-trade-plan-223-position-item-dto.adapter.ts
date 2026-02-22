import { TradePlan223PositionItem } from '../../models/trade-plan-223-position-item.interface';
import { ApiTradePlan223PositionItemDto } from '../../../swagger/models/api-trade-plan-223-position-item-dto';
import { apiEisDictionaryItemAltDtoAdapter } from './api-eis-dictionary-item.adapter';
import { apiTypeObjectPurchaseEnumAdapter } from '../enums/api-type-object-purchase-enum.adapter';

export const apiTradePlan223PositionItemDtoAdapter = (source?: TradePlan223PositionItem | null): ApiTradePlan223PositionItemDto => {
  return {
    AdditionalInfo: source?.additionalInfo,
    Count: source?.count,
    Name: source?.name,
    Okei: source?.okei === null ? undefined : apiEisDictionaryItemAltDtoAdapter(source?.okei),
    Okpd2: source?.okpd2 === null ? undefined : apiEisDictionaryItemAltDtoAdapter(source?.okpd2),
    Okved2: source?.okved2 === null ? undefined : apiEisDictionaryItemAltDtoAdapter(source?.okved2),
    TypeObjectPurchase: source?.typeObjectPurchase === null ? undefined : apiTypeObjectPurchaseEnumAdapter(source?.typeObjectPurchase),
  };
}
