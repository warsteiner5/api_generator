import { MarketDeal } from '../../models/market-deal.interface';
import { ApiMarketDealDto } from '../../../swagger/models/api-market-deal-dto';
import { adaptApiDealFormEnum } from './api-deal-form-enum.adapter';
import { adaptApiDealStateEnum } from './api-deal-state-enum.adapter';
import { adaptApiDocumentAltDto } from './api-document.adapter';

export function adaptApiMarketDealDto(source?: MarketDeal | null): ApiMarketDealDto {
  return {
    ApplicationPrice: source?.applicationPrice,
    CustomerGuid: source?.customerGuid,
    CustomerName: source?.customerName,
    CustomerSignDate: source?.customerSignDate,
    DealForm: adaptApiDealFormEnum(source?.dealForm),
    DealPrice: source?.dealPrice,
    DealState: adaptApiDealStateEnum(source?.dealState),
    DifferenceProtocolDocuments: (source?.differenceProtocolDocuments ?? []).map((item) => adaptApiDocumentAltDto(item)),
    Documents: (source?.documents ?? []).map((item) => adaptApiDocumentAltDto(item)),
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
