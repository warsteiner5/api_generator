import { TimeZoneInformation } from './time-zone-information.interface';

// @ts-ignore
export interface OrganizationDescription {
  createYear: number;
  description: string;
  fullName: string;
  timeZone: TimeZoneInformation;
  yearlyIncome: number;
}
