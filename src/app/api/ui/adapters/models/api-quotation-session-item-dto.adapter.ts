import { QuotationSessionItem } from '../../models/quotation-session-item.interface';
import { ApiQuotationSessionItemDto } from '../../../swagger/models/api-quotation-session-item-dto';
import { apiKtruCharacteristicDtoAdapter } from './api-ktru-characteristic-dto.adapter';
import { apiTruTypeEnum2Adapter } from '../enums/api-tru-type-enum-2.adapter';

export const apiQuotationSessionItemDtoAdapter = (source?: QuotationSessionItem | null): ApiQuotationSessionItemDto => {
  return {
    Description: source?.description,
    Id: source?.id,
    KtruCharacteristics: source?.ktruCharacteristics?.map((item) => apiKtruCharacteristicDtoAdapter(item)),
    KtruCode: source?.ktruCode,
    KtruName: source?.ktruName,
    Name: source?.name,
    Okpd2Code: source?.okpd2Code,
    Okpd2Name: source?.okpd2Name,
    PositionNumber: source?.positionNumber,
    Price: source?.price,
    ProductType: source?.productType === null ? undefined : apiTruTypeEnum2Adapter(source?.productType),
    Quantity: source?.quantity,
    ShortOkeiName: source?.shortOkeiName,
    Sum: source?.sum,
  };
}
