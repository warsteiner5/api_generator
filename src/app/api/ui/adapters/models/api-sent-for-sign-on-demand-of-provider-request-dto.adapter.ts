import { SentForSignOnDemandOfProviderRequest } from '../../models/sent-for-sign-on-demand-of-provider-request.interface';
import { ApiSentForSignOnDemandOfProviderRequestDto } from '../../../swagger/models/api-sent-for-sign-on-demand-of-provider-request-dto';
import { apiDealDocumentDtoAdapter } from './api-deal-document-dto.adapter';
import { apiDealObjectEnumAdapter } from '../enums/api-deal-object-enum.adapter';

export const apiSentForSignOnDemandOfProviderRequestDtoAdapter = (source?: SentForSignOnDemandOfProviderRequest | null): ApiSentForSignOnDemandOfProviderRequestDto => {
  return {
    ApplicationId: source?.applicationId,
    ContractExecutionDate: source?.contractExecutionDate,
    DealComment: source?.dealComment,
    DealCustomNumber: source?.dealCustomNumber,
    DealObject: source?.dealObject === null ? undefined : apiDealObjectEnumAdapter(source?.dealObject),
    Documents: source?.documents?.map((item) => apiDealDocumentDtoAdapter(item)),
    OrganizationId: source?.organizationId,
    Price: source?.price,
    TradeId: source?.tradeId,
    TradeLotId: source?.tradeLotId,
  };
}
