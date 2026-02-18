import { TruTypeEnum } from '../enums/tru-type.enum';

export interface OrderDetailAlt {
  cartItemId: string;
  deliveryPlace: string;
  deliveryTerms: string;
  kladrRegionCode: string;
  ksrCode: string;
  ksrUnitQuantity: number;
  offerId: number;
  quantity: number;
  type: TruTypeEnum;
  unitPrice: number;
  unitPriceRegion: string;
}
