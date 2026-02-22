import { OrderAgreementDetailAlt } from '../../models/order-agreement-detail-alt.interface';
import { ApiOrderAgreementDetailAltDto } from '../../../swagger/models/api-order-agreement-detail';

export const apiOrderAgreementDetailAltDtoAdapter = (source?: OrderAgreementDetailAlt | null): ApiOrderAgreementDetailAltDto => {
  return {
    Price: source?.price,
    PriceOfferId: source?.priceOfferId,
    Quantity: source?.quantity,
  };
}
