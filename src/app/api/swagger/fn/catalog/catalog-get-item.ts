/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfCatalogItemDto } from '../../models/api-market-json-result-of-catalog-item-dto';

export interface CatalogGetItem$Params {
  id: number;
}

export function catalogGetItem(http: HttpClient, rootUrl: string, params: CatalogGetItem$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCatalogItemDto>> {
  const rb = new RequestBuilder(rootUrl, catalogGetItem.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

catalogGetItem.PATH = '/market/api/v1/catalog/item/{id}';
