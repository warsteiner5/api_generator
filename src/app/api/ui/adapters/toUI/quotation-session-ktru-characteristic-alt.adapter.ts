import { ApiQuotationSessionKtruCharacteristicAltDto } from '../../../swagger/models/api-quotation-session-ktru-characteristic';
import { QuotationSessionKtruCharacteristicAlt } from '../../models/quotation-session-ktru-characteristic-alt.interface';

export function adaptQuotationSessionKtruCharacteristicAltToUI(source?: ApiQuotationSessionKtruCharacteristicAltDto | null): QuotationSessionKtruCharacteristicAlt {
  return {
    id: source?.Id ?? 0,
    valueIds: source?.ValueIds ?? [],
  };
}
