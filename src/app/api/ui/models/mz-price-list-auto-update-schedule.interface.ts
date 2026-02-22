import { BaseDtoWithCreateAndModificationDatesOfInteger } from './base-dto-with-create-and-modification-dates-of-integer.interface';

// @ts-ignore
export interface MzPriceListAutoUpdateSchedule extends BaseDtoWithCreateAndModificationDatesOfInteger {
  priceListId: number;
  cronExpr: string;
  nextUpdateStart: string;
  autoUpdateScheduleState: number;
  expirationDate: string;
  failAttemptsCount: number;
}
