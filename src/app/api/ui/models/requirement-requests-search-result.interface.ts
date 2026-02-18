import { KladrRegionCode } from './kladr-region-code.interface';
import { RequirementRequestStateEnum } from '../enums/requirement-request-state.enum';

export interface RequirementRequestsSearchResult {
  approvedCharacteristicsCount: number;
  category: string;
  competetiveListItemCount: number;
  considerationCharacteristicsCount: number;
  description: string;
  endDate: string;
  id: number;
  isOnlyForSmsp: boolean;
  kladrRegionCodes: KladrRegionCode[];
  manufacturerCountries: string[];
  manufacturers: string[];
  minPriceMax: number;
  minPriceMin: number;
  minQuantity: number;
  minQuantityMax: number;
  minQuantityMin: number;
  name: string;
  numberOfOffers: number;
  okeiCode: string;
  okeiDescription: string;
  okpd2: string;
  organizerId: number;
  organizerName: string;
  productName: string;
  quantity: number;
  rejectedCharacteristicsCount: number;
  startDate: string;
  state: RequirementRequestStateEnum;
}
