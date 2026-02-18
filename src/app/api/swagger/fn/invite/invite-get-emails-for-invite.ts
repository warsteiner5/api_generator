/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface InviteGetEmailsForInvite$Params {
  fileGuid: string;
}

export function inviteGetEmailsForInvite(http: HttpClient, rootUrl: string, params: InviteGetEmailsForInvite$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, inviteGetEmailsForInvite.PATH, 'get');
  if (params) {
    rb.path('fileGuid', params.fileGuid, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonVoidResultAltDto>;
    })
  );
}

inviteGetEmailsForInvite.PATH = '/bla-bla-vla/invitation/emailParcse/{fileGuid}';
