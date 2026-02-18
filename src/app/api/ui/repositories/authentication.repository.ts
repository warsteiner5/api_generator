import { AuthenticationApiService } from '../../swagger/services/authentication-api.service';
import { AuthenticationAuthenticateIn223PublicApiParams, authenticationAuthenticateIn223PublicApiParamsAdapter } from './params/authentication-authenticate-in-223-public-api.params';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationRepository {
  private readonly _api = inject(AuthenticationApiService);

  authenticationAuthenticateIn223PublicApi(params: AuthenticationAuthenticateIn223PublicApiParams): Observable<Blob> {
    return this._api.authenticationAuthenticateIn223PublicApi(authenticationAuthenticateIn223PublicApiParamsAdapter.adapt(params));
  }

}
