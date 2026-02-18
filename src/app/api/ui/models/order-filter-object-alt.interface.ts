import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { OrderStateEnum } from '../enums/order-state.enum';
import { UsedClassificatorTypeEnum } from '../enums/used-classificator-type.enum';

export type OrderFilterObjectAlt = BaseFilterObjectAlt & { 'OrderName'?: string | null; 'OfferName'?: string | null; 'ClassificatorCodes'?: Array<string> | null; 'UsedClassificatorType'?: UsedClassificatorTypeEnum | null; 'OrderState'?: OrderStateEnum | null; 'FilterPriceMax'?: number | null; 'FilterPriceMin'?: number | null; };
