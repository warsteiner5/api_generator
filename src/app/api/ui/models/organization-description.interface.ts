import { TimeZoneInformation } from './time-zone-information.interface';

export interface OrganizationDescription {
  createYear: number;
  description: string;
  fullName: string;
  timeZone: TimeZoneInformation;
  yearlyIncome: number;
}
