/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DictionaryGetCountriesByCodes$Params {
  codes?: Array<string> | null;
}

export function dictionaryGetCountriesByCodes(http: HttpClient, rootUrl: string, params?: DictionaryGetCountriesByCodes$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, dictionaryGetCountriesByCodes.PATH, 'get');
  if (params) {
    rb.query('codes', params.codes, {"style":"form","explode":true});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/octet-stream', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Blob>;
    })
  );
}

dictionaryGetCountriesByCodes.PATH = '/bla-bla-vla/Dictionary/GetCountriesByCodes';
