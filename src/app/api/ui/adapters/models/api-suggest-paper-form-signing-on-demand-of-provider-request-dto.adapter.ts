import { SuggestPaperFormSigningOnDemandOfProviderRequest } from '../../models/suggest-paper-form-signing-on-demand-of-provider-request.interface';
import { ApiSuggestPaperFormSigningOnDemandOfProviderRequestDto } from '../../../swagger/models/api-suggest-paper-form-signing-on-demand-of-provider-request-dto';
import { apiDealObjectEnumAdapter } from '../enums/api-deal-object-enum.adapter';

export const apiSuggestPaperFormSigningOnDemandOfProviderRequestDtoAdapter = (source?: SuggestPaperFormSigningOnDemandOfProviderRequest | null): ApiSuggestPaperFormSigningOnDemandOfProviderRequestDto => {
  return {
    DealId: source?.dealId,
    DealObject: source?.dealObject === null ? undefined : apiDealObjectEnumAdapter(source?.dealObject),
    OrganizationId: source?.organizationId,
  };
}
