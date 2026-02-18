import { TradePlan223PositionItem } from '../../models/trade-plan-223-position-item.interface';
import { ApiTradePlan223PositionItemDto } from '../../../swagger/models/api-trade-plan-223-position-item-dto';
import { adaptApiEisDictionaryItemAltDto } from './api-eis-dictionary-item.adapter';
import { adaptApiTypeObjectPurchaseEnum } from './api-type-object-purchase-enum.adapter';

export function adaptApiTradePlan223PositionItemDto(source?: TradePlan223PositionItem | null): ApiTradePlan223PositionItemDto {
  return {
    AdditionalInfo: source?.additionalInfo,
    Count: source?.count,
    Name: source?.name,
    Okei: adaptApiEisDictionaryItemAltDto(source?.okei),
    Okpd2: adaptApiEisDictionaryItemAltDto(source?.okpd2),
    Okved2: adaptApiEisDictionaryItemAltDto(source?.okved2),
    TypeObjectPurchase: adaptApiTypeObjectPurchaseEnum(source?.typeObjectPurchase),
  };
}
