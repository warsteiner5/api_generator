import { SignInModelAlt } from '../../models/sign-in-model-alt.interface';
import { ApiSignInModelAltDto } from '../../../swagger/models/api-sign-in-model';
import { apiHumanometrOptionsAltDtoAdapter } from './api-humanometr-options.adapter';

export const apiSignInModelAltDtoAdapter = (source?: SignInModelAlt | null): ApiSignInModelAltDto => {
  return {
    AppUrl: source?.appUrl,
    HumanometrOptions: source?.humanometrOptions === null ? undefined : apiHumanometrOptionsAltDtoAdapter(source?.humanometrOptions),
    Login: source?.login,
    OrganizationGuid: source?.organizationGuid,
    Password: source?.password,
    SignedData: source?.signedData,
  };
}
