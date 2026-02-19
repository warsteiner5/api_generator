/* tslint:disable */
/* eslint-disable */
import { ApiEntityDtoOfInteger } from '../models/api-entity-dto-of-integer';
import { ApiPriceTypesEnum } from '../models/api-price-types-enum';
export type ApiPriceRegionDetailDto = ApiEntityDtoOfInteger & {
'UnitPrice'?: number | null;
'Quantity'?: number | null;
'MinQuantity'?: number | null;
'PossibleDeliveryBySeller'?: boolean | null;
'PossibleSelfDelivery'?: boolean | null;
'PossibleSendByTransportCompany'?: boolean | null;
'DeliveryPlace'?: string | null;
'KladrCode'?: string | null;
'KladrName'?: string | null;
'Type'?: ApiPriceTypesEnum;
};
