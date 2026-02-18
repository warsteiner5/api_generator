import { QuotationSessionItem } from '../../models/quotation-session-item.interface';
import { ApiQuotationSessionItemDto } from '../../../swagger/models/api-quotation-session-item-dto';
import { adaptApiKtruCharacteristicDto } from './api-ktru-characteristic-dto.adapter';
import { adaptApiTruTypeEnum2 } from './api-tru-type-enum-2.adapter';

export function adaptApiQuotationSessionItemDto(source?: QuotationSessionItem | null): ApiQuotationSessionItemDto {
  return {
    Description: source?.description,
    Id: source?.id,
    KtruCharacteristics: (source?.ktruCharacteristics ?? []).map((item) => adaptApiKtruCharacteristicDto(item)),
    KtruCode: source?.ktruCode,
    KtruName: source?.ktruName,
    Name: source?.name,
    Okpd2Code: source?.okpd2Code,
    Okpd2Name: source?.okpd2Name,
    PositionNumber: source?.positionNumber,
    Price: source?.price,
    ProductType: adaptApiTruTypeEnum2(source?.productType),
    Quantity: source?.quantity,
    ShortOkeiName: source?.shortOkeiName,
    Sum: source?.sum,
  };
}
