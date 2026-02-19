/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { authAuthorize } from '../fn/auth/auth-authorize';
import { AuthAuthorize$Params } from '../fn/auth/auth-authorize';
import { authGetExternalUserInfo } from '../fn/auth/auth-get-external-user-info';
import { AuthGetExternalUserInfo$Params } from '../fn/auth/auth-get-external-user-info';
import { authGetSsoRedirectUrl } from '../fn/auth/auth-get-sso-redirect-url';
import { AuthGetSsoRedirectUrl$Params } from '../fn/auth/auth-get-sso-redirect-url';
import { authIsMarketLoginEnabled } from '../fn/auth/auth-is-market-login-enabled';
import { AuthIsMarketLoginEnabled$Params } from '../fn/auth/auth-is-market-login-enabled';
import { authLogin } from '../fn/auth/auth-login';
import { AuthLogin$Params } from '../fn/auth/auth-login';
import { authLoginExternal } from '../fn/auth/auth-login-external';
import { AuthLoginExternal$Params } from '../fn/auth/auth-login-external';
import { authRedirectCallback } from '../fn/auth/auth-redirect-callback';
import { AuthRedirectCallback$Params } from '../fn/auth/auth-redirect-callback';
import { authSignOut } from '../fn/auth/auth-sign-out';
import { AuthSignOut$Params } from '../fn/auth/auth-sign-out';
import { authVerifyCertificate } from '../fn/auth/auth-verify-certificate';
import { AuthVerifyCertificate$Params } from '../fn/auth/auth-verify-certificate';
import { authVerifyLoginPassword } from '../fn/auth/auth-verify-login-password';
import { AuthVerifyLoginPassword$Params } from '../fn/auth/auth-verify-login-password';
import { ApiMarketJsonResultOfBooleanAltDto } from '../models/api-market-json-result-of-boolean';
import { ApiMarketJsonResultOfCertificateVerifyResultAltDto } from '../models/api-market-json-result-of-certificate-verify-result';
import { ApiMarketJsonResultOfExternalUserInfoAltDto } from '../models/api-market-json-result-of-external-user-info';
import { ApiMarketJsonResultOfLoginVerifyResultAltDto } from '../models/api-market-json-result-of-login-verify-result';
import { ApiMarketJsonResultOfSignInResultAltDto } from '../models/api-market-json-result-of-sign-in-result';
import { ApiMarketJsonResultOfStringAltDto } from '../models/api-market-json-result-of-string';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';

@Injectable({ providedIn: 'root' })
export class AuthApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `authIsMarketLoginEnabled()` */
  static readonly AuthIsMarketLoginEnabledPath = '/market/api/v1/auth/enabled';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authIsMarketLoginEnabled()` instead.
   *
   * This method doesn't expect any request body.
   */
  authIsMarketLoginEnabled$Response(params?: AuthIsMarketLoginEnabled$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return authIsMarketLoginEnabled(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authIsMarketLoginEnabled$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authIsMarketLoginEnabled(params?: AuthIsMarketLoginEnabled$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.authIsMarketLoginEnabled$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `authAuthorize()` */
  static readonly AuthAuthorizePath = '/market/api/v1/auth/authorize';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authAuthorize()` instead.
   *
   * This method doesn't expect any request body.
   */
  authAuthorize$Response(params: AuthAuthorize$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return authAuthorize(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authAuthorize$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authAuthorize(params: AuthAuthorize$Params, context?: HttpContext): Observable<Blob> {
    return this.authAuthorize$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `authLogin()` */
  static readonly AuthLoginPath = '/market/api/v1/auth/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authLogin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authLogin$Response(params?: AuthLogin$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSignInResultAltDto>> {
    return authLogin(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authLogin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authLogin(params?: AuthLogin$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfSignInResultAltDto> {
    return this.authLogin$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfSignInResultAltDto>): ApiMarketJsonResultOfSignInResultAltDto => r.body)
    );
  }

  /** Path part for operation `authLoginExternal()` */
  static readonly AuthLoginExternalPath = '/market/api/v1/auth/login/external/{ExternalSystemIdentityKey}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authLoginExternal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authLoginExternal$Response(params: AuthLoginExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSignInResultAltDto>> {
    return authLoginExternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authLoginExternal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authLoginExternal(params: AuthLoginExternal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfSignInResultAltDto> {
    return this.authLoginExternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfSignInResultAltDto>): ApiMarketJsonResultOfSignInResultAltDto => r.body)
    );
  }

  /** Path part for operation `authSignOut()` */
  static readonly AuthSignOutPath = '/market/api/v1/auth/signout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authSignOut()` instead.
   *
   * This method doesn't expect any request body.
   */
  authSignOut$Response(params?: AuthSignOut$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return authSignOut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authSignOut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authSignOut(params?: AuthSignOut$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.authSignOut$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `authGetSsoRedirectUrl()` */
  static readonly AuthGetSsoRedirectUrlPath = '/market/api/v1/auth/sso/redirect';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authGetSsoRedirectUrl()` instead.
   *
   * This method doesn't expect any request body.
   */
  authGetSsoRedirectUrl$Response(params: AuthGetSsoRedirectUrl$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfStringAltDto>> {
    return authGetSsoRedirectUrl(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authGetSsoRedirectUrl$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authGetSsoRedirectUrl(params: AuthGetSsoRedirectUrl$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfStringAltDto> {
    return this.authGetSsoRedirectUrl$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfStringAltDto>): ApiMarketJsonResultOfStringAltDto => r.body)
    );
  }

  /** Path part for operation `authRedirectCallback()` */
  static readonly AuthRedirectCallbackPath = '/market/api/v1/auth/sso/callback';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authRedirectCallback()` instead.
   *
   * This method doesn't expect any request body.
   */
  authRedirectCallback$Response(params?: AuthRedirectCallback$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfStringAltDto>> {
    return authRedirectCallback(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authRedirectCallback$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authRedirectCallback(params?: AuthRedirectCallback$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfStringAltDto> {
    return this.authRedirectCallback$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfStringAltDto>): ApiMarketJsonResultOfStringAltDto => r.body)
    );
  }

  /** Path part for operation `authVerifyCertificate()` */
  static readonly AuthVerifyCertificatePath = '/market/api/v1/auth/certificate/verify';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authVerifyCertificate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authVerifyCertificate$Response(params?: AuthVerifyCertificate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCertificateVerifyResultAltDto>> {
    return authVerifyCertificate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authVerifyCertificate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authVerifyCertificate(params?: AuthVerifyCertificate$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfCertificateVerifyResultAltDto> {
    return this.authVerifyCertificate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfCertificateVerifyResultAltDto>): ApiMarketJsonResultOfCertificateVerifyResultAltDto => r.body)
    );
  }

  /** Path part for operation `authVerifyLoginPassword()` */
  static readonly AuthVerifyLoginPasswordPath = '/market/api/v1/auth/login/verify';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authVerifyLoginPassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authVerifyLoginPassword$Response(params?: AuthVerifyLoginPassword$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLoginVerifyResultAltDto>> {
    return authVerifyLoginPassword(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authVerifyLoginPassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authVerifyLoginPassword(params?: AuthVerifyLoginPassword$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfLoginVerifyResultAltDto> {
    return this.authVerifyLoginPassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfLoginVerifyResultAltDto>): ApiMarketJsonResultOfLoginVerifyResultAltDto => r.body)
    );
  }

  /** Path part for operation `authGetExternalUserInfo()` */
  static readonly AuthGetExternalUserInfoPath = '/market/api/v1/auth/externalUserInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authGetExternalUserInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  authGetExternalUserInfo$Response(params?: AuthGetExternalUserInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfExternalUserInfoAltDto>> {
    return authGetExternalUserInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authGetExternalUserInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authGetExternalUserInfo(params?: AuthGetExternalUserInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfExternalUserInfoAltDto> {
    return this.authGetExternalUserInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfExternalUserInfoAltDto>): ApiMarketJsonResultOfExternalUserInfoAltDto => r.body)
    );
  }

}
