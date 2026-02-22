import { ApiTradePlan223PositionItemDto } from '../../../swagger/models/api-trade-plan-223-position-item-dto';
import { TradePlan223PositionItem } from '../../models/trade-plan-223-position-item.interface';
import { eisDictionaryItemAltAdapter } from './eis-dictionary-item-alt.adapter';
import { typeObjectPurchaseEnumAdapter } from '../enums/type-object-purchase-enum.adapter';

export const tradePlan223PositionItemAdapter = (source?: ApiTradePlan223PositionItemDto | null): TradePlan223PositionItem => {
  return {
    additionalInfo: source?.AdditionalInfo,
    count: source?.Count,
    name: source?.Name,
    okei: source?.Okei === null ? undefined : eisDictionaryItemAltAdapter(source?.Okei),
    okpd2: source?.Okpd2 === null ? undefined : eisDictionaryItemAltAdapter(source?.Okpd2),
    okved2: source?.Okved2 === null ? undefined : eisDictionaryItemAltAdapter(source?.Okved2),
    typeObjectPurchase: source?.TypeObjectPurchase === null ? undefined : typeObjectPurchaseEnumAdapter(source?.TypeObjectPurchase),
  };
}
