/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface NicRegistriesGetById$Params {
  entryId: number;
}

export function nicRegistriesGetById(http: HttpClient, rootUrl: string, params: NicRegistriesGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, nicRegistriesGetById.PATH, 'get');
  if (params) {
    rb.path('entryId', params.entryId, {});
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

nicRegistriesGetById.PATH = '/bla-bla-vla/NicRegistry/{entryId}';
