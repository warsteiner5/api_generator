import { FeedBackOrganizationRoleEnum } from '../enums/feed-back-organization-role.enum';
import { HumanometrOptionsAlt } from './humanometr-options-alt.interface';

// @ts-ignore
export interface Feedback {
  content: string;
  email: string;
  fio: string;
  filesGuids: string[];
  humanometrOptions: HumanometrOptionsAlt;
  isPersonalDataAgreement: boolean;
  organizationInn: string;
  organizationKpp: string;
  organizationName: string;
  organizationType: FeedBackOrganizationRoleEnum;
  phoneNumber: string;
  subject: string;
  tradeNumbers: string;
}
