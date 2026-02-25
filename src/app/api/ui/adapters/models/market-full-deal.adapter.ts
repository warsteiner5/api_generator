import { ApiMarketFullDealDto } from '../../../swagger/models/api-market-full-deal-dto';
import { MarketFullDeal } from '../../models/market-full-deal.interface';
import { commonFileAdapter } from './common-file.adapter';
import { fullDealAdapter } from './full-deal.adapter';

export const marketFullDealAdapter = (source?: ApiMarketFullDealDto | null): MarketFullDeal => {
  return {
    ...fullDealAdapter(source as unknown as Parameters<typeof fullDealAdapter>[0]),
    customerId: source?.CustomerId,
    customerGuid: source?.CustomerGuid,
    customerName: source?.CustomerName,
    customerExternalOrganizationId: source?.CustomerExternalOrganizationId,
    customerSource: source?.CustomerSource,
    deliveryTerms: source?.DeliveryTerms,
    relatedFiles: source?.RelatedFiles?.map((item) => commonFileAdapter(item)),
    createdDate: source?.CreatedDate,
    deliveryPlace: source?.DeliveryPlace,
    contractGuarantee: source?.ContractGuarantee,
    applicationPrice: source?.ApplicationPrice,
    supplierSignDate: source?.SupplierSignDate,
    customerSignDate: source?.CustomerSignDate,
  };
}
