/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface BelgorodBudgetsGetBelgorodBudgets$Params {
  pageSize: number | null;
  name?: string | null;
}

export function belgorodBudgetsGetBelgorodBudgets(http: HttpClient, rootUrl: string, params: BelgorodBudgetsGetBelgorodBudgets$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, belgorodBudgetsGetBelgorodBudgets.PATH, 'get');
  if (params) {
    rb.query('pageSize', params.pageSize, {});
    rb.query('name', params.name, {});
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

belgorodBudgetsGetBelgorodBudgets.PATH = '/bla-bla-vla/belgorodbudgets';
