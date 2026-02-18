/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';
import { ApiTagSettingsUpdateDto } from '../../models/api-tag-settings-update-dto';

export interface PomogatorUpdateTagsSettings$Params {
      body?: ApiTagSettingsUpdateDto | null
}

export function pomogatorUpdateTagsSettings(http: HttpClient, rootUrl: string, params?: PomogatorUpdateTagsSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, pomogatorUpdateTagsSettings.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonVoidResultAltDto>;
    })
  );
}

pomogatorUpdateTagsSettings.PATH = '/bla-bla-vla/pomogator/updateTagsSettings';
