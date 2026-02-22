import { MakeOrganizationSmpRequestAlt } from '../../models/make-organization-smp-request-alt.interface';
import { UsersMakeOrganizationSmp$Params } from '../../../swagger/fn/users/users-make-organization-smp';
import { apiMakeOrganizationSmpRequestAltDtoAdapter } from '../../adapters/models/api-make-organization-smp-request.adapter';

// @ts-ignore
export interface UsersMakeOrganizationSmpParams {
  body?: MakeOrganizationSmpRequestAlt;
}

export function usersMakeOrganizationSmpAdapter(params?: UsersMakeOrganizationSmpParams): UsersMakeOrganizationSmp$Params {
  if (!params) {
    return {} as UsersMakeOrganizationSmp$Params;
  }
  return {
      body: apiMakeOrganizationSmpRequestAltDtoAdapter(params.body),
  };
}
