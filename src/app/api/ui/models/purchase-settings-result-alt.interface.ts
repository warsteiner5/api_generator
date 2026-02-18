import { PriceListItemAlt } from './price-list-item-alt.interface';
import { TagItemAlt } from './tag-item-alt.interface';

export interface PurchaseSettingsResultAlt {
  priceListSettings: PriceListItemAlt[];
  tagSettings: TagItemAlt[];
}
