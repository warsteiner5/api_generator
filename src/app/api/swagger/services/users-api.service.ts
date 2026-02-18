/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfBoolean } from '../models/api-market-json-result-of-boolean';
import { ApiMarketJsonResultOfEmployeeAgreementDto } from '../models/api-market-json-result-of-employee-agreement-dto';
import { ApiMarketJsonResultOfFileStreamModel } from '../models/api-market-json-result-of-file-stream-model';
import { ApiMarketJsonResultOfForgotPasswordResult } from '../models/api-market-json-result-of-forgot-password-result';
import { ApiMarketJsonResultOfListOfPowerOfAttorneyInfoDto } from '../models/api-market-json-result-of-list-of-power-of-attorney-info-dto';
import { ApiMarketJsonResultOfLoginPreferenceModel } from '../models/api-market-json-result-of-login-preference-model';
import { ApiMarketJsonResultOfMarketUserProfileDto } from '../models/api-market-json-result-of-market-user-profile-dto';
import { ApiMarketJsonResultOfOpenPartUserShopDtoOf } from '../models/api-market-json-result-of-open-part-user-shop-dto-of';
import { ApiMarketJsonResultOfResetPasswordResult } from '../models/api-market-json-result-of-reset-password-result';
import { ApiMarketJsonResultOfWorkGroupDtoOf } from '../models/api-market-json-result-of-work-group-dto-of';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { usersAccessAllow } from '../fn/users/users-access-allow';
import { UsersAccessAllow$Params } from '../fn/users/users-access-allow';
import { usersAccessRejected } from '../fn/users/users-access-rejected';
import { UsersAccessRejected$Params } from '../fn/users/users-access-rejected';
import { usersAllowAgreements } from '../fn/users/users-allow-agreements';
import { UsersAllowAgreements$Params } from '../fn/users/users-allow-agreements';
import { usersChangePassword } from '../fn/users/users-change-password';
import { UsersChangePassword$Params } from '../fn/users/users-change-password';
import { usersForgotPassword } from '../fn/users/users-forgot-password';
import { UsersForgotPassword$Params } from '../fn/users/users-forgot-password';
import { usersGetAgreement } from '../fn/users/users-get-agreement';
import { UsersGetAgreement$Params } from '../fn/users/users-get-agreement';
import { usersGetExternalUserInfo } from '../fn/users/users-get-external-user-info';
import { UsersGetExternalUserInfo$Params } from '../fn/users/users-get-external-user-info';
import { usersGetLoginPreferences } from '../fn/users/users-get-login-preferences';
import { UsersGetLoginPreferences$Params } from '../fn/users/users-get-login-preferences';
import { usersGetOpenPartUserShops } from '../fn/users/users-get-open-part-user-shops';
import { UsersGetOpenPartUserShops$Params } from '../fn/users/users-get-open-part-user-shops';
import { usersGetPowerOfAttorney } from '../fn/users/users-get-power-of-attorney';
import { UsersGetPowerOfAttorney$Params } from '../fn/users/users-get-power-of-attorney';
import { usersGetPowersOfAttorneyByCert } from '../fn/users/users-get-powers-of-attorney-by-cert';
import { UsersGetPowersOfAttorneyByCert$Params } from '../fn/users/users-get-powers-of-attorney-by-cert';
import { usersGetUserWorkGroups } from '../fn/users/users-get-user-work-groups';
import { UsersGetUserWorkGroups$Params } from '../fn/users/users-get-user-work-groups';
import { usersMakeOrganizationSmp } from '../fn/users/users-make-organization-smp';
import { UsersMakeOrganizationSmp$Params } from '../fn/users/users-make-organization-smp';
import { usersRemoveLoginPreferences } from '../fn/users/users-remove-login-preferences';
import { UsersRemoveLoginPreferences$Params } from '../fn/users/users-remove-login-preferences';
import { usersResetPasswordGet } from '../fn/users/users-reset-password-get';
import { UsersResetPasswordGet$Params } from '../fn/users/users-reset-password-get';
import { usersResetPasswordPost } from '../fn/users/users-reset-password-post';
import { UsersResetPasswordPost$Params } from '../fn/users/users-reset-password-post';
import { usersSetLoginPreferences } from '../fn/users/users-set-login-preferences';
import { UsersSetLoginPreferences$Params } from '../fn/users/users-set-login-preferences';

@Injectable({ providedIn: 'root' })
export class UsersApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `usersGetExternalUserInfo()` */
  static readonly UsersGetExternalUserInfoPath = '/bla-bla-vla/users/profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersGetExternalUserInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGetExternalUserInfo$Response(params?: UsersGetExternalUserInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketUserProfileDto>> {
    return usersGetExternalUserInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersGetExternalUserInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGetExternalUserInfo(params?: UsersGetExternalUserInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketUserProfileDto> {
    return this.usersGetExternalUserInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketUserProfileDto>): ApiMarketJsonResultOfMarketUserProfileDto => r.body)
    );
  }

  /** Path part for operation `usersAccessAllow()` */
  static readonly UsersAccessAllowPath = '/bla-bla-vla/users/allow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersAccessAllow()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersAccessAllow$Response(params: UsersAccessAllow$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return usersAccessAllow(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersAccessAllow$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersAccessAllow(params: UsersAccessAllow$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.usersAccessAllow$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `usersGetAgreement()` */
  static readonly UsersGetAgreementPath = '/bla-bla-vla/users/agreement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersGetAgreement()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGetAgreement$Response(params?: UsersGetAgreement$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfEmployeeAgreementDto>> {
    return usersGetAgreement(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersGetAgreement$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGetAgreement(params?: UsersGetAgreement$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfEmployeeAgreementDto> {
    return this.usersGetAgreement$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfEmployeeAgreementDto>): ApiMarketJsonResultOfEmployeeAgreementDto => r.body)
    );
  }

  /** Path part for operation `usersAllowAgreements()` */
  static readonly UsersAllowAgreementsPath = '/bla-bla-vla/users/agreement/allow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersAllowAgreements()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersAllowAgreements$Response(params?: UsersAllowAgreements$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return usersAllowAgreements(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersAllowAgreements$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersAllowAgreements(params?: UsersAllowAgreements$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.usersAllowAgreements$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `usersAccessRejected()` */
  static readonly UsersAccessRejectedPath = '/bla-bla-vla/users/reject';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersAccessRejected()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersAccessRejected$Response(params: UsersAccessRejected$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return usersAccessRejected(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersAccessRejected$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersAccessRejected(params: UsersAccessRejected$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.usersAccessRejected$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `usersMakeOrganizationSmp()` */
  static readonly UsersMakeOrganizationSmpPath = '/bla-bla-vla/users/makeSmp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersMakeOrganizationSmp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersMakeOrganizationSmp$Response(params?: UsersMakeOrganizationSmp$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return usersMakeOrganizationSmp(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersMakeOrganizationSmp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersMakeOrganizationSmp(params?: UsersMakeOrganizationSmp$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.usersMakeOrganizationSmp$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `usersGetUserWorkGroups()` */
  static readonly UsersGetUserWorkGroupsPath = '/bla-bla-vla/users/work-groups';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersGetUserWorkGroups()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGetUserWorkGroups$Response(params?: UsersGetUserWorkGroups$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfWorkGroupDtoOf>> {
    return usersGetUserWorkGroups(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersGetUserWorkGroups$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGetUserWorkGroups(params?: UsersGetUserWorkGroups$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfWorkGroupDtoOf> {
    return this.usersGetUserWorkGroups$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfWorkGroupDtoOf>): ApiMarketJsonResultOfWorkGroupDtoOf => r.body)
    );
  }

  /** Path part for operation `usersGetPowersOfAttorneyByCert()` */
  static readonly UsersGetPowersOfAttorneyByCertPath = '/bla-bla-vla/users/powers-of-attorney';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersGetPowersOfAttorneyByCert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersGetPowersOfAttorneyByCert$Response(params?: UsersGetPowersOfAttorneyByCert$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfPowerOfAttorneyInfoDto>> {
    return usersGetPowersOfAttorneyByCert(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersGetPowersOfAttorneyByCert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersGetPowersOfAttorneyByCert(params?: UsersGetPowersOfAttorneyByCert$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfPowerOfAttorneyInfoDto> {
    return this.usersGetPowersOfAttorneyByCert$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfPowerOfAttorneyInfoDto>): ApiMarketJsonResultOfListOfPowerOfAttorneyInfoDto => r.body)
    );
  }

  /** Path part for operation `usersGetPowerOfAttorney()` */
  static readonly UsersGetPowerOfAttorneyPath = '/bla-bla-vla/users/file/{fileId}/power-of-attorney/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersGetPowerOfAttorney()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGetPowerOfAttorney$Response(params: UsersGetPowerOfAttorney$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfFileStreamModel>> {
    return usersGetPowerOfAttorney(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersGetPowerOfAttorney$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGetPowerOfAttorney(params: UsersGetPowerOfAttorney$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfFileStreamModel> {
    return this.usersGetPowerOfAttorney$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfFileStreamModel>): ApiMarketJsonResultOfFileStreamModel => r.body)
    );
  }

  /** Path part for operation `usersForgotPassword()` */
  static readonly UsersForgotPasswordPath = '/bla-bla-vla/users/forgot-password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersForgotPassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersForgotPassword$Response(params?: UsersForgotPassword$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfForgotPasswordResult>> {
    return usersForgotPassword(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersForgotPassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersForgotPassword(params?: UsersForgotPassword$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfForgotPasswordResult> {
    return this.usersForgotPassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfForgotPasswordResult>): ApiMarketJsonResultOfForgotPasswordResult => r.body)
    );
  }

  /** Path part for operation `usersResetPasswordPost()` */
  static readonly UsersResetPasswordPostPath = '/bla-bla-vla/users/reset-password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersResetPasswordPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersResetPasswordPost$Response(params?: UsersResetPasswordPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfResetPasswordResult>> {
    return usersResetPasswordPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersResetPasswordPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersResetPasswordPost(params?: UsersResetPasswordPost$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfResetPasswordResult> {
    return this.usersResetPasswordPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfResetPasswordResult>): ApiMarketJsonResultOfResetPasswordResult => r.body)
    );
  }

  /** Path part for operation `usersChangePassword()` */
  static readonly UsersChangePasswordPath = '/bla-bla-vla/users/change-password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersChangePassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersChangePassword$Response(params?: UsersChangePassword$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return usersChangePassword(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersChangePassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersChangePassword(params?: UsersChangePassword$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.usersChangePassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `usersResetPasswordGet()` */
  static readonly UsersResetPasswordGetPath = '/bla-bla-vla/users/{login}/exists';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersResetPasswordGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersResetPasswordGet$Response(params: UsersResetPasswordGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return usersResetPasswordGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersResetPasswordGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersResetPasswordGet(params: UsersResetPasswordGet$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.usersResetPasswordGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `usersGetOpenPartUserShops()` */
  static readonly UsersGetOpenPartUserShopsPath = '/bla-bla-vla/users/tenants';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersGetOpenPartUserShops()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGetOpenPartUserShops$Response(params?: UsersGetOpenPartUserShops$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOpenPartUserShopDtoOf>> {
    return usersGetOpenPartUserShops(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersGetOpenPartUserShops$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGetOpenPartUserShops(params?: UsersGetOpenPartUserShops$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfOpenPartUserShopDtoOf> {
    return this.usersGetOpenPartUserShops$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfOpenPartUserShopDtoOf>): ApiMarketJsonResultOfOpenPartUserShopDtoOf => r.body)
    );
  }

  /** Path part for operation `usersGetLoginPreferences()` */
  static readonly UsersGetLoginPreferencesPath = '/bla-bla-vla/users/login/preferences';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersGetLoginPreferences()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGetLoginPreferences$Response(params?: UsersGetLoginPreferences$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLoginPreferenceModel>> {
    return usersGetLoginPreferences(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersGetLoginPreferences$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGetLoginPreferences(params?: UsersGetLoginPreferences$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfLoginPreferenceModel> {
    return this.usersGetLoginPreferences$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfLoginPreferenceModel>): ApiMarketJsonResultOfLoginPreferenceModel => r.body)
    );
  }

  /** Path part for operation `usersSetLoginPreferences()` */
  static readonly UsersSetLoginPreferencesPath = '/bla-bla-vla/users/login/preferences';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersSetLoginPreferences()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersSetLoginPreferences$Response(params?: UsersSetLoginPreferences$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return usersSetLoginPreferences(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersSetLoginPreferences$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersSetLoginPreferences(params?: UsersSetLoginPreferences$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.usersSetLoginPreferences$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `usersRemoveLoginPreferences()` */
  static readonly UsersRemoveLoginPreferencesPath = '/bla-bla-vla/users/login/preferences';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersRemoveLoginPreferences()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersRemoveLoginPreferences$Response(params?: UsersRemoveLoginPreferences$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return usersRemoveLoginPreferences(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersRemoveLoginPreferences$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersRemoveLoginPreferences(params?: UsersRemoveLoginPreferences$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.usersRemoveLoginPreferences$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

}
