import { Feedback } from '../../models/feedback.interface';
import { ApiFeedbackDto } from '../../../swagger/models/api-feedback-dto';
import { adaptApiFeedBackOrganizationRoleEnum } from './api-feed-back-organization-role-enum.adapter';
import { adaptApiHumanometrOptionsAltDto } from './api-humanometr-options.adapter';

export function adaptApiFeedbackDto(source?: Feedback | null): ApiFeedbackDto {
  return {
    Content: source?.content,
    Email: source?.email,
    FIO: source?.fio,
    FilesGuids: source?.filesGuids ?? [],
    HumanometrOptions: adaptApiHumanometrOptionsAltDto(source?.humanometrOptions),
    IsPersonalDataAgreement: source?.isPersonalDataAgreement,
    OrganizationInn: source?.organizationInn,
    OrganizationKpp: source?.organizationKpp,
    OrganizationName: source?.organizationName,
    OrganizationType: adaptApiFeedBackOrganizationRoleEnum(source?.organizationType),
    PhoneNumber: source?.phoneNumber,
    Subject: source?.subject,
    TradeNumbers: source?.tradeNumbers,
  };
}
