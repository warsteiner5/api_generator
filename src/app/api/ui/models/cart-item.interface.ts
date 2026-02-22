import { CartItemDocument } from './cart-item-document.interface';

// @ts-ignore
export interface CartItem {
  comment: string;
  createdOn: string;
  customerPrice: number;
  deliveryAddress: string;
  deliveryTime: string;
  documents: CartItemDocument[];
  id: string;
  isActual: boolean;
  isChecked: boolean;
  isDigitalFillingForm: boolean;
  isFavorite: boolean;
  isFederalLawsEnable: boolean;
  kladrRegionCode: string;
  ksrCode: string;
  ksrName: string;
  ksrUnit: string;
  lastModificationDate: string;
  mainPictureId: string;
  measureUnit: string;
  orderName: string;
  originPrice: number;
  participantOfferId: number;
  planedDealSignDate: string;
  price: number;
  productName: string;
  quantity: number;
  supplierOrganizationGuid: string;
  supplierOrganizationId: number;
  supplierOrganizationInn: string;
  supplierOrganizationName: string;
  supplierOrganizationSource: number;
  zmoFinanceSource: number;
  zmoFzType: number;
}
