import { Feedback } from '../../models/feedback.interface';
import { ApiFeedbackDto } from '../../../swagger/models/api-feedback-dto';
import { apiFeedBackOrganizationRoleEnumAdapter } from '../enums/api-feed-back-organization-role-enum.adapter';
import { apiHumanometrOptionsAltDtoAdapter } from './api-humanometr-options.adapter';

export const apiFeedbackDtoAdapter = (source?: Feedback | null): ApiFeedbackDto => {
  return {
    Content: source?.content,
    Email: source?.email,
    FIO: source?.fio,
    FilesGuids: source?.filesGuids,
    HumanometrOptions: source?.humanometrOptions === null ? undefined : apiHumanometrOptionsAltDtoAdapter(source?.humanometrOptions),
    IsPersonalDataAgreement: source?.isPersonalDataAgreement,
    OrganizationInn: source?.organizationInn,
    OrganizationKpp: source?.organizationKpp,
    OrganizationName: source?.organizationName,
    OrganizationType: source?.organizationType === null ? undefined : apiFeedBackOrganizationRoleEnumAdapter(source?.organizationType),
    PhoneNumber: source?.phoneNumber,
    Subject: source?.subject,
    TradeNumbers: source?.tradeNumbers,
  };
}
