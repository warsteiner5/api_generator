/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiSuggestPaperFormSigningOnDemandOfProviderRequestDto } from '../../models/api-suggest-paper-form-signing-on-demand-of-provider-request-dto';

export interface DealSuggestPaperFormSigningOnDemandOfProvider$Params {
      body?: ApiSuggestPaperFormSigningOnDemandOfProviderRequestDto | null
}

export function dealSuggestPaperFormSigningOnDemandOfProvider(http: HttpClient, rootUrl: string, params?: DealSuggestPaperFormSigningOnDemandOfProvider$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
  const rb = new RequestBuilder(rootUrl, dealSuggestPaperFormSigningOnDemandOfProvider.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
    })
  );
}

dealSuggestPaperFormSigningOnDemandOfProvider.PATH = '/bla-bla-vla/Deal/SuggestPaperFormSigningOnDemandOfProvider';
