import { ApiQuotationSessionItemDto } from '../../../swagger/models/api-quotation-session-item-dto';
import { QuotationSessionItem } from '../../models/quotation-session-item.interface';
import { ktruCharacteristicAdapter } from './ktru-characteristic.adapter';
import { truTypeEnum2Adapter } from '../enums/tru-type-enum-2.adapter';

export const quotationSessionItemAdapter = (source?: ApiQuotationSessionItemDto | null): QuotationSessionItem => {
  return {
    description: source?.Description,
    id: source?.Id,
    ktruCharacteristics: source?.KtruCharacteristics?.map((item) => ktruCharacteristicAdapter(item)),
    ktruCode: source?.KtruCode,
    ktruName: source?.KtruName,
    name: source?.Name,
    okpd2Code: source?.Okpd2Code,
    okpd2Name: source?.Okpd2Name,
    positionNumber: source?.PositionNumber,
    price: source?.Price,
    productType: source?.ProductType === null ? undefined : truTypeEnum2Adapter(source?.ProductType),
    quantity: source?.Quantity,
    shortOkeiName: source?.ShortOkeiName,
    sum: source?.Sum,
  };
}
