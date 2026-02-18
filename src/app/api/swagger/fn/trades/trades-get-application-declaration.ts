/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfApplicationDocumentDto } from '../../models/api-market-json-result-of-application-document-dto';

export interface TradesGetApplicationDeclaration$Params {
}

export function tradesGetApplicationDeclaration(http: HttpClient, rootUrl: string, params?: TradesGetApplicationDeclaration$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfApplicationDocumentDto>> {
  const rb = new RequestBuilder(rootUrl, tradesGetApplicationDeclaration.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfApplicationDocumentDto>;
    })
  );
}

tradesGetApplicationDeclaration.PATH = '/bla-bla-vla/trades/application/declaration';
