import { MarketFullDeal } from '../../models/market-full-deal.interface';
import { ApiMarketFullDealDto } from '../../../swagger/models/api-market-full-deal-dto';
import { apiCommonFileDtoAdapter } from './api-common-file-dto.adapter';
import { apiFullDealDtoAdapter } from './api-full-deal-dto.adapter';

export const apiMarketFullDealDtoAdapter = (source?: MarketFullDeal | null): ApiMarketFullDealDto => {
  return {
    ...apiFullDealDtoAdapter(source as unknown as Parameters<typeof apiFullDealDtoAdapter>[0]),
    CustomerId: source?.customerId,
    CustomerGuid: source?.customerGuid,
    CustomerName: source?.customerName,
    CustomerExternalOrganizationId: source?.customerExternalOrganizationId,
    CustomerSource: source?.customerSource,
    DeliveryTerms: source?.deliveryTerms,
    RelatedFiles: source?.relatedFiles?.map((item) => apiCommonFileDtoAdapter(item)),
    CreatedDate: source?.createdDate,
    DeliveryPlace: source?.deliveryPlace,
    ContractGuarantee: source?.contractGuarantee,
    ApplicationPrice: source?.applicationPrice,
    SupplierSignDate: source?.supplierSignDate,
    CustomerSignDate: source?.customerSignDate,
  };
}
