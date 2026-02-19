/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCreateOrUpdateAutoUpdateRequestAltDto } from '../../models/api-create-or-update-auto-update-request';
import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface PriceListsManualPriceListUpdates$Params {
  priceListId: number;
      body?: ApiCreateOrUpdateAutoUpdateRequestAltDto | null
}

export function priceListsManualPriceListUpdates(http: HttpClient, rootUrl: string, params: PriceListsManualPriceListUpdates$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, priceListsManualPriceListUpdates.PATH, 'post');
  if (params) {
    rb.path('priceListId', params.priceListId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonVoidResultAltDto>;
    })
  );
}

priceListsManualPriceListUpdates.PATH = '/market/api/v1/priceLists/{priceListId}/manual-yml-url-update';
