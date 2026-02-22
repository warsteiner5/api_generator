import { TradesFilterObjectAlt } from './trades-filter-object-alt.interface';
import { UsedClassificatorTypeEnum } from '../enums/used-classificator-type.enum';

// @ts-ignore
export interface AllTradesFilterObjectForCustomerAlt extends TradesFilterObjectAlt {
  onlyTradesWithMyApplications: boolean;
  classificatorCodes: string[];
  usedClassificatorType: UsedClassificatorTypeEnum;
  customerAddress: string;
}
