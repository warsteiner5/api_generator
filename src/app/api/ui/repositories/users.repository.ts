import { EmployeeAgreement } from '../models/employee-agreement.interface';
import { employeeAgreementAdapter } from '../adapters/models/employee-agreement.adapter';
import { FileStreamModelAlt } from '../models/file-stream-model-alt.interface';
import { fileStreamModelAltAdapter } from '../adapters/models/file-stream-model-alt.adapter';
import { ForgotPasswordResultAlt } from '../models/forgot-password-result-alt.interface';
import { forgotPasswordResultAltAdapter } from '../adapters/models/forgot-password-result-alt.adapter';
import { Injectable, inject } from '@angular/core';
import { LoginPreferenceModelAlt } from '../models/login-preference-model-alt.interface';
import { loginPreferenceModelAltAdapter } from '../adapters/models/login-preference-model-alt.adapter';
import { map } from 'rxjs/operators';
import { MarketUserProfile } from '../models/market-user-profile.interface';
import { marketUserProfileAdapter } from '../adapters/models/market-user-profile.adapter';
import { Observable } from 'rxjs';
import { OpenPartUserShop } from '../models/open-part-user-shop.interface';
import { openPartUserShopAdapter } from '../adapters/models/open-part-user-shop.adapter';
import { PowerOfAttorneyInfo } from '../models/power-of-attorney-info.interface';
import { powerOfAttorneyInfoAdapter } from '../adapters/models/power-of-attorney-info.adapter';
import { ResetPasswordResultAlt } from '../models/reset-password-result-alt.interface';
import { resetPasswordResultAltAdapter } from '../adapters/models/reset-password-result-alt.adapter';
import { UsersAccessAllowParams, usersAccessAllowAdapter } from './params/users-access-allow.params';
import { UsersAccessRejectedParams, usersAccessRejectedAdapter } from './params/users-access-rejected.params';
import { UsersAllowAgreementsParams, usersAllowAgreementsAdapter } from './params/users-allow-agreements.params';
import { UsersApiService } from '../../swagger/services/users-api.service';
import { UsersChangePasswordParams, usersChangePasswordAdapter } from './params/users-change-password.params';
import { UsersForgotPasswordParams, usersForgotPasswordAdapter } from './params/users-forgot-password.params';
import { UsersGetAgreementParams, usersGetAgreementAdapter } from './params/users-get-agreement.params';
import { UsersGetExternalUserInfoParams, usersGetExternalUserInfoAdapter } from './params/users-get-external-user-info.params';
import { UsersGetLoginPreferencesParams, usersGetLoginPreferencesAdapter } from './params/users-get-login-preferences.params';
import { UsersGetOpenPartUserShopsParams, usersGetOpenPartUserShopsAdapter } from './params/users-get-open-part-user-shops.params';
import { UsersGetPowerOfAttorneyParams, usersGetPowerOfAttorneyAdapter } from './params/users-get-power-of-attorney.params';
import { UsersGetPowersOfAttorneyByCertParams, usersGetPowersOfAttorneyByCertAdapter } from './params/users-get-powers-of-attorney-by-cert.params';
import { UsersGetUserWorkGroupsParams, usersGetUserWorkGroupsAdapter } from './params/users-get-user-work-groups.params';
import { UsersMakeOrganizationSmpParams, usersMakeOrganizationSmpAdapter } from './params/users-make-organization-smp.params';
import { UsersRemoveLoginPreferencesParams, usersRemoveLoginPreferencesAdapter } from './params/users-remove-login-preferences.params';
import { UsersResetPasswordGetParams, usersResetPasswordGetAdapter } from './params/users-reset-password-get.params';
import { UsersResetPasswordPostParams, usersResetPasswordPostAdapter } from './params/users-reset-password-post.params';
import { UsersSetLoginPreferencesParams, usersSetLoginPreferencesAdapter } from './params/users-set-login-preferences.params';
import { WorkGroup } from '../models/work-group.interface';
import { workGroupAdapter } from '../adapters/models/work-group.adapter';

@Injectable({ providedIn: 'root' })
export class UsersRepository {
  private readonly _api = inject(UsersApiService);

  usersAccessAllow(params: UsersAccessAllowParams): Observable<boolean> {
    return this._api.usersAccessAllow(usersAccessAllowAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  usersAccessRejected(params: UsersAccessRejectedParams): Observable<boolean> {
    return this._api.usersAccessRejected(usersAccessRejectedAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  usersAllowAgreements(params?: UsersAllowAgreementsParams): Observable<boolean> {
    return this._api.usersAllowAgreements(usersAllowAgreementsAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  usersChangePassword(params?: UsersChangePasswordParams): Observable<void> {
    return this._api.usersChangePassword(usersChangePasswordAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  usersForgotPassword(params?: UsersForgotPasswordParams): Observable<ForgotPasswordResultAlt> {
    return this._api.usersForgotPassword(usersForgotPasswordAdapter(params)).pipe(
      map((res) => forgotPasswordResultAltAdapter(res?.data))
    );
  }

  usersGetAgreement(params?: UsersGetAgreementParams): Observable<EmployeeAgreement> {
    return this._api.usersGetAgreement(usersGetAgreementAdapter(params)).pipe(
      map((res) => employeeAgreementAdapter(res?.data))
    );
  }

  usersGetExternalUserInfo(params?: UsersGetExternalUserInfoParams): Observable<MarketUserProfile> {
    return this._api.usersGetExternalUserInfo(usersGetExternalUserInfoAdapter(params)).pipe(
      map((res) => marketUserProfileAdapter(res?.data))
    );
  }

  usersGetLoginPreferences(params?: UsersGetLoginPreferencesParams): Observable<LoginPreferenceModelAlt> {
    return this._api.usersGetLoginPreferences(usersGetLoginPreferencesAdapter(params)).pipe(
      map((res) => loginPreferenceModelAltAdapter(res?.data))
    );
  }

  usersGetOpenPartUserShops(params?: UsersGetOpenPartUserShopsParams): Observable<OpenPartUserShop[]> {
    return this._api.usersGetOpenPartUserShops(usersGetOpenPartUserShopsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => openPartUserShopAdapter(item)))
    );
  }

  usersGetPowerOfAttorney(params: UsersGetPowerOfAttorneyParams): Observable<FileStreamModelAlt> {
    return this._api.usersGetPowerOfAttorney(usersGetPowerOfAttorneyAdapter(params)).pipe(
      map((res) => fileStreamModelAltAdapter(res?.data))
    );
  }

  usersGetPowersOfAttorneyByCert(params?: UsersGetPowersOfAttorneyByCertParams): Observable<PowerOfAttorneyInfo[]> {
    return this._api.usersGetPowersOfAttorneyByCert(usersGetPowersOfAttorneyByCertAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => powerOfAttorneyInfoAdapter(item)))
    );
  }

  usersGetUserWorkGroups(params?: UsersGetUserWorkGroupsParams): Observable<WorkGroup[]> {
    return this._api.usersGetUserWorkGroups(usersGetUserWorkGroupsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => workGroupAdapter(item)))
    );
  }

  usersMakeOrganizationSmp(params?: UsersMakeOrganizationSmpParams): Observable<void> {
    return this._api.usersMakeOrganizationSmp(usersMakeOrganizationSmpAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  usersRemoveLoginPreferences(params?: UsersRemoveLoginPreferencesParams): Observable<void> {
    return this._api.usersRemoveLoginPreferences(usersRemoveLoginPreferencesAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  usersResetPasswordGet(params: UsersResetPasswordGetParams): Observable<boolean> {
    return this._api.usersResetPasswordGet(usersResetPasswordGetAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  usersResetPasswordPost(params?: UsersResetPasswordPostParams): Observable<ResetPasswordResultAlt> {
    return this._api.usersResetPasswordPost(usersResetPasswordPostAdapter(params)).pipe(
      map((res) => resetPasswordResultAltAdapter(res?.data))
    );
  }

  usersSetLoginPreferences(params?: UsersSetLoginPreferencesParams): Observable<void> {
    return this._api.usersSetLoginPreferences(usersSetLoginPreferencesAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

}
