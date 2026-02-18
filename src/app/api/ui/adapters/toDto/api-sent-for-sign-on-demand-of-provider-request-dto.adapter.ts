import { SentForSignOnDemandOfProviderRequest } from '../../models/sent-for-sign-on-demand-of-provider-request.interface';
import { ApiSentForSignOnDemandOfProviderRequestDto } from '../../../swagger/models/api-sent-for-sign-on-demand-of-provider-request-dto';
import { adaptApiDealDocumentDto } from './api-deal-document-dto.adapter';
import { adaptApiDealObjectEnum } from './api-deal-object-enum.adapter';

export function adaptApiSentForSignOnDemandOfProviderRequestDto(source?: SentForSignOnDemandOfProviderRequest | null): ApiSentForSignOnDemandOfProviderRequestDto {
  return {
    ApplicationId: source?.applicationId,
    ContractExecutionDate: source?.contractExecutionDate,
    DealComment: source?.dealComment,
    DealCustomNumber: source?.dealCustomNumber,
    DealObject: adaptApiDealObjectEnum(source?.dealObject),
    Documents: (source?.documents ?? []).map((item) => adaptApiDealDocumentDto(item)),
    OrganizationId: source?.organizationId,
    Price: source?.price,
    TradeId: source?.tradeId,
    TradeLotId: source?.tradeLotId,
  };
}
