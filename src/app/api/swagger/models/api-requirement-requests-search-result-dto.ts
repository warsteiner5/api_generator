/* tslint:disable */
/* eslint-disable */
import { ApiKladrRegionCodeDto } from '../models/api-kladr-region-code-dto';
import { ApiRequirementRequestStateEnum } from '../models/api-requirement-request-state-enum';
export interface ApiRequirementRequestsSearchResultDto {
  ApprovedCharacteristicsCount?: number | null;
  Category?: string | null;
  CompetetiveListItemCount?: number | null;
  ConsiderationCharacteristicsCount?: number | null;
  Description?: string | null;
  EndDate?: string | null;
  Id?: number;
  IsOnlyForSmsp?: boolean;
  KladrRegionCodes?: Array<ApiKladrRegionCodeDto> | null;
  ManufacturerCountries?: Array<string> | null;
  Manufacturers?: Array<string> | null;
  MinPriceMax?: number | null;
  MinPriceMin?: number | null;
  MinQuantity?: number;
  MinQuantityMax?: number | null;
  MinQuantityMin?: number | null;
  Name?: string | null;
  NumberOfOffers?: number;
  OkeiCode?: string | null;
  OkeiDescription?: string | null;
  Okpd2?: string | null;
  OrganizerId?: number;
  OrganizerName?: string | null;
  ProductName?: string | null;
  Quantity?: number;
  RejectedCharacteristicsCount?: number | null;
  StartDate?: string | null;
  State?: ApiRequirementRequestStateEnum;
}
