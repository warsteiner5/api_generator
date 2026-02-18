import { AccountCheckOrganizationExists$Params } from '../../../swagger/fn/account/account-check-organization-exists';
import { OrganizationShortInfo } from '../../models/organization-short-info.interface';
import { adaptApiOrganizationShortInfoDto } from '../../adapters/toDto/api-organization-short-info-dto.adapter';

export interface AccountCheckOrganizationExistsParams {
  body?: OrganizationShortInfo;
}

export const accountCheckOrganizationExistsParamsAdapter = {
  adapt(params?: AccountCheckOrganizationExistsParams): AccountCheckOrganizationExists$Params {
    if (!params) {
      return {} as AccountCheckOrganizationExists$Params;
    }
    return {
      body: adaptApiOrganizationShortInfoDto(params.body),
    };
  }
};
