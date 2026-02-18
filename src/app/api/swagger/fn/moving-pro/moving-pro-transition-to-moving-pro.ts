/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface MovingProTransitionToMovingPro$Params {
  EntityId?: number;
  SourceKladrCode?: string | null;
  DestinationKladrCode?: string | null;
  OperationId?: number;
  UserId?: number | null;
  OrganizationId?: number | null;
}

export function movingProTransitionToMovingPro(http: HttpClient, rootUrl: string, params?: MovingProTransitionToMovingPro$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, movingProTransitionToMovingPro.PATH, 'get');
  if (params) {
    rb.query('EntityId', params.EntityId, {});
    rb.query('SourceKladrCode', params.SourceKladrCode, {});
    rb.query('DestinationKladrCode', params.DestinationKladrCode, {});
    rb.query('OperationId', params.OperationId, {});
    rb.query('UserId', params.UserId, {});
    rb.query('OrganizationId', params.OrganizationId, {});
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

movingProTransitionToMovingPro.PATH = '/bla-bla-vla/moving-pro/transition';
