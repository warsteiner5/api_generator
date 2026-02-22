import { CartItemIdList } from '../../models/cart-item-id-list.interface';
import { ApiCartItemIdListDto } from '../../../swagger/models/api-cart-item-id-list-dto';

export const apiCartItemIdListDtoAdapter = (source?: CartItemIdList | null): ApiCartItemIdListDto => {
  return {
    Ids: source?.ids,
  };
}
