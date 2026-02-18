import { ApiSentForSignOnDemandOfProviderRequestDto } from '../../../swagger/models/api-sent-for-sign-on-demand-of-provider-request-dto';
import { SentForSignOnDemandOfProviderRequest } from '../../models/sent-for-sign-on-demand-of-provider-request.interface';
import { adaptDealDocumentToUI } from './deal-document.adapter';
import { adaptDealObjectEnumToUI } from './deal-object-enum.adapter';

export function adaptSentForSignOnDemandOfProviderRequestToUI(source?: ApiSentForSignOnDemandOfProviderRequestDto | null): SentForSignOnDemandOfProviderRequest {
  return {
    applicationId: source?.ApplicationId ?? 0,
    contractExecutionDate: source?.ContractExecutionDate ?? '',
    dealComment: source?.DealComment ?? '',
    dealCustomNumber: source?.DealCustomNumber ?? '',
    dealObject: adaptDealObjectEnumToUI(source?.DealObject),
    documents: (source?.Documents ?? []).map((item) => adaptDealDocumentToUI(item)),
    organizationId: source?.OrganizationId ?? 0,
    price: source?.Price ?? 0,
    tradeId: source?.TradeId ?? 0,
    tradeLotId: source?.TradeLotId ?? 0,
  };
}
