import { OrganizationAcceptPartnerRelation$Params } from '../../../swagger/fn/organization/organization-accept-partner-relation';

export interface OrganizationAcceptPartnerRelationParams {
  relationId: number;
}

export const organizationAcceptPartnerRelationParamsAdapter = {
  adapt(params?: OrganizationAcceptPartnerRelationParams): OrganizationAcceptPartnerRelation$Params {
    if (!params) {
      return {} as OrganizationAcceptPartnerRelation$Params;
    }
    return {
      relationId: params.relationId,
    };
  }
};
