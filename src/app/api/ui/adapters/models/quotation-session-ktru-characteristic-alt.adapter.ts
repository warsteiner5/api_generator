import { ApiQuotationSessionKtruCharacteristicAltDto } from '../../../swagger/models/api-quotation-session-ktru-characteristic';
import { QuotationSessionKtruCharacteristicAlt } from '../../models/quotation-session-ktru-characteristic-alt.interface';

export const quotationSessionKtruCharacteristicAltAdapter = (source?: ApiQuotationSessionKtruCharacteristicAltDto | null): QuotationSessionKtruCharacteristicAlt => {
  return {
    id: source?.Id,
    valueIds: source?.ValueIds,
  };
}
