/* tslint:disable */
/* eslint-disable */
import { ApiMarketWorkScheduleDto } from '../models/api-market-work-schedule-dto';
export interface ApiMarketOfficeOrganizationContactDto {
  Address?: string | null;
  Email?: string | null;
  Id?: number;
  Name?: string | null;
  PhoneNumbers?: Array<string> | null;
  WorkSchedules?: Array<ApiMarketWorkScheduleDto> | null;
}
