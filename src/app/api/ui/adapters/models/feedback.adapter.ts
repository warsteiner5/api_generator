import { ApiFeedbackDto } from '../../../swagger/models/api-feedback-dto';
import { Feedback } from '../../models/feedback.interface';
import { feedBackOrganizationRoleEnumAdapter } from '../enums/feed-back-organization-role-enum.adapter';
import { humanometrOptionsAltAdapter } from './humanometr-options-alt.adapter';

export const feedbackAdapter = (source?: ApiFeedbackDto | null): Feedback => {
  return {
    content: source?.Content,
    email: source?.Email,
    fio: source?.FIO,
    filesGuids: source?.FilesGuids,
    humanometrOptions: source?.HumanometrOptions === null ? undefined : humanometrOptionsAltAdapter(source?.HumanometrOptions),
    isPersonalDataAgreement: source?.IsPersonalDataAgreement,
    organizationInn: source?.OrganizationInn,
    organizationKpp: source?.OrganizationKpp,
    organizationName: source?.OrganizationName,
    organizationType: source?.OrganizationType === null ? undefined : feedBackOrganizationRoleEnumAdapter(source?.OrganizationType),
    phoneNumber: source?.PhoneNumber,
    subject: source?.Subject,
    tradeNumbers: source?.TradeNumbers,
  };
}
