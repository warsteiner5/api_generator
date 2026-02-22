import { MeetsRequirementsEnum } from '../enums/meets-requirements.enum';

// @ts-ignore
export interface ApplicationConsiderationAlt {
  id: number;
  meetsRequirements: MeetsRequirementsEnum;
  rejectReasonComment: string;
}
