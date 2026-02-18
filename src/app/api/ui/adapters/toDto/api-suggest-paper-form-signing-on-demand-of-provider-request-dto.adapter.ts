import { SuggestPaperFormSigningOnDemandOfProviderRequest } from '../../models/suggest-paper-form-signing-on-demand-of-provider-request.interface';
import { ApiSuggestPaperFormSigningOnDemandOfProviderRequestDto } from '../../../swagger/models/api-suggest-paper-form-signing-on-demand-of-provider-request-dto';
import { adaptApiDealObjectEnum } from './api-deal-object-enum.adapter';

export function adaptApiSuggestPaperFormSigningOnDemandOfProviderRequestDto(source?: SuggestPaperFormSigningOnDemandOfProviderRequest | null): ApiSuggestPaperFormSigningOnDemandOfProviderRequestDto {
  return {
    DealId: source?.dealId,
    DealObject: adaptApiDealObjectEnum(source?.dealObject),
    OrganizationId: source?.organizationId,
  };
}
