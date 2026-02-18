import { ApiCartItemDto } from '../../../swagger/models/api-cart-item-dto';
import { CartItem } from '../../models/cart-item.interface';
import { adaptCartItemDocumentToUI } from './cart-item-document.adapter';

export function adaptCartItemToUI(source?: ApiCartItemDto | null): CartItem {
  return {
    comment: source?.Comment ?? '',
    createdOn: source?.CreatedOn ?? '',
    customerPrice: source?.CustomerPrice ?? 0,
    deliveryAddress: source?.DeliveryAddress ?? '',
    deliveryTime: source?.DeliveryTime ?? '',
    documents: (source?.Documents ?? []).map((item) => adaptCartItemDocumentToUI(item)),
    id: source?.Id ?? '',
    isActual: source?.IsActual ?? false,
    isChecked: source?.IsChecked ?? false,
    isDigitalFillingForm: source?.IsDigitalFillingForm ?? false,
    isFavorite: source?.IsFavorite ?? false,
    isFederalLawsEnable: source?.IsFederalLawsEnable ?? false,
    kladrRegionCode: source?.KladrRegionCode ?? '',
    ksrCode: source?.KsrCode ?? '',
    ksrName: source?.KsrName ?? '',
    ksrUnit: source?.KsrUnit ?? '',
    lastModificationDate: source?.LastModificationDate ?? '',
    mainPictureId: source?.MainPictureId ?? '',
    measureUnit: source?.MeasureUnit ?? '',
    orderName: source?.OrderName ?? '',
    originPrice: source?.OriginPrice ?? 0,
    participantOfferId: source?.ParticipantOfferId ?? 0,
    planedDealSignDate: source?.PlanedDealSignDate ?? '',
    price: source?.Price ?? 0,
    productName: source?.ProductName ?? '',
    quantity: source?.Quantity ?? 0,
    supplierOrganizationGuid: source?.SupplierOrganizationGuid ?? '',
    supplierOrganizationId: source?.SupplierOrganizationId ?? 0,
    supplierOrganizationInn: source?.SupplierOrganizationInn ?? '',
    supplierOrganizationName: source?.SupplierOrganizationName ?? '',
    supplierOrganizationSource: source?.SupplierOrganizationSource ?? 0,
    zmoFinanceSource: source?.ZmoFinanceSource ?? 0,
    zmoFzType: source?.ZmoFzType ?? 0,
  };
}
