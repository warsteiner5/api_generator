import { OrganizationSettingSetOfferModerationForOrganisation$Params } from '../../../swagger/fn/organization-setting/organization-setting-set-offer-moderation-for-organisation';

export interface OrganizationSettingSetOfferModerationForOrganisationParams {
  organizationId: number;
  isEnabled: boolean;
}

export const organizationSettingSetOfferModerationForOrganisationParamsAdapter = {
  adapt(params?: OrganizationSettingSetOfferModerationForOrganisationParams): OrganizationSettingSetOfferModerationForOrganisation$Params {
    if (!params) {
      return {} as OrganizationSettingSetOfferModerationForOrganisation$Params;
    }
    return {
      organizationId: params.organizationId,
      isEnabled: params.isEnabled,
    };
  }
};
