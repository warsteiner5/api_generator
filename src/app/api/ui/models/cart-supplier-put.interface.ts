import { CartItemDocument } from './cart-item-document.interface';

// @ts-ignore
export interface CartSupplierPut {
  comment: string;
  documents: CartItemDocument[];
  isDigitalFillingForm: boolean;
  isFederalLawsEnable: boolean;
  orderName: string;
  planedDealSignDate: string;
  zmoFinanceSource: number;
  zmoFzType: number;
}
