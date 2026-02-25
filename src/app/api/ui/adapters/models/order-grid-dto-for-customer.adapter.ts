import { ApiOrderGridDtoForCustomer } from '../../../swagger/models/api-order-grid-dto-for-customer';
import { OrderGridDtoForCustomer } from '../../models/order-grid-dto-for-customer.interface';
import { orderGridAdapter } from './order-grid.adapter';
import { organizationCountryAltEnumAdapter } from '../enums/organization-country-alt-enum.adapter';

export const orderGridDtoForCustomerAdapter = (source?: ApiOrderGridDtoForCustomer | null): OrderGridDtoForCustomer => {
  return {
    ...orderGridAdapter(source as unknown as Parameters<typeof orderGridAdapter>[0]),
    participantNameAndInn: source?.ParticipantNameAndInn,
    participantName: source?.ParticipantName,
    participantInn: source?.ParticipantInn,
    participantOrganizationCountry: source?.ParticipantOrganizationCountry === null ? undefined : organizationCountryAltEnumAdapter(source?.ParticipantOrganizationCountry),
    customerFullName: source?.CustomerFullName,
    customerOrganizationId: source?.CustomerOrganizationId,
    zmoFzTypeString: source?.ZmoFzTypeString,
    zmoFinanceSourceString: source?.ZmoFinanceSourceString,
    parentNotTookPlaceTradeId: source?.ParentNotTookPlaceTradeId,
  };
}
