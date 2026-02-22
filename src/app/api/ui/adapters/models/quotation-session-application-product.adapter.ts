import { ApiQuotationSessionApplicationProductDto } from '../../../swagger/models/api-quotation-session-application-product-dto';
import { QuotationSessionApplicationProduct } from '../../models/quotation-session-application-product.interface';

export const quotationSessionApplicationProductAdapter = (source?: ApiQuotationSessionApplicationProductDto | null): QuotationSessionApplicationProduct => {
  return {
    id: source?.Id,
    name: source?.Name,
    price: source?.Price,
    quantity: source?.Quantity,
    shortOkeiName: source?.ShortOkeiName,
    sum: source?.Sum,
  };
}
