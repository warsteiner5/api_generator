import { ApiSignInModelAltDto } from '../../../swagger/models/api-sign-in-model';
import { SignInModelAlt } from '../../models/sign-in-model-alt.interface';
import { humanometrOptionsAltAdapter } from './humanometr-options-alt.adapter';

export const signInModelAltAdapter = (source?: ApiSignInModelAltDto | null): SignInModelAlt => {
  return {
    appUrl: source?.AppUrl,
    humanometrOptions: source?.HumanometrOptions === null ? undefined : humanometrOptionsAltAdapter(source?.HumanometrOptions),
    login: source?.Login,
    organizationGuid: source?.OrganizationGuid,
    password: source?.Password,
    signedData: source?.SignedData,
  };
}
