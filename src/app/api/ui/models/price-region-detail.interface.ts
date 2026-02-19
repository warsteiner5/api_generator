import { EntityDtoOfInteger } from './entity-dto-of-integer.interface';
import { PriceTypesEnum } from '../enums/price-types.enum';

export type PriceRegionDetail = EntityDtoOfInteger & { 'UnitPrice'?: number | null; 'Quantity'?: number | null; 'MinQuantity'?: number | null; 'PossibleDeliveryBySeller'?: boolean | null; 'PossibleSelfDelivery'?: boolean | null; 'PossibleSendByTransportCompany'?: boolean | null; 'DeliveryPlace'?: string | null; 'KladrCode'?: string | null; 'KladrName'?: string | null; 'Type'?: PriceTypesEnum; };
