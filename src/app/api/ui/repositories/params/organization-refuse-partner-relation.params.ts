import { OrganizationRefusePartnerRelation$Params } from '../../../swagger/fn/organization/organization-refuse-partner-relation';

export interface OrganizationRefusePartnerRelationParams {
  relationId: number;
}

export const organizationRefusePartnerRelationParamsAdapter = {
  adapt(params?: OrganizationRefusePartnerRelationParams): OrganizationRefusePartnerRelation$Params {
    if (!params) {
      return {} as OrganizationRefusePartnerRelation$Params;
    }
    return {
      relationId: params.relationId,
    };
  }
};
