/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiDealInfoRequestDto } from '../../models/api-deal-info-request-dto';

export interface DealSuggestPaperFormSigning$Params {
      body?: ApiDealInfoRequestDto | null
}

export function dealSuggestPaperFormSigning(http: HttpClient, rootUrl: string, params?: DealSuggestPaperFormSigning$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
  const rb = new RequestBuilder(rootUrl, dealSuggestPaperFormSigning.PATH, 'post');
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

dealSuggestPaperFormSigning.PATH = '/bla-bla-vla/Deal/SuggestPaperFormSigning';
