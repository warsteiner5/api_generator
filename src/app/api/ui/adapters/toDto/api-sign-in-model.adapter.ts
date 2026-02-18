import { SignInModelAlt } from '../../models/sign-in-model-alt.interface';
import { ApiSignInModelAltDto } from '../../../swagger/models/api-sign-in-model';
import { adaptApiHumanometrOptionsAltDto } from './api-humanometr-options.adapter';

export function adaptApiSignInModelAltDto(source?: SignInModelAlt | null): ApiSignInModelAltDto {
  return {
    AppUrl: source?.appUrl,
    HumanometrOptions: adaptApiHumanometrOptionsAltDto(source?.humanometrOptions),
    Login: source?.login,
    OrganizationGuid: source?.organizationGuid,
    Password: source?.password,
    SignedData: source?.signedData,
  };
}
