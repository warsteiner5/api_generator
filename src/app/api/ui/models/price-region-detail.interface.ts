import { EntityDtoOfIntegerAlt } from './entity-dto-of-integer-alt.interface';
import { PriceTypesEnum } from '../enums/price-types.enum';

export type PriceRegionDetail = EntityDtoOfIntegerAlt & { 'UnitPrice'?: number | null; 'Quantity'?: number | null; 'MinQuantity'?: number | null; 'PossibleDeliveryBySeller'?: boolean | null; 'PossibleSelfDelivery'?: boolean | null; 'PossibleSendByTransportCompany'?: boolean | null; 'DeliveryPlace'?: string | null; 'KladrCode'?: string | null; 'KladrName'?: string | null; 'Type'?: PriceTypesEnum; };
