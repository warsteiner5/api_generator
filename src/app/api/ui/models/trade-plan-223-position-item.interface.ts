import { EisDictionaryItemAlt } from './eis-dictionary-item-alt.interface';
import { TypeObjectPurchaseEnum } from '../enums/type-object-purchase.enum';

export interface TradePlan223PositionItem {
  additionalInfo: string;
  count: number;
  name: string;
  okei: EisDictionaryItemAlt;
  okpd2: EisDictionaryItemAlt;
  okved2: EisDictionaryItemAlt;
  typeObjectPurchase: TypeObjectPurchaseEnum;
}
