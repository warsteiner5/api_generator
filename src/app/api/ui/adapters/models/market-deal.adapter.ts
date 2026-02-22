import { ApiMarketDealDto } from '../../../swagger/models/api-market-deal-dto';
import { MarketDeal } from '../../models/market-deal.interface';
import { dealFormEnumAdapter } from '../enums/deal-form-enum.adapter';
import { dealStateEnumAdapter } from '../enums/deal-state-enum.adapter';
import { documentAltAdapter } from './document-alt.adapter';

export const marketDealAdapter = (source?: ApiMarketDealDto | null): MarketDeal => {
  return {
    applicationPrice: source?.ApplicationPrice,
    customerGuid: source?.CustomerGuid,
    customerName: source?.CustomerName,
    customerSignDate: source?.CustomerSignDate,
    dealForm: source?.DealForm === null ? undefined : dealFormEnumAdapter(source?.DealForm),
    dealPrice: source?.DealPrice,
    dealState: source?.DealState === null ? undefined : dealStateEnumAdapter(source?.DealState),
    differenceProtocolDocuments: source?.DifferenceProtocolDocuments?.map((item) => documentAltAdapter(item)),
    documents: source?.Documents?.map((item) => documentAltAdapter(item)),
    id: source?.Id,
    isPriceWithVat: source?.IsPriceWithVat,
    lotItemsSumPrice: source?.LotItemsSumPrice,
    sumVat: source?.SumVat,
    supplierGuid: source?.SupplierGuid,
    supplierName: source?.SupplierName,
    supplierSignDate: source?.SupplierSignDate,
    taxPercent: source?.TaxPercent,
    tradePrice: source?.TradePrice,
  };
}
