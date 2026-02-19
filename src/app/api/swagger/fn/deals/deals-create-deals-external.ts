/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCreateDealDraftsRequestDto } from '../../models/api-create-deal-drafts-request-dto';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfIntegerAltDto } from '../../models/api-market-json-result-of-i-read-only-collection-of-integer';

export interface DealsCreateDealsExternal$Params {
      body?: ApiCreateDealDraftsRequestDto | null
}

export function dealsCreateDealsExternal(http: HttpClient, rootUrl: string, params?: DealsCreateDealsExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfIntegerAltDto>> {
  const rb = new RequestBuilder(rootUrl, dealsCreateDealsExternal.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfIntegerAltDto>;
    })
  );
}

dealsCreateDealsExternal.PATH = '/market/api/v1/deals/create/external';
