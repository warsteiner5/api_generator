import { ApiTradePlan223PositionItemDto } from '../../../swagger/models/api-trade-plan-223-position-item-dto';
import { TradePlan223PositionItem } from '../../models/trade-plan-223-position-item.interface';
import { adaptEisDictionaryItemAltToUI } from './eis-dictionary-item-alt.adapter';
import { adaptTypeObjectPurchaseEnumToUI } from './type-object-purchase-enum.adapter';

export function adaptTradePlan223PositionItemToUI(source?: ApiTradePlan223PositionItemDto | null): TradePlan223PositionItem {
  return {
    additionalInfo: source?.AdditionalInfo ?? '',
    count: source?.Count ?? 0,
    name: source?.Name ?? '',
    okei: adaptEisDictionaryItemAltToUI(source?.Okei),
    okpd2: adaptEisDictionaryItemAltToUI(source?.Okpd2),
    okved2: adaptEisDictionaryItemAltToUI(source?.Okved2),
    typeObjectPurchase: adaptTypeObjectPurchaseEnumToUI(source?.TypeObjectPurchase),
  };
}
