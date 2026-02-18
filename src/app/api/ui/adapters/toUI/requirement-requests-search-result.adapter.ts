import { ApiRequirementRequestsSearchResultDto } from '../../../swagger/models/api-requirement-requests-search-result-dto';
import { RequirementRequestsSearchResult } from '../../models/requirement-requests-search-result.interface';
import { adaptKladrRegionCodeToUI } from './kladr-region-code.adapter';
import { adaptRequirementRequestStateEnumToUI } from './requirement-request-state-enum.adapter';

export function adaptRequirementRequestsSearchResultToUI(source?: ApiRequirementRequestsSearchResultDto | null): RequirementRequestsSearchResult {
  return {
    approvedCharacteristicsCount: source?.ApprovedCharacteristicsCount ?? 0,
    category: source?.Category ?? '',
    competetiveListItemCount: source?.CompetetiveListItemCount ?? 0,
    considerationCharacteristicsCount: source?.ConsiderationCharacteristicsCount ?? 0,
    description: source?.Description ?? '',
    endDate: source?.EndDate ?? '',
    id: source?.Id ?? 0,
    isOnlyForSmsp: source?.IsOnlyForSmsp ?? false,
    kladrRegionCodes: (source?.KladrRegionCodes ?? []).map((item) => adaptKladrRegionCodeToUI(item)),
    manufacturerCountries: source?.ManufacturerCountries ?? [],
    manufacturers: source?.Manufacturers ?? [],
    minPriceMax: source?.MinPriceMax ?? 0,
    minPriceMin: source?.MinPriceMin ?? 0,
    minQuantity: source?.MinQuantity ?? 0,
    minQuantityMax: source?.MinQuantityMax ?? 0,
    minQuantityMin: source?.MinQuantityMin ?? 0,
    name: source?.Name ?? '',
    numberOfOffers: source?.NumberOfOffers ?? 0,
    okeiCode: source?.OkeiCode ?? '',
    okeiDescription: source?.OkeiDescription ?? '',
    okpd2: source?.Okpd2 ?? '',
    organizerId: source?.OrganizerId ?? 0,
    organizerName: source?.OrganizerName ?? '',
    productName: source?.ProductName ?? '',
    quantity: source?.Quantity ?? 0,
    rejectedCharacteristicsCount: source?.RejectedCharacteristicsCount ?? 0,
    startDate: source?.StartDate ?? '',
    state: adaptRequirementRequestStateEnumToUI(source?.State),
  };
}
