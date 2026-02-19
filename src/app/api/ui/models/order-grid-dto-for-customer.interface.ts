import { OrderGrid } from './order-grid.interface';
import { OrganizationCountryAltEnum } from '../enums/organization-country-alt.enum';

export type OrderGridDtoForCustomer = OrderGrid & { 'ParticipantNameAndInn'?: string | null; 'ParticipantName'?: string | null; 'ParticipantInn'?: string | null; 'ParticipantOrganizationCountry'?: OrganizationCountryAltEnum; 'CustomerFullName'?: string | null; 'CustomerOrganizationId'?: number; 'ZmoFzTypeString'?: string | null; 'ZmoFinanceSourceString'?: string | null; 'ParentNotTookPlaceTradeId'?: number | null; };
