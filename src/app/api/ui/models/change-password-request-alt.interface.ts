import { HumanometrOptionsAlt } from './humanometr-options-alt.interface';

export interface ChangePasswordRequestAlt {
  humanometrOptions: HumanometrOptionsAlt;
  login: string;
  newPassword: string;
  password: string;
}
