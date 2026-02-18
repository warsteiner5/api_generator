import { ApiQuotationSessionItemDto } from '../../../swagger/models/api-quotation-session-item-dto';
import { QuotationSessionItem } from '../../models/quotation-session-item.interface';
import { adaptKtruCharacteristicToUI } from './ktru-characteristic.adapter';
import { adaptTruTypeEnum2ToUI } from './tru-type-enum-2.adapter';

export function adaptQuotationSessionItemToUI(source?: ApiQuotationSessionItemDto | null): QuotationSessionItem {
  return {
    description: source?.Description ?? '',
    id: source?.Id ?? 0,
    ktruCharacteristics: (source?.KtruCharacteristics ?? []).map((item) => adaptKtruCharacteristicToUI(item)),
    ktruCode: source?.KtruCode ?? '',
    ktruName: source?.KtruName ?? '',
    name: source?.Name ?? '',
    okpd2Code: source?.Okpd2Code ?? '',
    okpd2Name: source?.Okpd2Name ?? '',
    positionNumber: source?.PositionNumber ?? 0,
    price: source?.Price ?? 0,
    productType: adaptTruTypeEnum2ToUI(source?.ProductType),
    quantity: source?.Quantity ?? 0,
    shortOkeiName: source?.ShortOkeiName ?? '',
    sum: source?.Sum ?? 0,
  };
}
