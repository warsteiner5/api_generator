import { LotItem } from '../../models/lot-item.interface';
import { ApiLotItemDto } from '../../../swagger/models/api-lot-item-dto';
import { adaptApiLotItemCharacteristicDto } from './api-lot-item-characteristic-dto.adapter';
import { adaptApiOkpd2CodeDto2 } from './api-okpd-2-code-dto-2.adapter';
import { adaptApiTruTypeEnum2 } from './api-tru-type-enum-2.adapter';

export function adaptApiLotItemDto(source?: LotItem | null): ApiLotItemDto {
  return {
    CountryConfirmation: source?.countryConfirmation,
    Description: source?.description,
    Id: source?.id,
    KtruCode: source?.ktruCode,
    KtruName: source?.ktruName,
    KtruVersionNumber: source?.ktruVersionNumber,
    LotItemCharacteristics: (source?.lotItemCharacteristics ?? []).map((item) => adaptApiLotItemCharacteristicDto(item)),
    ManufacturerCountryCode: source?.manufacturerCountryCode,
    Name: source?.name,
    OkeiCode: source?.okeiCode,
    OkeiName: source?.okeiName,
    Okpd2Codes: (source?.okpd2Codes ?? []).map((item) => adaptApiOkpd2CodeDto2(item)),
    Okved2Code: source?.okved2Code,
    Okved2Name: source?.okved2Name,
    OrderNumber: source?.orderNumber,
    Quantity: source?.quantity,
    QuantityUndefined: source?.quantityUndefined,
    Sum: source?.sum,
    TradeId: source?.tradeId,
    TradeLotId: source?.tradeLotId,
    Type: adaptApiTruTypeEnum2(source?.type),
    UniqueId: source?.uniqueId,
    UnitPrice: source?.unitPrice,
  };
}
