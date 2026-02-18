/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface TradePrepareOrganizationForTradeCreate$Params {
  inn: string | null;
  kpp: string | null;
  createIfNotExists: boolean;
}

export function tradePrepareOrganizationForTradeCreate(http: HttpClient, rootUrl: string, params: TradePrepareOrganizationForTradeCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, tradePrepareOrganizationForTradeCreate.PATH, 'get');
  if (params) {
    rb.query('inn', params.inn, {});
    rb.query('kpp', params.kpp, {});
    rb.query('createIfNotExists', params.createIfNotExists, {});
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

tradePrepareOrganizationForTradeCreate.PATH = '/bla-bla-vla/Trade/PrepareOrganizationForTradeCreate';
