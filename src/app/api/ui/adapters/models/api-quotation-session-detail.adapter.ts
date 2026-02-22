import { QuotationSessionDetailAlt } from '../../models/quotation-session-detail-alt.interface';
import { ApiQuotationSessionDetailAltDto } from '../../../swagger/models/api-quotation-session-detail';
import { apiOkeiCodeMarketDtoAdapter } from './api-okei-code-market-dto.adapter';
import { apiOkpd2CodeMarketDtoAdapter } from './api-okpd-2-code-market-dto.adapter';
import { apiQuotationSessionKtruCharacteristicAltDtoAdapter } from './api-quotation-session-ktru-characteristic.adapter';
import { apiTruTypeEnumAdapter } from '../enums/api-tru-type-enum.adapter';

export const apiQuotationSessionDetailAltDtoAdapter = (source?: QuotationSessionDetailAlt | null): ApiQuotationSessionDetailAltDto => {
  return {
    ClassificatorCode: source?.classificatorCode,
    ClassificatorDescription: source?.classificatorDescription,
    Description: source?.description,
    Id: source?.id,
    KtruCharacteristicValues: source?.ktruCharacteristicValues?.map((item) => apiQuotationSessionKtruCharacteristicAltDtoAdapter(item)),
    KtruCode: source?.ktruCode,
    KtruName: source?.ktruName,
    KtruVersionNumber: source?.ktruVersionNumber,
    Okei: source?.okei === null ? undefined : apiOkeiCodeMarketDtoAdapter(source?.okei),
    Okpd2Codes: source?.okpd2Codes?.map((item) => apiOkpd2CodeMarketDtoAdapter(item)),
    ProductName: source?.productName,
    Quantity: source?.quantity,
    Type: source?.type === null ? undefined : apiTruTypeEnumAdapter(source?.type),
    UnitPrice: source?.unitPrice,
  };
}
