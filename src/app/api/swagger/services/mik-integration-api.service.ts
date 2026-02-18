/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { mikIntegrationSentForParticipantApprove } from '../fn/mik-integration/mik-integration-sent-for-participant-approve';
import { MikIntegrationSentForParticipantApprove$Params } from '../fn/mik-integration/mik-integration-sent-for-participant-approve';

@Injectable({ providedIn: 'root' })
export class MikIntegrationApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `mikIntegrationSentForParticipantApprove()` */
  static readonly MikIntegrationSentForParticipantApprovePath = '/api/mikIntegration/tenant/{tenantId}/isActiveIntegration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mikIntegrationSentForParticipantApprove()` instead.
   *
   * This method doesn't expect any request body.
   */
  mikIntegrationSentForParticipantApprove$Response(params: MikIntegrationSentForParticipantApprove$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return mikIntegrationSentForParticipantApprove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mikIntegrationSentForParticipantApprove$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  mikIntegrationSentForParticipantApprove(params: MikIntegrationSentForParticipantApprove$Params, context?: HttpContext): Observable<boolean> {
    return this.mikIntegrationSentForParticipantApprove$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

}
