import { ApiSuggestPaperFormSigningOnDemandOfProviderRequestDto } from '../../../swagger/models/api-suggest-paper-form-signing-on-demand-of-provider-request-dto';
import { SuggestPaperFormSigningOnDemandOfProviderRequest } from '../../models/suggest-paper-form-signing-on-demand-of-provider-request.interface';
import { dealObjectEnumAdapter } from '../enums/deal-object-enum.adapter';

export const suggestPaperFormSigningOnDemandOfProviderRequestAdapter = (source?: ApiSuggestPaperFormSigningOnDemandOfProviderRequestDto | null): SuggestPaperFormSigningOnDemandOfProviderRequest => {
  return {
    dealId: source?.DealId,
    dealObject: source?.DealObject === null ? undefined : dealObjectEnumAdapter(source?.DealObject),
    organizationId: source?.OrganizationId,
  };
}
