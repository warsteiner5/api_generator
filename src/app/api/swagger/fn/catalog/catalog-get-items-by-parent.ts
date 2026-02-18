/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfTreeNodeDto } from '../../models/api-market-json-result-of-list-of-tree-node-dto';

export interface CatalogGetItemsByParent$Params {
  parentId: number;
}

export function catalogGetItemsByParent(http: HttpClient, rootUrl: string, params: CatalogGetItemsByParent$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfTreeNodeDto>> {
  const rb = new RequestBuilder(rootUrl, catalogGetItemsByParent.PATH, 'get');
  if (params) {
    rb.path('parentId', params.parentId, {});
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

catalogGetItemsByParent.PATH = '/bla-bla-vla/catalog/items/{parentId}';
