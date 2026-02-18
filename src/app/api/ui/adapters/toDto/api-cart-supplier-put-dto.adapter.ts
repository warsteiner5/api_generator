import { CartSupplierPut } from '../../models/cart-supplier-put.interface';
import { ApiCartSupplierPutDto } from '../../../swagger/models/api-cart-supplier-put-dto';
import { adaptApiCartItemDocumentDto } from './api-cart-item-document-dto.adapter';

export function adaptApiCartSupplierPutDto(source?: CartSupplierPut | null): ApiCartSupplierPutDto {
  return {
    Comment: source?.comment,
    Documents: (source?.documents ?? []).map((item) => adaptApiCartItemDocumentDto(item)),
    IsDigitalFillingForm: source?.isDigitalFillingForm,
    IsFederalLawsEnable: source?.isFederalLawsEnable,
    OrderName: source?.orderName,
    PlanedDealSignDate: source?.planedDealSignDate,
    ZmoFinanceSource: source?.zmoFinanceSource,
    ZmoFzType: source?.zmoFzType,
  };
}
