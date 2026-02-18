import { MakeOrganizationSmpRequestAlt } from '../../models/make-organization-smp-request-alt.interface';
import { UsersMakeOrganizationSmp$Params } from '../../../swagger/fn/users/users-make-organization-smp';
import { adaptApiMakeOrganizationSmpRequestAltDto } from '../../adapters/toDto/api-make-organization-smp-request.adapter';

export interface UsersMakeOrganizationSmpParams {
  body?: MakeOrganizationSmpRequestAlt;
}

export const usersMakeOrganizationSmpParamsAdapter = {
  adapt(params?: UsersMakeOrganizationSmpParams): UsersMakeOrganizationSmp$Params {
    if (!params) {
      return {} as UsersMakeOrganizationSmp$Params;
    }
    return {
      body: adaptApiMakeOrganizationSmpRequestAltDto(params.body),
    };
  }
};
