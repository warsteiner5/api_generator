import { AccountCheckOrganizationExists$Params } from '../../../swagger/fn/account/account-check-organization-exists';
import { OrganizationShortInfo } from '../../models/organization-short-info.interface';
import { apiOrganizationShortInfoDtoAdapter } from '../../adapters/models/api-organization-short-info-dto.adapter';

// @ts-ignore
export interface AccountCheckOrganizationExistsParams {
  body?: OrganizationShortInfo;
}

export function accountCheckOrganizationExistsAdapter(params?: AccountCheckOrganizationExistsParams): AccountCheckOrganizationExists$Params {
  if (!params) {
    return {} as AccountCheckOrganizationExists$Params;
  }
  return {
      body: apiOrganizationShortInfoDtoAdapter(params.body),
  };
}
