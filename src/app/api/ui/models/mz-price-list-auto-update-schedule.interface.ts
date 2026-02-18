import { BaseDtoWithCreateAndModificationDatesOfIntegerAlt } from './base-dto-with-create-and-modification-dates-of-integer-alt.interface';

export type MzPriceListAutoUpdateSchedule = BaseDtoWithCreateAndModificationDatesOfIntegerAlt & { 'PriceListId'?: number; 'CronExpr'?: string | null; 'NextUpdateStart'?: string; 'AutoUpdateScheduleState'?: number; 'ExpirationDate'?: string | null; 'FailAttemptsCount'?: number; };
