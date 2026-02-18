/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiUsedClassificatorTypeEnum } from '../../models/api-used-classificator-type-enum';

export interface DictionaryGetAllByParentCodeRecursive$Params {
  UsedClassificatorType?: ApiUsedClassificatorTypeEnum;
  Value?: string | null;
}

export function dictionaryGetAllByParentCodeRecursive(http: HttpClient, rootUrl: string, params?: DictionaryGetAllByParentCodeRecursive$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, dictionaryGetAllByParentCodeRecursive.PATH, 'get');
  if (params) {
    rb.query('UsedClassificatorType', params.UsedClassificatorType, {});
    rb.query('Value', params.Value, {});
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

dictionaryGetAllByParentCodeRecursive.PATH = '/bla-bla-vla/Dictionary/GetAllByParentCodeRecursive';
