/* tslint:disable */
/* eslint-disable */
import { ApiEisDictionaryItemAltDto } from '../models/api-eis-dictionary-item';
import { ApiTypeObjectPurchaseEnum } from '../models/api-type-object-purchase-enum';
export interface ApiTradePlan223PositionItemDto {
  AdditionalInfo?: string | null;
  Count?: number | null;
  Name?: string | null;
  Okei?: ApiEisDictionaryItemAltDto | null;
  Okpd2?: ApiEisDictionaryItemAltDto | null;
  Okved2?: ApiEisDictionaryItemAltDto | null;
  TypeObjectPurchase?: ApiTypeObjectPurchaseEnum | null;
}
