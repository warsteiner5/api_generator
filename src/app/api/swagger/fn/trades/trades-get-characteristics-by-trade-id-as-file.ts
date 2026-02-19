/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface TradesGetCharacteristicsByTradeIdAsFile$Params {
  id: number;
}

export function tradesGetCharacteristicsByTradeIdAsFile(http: HttpClient, rootUrl: string, params: TradesGetCharacteristicsByTradeIdAsFile$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, tradesGetCharacteristicsByTradeIdAsFile.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

tradesGetCharacteristicsByTradeIdAsFile.PATH = '/market/api/v1/trades/{id}/characteristics/file';
