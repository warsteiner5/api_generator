import { ApiFeedbackDto } from '../../../swagger/models/api-feedback-dto';
import { Feedback } from '../../models/feedback.interface';
import { adaptFeedBackOrganizationRoleEnumToUI } from './feed-back-organization-role-enum.adapter';
import { adaptHumanometrOptionsAltToUI } from './humanometr-options-alt.adapter';

export function adaptFeedbackToUI(source?: ApiFeedbackDto | null): Feedback {
  return {
    content: source?.Content ?? '',
    email: source?.Email ?? '',
    fio: source?.FIO ?? '',
    filesGuids: source?.FilesGuids ?? [],
    humanometrOptions: adaptHumanometrOptionsAltToUI(source?.HumanometrOptions),
    isPersonalDataAgreement: source?.IsPersonalDataAgreement ?? false,
    organizationInn: source?.OrganizationInn ?? '',
    organizationKpp: source?.OrganizationKpp ?? '',
    organizationName: source?.OrganizationName ?? '',
    organizationType: adaptFeedBackOrganizationRoleEnumToUI(source?.OrganizationType),
    phoneNumber: source?.PhoneNumber ?? '',
    subject: source?.Subject ?? '',
    tradeNumbers: source?.TradeNumbers ?? '',
  };
}
