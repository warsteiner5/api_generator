/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiApiSearchResultOfApplicationInfoAltDto } from '../../models/api-api-search-result-of-application-info';
import { ApiApplicationFilterObjectAltDto } from '../../models/api-application-filter-object';

export interface ApplicationParticipantApplications$Params {
      body?: ApiApplicationFilterObjectAltDto | null
}

export function applicationParticipantApplications(http: HttpClient, rootUrl: string, params?: ApplicationParticipantApplications$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfApplicationInfoAltDto>> {
  const rb = new RequestBuilder(rootUrl, applicationParticipantApplications.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiApiSearchResultOfApplicationInfoAltDto>;
    })
  );
}

applicationParticipantApplications.PATH = '/api/ParticipantApplications';
