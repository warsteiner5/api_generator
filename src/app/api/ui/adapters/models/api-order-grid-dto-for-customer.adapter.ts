import { OrderGridDtoForCustomer } from '../../models/order-grid-dto-for-customer.interface';
import { ApiOrderGridDtoForCustomer } from '../../../swagger/models/api-order-grid-dto-for-customer';
import { apiOrderGridDtoAdapter } from './api-order-grid-dto.adapter';
import { apiOrganizationCountryAltEnumAdapter } from '../enums/api-organization-country.adapter';

export const apiOrderGridDtoForCustomerAdapter = (source?: OrderGridDtoForCustomer | null): ApiOrderGridDtoForCustomer => {
  return {
    ...apiOrderGridDtoAdapter(source as unknown as Parameters<typeof apiOrderGridDtoAdapter>[0]),
    ParticipantNameAndInn: source?.participantNameAndInn,
    ParticipantName: source?.participantName,
    ParticipantInn: source?.participantInn,
    ParticipantOrganizationCountry: source?.participantOrganizationCountry === null ? undefined : apiOrganizationCountryAltEnumAdapter(source?.participantOrganizationCountry),
    CustomerFullName: source?.customerFullName,
    CustomerOrganizationId: source?.customerOrganizationId,
    ZmoFzTypeString: source?.zmoFzTypeString,
    ZmoFinanceSourceString: source?.zmoFinanceSourceString,
    ParentNotTookPlaceTradeId: source?.parentNotTookPlaceTradeId,
  };
}
