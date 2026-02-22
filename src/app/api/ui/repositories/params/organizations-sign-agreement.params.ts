import { FileSign } from '../../models/file-sign.interface';
import { OrganizationsSignAgreement$Params } from '../../../swagger/fn/organizations/organizations-sign-agreement';
import { apiFileSignDtoAdapter } from '../../adapters/models/api-file-sign-dto.adapter';

// @ts-ignore
export interface OrganizationsSignAgreementParams {
  body?: FileSign;
}

export function organizationsSignAgreementAdapter(params?: OrganizationsSignAgreementParams): OrganizationsSignAgreement$Params {
  if (!params) {
    return {} as OrganizationsSignAgreement$Params;
  }
  return {
      body: apiFileSignDtoAdapter(params.body),
  };
}
