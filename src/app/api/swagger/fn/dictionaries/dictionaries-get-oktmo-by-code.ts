/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMunicipalityOktmoDto } from '../../models/api-market-json-result-of-municipality-oktmo-dto';

export interface DictionariesGetOktmoByCode$Params {
  code: string | null;
}

export function dictionariesGetOktmoByCode(http: HttpClient, rootUrl: string, params: DictionariesGetOktmoByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMunicipalityOktmoDto>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetOktmoByCode.PATH, 'get');
  if (params) {
    rb.path('code', params.code, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMunicipalityOktmoDto>;
    })
  );
}

dictionariesGetOktmoByCode.PATH = '/bla-bla-vla/dictionaries/oktmo/{code}';
