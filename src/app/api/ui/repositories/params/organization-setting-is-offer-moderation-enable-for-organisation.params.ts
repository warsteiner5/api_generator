import { OrganizationSettingIsOfferModerationEnableForOrganisation$Params } from '../../../swagger/fn/organization-setting/organization-setting-is-offer-moderation-enable-for-organisation';

export interface OrganizationSettingIsOfferModerationEnableForOrganisationParams {
  organizationId: number;
}

export const organizationSettingIsOfferModerationEnableForOrganisationParamsAdapter = {
  adapt(params?: OrganizationSettingIsOfferModerationEnableForOrganisationParams): OrganizationSettingIsOfferModerationEnableForOrganisation$Params {
    if (!params) {
      return {} as OrganizationSettingIsOfferModerationEnableForOrganisation$Params;
    }
    return {
      organizationId: params.organizationId,
    };
  }
};
