import { ApiMarketDealDto } from '../../../swagger/models/api-market-deal-dto';
import { MarketDeal } from '../../models/market-deal.interface';
import { adaptDealFormEnumToUI } from './deal-form-enum.adapter';
import { adaptDealStateEnumToUI } from './deal-state-enum.adapter';
import { adaptDocumentAltToUI } from './document-alt.adapter';

export function adaptMarketDealToUI(source?: ApiMarketDealDto | null): MarketDeal {
  return {
    applicationPrice: source?.ApplicationPrice ?? 0,
    customerGuid: source?.CustomerGuid ?? '',
    customerName: source?.CustomerName ?? '',
    customerSignDate: source?.CustomerSignDate ?? '',
    dealForm: adaptDealFormEnumToUI(source?.DealForm),
    dealPrice: source?.DealPrice ?? 0,
    dealState: adaptDealStateEnumToUI(source?.DealState),
    differenceProtocolDocuments: (source?.DifferenceProtocolDocuments ?? []).map((item) => adaptDocumentAltToUI(item)),
    documents: (source?.Documents ?? []).map((item) => adaptDocumentAltToUI(item)),
    id: source?.Id ?? 0,
    isPriceWithVat: source?.IsPriceWithVat ?? false,
    lotItemsSumPrice: source?.LotItemsSumPrice ?? 0,
    sumVat: source?.SumVat ?? 0,
    supplierGuid: source?.SupplierGuid ?? '',
    supplierName: source?.SupplierName ?? '',
    supplierSignDate: source?.SupplierSignDate ?? '',
    taxPercent: source?.TaxPercent ?? 0,
    tradePrice: source?.TradePrice ?? 0,
  };
}
