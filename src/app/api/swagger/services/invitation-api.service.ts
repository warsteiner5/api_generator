/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { invitationGetAutoInvitationsInfo } from '../fn/invitation/invitation-get-auto-invitations-info';
import { InvitationGetAutoInvitationsInfo$Params } from '../fn/invitation/invitation-get-auto-invitations-info';
import { invitationGetOrganizationForInvite } from '../fn/invitation/invitation-get-organization-for-invite';
import { InvitationGetOrganizationForInvite$Params } from '../fn/invitation/invitation-get-organization-for-invite';
import { ApiTradeAutoInvitationsInfoDto } from '../models/api-trade-auto-invitations-info-dto';

@Injectable({ providedIn: 'root' })
export class InvitationApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `invitationGetOrganizationForInvite()` */
  static readonly InvitationGetOrganizationForInvitePath = '/api/invitation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `invitationGetOrganizationForInvite()` instead.
   *
   * This method doesn't expect any request body.
   */
  invitationGetOrganizationForInvite$Response(params?: InvitationGetOrganizationForInvite$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return invitationGetOrganizationForInvite(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `invitationGetOrganizationForInvite$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  invitationGetOrganizationForInvite(params?: InvitationGetOrganizationForInvite$Params, context?: HttpContext): Observable<Blob> {
    return this.invitationGetOrganizationForInvite$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `invitationGetAutoInvitationsInfo()` */
  static readonly InvitationGetAutoInvitationsInfoPath = '/api/invitation/AutoInvitationsInfo/{tradeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `invitationGetAutoInvitationsInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  invitationGetAutoInvitationsInfo$Response(params: InvitationGetAutoInvitationsInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiTradeAutoInvitationsInfoDto>> {
    return invitationGetAutoInvitationsInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `invitationGetAutoInvitationsInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  invitationGetAutoInvitationsInfo(params: InvitationGetAutoInvitationsInfo$Params, context?: HttpContext): Observable<ApiTradeAutoInvitationsInfoDto> {
    return this.invitationGetAutoInvitationsInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiTradeAutoInvitationsInfoDto>): ApiTradeAutoInvitationsInfoDto => r.body)
    );
  }

}
