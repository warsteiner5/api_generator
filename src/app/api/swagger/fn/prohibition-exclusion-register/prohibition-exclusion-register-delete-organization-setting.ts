/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ProhibitionExclusionRegisterDeleteOrganizationSetting$Params {
  id: number;
}

export function prohibitionExclusionRegisterDeleteOrganizationSetting(http: HttpClient, rootUrl: string, params: ProhibitionExclusionRegisterDeleteOrganizationSetting$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, prohibitionExclusionRegisterDeleteOrganizationSetting.PATH, 'get');
  if (params) {
    rb.query('id', params.id, {});
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

prohibitionExclusionRegisterDeleteOrganizationSetting.PATH = '/bla-bla-vla/ProhibitionExclusionRegister/DeleteSetting';
