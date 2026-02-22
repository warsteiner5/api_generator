import { ApiSentForSignOnDemandOfProviderRequestDto } from '../../../swagger/models/api-sent-for-sign-on-demand-of-provider-request-dto';
import { SentForSignOnDemandOfProviderRequest } from '../../models/sent-for-sign-on-demand-of-provider-request.interface';
import { dealDocumentAdapter } from './deal-document.adapter';
import { dealObjectEnumAdapter } from '../enums/deal-object-enum.adapter';

export const sentForSignOnDemandOfProviderRequestAdapter = (source?: ApiSentForSignOnDemandOfProviderRequestDto | null): SentForSignOnDemandOfProviderRequest => {
  return {
    applicationId: source?.ApplicationId,
    contractExecutionDate: source?.ContractExecutionDate,
    dealComment: source?.DealComment,
    dealCustomNumber: source?.DealCustomNumber,
    dealObject: source?.DealObject === null ? undefined : dealObjectEnumAdapter(source?.DealObject),
    documents: source?.Documents?.map((item) => dealDocumentAdapter(item)),
    organizationId: source?.OrganizationId,
    price: source?.Price,
    tradeId: source?.TradeId,
    tradeLotId: source?.TradeLotId,
  };
}
