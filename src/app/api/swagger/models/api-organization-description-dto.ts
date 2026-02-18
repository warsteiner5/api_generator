/* tslint:disable */
/* eslint-disable */
import { ApiTimeZoneInformationDto } from '../models/api-time-zone-information-dto';
export interface ApiOrganizationDescriptionDto {
  CreateYear?: number | null;
  Description?: string | null;
  FullName?: string | null;
  TimeZone?: ApiTimeZoneInformationDto | null;
  YearlyIncome?: number | null;
}
