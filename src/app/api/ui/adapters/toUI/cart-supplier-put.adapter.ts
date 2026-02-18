import { ApiCartSupplierPutDto } from '../../../swagger/models/api-cart-supplier-put-dto';
import { CartSupplierPut } from '../../models/cart-supplier-put.interface';
import { adaptCartItemDocumentToUI } from './cart-item-document.adapter';

export function adaptCartSupplierPutToUI(source?: ApiCartSupplierPutDto | null): CartSupplierPut {
  return {
    comment: source?.Comment ?? '',
    documents: (source?.Documents ?? []).map((item) => adaptCartItemDocumentToUI(item)),
    isDigitalFillingForm: source?.IsDigitalFillingForm ?? false,
    isFederalLawsEnable: source?.IsFederalLawsEnable ?? false,
    orderName: source?.OrderName ?? '',
    planedDealSignDate: source?.PlanedDealSignDate ?? '',
    zmoFinanceSource: source?.ZmoFinanceSource ?? 0,
    zmoFzType: source?.ZmoFzType ?? 0,
  };
}
