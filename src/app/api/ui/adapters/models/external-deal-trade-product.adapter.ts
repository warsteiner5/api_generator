import { ApiExternalDealTradeProductDto } from '../../../swagger/models/api-external-deal-trade-product-dto';
import { ExternalDealTradeProduct } from '../../models/external-deal-trade-product.interface';
import { truTypeEnum2Adapter } from '../enums/tru-type-enum-2.adapter';

export const externalDealTradeProductAdapter = (source?: ApiExternalDealTradeProductDto | null): ExternalDealTradeProduct => {
  return {
    lotItemId: source?.LotItemId,
    name: source?.Name,
    okeiCode: source?.OkeiCode,
    okeiName: source?.OkeiName,
    okpd2Code: source?.Okpd2Code,
    okpd2Name: source?.Okpd2Name,
    price: source?.Price,
    quantity: source?.Quantity,
    sum: source?.Sum,
    type: source?.Type === null ? undefined : truTypeEnum2Adapter(source?.Type),
  };
}
