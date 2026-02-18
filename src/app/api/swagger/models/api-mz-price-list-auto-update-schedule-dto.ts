/* tslint:disable */
/* eslint-disable */
import { ApiBaseDtoWithCreateAndModificationDatesOfIntegerAltDto } from '../models/api-base-dto-with-create-and-modification-dates-of-integer';
export type ApiMzPriceListAutoUpdateScheduleDto = ApiBaseDtoWithCreateAndModificationDatesOfIntegerAltDto & {
'PriceListId'?: number;
'CronExpr'?: string | null;
'NextUpdateStart'?: string;
'AutoUpdateScheduleState'?: number;
'ExpirationDate'?: string | null;
'FailAttemptsCount'?: number;
};
