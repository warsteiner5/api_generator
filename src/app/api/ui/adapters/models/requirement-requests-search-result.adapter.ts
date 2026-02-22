import { ApiRequirementRequestsSearchResultDto } from '../../../swagger/models/api-requirement-requests-search-result-dto';
import { RequirementRequestsSearchResult } from '../../models/requirement-requests-search-result.interface';
import { kladrRegionCodeAdapter } from './kladr-region-code.adapter';
import { requirementRequestStateEnumAdapter } from '../enums/requirement-request-state-enum.adapter';

export const requirementRequestsSearchResultAdapter = (source?: ApiRequirementRequestsSearchResultDto | null): RequirementRequestsSearchResult => {
  return {
    approvedCharacteristicsCount: source?.ApprovedCharacteristicsCount,
    category: source?.Category,
    competetiveListItemCount: source?.CompetetiveListItemCount,
    considerationCharacteristicsCount: source?.ConsiderationCharacteristicsCount,
    description: source?.Description,
    endDate: source?.EndDate,
    id: source?.Id,
    isOnlyForSmsp: source?.IsOnlyForSmsp,
    kladrRegionCodes: source?.KladrRegionCodes?.map((item) => kladrRegionCodeAdapter(item)),
    manufacturerCountries: source?.ManufacturerCountries,
    manufacturers: source?.Manufacturers,
    minPriceMax: source?.MinPriceMax,
    minPriceMin: source?.MinPriceMin,
    minQuantity: source?.MinQuantity,
    minQuantityMax: source?.MinQuantityMax,
    minQuantityMin: source?.MinQuantityMin,
    name: source?.Name,
    numberOfOffers: source?.NumberOfOffers,
    okeiCode: source?.OkeiCode,
    okeiDescription: source?.OkeiDescription,
    okpd2: source?.Okpd2,
    organizerId: source?.OrganizerId,
    organizerName: source?.OrganizerName,
    productName: source?.ProductName,
    quantity: source?.Quantity,
    rejectedCharacteristicsCount: source?.RejectedCharacteristicsCount,
    startDate: source?.StartDate,
    state: source?.State === null ? undefined : requirementRequestStateEnumAdapter(source?.State),
  };
}
