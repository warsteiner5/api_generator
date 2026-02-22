import { MarketWorkSchedule } from './market-work-schedule.interface';

// @ts-ignore
export interface MarketOfficeOrganizationContact {
  address: string;
  email: string;
  id: number;
  name: string;
  phoneNumbers: string[];
  workSchedules: MarketWorkSchedule[];
}
