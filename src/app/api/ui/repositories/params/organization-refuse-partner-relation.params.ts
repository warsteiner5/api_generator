import { OrganizationRefusePartnerRelation$Params } from '../../../swagger/fn/organization/organization-refuse-partner-relation';

// @ts-ignore
export interface OrganizationRefusePartnerRelationParams {
  relationId: number;
}

export function organizationRefusePartnerRelationAdapter(params?: OrganizationRefusePartnerRelationParams): OrganizationRefusePartnerRelation$Params {
  if (!params) {
    return {} as OrganizationRefusePartnerRelation$Params;
  }
  return {
      relationId: params.relationId,
  };
}
