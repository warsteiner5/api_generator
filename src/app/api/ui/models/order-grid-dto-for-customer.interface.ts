import { OrderGrid } from './order-grid.interface';
import { OrganizationCountryAltEnum } from '../enums/organization-country-alt.enum';

// @ts-ignore
export interface OrderGridDtoForCustomer extends OrderGrid {
  participantNameAndInn: string;
  participantName: string;
  participantInn: string;
  participantOrganizationCountry: OrganizationCountryAltEnum;
  customerFullName: string;
  customerOrganizationId: number;
  zmoFzTypeString: string;
  zmoFinanceSourceString: string;
  parentNotTookPlaceTradeId: number;
}
