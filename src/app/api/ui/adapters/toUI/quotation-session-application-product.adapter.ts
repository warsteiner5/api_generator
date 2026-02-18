import { ApiQuotationSessionApplicationProductDto } from '../../../swagger/models/api-quotation-session-application-product-dto';
import { QuotationSessionApplicationProduct } from '../../models/quotation-session-application-product.interface';

export function adaptQuotationSessionApplicationProductToUI(source?: ApiQuotationSessionApplicationProductDto | null): QuotationSessionApplicationProduct {
  return {
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    price: source?.Price ?? 0,
    quantity: source?.Quantity ?? 0,
    shortOkeiName: source?.ShortOkeiName ?? '',
    sum: source?.Sum ?? 0,
  };
}
