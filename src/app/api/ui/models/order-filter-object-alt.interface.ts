import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { OrderStateEnum } from '../enums/order-state.enum';
import { UsedClassificatorTypeEnum } from '../enums/used-classificator-type.enum';

// @ts-ignore
export interface OrderFilterObjectAlt extends BaseFilterObjectAlt {
  orderName: string;
  offerName: string;
  classificatorCodes: string[];
  usedClassificatorType: UsedClassificatorTypeEnum;
  orderState: OrderStateEnum;
  filterPriceMax: number;
  filterPriceMin: number;
}
