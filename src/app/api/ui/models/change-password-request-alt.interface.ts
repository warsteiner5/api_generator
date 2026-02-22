import { HumanometrOptionsAlt } from './humanometr-options-alt.interface';

// @ts-ignore
export interface ChangePasswordRequestAlt {
  humanometrOptions: HumanometrOptionsAlt;
  login: string;
  newPassword: string;
  password: string;
}
