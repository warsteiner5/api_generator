/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfTreeNodeDto } from '../../models/api-market-json-result-of-list-of-tree-node-dto';

export interface CatalogGetItemsByLevel$Params {
  level: number;
}

export function catalogGetItemsByLevel(http: HttpClient, rootUrl: string, params: CatalogGetItemsByLevel$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfTreeNodeDto>> {
  const rb = new RequestBuilder(rootUrl, catalogGetItemsByLevel.PATH, 'get');
  if (params) {
    rb.path('level', params.level, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfTreeNodeDto>;
    })
  );
}

catalogGetItemsByLevel.PATH = '/bla-bla-vla/catalog/lvl/{level}';
