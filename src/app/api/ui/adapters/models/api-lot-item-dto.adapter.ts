import { LotItem } from '../../models/lot-item.interface';
import { ApiLotItemDto } from '../../../swagger/models/api-lot-item-dto';
import { apiLotItemCharacteristicDtoAdapter } from './api-lot-item-characteristic-dto.adapter';
import { apiOkpd2CodeDto2Adapter } from './api-okpd-2-code-dto-2.adapter';
import { apiTruTypeEnum2Adapter } from '../enums/api-tru-type-enum-2.adapter';

export const apiLotItemDtoAdapter = (source?: LotItem | null): ApiLotItemDto => {
  return {
    CountryConfirmation: source?.countryConfirmation,
    Description: source?.description,
    Id: source?.id,
    KtruCode: source?.ktruCode,
    KtruName: source?.ktruName,
    KtruVersionNumber: source?.ktruVersionNumber,
    LotItemCharacteristics: source?.lotItemCharacteristics?.map((item) => apiLotItemCharacteristicDtoAdapter(item)),
    ManufacturerCountryCode: source?.manufacturerCountryCode,
    Name: source?.name,
    OkeiCode: source?.okeiCode,
    OkeiName: source?.okeiName,
    Okpd2Codes: source?.okpd2Codes?.map((item) => apiOkpd2CodeDto2Adapter(item)),
    Okved2Code: source?.okved2Code,
    Okved2Name: source?.okved2Name,
    OrderNumber: source?.orderNumber,
    Quantity: source?.quantity,
    QuantityUndefined: source?.quantityUndefined,
    Sum: source?.sum,
    TradeId: source?.tradeId,
    TradeLotId: source?.tradeLotId,
    Type: source?.type === null ? undefined : apiTruTypeEnum2Adapter(source?.type),
    UniqueId: source?.uniqueId,
    UnitPrice: source?.unitPrice,
  };
}
