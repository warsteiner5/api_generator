/* tslint:disable */
/* eslint-disable */
import { ApiBaseFilterObjectAltDto } from '../models/api-base-filter-object';
import { ApiOrderStateEnum } from '../models/api-order-state-enum';
import { ApiUsedClassificatorTypeEnum } from '../models/api-used-classificator-type-enum';
export type ApiOrderFilterObjectAltDto = ApiBaseFilterObjectAltDto & {
'OrderName'?: string | null;
'OfferName'?: string | null;
'ClassificatorCodes'?: Array<string> | null;
'UsedClassificatorType'?: ApiUsedClassificatorTypeEnum | null;
'OrderState'?: ApiOrderStateEnum | null;
'FilterPriceMax'?: number | null;
'FilterPriceMin'?: number | null;
};
