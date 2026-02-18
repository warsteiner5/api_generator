/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiUsedClassificatorTypeEnum } from '../../models/api-used-classificator-type-enum';

export interface DictionaryGetOkpd2ValuesByCodes$Params {
  UsedClassificatorType?: ApiUsedClassificatorTypeEnum;
  Values?: Array<string> | null;
}

export function dictionaryGetOkpd2ValuesByCodes(http: HttpClient, rootUrl: string, params?: DictionaryGetOkpd2ValuesByCodes$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, dictionaryGetOkpd2ValuesByCodes.PATH, 'get');
  if (params) {
    rb.query('UsedClassificatorType', params.UsedClassificatorType, {});
    rb.query('Values', params.Values, {"style":"form","explode":true});
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

dictionaryGetOkpd2ValuesByCodes.PATH = '/bla-bla-vla/Dictionary/GetByCodes';
