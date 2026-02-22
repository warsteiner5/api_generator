import { ApiCartSupplierPutDto } from '../../../swagger/models/api-cart-supplier-put-dto';
import { CartSupplierPut } from '../../models/cart-supplier-put.interface';
import { cartItemDocumentAdapter } from './cart-item-document.adapter';

export const cartSupplierPutAdapter = (source?: ApiCartSupplierPutDto | null): CartSupplierPut => {
  return {
    comment: source?.Comment,
    documents: source?.Documents?.map((item) => cartItemDocumentAdapter(item)),
    isDigitalFillingForm: source?.IsDigitalFillingForm,
    isFederalLawsEnable: source?.IsFederalLawsEnable,
    orderName: source?.OrderName,
    planedDealSignDate: source?.PlanedDealSignDate,
    zmoFinanceSource: source?.ZmoFinanceSource,
    zmoFzType: source?.ZmoFzType,
  };
}
