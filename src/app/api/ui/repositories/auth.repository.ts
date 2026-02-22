import { AuthApiService } from '../../swagger/services/auth-api.service';
import { AuthAuthorizeParams, authAuthorizeAdapter } from './params/auth-authorize.params';
import { AuthGetExternalUserInfoParams, authGetExternalUserInfoAdapter } from './params/auth-get-external-user-info.params';
import { AuthGetSsoRedirectUrlParams, authGetSsoRedirectUrlAdapter } from './params/auth-get-sso-redirect-url.params';
import { AuthIsMarketLoginEnabledParams, authIsMarketLoginEnabledAdapter } from './params/auth-is-market-login-enabled.params';
import { AuthLoginExternalParams, authLoginExternalAdapter } from './params/auth-login-external.params';
import { AuthLoginParams, authLoginAdapter } from './params/auth-login.params';
import { AuthRedirectCallbackParams, authRedirectCallbackAdapter } from './params/auth-redirect-callback.params';
import { AuthSignOutParams, authSignOutAdapter } from './params/auth-sign-out.params';
import { AuthVerifyCertificateParams, authVerifyCertificateAdapter } from './params/auth-verify-certificate.params';
import { AuthVerifyLoginPasswordParams, authVerifyLoginPasswordAdapter } from './params/auth-verify-login-password.params';
import { CertificateVerifyResultAlt } from '../models/certificate-verify-result-alt.interface';
import { certificateVerifyResultAltAdapter } from '../adapters/models/certificate-verify-result-alt.adapter';
import { ExternalUserInfoAlt } from '../models/external-user-info-alt.interface';
import { externalUserInfoAltAdapter } from '../adapters/models/external-user-info-alt.adapter';
import { Injectable, inject } from '@angular/core';
import { LoginVerifyResultAlt } from '../models/login-verify-result-alt.interface';
import { loginVerifyResultAltAdapter } from '../adapters/models/login-verify-result-alt.adapter';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SignInResultAlt } from '../models/sign-in-result-alt.interface';
import { signInResultAltAdapter } from '../adapters/models/sign-in-result-alt.adapter';

@Injectable({ providedIn: 'root' })
export class AuthRepository {
  private readonly _api = inject(AuthApiService);

  authAuthorize(params: AuthAuthorizeParams): Observable<Blob> {
    return this._api.authAuthorize(authAuthorizeAdapter(params));
  }

  authGetExternalUserInfo(params?: AuthGetExternalUserInfoParams): Observable<ExternalUserInfoAlt> {
    return this._api.authGetExternalUserInfo(authGetExternalUserInfoAdapter(params)).pipe(
      map((res) => externalUserInfoAltAdapter(res?.data))
    );
  }

  authGetSsoRedirectUrl(params: AuthGetSsoRedirectUrlParams): Observable<string> {
    return this._api.authGetSsoRedirectUrl(authGetSsoRedirectUrlAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  authIsMarketLoginEnabled(params?: AuthIsMarketLoginEnabledParams): Observable<boolean> {
    return this._api.authIsMarketLoginEnabled(authIsMarketLoginEnabledAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  authLogin(params?: AuthLoginParams): Observable<SignInResultAlt> {
    return this._api.authLogin(authLoginAdapter(params)).pipe(
      map((res) => signInResultAltAdapter(res?.data))
    );
  }

  authLoginExternal(params: AuthLoginExternalParams): Observable<SignInResultAlt> {
    return this._api.authLoginExternal(authLoginExternalAdapter(params)).pipe(
      map((res) => signInResultAltAdapter(res?.data))
    );
  }

  authRedirectCallback(params?: AuthRedirectCallbackParams): Observable<string> {
    return this._api.authRedirectCallback(authRedirectCallbackAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  authSignOut(params?: AuthSignOutParams): Observable<void> {
    return this._api.authSignOut(authSignOutAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  authVerifyCertificate(params?: AuthVerifyCertificateParams): Observable<CertificateVerifyResultAlt> {
    return this._api.authVerifyCertificate(authVerifyCertificateAdapter(params)).pipe(
      map((res) => certificateVerifyResultAltAdapter(res?.data))
    );
  }

  authVerifyLoginPassword(params?: AuthVerifyLoginPasswordParams): Observable<LoginVerifyResultAlt> {
    return this._api.authVerifyLoginPassword(authVerifyLoginPasswordAdapter(params)).pipe(
      map((res) => loginVerifyResultAltAdapter(res?.data))
    );
  }

}
