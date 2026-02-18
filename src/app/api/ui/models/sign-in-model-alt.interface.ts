import { HumanometrOptionsAlt } from './humanometr-options-alt.interface';

export interface SignInModelAlt {
  appUrl: string;
  humanometrOptions: HumanometrOptionsAlt;
  login: string;
  organizationGuid: string;
  password: string;
  signedData: string;
}
