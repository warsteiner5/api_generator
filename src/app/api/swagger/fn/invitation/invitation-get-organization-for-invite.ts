/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface InvitationGetOrganizationForInvite$Params {
  TradeLotId?: number;
  TradeId?: number;
  Page?: number;
  ItemsPerPage?: number;
  SortField?: string | null;
  SortDirection?: string | null;
}

export function invitationGetOrganizationForInvite(http: HttpClient, rootUrl: string, params?: InvitationGetOrganizationForInvite$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, invitationGetOrganizationForInvite.PATH, 'get');
  if (params) {
    rb.query('TradeLotId', params.TradeLotId, {});
    rb.query('TradeId', params.TradeId, {});
    rb.query('Page', params.Page, {});
    rb.query('ItemsPerPage', params.ItemsPerPage, {});
    rb.query('SortField', params.SortField, {});
    rb.query('SortDirection', params.SortDirection, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/octet-stream', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Blob>;
    })
  );
}

invitationGetOrganizationForInvite.PATH = '/api/invitation';
