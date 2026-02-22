import { ApiCartItemDto } from '../../../swagger/models/api-cart-item-dto';
import { CartItem } from '../../models/cart-item.interface';
import { cartItemDocumentAdapter } from './cart-item-document.adapter';

export const cartItemAdapter = (source?: ApiCartItemDto | null): CartItem => {
  return {
    comment: source?.Comment,
    createdOn: source?.CreatedOn,
    customerPrice: source?.CustomerPrice,
    deliveryAddress: source?.DeliveryAddress,
    deliveryTime: source?.DeliveryTime,
    documents: source?.Documents?.map((item) => cartItemDocumentAdapter(item)),
    id: source?.Id,
    isActual: source?.IsActual,
    isChecked: source?.IsChecked,
    isDigitalFillingForm: source?.IsDigitalFillingForm,
    isFavorite: source?.IsFavorite,
    isFederalLawsEnable: source?.IsFederalLawsEnable,
    kladrRegionCode: source?.KladrRegionCode,
    ksrCode: source?.KsrCode,
    ksrName: source?.KsrName,
    ksrUnit: source?.KsrUnit,
    lastModificationDate: source?.LastModificationDate,
    mainPictureId: source?.MainPictureId,
    measureUnit: source?.MeasureUnit,
    orderName: source?.OrderName,
    originPrice: source?.OriginPrice,
    participantOfferId: source?.ParticipantOfferId,
    planedDealSignDate: source?.PlanedDealSignDate,
    price: source?.Price,
    productName: source?.ProductName,
    quantity: source?.Quantity,
    supplierOrganizationGuid: source?.SupplierOrganizationGuid,
    supplierOrganizationId: source?.SupplierOrganizationId,
    supplierOrganizationInn: source?.SupplierOrganizationInn,
    supplierOrganizationName: source?.SupplierOrganizationName,
    supplierOrganizationSource: source?.SupplierOrganizationSource,
    zmoFinanceSource: source?.ZmoFinanceSource,
    zmoFzType: source?.ZmoFzType,
  };
}
