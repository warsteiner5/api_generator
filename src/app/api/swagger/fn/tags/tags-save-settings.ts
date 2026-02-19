/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiTagParticipantSettingDto } from '../../models/api-tag-participant-setting-dto';

export interface TagsSaveSettings$Params {
      body?: Array<ApiTagParticipantSettingDto> | null
}

export function tagsSaveSettings(http: HttpClient, rootUrl: string, params?: TagsSaveSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, tagsSaveSettings.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

tagsSaveSettings.PATH = '/market/api/v1/tags/settings';
