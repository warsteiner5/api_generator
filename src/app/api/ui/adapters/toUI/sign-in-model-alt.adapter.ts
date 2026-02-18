import { ApiSignInModelAltDto } from '../../../swagger/models/api-sign-in-model';
import { SignInModelAlt } from '../../models/sign-in-model-alt.interface';
import { adaptHumanometrOptionsAltToUI } from './humanometr-options-alt.adapter';

export function adaptSignInModelAltToUI(source?: ApiSignInModelAltDto | null): SignInModelAlt {
  return {
    appUrl: source?.AppUrl ?? '',
    humanometrOptions: adaptHumanometrOptionsAltToUI(source?.HumanometrOptions),
    login: source?.Login ?? '',
    organizationGuid: source?.OrganizationGuid ?? '',
    password: source?.Password ?? '',
    signedData: source?.SignedData ?? '',
  };
}
