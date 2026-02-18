import { adaptCertificateVerifyResultAltToUI } from '../adapters/toUI/certificate-verify-result-alt.adapter';
import { adaptExternalUserInfoAltToUI } from '../adapters/toUI/external-user-info-alt.adapter';
import { adaptLoginVerifyResultAltToUI } from '../adapters/toUI/login-verify-result-alt.adapter';
import { adaptSignInResultAltToUI } from '../adapters/toUI/sign-in-result-alt.adapter';
import { AuthApiService } from '../../swagger/services/auth-api.service';
import { AuthAuthorizeParams, authAuthorizeParamsAdapter } from './params/auth-authorize.params';
import { AuthGetExternalUserInfoParams, authGetExternalUserInfoParamsAdapter } from './params/auth-get-external-user-info.params';
import { AuthGetSsoRedirectUrlParams, authGetSsoRedirectUrlParamsAdapter } from './params/auth-get-sso-redirect-url.params';
import { AuthIsMarketLoginEnabledParams, authIsMarketLoginEnabledParamsAdapter } from './params/auth-is-market-login-enabled.params';
import { AuthLoginExternalParams, authLoginExternalParamsAdapter } from './params/auth-login-external.params';
import { AuthLoginParams, authLoginParamsAdapter } from './params/auth-login.params';
import { AuthRedirectCallbackParams, authRedirectCallbackParamsAdapter } from './params/auth-redirect-callback.params';
import { AuthSignOutParams, authSignOutParamsAdapter } from './params/auth-sign-out.params';
import { AuthVerifyCertificateParams, authVerifyCertificateParamsAdapter } from './params/auth-verify-certificate.params';
import { AuthVerifyLoginPasswordParams, authVerifyLoginPasswordParamsAdapter } from './params/auth-verify-login-password.params';
import { CertificateVerifyResultAlt } from '../models/certificate-verify-result-alt.interface';
import { ExternalUserInfoAlt } from '../models/external-user-info-alt.interface';
import { Injectable, inject } from '@angular/core';
import { LoginVerifyResultAlt } from '../models/login-verify-result-alt.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SignInResultAlt } from '../models/sign-in-result-alt.interface';

@Injectable({ providedIn: 'root' })
export class AuthRepository {
  private readonly _api = inject(AuthApiService);

  authAuthorize(params: AuthAuthorizeParams): Observable<Blob> {
    return this._api.authAuthorize(authAuthorizeParamsAdapter.adapt(params));
  }

  authGetExternalUserInfo(params?: AuthGetExternalUserInfoParams): Observable<ExternalUserInfoAlt> {
    return this._api.authGetExternalUserInfo(authGetExternalUserInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptExternalUserInfoAltToUI(res?.data))
    );
  }

  authGetSsoRedirectUrl(params: AuthGetSsoRedirectUrlParams): Observable<string> {
    return this._api.authGetSsoRedirectUrl(authGetSsoRedirectUrlParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  authIsMarketLoginEnabled(params?: AuthIsMarketLoginEnabledParams): Observable<boolean> {
    return this._api.authIsMarketLoginEnabled(authIsMarketLoginEnabledParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  authLogin(params?: AuthLoginParams): Observable<SignInResultAlt> {
    return this._api.authLogin(authLoginParamsAdapter.adapt(params)).pipe(
      map((res) => adaptSignInResultAltToUI(res?.data))
    );
  }

  authLoginExternal(params: AuthLoginExternalParams): Observable<SignInResultAlt> {
    return this._api.authLoginExternal(authLoginExternalParamsAdapter.adapt(params)).pipe(
      map((res) => adaptSignInResultAltToUI(res?.data))
    );
  }

  authRedirectCallback(params?: AuthRedirectCallbackParams): Observable<string> {
    return this._api.authRedirectCallback(authRedirectCallbackParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  authSignOut(params?: AuthSignOutParams): Observable<void> {
    return this._api.authSignOut(authSignOutParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  authVerifyCertificate(params?: AuthVerifyCertificateParams): Observable<CertificateVerifyResultAlt> {
    return this._api.authVerifyCertificate(authVerifyCertificateParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCertificateVerifyResultAltToUI(res?.data))
    );
  }

  authVerifyLoginPassword(params?: AuthVerifyLoginPasswordParams): Observable<LoginVerifyResultAlt> {
    return this._api.authVerifyLoginPassword(authVerifyLoginPasswordParamsAdapter.adapt(params)).pipe(
      map((res) => adaptLoginVerifyResultAltToUI(res?.data))
    );
  }

}
