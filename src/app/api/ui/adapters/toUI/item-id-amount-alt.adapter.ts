import { ApiItemIdAmountAltDto } from '../../../swagger/models/api-item-id-amount';
import { ItemIdAmountAlt } from '../../models/item-id-amount-alt.interface';

export function adaptItemIdAmountAltToUI(source?: ApiItemIdAmountAltDto | null): ItemIdAmountAlt {
  return {
    amount: source?.Amount ?? 0,
    itemId: source?.ItemId ?? 0,
  };
}
