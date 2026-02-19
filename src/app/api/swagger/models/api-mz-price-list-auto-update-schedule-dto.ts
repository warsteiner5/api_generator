/* tslint:disable */
/* eslint-disable */
import { ApiBaseDtoWithCreateAndModificationDatesOfInteger } from '../models/api-base-dto-with-create-and-modification-dates-of-integer';
export type ApiMzPriceListAutoUpdateScheduleDto = ApiBaseDtoWithCreateAndModificationDatesOfInteger & {
'PriceListId'?: number;
'CronExpr'?: string | null;
'NextUpdateStart'?: string;
'AutoUpdateScheduleState'?: number;
'ExpirationDate'?: string | null;
'FailAttemptsCount'?: number;
};
