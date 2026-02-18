import { MeetsRequirementsEnum } from '../enums/meets-requirements.enum';

export interface ApplicationConsiderationAlt {
  id: number;
  meetsRequirements: MeetsRequirementsEnum;
  rejectReasonComment: string;
}
