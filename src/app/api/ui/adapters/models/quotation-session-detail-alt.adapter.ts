import { ApiQuotationSessionDetailAltDto } from '../../../swagger/models/api-quotation-session-detail';
import { QuotationSessionDetailAlt } from '../../models/quotation-session-detail-alt.interface';
import { okeiCodeMarketAdapter } from './okei-code-market.adapter';
import { okpd2CodeMarketAdapter } from './okpd-2-code-market.adapter';
import { quotationSessionKtruCharacteristicAltAdapter } from './quotation-session-ktru-characteristic-alt.adapter';
import { truTypeEnumAdapter } from '../enums/tru-type-enum.adapter';

export const quotationSessionDetailAltAdapter = (source?: ApiQuotationSessionDetailAltDto | null): QuotationSessionDetailAlt => {
  return {
    classificatorCode: source?.ClassificatorCode,
    classificatorDescription: source?.ClassificatorDescription,
    description: source?.Description,
    id: source?.Id,
    ktruCharacteristicValues: source?.KtruCharacteristicValues?.map((item) => quotationSessionKtruCharacteristicAltAdapter(item)),
    ktruCode: source?.KtruCode,
    ktruName: source?.KtruName,
    ktruVersionNumber: source?.KtruVersionNumber,
    okei: source?.Okei === null ? undefined : okeiCodeMarketAdapter(source?.Okei),
    okpd2Codes: source?.Okpd2Codes?.map((item) => okpd2CodeMarketAdapter(item)),
    productName: source?.ProductName,
    quantity: source?.Quantity,
    type: source?.Type === null ? undefined : truTypeEnumAdapter(source?.Type),
    unitPrice: source?.UnitPrice,
  };
}
