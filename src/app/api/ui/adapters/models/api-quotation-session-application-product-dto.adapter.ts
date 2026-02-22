import { QuotationSessionApplicationProduct } from '../../models/quotation-session-application-product.interface';
import { ApiQuotationSessionApplicationProductDto } from '../../../swagger/models/api-quotation-session-application-product-dto';

export const apiQuotationSessionApplicationProductDtoAdapter = (source?: QuotationSessionApplicationProduct | null): ApiQuotationSessionApplicationProductDto => {
  return {
    Id: source?.id,
    Name: source?.name,
    Price: source?.price,
    Quantity: source?.quantity,
    ShortOkeiName: source?.shortOkeiName,
    Sum: source?.sum,
  };
}
