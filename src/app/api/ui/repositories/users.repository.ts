import { adaptEmployeeAgreementToUI } from '../adapters/toUI/employee-agreement.adapter';
import { adaptFileStreamModelAltToUI } from '../adapters/toUI/file-stream-model-alt.adapter';
import { adaptForgotPasswordResultAltToUI } from '../adapters/toUI/forgot-password-result-alt.adapter';
import { adaptLoginPreferenceModelAltToUI } from '../adapters/toUI/login-preference-model-alt.adapter';
import { adaptMarketUserProfileToUI } from '../adapters/toUI/market-user-profile.adapter';
import { adaptOpenPartUserShopToUI } from '../adapters/toUI/open-part-user-shop.adapter';
import { adaptPowerOfAttorneyInfoToUI } from '../adapters/toUI/power-of-attorney-info.adapter';
import { adaptResetPasswordResultAltToUI } from '../adapters/toUI/reset-password-result-alt.adapter';
import { adaptWorkGroupToUI } from '../adapters/toUI/work-group.adapter';
import { EmployeeAgreement } from '../models/employee-agreement.interface';
import { FileStreamModelAlt } from '../models/file-stream-model-alt.interface';
import { ForgotPasswordResultAlt } from '../models/forgot-password-result-alt.interface';
import { Injectable, inject } from '@angular/core';
import { LoginPreferenceModelAlt } from '../models/login-preference-model-alt.interface';
import { map } from 'rxjs/operators';
import { MarketUserProfile } from '../models/market-user-profile.interface';
import { Observable } from 'rxjs';
import { OpenPartUserShop } from '../models/open-part-user-shop.interface';
import { PowerOfAttorneyInfo } from '../models/power-of-attorney-info.interface';
import { ResetPasswordResultAlt } from '../models/reset-password-result-alt.interface';
import { UsersAccessAllowParams, usersAccessAllowParamsAdapter } from './params/users-access-allow.params';
import { UsersAccessRejectedParams, usersAccessRejectedParamsAdapter } from './params/users-access-rejected.params';
import { UsersAllowAgreementsParams, usersAllowAgreementsParamsAdapter } from './params/users-allow-agreements.params';
import { UsersApiService } from '../../swagger/services/users-api.service';
import { UsersChangePasswordParams, usersChangePasswordParamsAdapter } from './params/users-change-password.params';
import { UsersForgotPasswordParams, usersForgotPasswordParamsAdapter } from './params/users-forgot-password.params';
import { UsersGetAgreementParams, usersGetAgreementParamsAdapter } from './params/users-get-agreement.params';
import { UsersGetExternalUserInfoParams, usersGetExternalUserInfoParamsAdapter } from './params/users-get-external-user-info.params';
import { UsersGetLoginPreferencesParams, usersGetLoginPreferencesParamsAdapter } from './params/users-get-login-preferences.params';
import { UsersGetOpenPartUserShopsParams, usersGetOpenPartUserShopsParamsAdapter } from './params/users-get-open-part-user-shops.params';
import { UsersGetPowerOfAttorneyParams, usersGetPowerOfAttorneyParamsAdapter } from './params/users-get-power-of-attorney.params';
import { UsersGetPowersOfAttorneyByCertParams, usersGetPowersOfAttorneyByCertParamsAdapter } from './params/users-get-powers-of-attorney-by-cert.params';
import { UsersGetUserWorkGroupsParams, usersGetUserWorkGroupsParamsAdapter } from './params/users-get-user-work-groups.params';
import { UsersMakeOrganizationSmpParams, usersMakeOrganizationSmpParamsAdapter } from './params/users-make-organization-smp.params';
import { UsersRemoveLoginPreferencesParams, usersRemoveLoginPreferencesParamsAdapter } from './params/users-remove-login-preferences.params';
import { UsersResetPasswordGetParams, usersResetPasswordGetParamsAdapter } from './params/users-reset-password-get.params';
import { UsersResetPasswordPostParams, usersResetPasswordPostParamsAdapter } from './params/users-reset-password-post.params';
import { UsersSetLoginPreferencesParams, usersSetLoginPreferencesParamsAdapter } from './params/users-set-login-preferences.params';
import { WorkGroup } from '../models/work-group.interface';

@Injectable({ providedIn: 'root' })
export class UsersRepository {
  private readonly _api = inject(UsersApiService);

  usersAccessAllow(params: UsersAccessAllowParams): Observable<boolean> {
    return this._api.usersAccessAllow(usersAccessAllowParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  usersAccessRejected(params: UsersAccessRejectedParams): Observable<boolean> {
    return this._api.usersAccessRejected(usersAccessRejectedParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  usersAllowAgreements(params?: UsersAllowAgreementsParams): Observable<boolean> {
    return this._api.usersAllowAgreements(usersAllowAgreementsParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  usersChangePassword(params?: UsersChangePasswordParams): Observable<void> {
    return this._api.usersChangePassword(usersChangePasswordParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  usersForgotPassword(params?: UsersForgotPasswordParams): Observable<ForgotPasswordResultAlt> {
    return this._api.usersForgotPassword(usersForgotPasswordParamsAdapter.adapt(params)).pipe(
      map((res) => adaptForgotPasswordResultAltToUI(res?.data))
    );
  }

  usersGetAgreement(params?: UsersGetAgreementParams): Observable<EmployeeAgreement> {
    return this._api.usersGetAgreement(usersGetAgreementParamsAdapter.adapt(params)).pipe(
      map((res) => adaptEmployeeAgreementToUI(res?.data))
    );
  }

  usersGetExternalUserInfo(params?: UsersGetExternalUserInfoParams): Observable<MarketUserProfile> {
    return this._api.usersGetExternalUserInfo(usersGetExternalUserInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMarketUserProfileToUI(res?.data))
    );
  }

  usersGetLoginPreferences(params?: UsersGetLoginPreferencesParams): Observable<LoginPreferenceModelAlt> {
    return this._api.usersGetLoginPreferences(usersGetLoginPreferencesParamsAdapter.adapt(params)).pipe(
      map((res) => adaptLoginPreferenceModelAltToUI(res?.data))
    );
  }

  usersGetOpenPartUserShops(params?: UsersGetOpenPartUserShopsParams): Observable<OpenPartUserShop[]> {
    return this._api.usersGetOpenPartUserShops(usersGetOpenPartUserShopsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptOpenPartUserShopToUI(item)))
    );
  }

  usersGetPowerOfAttorney(params: UsersGetPowerOfAttorneyParams): Observable<FileStreamModelAlt> {
    return this._api.usersGetPowerOfAttorney(usersGetPowerOfAttorneyParamsAdapter.adapt(params)).pipe(
      map((res) => adaptFileStreamModelAltToUI(res?.data))
    );
  }

  usersGetPowersOfAttorneyByCert(params?: UsersGetPowersOfAttorneyByCertParams): Observable<PowerOfAttorneyInfo[]> {
    return this._api.usersGetPowersOfAttorneyByCert(usersGetPowersOfAttorneyByCertParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptPowerOfAttorneyInfoToUI(item)))
    );
  }

  usersGetUserWorkGroups(params?: UsersGetUserWorkGroupsParams): Observable<WorkGroup[]> {
    return this._api.usersGetUserWorkGroups(usersGetUserWorkGroupsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptWorkGroupToUI(item)))
    );
  }

  usersMakeOrganizationSmp(params?: UsersMakeOrganizationSmpParams): Observable<void> {
    return this._api.usersMakeOrganizationSmp(usersMakeOrganizationSmpParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  usersRemoveLoginPreferences(params?: UsersRemoveLoginPreferencesParams): Observable<void> {
    return this._api.usersRemoveLoginPreferences(usersRemoveLoginPreferencesParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  usersResetPasswordGet(params: UsersResetPasswordGetParams): Observable<boolean> {
    return this._api.usersResetPasswordGet(usersResetPasswordGetParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  usersResetPasswordPost(params?: UsersResetPasswordPostParams): Observable<ResetPasswordResultAlt> {
    return this._api.usersResetPasswordPost(usersResetPasswordPostParamsAdapter.adapt(params)).pipe(
      map((res) => adaptResetPasswordResultAltToUI(res?.data))
    );
  }

  usersSetLoginPreferences(params?: UsersSetLoginPreferencesParams): Observable<void> {
    return this._api.usersSetLoginPreferences(usersSetLoginPreferencesParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

}
