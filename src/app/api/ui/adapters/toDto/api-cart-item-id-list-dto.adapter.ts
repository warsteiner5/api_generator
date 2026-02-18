import { CartItemIdList } from '../../models/cart-item-id-list.interface';
import { ApiCartItemIdListDto } from '../../../swagger/models/api-cart-item-id-list-dto';

export function adaptApiCartItemIdListDto(source?: CartItemIdList | null): ApiCartItemIdListDto {
  return {
    Ids: source?.ids ?? [],
  };
}
