import { ApiExternalDealTradeProductDto } from '../../../swagger/models/api-external-deal-trade-product-dto';
import { ExternalDealTradeProduct } from '../../models/external-deal-trade-product.interface';
import { adaptTruTypeEnum2ToUI } from './tru-type-enum-2.adapter';

export function adaptExternalDealTradeProductToUI(source?: ApiExternalDealTradeProductDto | null): ExternalDealTradeProduct {
  return {
    lotItemId: source?.LotItemId ?? 0,
    name: source?.Name ?? '',
    okeiCode: source?.OkeiCode ?? '',
    okeiName: source?.OkeiName ?? '',
    okpd2Code: source?.Okpd2Code ?? '',
    okpd2Name: source?.Okpd2Name ?? '',
    price: source?.Price ?? 0,
    quantity: source?.Quantity ?? 0,
    sum: source?.Sum ?? 0,
    type: adaptTruTypeEnum2ToUI(source?.Type),
  };
}
