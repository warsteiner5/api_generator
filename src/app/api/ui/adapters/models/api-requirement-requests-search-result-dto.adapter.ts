import { RequirementRequestsSearchResult } from '../../models/requirement-requests-search-result.interface';
import { ApiRequirementRequestsSearchResultDto } from '../../../swagger/models/api-requirement-requests-search-result-dto';
import { apiKladrRegionCodeDtoAdapter } from './api-kladr-region-code-dto.adapter';
import { apiRequirementRequestStateEnumAdapter } from '../enums/api-requirement-request-state-enum.adapter';

export const apiRequirementRequestsSearchResultDtoAdapter = (source?: RequirementRequestsSearchResult | null): ApiRequirementRequestsSearchResultDto => {
  return {
    ApprovedCharacteristicsCount: source?.approvedCharacteristicsCount,
    Category: source?.category,
    CompetetiveListItemCount: source?.competetiveListItemCount,
    ConsiderationCharacteristicsCount: source?.considerationCharacteristicsCount,
    Description: source?.description,
    EndDate: source?.endDate,
    Id: source?.id,
    IsOnlyForSmsp: source?.isOnlyForSmsp,
    KladrRegionCodes: source?.kladrRegionCodes?.map((item) => apiKladrRegionCodeDtoAdapter(item)),
    ManufacturerCountries: source?.manufacturerCountries,
    Manufacturers: source?.manufacturers,
    MinPriceMax: source?.minPriceMax,
    MinPriceMin: source?.minPriceMin,
    MinQuantity: source?.minQuantity,
    MinQuantityMax: source?.minQuantityMax,
    MinQuantityMin: source?.minQuantityMin,
    Name: source?.name,
    NumberOfOffers: source?.numberOfOffers,
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Okpd2: source?.okpd2,
    OrganizerId: source?.organizerId,
    OrganizerName: source?.organizerName,
    ProductName: source?.productName,
    Quantity: source?.quantity,
    RejectedCharacteristicsCount: source?.rejectedCharacteristicsCount,
    StartDate: source?.startDate,
    State: source?.state === null ? undefined : apiRequirementRequestStateEnumAdapter(source?.state),
  };
}
