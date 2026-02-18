/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { inviteGetEmailsForInvite } from '../fn/invite/invite-get-emails-for-invite';
import { InviteGetEmailsForInvite$Params } from '../fn/invite/invite-get-emails-for-invite';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';

@Injectable({ providedIn: 'root' })
export class InviteApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `inviteGetEmailsForInvite()` */
  static readonly InviteGetEmailsForInvitePath = '/bla-bla-vla/invitation/emailParcse/{fileGuid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `inviteGetEmailsForInvite()` instead.
   *
   * This method doesn't expect any request body.
   */
  inviteGetEmailsForInvite$Response(params: InviteGetEmailsForInvite$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return inviteGetEmailsForInvite(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `inviteGetEmailsForInvite$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  inviteGetEmailsForInvite(params: InviteGetEmailsForInvite$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.inviteGetEmailsForInvite$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

}
