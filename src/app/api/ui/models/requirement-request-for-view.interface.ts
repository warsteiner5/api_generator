import { RequirementRequest } from './requirement-request.interface';

// @ts-ignore
export interface RequirementRequestForView extends RequirementRequest {
  priceMin: number;
  priceMax: number;
  priceAverage: number;
  shortOkeiName: string;
  isEditRequirementRequestAvailable: boolean;
  approvedCharacteristicsCount: number;
  rejectedCharacteristicsCount: number;
  considerationCharacteristicsCount: number;
  competetiveListItemCount: number;
}
