import { CartItem } from '../../models/cart-item.interface';
import { ApiCartItemDto } from '../../../swagger/models/api-cart-item-dto';
import { adaptApiCartItemDocumentDto } from './api-cart-item-document-dto.adapter';

export function adaptApiCartItemDto(source?: CartItem | null): ApiCartItemDto {
  return {
    Comment: source?.comment,
    CreatedOn: source?.createdOn,
    CustomerPrice: source?.customerPrice,
    DeliveryAddress: source?.deliveryAddress,
    DeliveryTime: source?.deliveryTime,
    Documents: (source?.documents ?? []).map((item) => adaptApiCartItemDocumentDto(item)),
    Id: source?.id,
    IsActual: source?.isActual,
    IsChecked: source?.isChecked,
    IsDigitalFillingForm: source?.isDigitalFillingForm,
    IsFavorite: source?.isFavorite,
    IsFederalLawsEnable: source?.isFederalLawsEnable,
    KladrRegionCode: source?.kladrRegionCode,
    KsrCode: source?.ksrCode,
    KsrName: source?.ksrName,
    KsrUnit: source?.ksrUnit,
    LastModificationDate: source?.lastModificationDate,
    MainPictureId: source?.mainPictureId,
    MeasureUnit: source?.measureUnit,
    OrderName: source?.orderName,
    OriginPrice: source?.originPrice,
    ParticipantOfferId: source?.participantOfferId,
    PlanedDealSignDate: source?.planedDealSignDate,
    Price: source?.price,
    ProductName: source?.productName,
    Quantity: source?.quantity,
    SupplierOrganizationGuid: source?.supplierOrganizationGuid,
    SupplierOrganizationId: source?.supplierOrganizationId,
    SupplierOrganizationInn: source?.supplierOrganizationInn,
    SupplierOrganizationName: source?.supplierOrganizationName,
    SupplierOrganizationSource: source?.supplierOrganizationSource,
    ZmoFinanceSource: source?.zmoFinanceSource,
    ZmoFzType: source?.zmoFzType,
  };
}
