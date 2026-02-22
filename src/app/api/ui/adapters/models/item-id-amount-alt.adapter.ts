import { ApiItemIdAmountAltDto } from '../../../swagger/models/api-item-id-amount';
import { ItemIdAmountAlt } from '../../models/item-id-amount-alt.interface';

export const itemIdAmountAltAdapter = (source?: ApiItemIdAmountAltDto | null): ItemIdAmountAlt => {
  return {
    amount: source?.Amount,
    itemId: source?.ItemId,
  };
}
