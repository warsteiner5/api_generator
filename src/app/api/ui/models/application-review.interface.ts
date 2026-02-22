import { ManufactureTypeEnum } from '../enums/manufacture-type.enum';
import { MeetsRequirementsEnum } from '../enums/meets-requirements.enum';

// @ts-ignore
export interface ApplicationReview {
  id: number;
  incomplianceWithTheRequirementsReason: string;
  lotItemApplicationId: number;
  manufactureType: ManufactureTypeEnum;
  meetsRequirements: MeetsRequirementsEnum;
  rankNumber: number;
  rejectReasonComment: string;
}
