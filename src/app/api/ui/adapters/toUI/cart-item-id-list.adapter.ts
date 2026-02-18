import { ApiCartItemIdListDto } from '../../../swagger/models/api-cart-item-id-list-dto';
import { CartItemIdList } from '../../models/cart-item-id-list.interface';

export function adaptCartItemIdListToUI(source?: ApiCartItemIdListDto | null): CartItemIdList {
  return {
    ids: source?.Ids ?? [],
  };
}
