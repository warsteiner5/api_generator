import { ApiLotItemDto } from '../../../swagger/models/api-lot-item-dto';
import { LotItem } from '../../models/lot-item.interface';
import { lotItemCharacteristicAdapter } from './lot-item-characteristic.adapter';
import { okpd2CodeDto2Adapter } from './okpd-2-code-dto-2.adapter';
import { truTypeEnum2Adapter } from '../enums/tru-type-enum-2.adapter';

export const lotItemAdapter = (source?: ApiLotItemDto | null): LotItem => {
  return {
    countryConfirmation: source?.CountryConfirmation,
    description: source?.Description,
    id: source?.Id,
    ktruCode: source?.KtruCode,
    ktruName: source?.KtruName,
    ktruVersionNumber: source?.KtruVersionNumber,
    lotItemCharacteristics: source?.LotItemCharacteristics?.map((item) => lotItemCharacteristicAdapter(item)),
    manufacturerCountryCode: source?.ManufacturerCountryCode,
    name: source?.Name,
    okeiCode: source?.OkeiCode,
    okeiName: source?.OkeiName,
    okpd2Codes: source?.Okpd2Codes?.map((item) => okpd2CodeDto2Adapter(item)),
    okved2Code: source?.Okved2Code,
    okved2Name: source?.Okved2Name,
    orderNumber: source?.OrderNumber,
    quantity: source?.Quantity,
    quantityUndefined: source?.QuantityUndefined,
    sum: source?.Sum,
    tradeId: source?.TradeId,
    tradeLotId: source?.TradeLotId,
    type: source?.Type === null ? undefined : truTypeEnum2Adapter(source?.Type),
    uniqueId: source?.UniqueId,
    unitPrice: source?.UnitPrice,
  };
}
