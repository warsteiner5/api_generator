/* tslint:disable */
/* eslint-disable */
import { ApiTradesFilterObjectAltDto } from '../models/api-trades-filter-object';
import { ApiUsedClassificatorTypeEnum } from '../models/api-used-classificator-type-enum';
export type ApiTradesFilterObjectForParticipantAltDto = ApiTradesFilterObjectAltDto & {
'OnlyTradesWithMyApplications'?: boolean;
'ClassificatorCodes'?: Array<string> | null;
'UsedClassificatorType'?: ApiUsedClassificatorTypeEnum | null;
'CustomerAddress'?: string | null;
};
