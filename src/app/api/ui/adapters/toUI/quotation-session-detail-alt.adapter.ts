import { ApiQuotationSessionDetailAltDto } from '../../../swagger/models/api-quotation-session-detail';
import { QuotationSessionDetailAlt } from '../../models/quotation-session-detail-alt.interface';
import { adaptOkeiCodeMarketToUI } from './okei-code-market.adapter';
import { adaptOkpd2CodeMarketToUI } from './okpd-2-code-market.adapter';
import { adaptQuotationSessionKtruCharacteristicAltToUI } from './quotation-session-ktru-characteristic-alt.adapter';
import { adaptTruTypeEnumToUI } from './tru-type-enum.adapter';

export function adaptQuotationSessionDetailAltToUI(source?: ApiQuotationSessionDetailAltDto | null): QuotationSessionDetailAlt {
  return {
    classificatorCode: source?.ClassificatorCode ?? '',
    classificatorDescription: source?.ClassificatorDescription ?? '',
    description: source?.Description ?? '',
    id: source?.Id ?? 0,
    ktruCharacteristicValues: (source?.KtruCharacteristicValues ?? []).map((item) => adaptQuotationSessionKtruCharacteristicAltToUI(item)),
    ktruCode: source?.KtruCode ?? '',
    ktruName: source?.KtruName ?? '',
    ktruVersionNumber: source?.KtruVersionNumber ?? 0,
    okei: adaptOkeiCodeMarketToUI(source?.Okei),
    okpd2Codes: (source?.Okpd2Codes ?? []).map((item) => adaptOkpd2CodeMarketToUI(item)),
    productName: source?.ProductName ?? '',
    quantity: source?.Quantity ?? 0,
    type: adaptTruTypeEnumToUI(source?.Type),
    unitPrice: source?.UnitPrice ?? 0,
  };
}
