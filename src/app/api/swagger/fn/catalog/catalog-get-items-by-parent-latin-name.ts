/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfTreeNodeDto } from '../../models/api-market-json-result-of-list-of-tree-node-dto';

export interface CatalogGetItemsByParentLatinName$Params {
  parentTransliterate: string | null;
}

export function catalogGetItemsByParentLatinName(http: HttpClient, rootUrl: string, params: CatalogGetItemsByParentLatinName$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfTreeNodeDto>> {
  const rb = new RequestBuilder(rootUrl, catalogGetItemsByParentLatinName.PATH, 'get');
  if (params) {
    rb.path('parentTransliterate', params.parentTransliterate, {});
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

catalogGetItemsByParentLatinName.PATH = '/bla-bla-vla/catalog/items/transliterated/{parentTransliterate}';
