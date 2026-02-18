/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfSettingsAddedResponse } from '../../models/api-market-json-result-of-settings-added-response';
import { ApiTagSettingsAddDto } from '../../models/api-tag-settings-add-dto';

export interface PomogatorAddTagsSettings$Params {
      body?: ApiTagSettingsAddDto | null
}

export function pomogatorAddTagsSettings(http: HttpClient, rootUrl: string, params?: PomogatorAddTagsSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSettingsAddedResponse>> {
  const rb = new RequestBuilder(rootUrl, pomogatorAddTagsSettings.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfSettingsAddedResponse>;
    })
  );
}

pomogatorAddTagsSettings.PATH = '/bla-bla-vla/pomogator/addTagsSettings';
