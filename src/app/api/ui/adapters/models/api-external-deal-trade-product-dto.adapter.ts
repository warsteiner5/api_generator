import { ExternalDealTradeProduct } from '../../models/external-deal-trade-product.interface';
import { ApiExternalDealTradeProductDto } from '../../../swagger/models/api-external-deal-trade-product-dto';
import { apiTruTypeEnum2Adapter } from '../enums/api-tru-type-enum-2.adapter';

export const apiExternalDealTradeProductDtoAdapter = (source?: ExternalDealTradeProduct | null): ApiExternalDealTradeProductDto => {
  return {
    LotItemId: source?.lotItemId,
    Name: source?.name,
    OkeiCode: source?.okeiCode,
    OkeiName: source?.okeiName,
    Okpd2Code: source?.okpd2Code,
    Okpd2Name: source?.okpd2Name,
    Price: source?.price,
    Quantity: source?.quantity,
    Sum: source?.sum,
    Type: source?.type === null ? undefined : apiTruTypeEnum2Adapter(source?.type),
  };
}
