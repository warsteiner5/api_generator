/* tslint:disable */
/* eslint-disable */
import { ApiHumanometrOptionsAltDto } from '../models/api-humanometr-options';
export interface ApiChangePasswordRequestAltDto {
  HumanometrOptions?: ApiHumanometrOptionsAltDto | null;
  Login?: string | null;
  NewPassword?: string | null;
  Password?: string | null;
}
