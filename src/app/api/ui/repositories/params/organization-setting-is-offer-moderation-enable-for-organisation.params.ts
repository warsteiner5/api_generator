import { OrganizationSettingIsOfferModerationEnableForOrganisation$Params } from '../../../swagger/fn/organization-setting/organization-setting-is-offer-moderation-enable-for-organisation';

// @ts-ignore
export interface OrganizationSettingIsOfferModerationEnableForOrganisationParams {
  organizationId: number;
}

export function organizationSettingIsOfferModerationEnableForOrganisationAdapter(params?: OrganizationSettingIsOfferModerationEnableForOrganisationParams): OrganizationSettingIsOfferModerationEnableForOrganisation$Params {
  if (!params) {
    return {} as OrganizationSettingIsOfferModerationEnableForOrganisation$Params;
  }
  return {
      organizationId: params.organizationId,
  };
}
