import { ItemIdAmountAlt } from '../../models/item-id-amount-alt.interface';
import { ApiItemIdAmountAltDto } from '../../../swagger/models/api-item-id-amount';

export function adaptApiItemIdAmountAltDto(source?: ItemIdAmountAlt | null): ApiItemIdAmountAltDto {
  return {
    Amount: source?.amount,
    ItemId: source?.itemId,
  };
}
