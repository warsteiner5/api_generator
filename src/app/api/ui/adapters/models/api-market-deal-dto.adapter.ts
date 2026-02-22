import { MarketDeal } from '../../models/market-deal.interface';
import { ApiMarketDealDto } from '../../../swagger/models/api-market-deal-dto';
import { apiDealFormEnumAdapter } from '../enums/api-deal-form-enum.adapter';
import { apiDealStateEnumAdapter } from '../enums/api-deal-state-enum.adapter';
import { apiDocumentAltDtoAdapter } from './api-document.adapter';

export const apiMarketDealDtoAdapter = (source?: MarketDeal | null): ApiMarketDealDto => {
  return {
    ApplicationPrice: source?.applicationPrice,
    CustomerGuid: source?.customerGuid,
    CustomerName: source?.customerName,
    CustomerSignDate: source?.customerSignDate,
    DealForm: source?.dealForm === null ? undefined : apiDealFormEnumAdapter(source?.dealForm),
    DealPrice: source?.dealPrice,
    DealState: source?.dealState === null ? undefined : apiDealStateEnumAdapter(source?.dealState),
    DifferenceProtocolDocuments: source?.differenceProtocolDocuments?.map((item) => apiDocumentAltDtoAdapter(item)),
    Documents: source?.documents?.map((item) => apiDocumentAltDtoAdapter(item)),
    Id: source?.id,
    IsPriceWithVat: source?.isPriceWithVat,
    LotItemsSumPrice: source?.lotItemsSumPrice,
    SumVat: source?.sumVat,
    SupplierGuid: source?.supplierGuid,
    SupplierName: source?.supplierName,
    SupplierSignDate: source?.supplierSignDate,
    TaxPercent: source?.taxPercent,
    TradePrice: source?.tradePrice,
  };
}
