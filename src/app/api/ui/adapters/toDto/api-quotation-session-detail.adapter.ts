import { QuotationSessionDetailAlt } from '../../models/quotation-session-detail-alt.interface';
import { ApiQuotationSessionDetailAltDto } from '../../../swagger/models/api-quotation-session-detail';
import { adaptApiOkeiCodeMarketDto } from './api-okei-code-market-dto.adapter';
import { adaptApiOkpd2CodeMarketDto } from './api-okpd-2-code-market-dto.adapter';
import { adaptApiQuotationSessionKtruCharacteristicAltDto } from './api-quotation-session-ktru-characteristic.adapter';
import { adaptApiTruTypeEnum } from './api-tru-type-enum.adapter';

export function adaptApiQuotationSessionDetailAltDto(source?: QuotationSessionDetailAlt | null): ApiQuotationSessionDetailAltDto {
  return {
    ClassificatorCode: source?.classificatorCode,
    ClassificatorDescription: source?.classificatorDescription,
    Description: source?.description,
    Id: source?.id,
    KtruCharacteristicValues: (source?.ktruCharacteristicValues ?? []).map((item) => adaptApiQuotationSessionKtruCharacteristicAltDto(item)),
    KtruCode: source?.ktruCode,
    KtruName: source?.ktruName,
    KtruVersionNumber: source?.ktruVersionNumber,
    Okei: adaptApiOkeiCodeMarketDto(source?.okei),
    Okpd2Codes: (source?.okpd2Codes ?? []).map((item) => adaptApiOkpd2CodeMarketDto(item)),
    ProductName: source?.productName,
    Quantity: source?.quantity,
    Type: adaptApiTruTypeEnum(source?.type),
    UnitPrice: source?.unitPrice,
  };
}
