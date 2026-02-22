import { CartItem } from './cart-item.interface';

// @ts-ignore
export interface Cart {
  businessOperatorId: number;
  clientSessionId: string;
  createdOn: string;
  deliveryAddress: string;
  deliveryTime: string;
  employeeId: number;
  id: string;
  isFederalLawsEnable: boolean;
  items: CartItem[];
  kladrRegionCode: string;
  lastModificationDate: string;
  zmoFinanceSource: number;
  zmoFzType: number;
}
