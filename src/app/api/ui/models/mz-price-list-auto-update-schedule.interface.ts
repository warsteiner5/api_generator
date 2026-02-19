import { BaseDtoWithCreateAndModificationDatesOfInteger } from './base-dto-with-create-and-modification-dates-of-integer.interface';

export type MzPriceListAutoUpdateSchedule = BaseDtoWithCreateAndModificationDatesOfInteger & { 'PriceListId'?: number; 'CronExpr'?: string | null; 'NextUpdateStart'?: string; 'AutoUpdateScheduleState'?: number; 'ExpirationDate'?: string | null; 'FailAttemptsCount'?: number; };
