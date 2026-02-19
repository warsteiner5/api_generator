/* tslint:disable */
/* eslint-disable */
import { ApiOrderGridDto } from '../models/api-order-grid-dto';
import { ApiOrganizationCountryAltEnum } from '../models/api-organization-country';
export type ApiOrderGridDtoForCustomer = ApiOrderGridDto & {
'ParticipantNameAndInn'?: string | null;
'ParticipantName'?: string | null;
'ParticipantInn'?: string | null;
'ParticipantOrganizationCountry'?: ApiOrganizationCountryAltEnum;
'CustomerFullName'?: string | null;
'CustomerOrganizationId'?: number;
'ZmoFzTypeString'?: string | null;
'ZmoFinanceSourceString'?: string | null;
'ParentNotTookPlaceTradeId'?: number | null;
};
