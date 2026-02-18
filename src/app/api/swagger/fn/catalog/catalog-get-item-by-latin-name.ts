/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfCatalogItemDto } from '../../models/api-market-json-result-of-catalog-item-dto';

export interface CatalogGetItemByLatinName$Params {
  transliteratedValue: string | null;
}

export function catalogGetItemByLatinName(http: HttpClient, rootUrl: string, params: CatalogGetItemByLatinName$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCatalogItemDto>> {
  const rb = new RequestBuilder(rootUrl, catalogGetItemByLatinName.PATH, 'get');
  if (params) {
    rb.path('transliteratedValue', params.transliteratedValue, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfCatalogItemDto>;
    })
  );
}

catalogGetItemByLatinName.PATH = '/bla-bla-vla/catalog/item/transliterated/{transliteratedValue}';
