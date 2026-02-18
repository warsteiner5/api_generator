/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiFederalLawLimitAltEnum } from '../../models/api-federal-law-limit';
import { ApiMarketJsonResultOfListOfFederalLawDto } from '../../models/api-market-json-result-of-list-of-federal-law-dto';

export interface FederalLawsGetAll$Params {
  limit?: ApiFederalLawLimitAltEnum | null;
}

export function federalLawsGetAll(http: HttpClient, rootUrl: string, params?: FederalLawsGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfFederalLawDto>> {
  const rb = new RequestBuilder(rootUrl, federalLawsGetAll.PATH, 'get');
  if (params) {
    rb.query('limit', params.limit, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfFederalLawDto>;
    })
  );
}

federalLawsGetAll.PATH = '/bla-bla-vla/federalLaws/GetAll';
