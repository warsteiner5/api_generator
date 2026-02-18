import { ApiSuggestPaperFormSigningOnDemandOfProviderRequestDto } from '../../../swagger/models/api-suggest-paper-form-signing-on-demand-of-provider-request-dto';
import { SuggestPaperFormSigningOnDemandOfProviderRequest } from '../../models/suggest-paper-form-signing-on-demand-of-provider-request.interface';
import { adaptDealObjectEnumToUI } from './deal-object-enum.adapter';

export function adaptSuggestPaperFormSigningOnDemandOfProviderRequestToUI(source?: ApiSuggestPaperFormSigningOnDemandOfProviderRequestDto | null): SuggestPaperFormSigningOnDemandOfProviderRequest {
  return {
    dealId: source?.DealId ?? 0,
    dealObject: adaptDealObjectEnumToUI(source?.DealObject),
    organizationId: source?.OrganizationId ?? 0,
  };
}
