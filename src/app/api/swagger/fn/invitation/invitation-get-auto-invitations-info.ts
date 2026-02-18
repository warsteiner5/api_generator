/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiTradeAutoInvitationsInfoDto } from '../../models/api-trade-auto-invitations-info-dto';

export interface InvitationGetAutoInvitationsInfo$Params {
  tradeId: number;
}

export function invitationGetAutoInvitationsInfo(http: HttpClient, rootUrl: string, params: InvitationGetAutoInvitationsInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiTradeAutoInvitationsInfoDto>> {
  const rb = new RequestBuilder(rootUrl, invitationGetAutoInvitationsInfo.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiTradeAutoInvitationsInfoDto>;
    })
  );
}

invitationGetAutoInvitationsInfo.PATH = '/bla-bla-vla/invitation/AutoInvitationsInfo/{tradeId}';
