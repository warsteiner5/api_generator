import { ApiLotItemDto } from '../../../swagger/models/api-lot-item-dto';
import { LotItem } from '../../models/lot-item.interface';
import { adaptLotItemCharacteristicToUI } from './lot-item-characteristic.adapter';
import { adaptOkpd2CodeDto2ToUI } from './okpd-2-code-dto-2.adapter';
import { adaptTruTypeEnum2ToUI } from './tru-type-enum-2.adapter';

export function adaptLotItemToUI(source?: ApiLotItemDto | null): LotItem {
  return {
    countryConfirmation: source?.CountryConfirmation ?? '',
    description: source?.Description ?? '',
    id: source?.Id ?? 0,
    ktruCode: source?.KtruCode ?? '',
    ktruName: source?.KtruName ?? '',
    ktruVersionNumber: source?.KtruVersionNumber ?? 0,
    lotItemCharacteristics: (source?.LotItemCharacteristics ?? []).map((item) => adaptLotItemCharacteristicToUI(item)),
    manufacturerCountryCode: source?.ManufacturerCountryCode ?? '',
    name: source?.Name ?? '',
    okeiCode: source?.OkeiCode ?? '',
    okeiName: source?.OkeiName ?? '',
    okpd2Codes: (source?.Okpd2Codes ?? []).map((item) => adaptOkpd2CodeDto2ToUI(item)),
    okved2Code: source?.Okved2Code ?? '',
    okved2Name: source?.Okved2Name ?? '',
    orderNumber: source?.OrderNumber ?? 0,
    quantity: source?.Quantity ?? 0,
    quantityUndefined: source?.QuantityUndefined ?? false,
    sum: source?.Sum ?? 0,
    tradeId: source?.TradeId ?? 0,
    tradeLotId: source?.TradeLotId ?? 0,
    type: adaptTruTypeEnum2ToUI(source?.Type),
    uniqueId: source?.UniqueId ?? '',
    unitPrice: source?.UnitPrice ?? 0,
  };
}
