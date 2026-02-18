import { FileSign } from '../../models/file-sign.interface';
import { OrganizationsSignAgreement$Params } from '../../../swagger/fn/organizations/organizations-sign-agreement';
import { adaptApiFileSignDto } from '../../adapters/toDto/api-file-sign-dto.adapter';

export interface OrganizationsSignAgreementParams {
  body?: FileSign;
}

export const organizationsSignAgreementParamsAdapter = {
  adapt(params?: OrganizationsSignAgreementParams): OrganizationsSignAgreement$Params {
    if (!params) {
      return {} as OrganizationsSignAgreement$Params;
    }
    return {
      body: adaptApiFileSignDto(params.body),
    };
  }
};
