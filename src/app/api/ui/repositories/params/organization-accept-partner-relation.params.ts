import { OrganizationAcceptPartnerRelation$Params } from '../../../swagger/fn/organization/organization-accept-partner-relation';

// @ts-ignore
export interface OrganizationAcceptPartnerRelationParams {
  relationId: number;
}

export function organizationAcceptPartnerRelationAdapter(params?: OrganizationAcceptPartnerRelationParams): OrganizationAcceptPartnerRelation$Params {
  if (!params) {
    return {} as OrganizationAcceptPartnerRelation$Params;
  }
  return {
      relationId: params.relationId,
  };
}
