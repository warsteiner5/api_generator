import { QuotationSessionKtruCharacteristicAlt } from '../../models/quotation-session-ktru-characteristic-alt.interface';
import { ApiQuotationSessionKtruCharacteristicAltDto } from '../../../swagger/models/api-quotation-session-ktru-characteristic';

export const apiQuotationSessionKtruCharacteristicAltDtoAdapter = (source?: QuotationSessionKtruCharacteristicAlt | null): ApiQuotationSessionKtruCharacteristicAltDto => {
  return {
    Id: source?.id,
    ValueIds: source?.valueIds,
  };
}
