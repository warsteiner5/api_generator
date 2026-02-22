import { EntityDtoOfInteger } from './entity-dto-of-integer.interface';
import { PriceTypesEnum } from '../enums/price-types.enum';

// @ts-ignore
export interface PriceRegionDetail extends EntityDtoOfInteger {
  unitPrice: number;
  quantity: number;
  minQuantity: number;
  possibleDeliveryBySeller: boolean;
  possibleSelfDelivery: boolean;
  possibleSendByTransportCompany: boolean;
  deliveryPlace: string;
  kladrCode: string;
  kladrName: string;
  type: PriceTypesEnum;
}
