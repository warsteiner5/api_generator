/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfSettingsAddedResponse } from '../../models/api-market-json-result-of-settings-added-response';
import { ApiMultipleTagSettingsAddDto } from '../../models/api-multiple-tag-settings-add-dto';

export interface PomogatorAddMultipleTagsSettings$Params {
      body?: ApiMultipleTagSettingsAddDto | null
}

export function pomogatorAddMultipleTagsSettings(http: HttpClient, rootUrl: string, params?: PomogatorAddMultipleTagsSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSettingsAddedResponse>> {
  const rb = new RequestBuilder(rootUrl, pomogatorAddMultipleTagsSettings.PATH, 'post');
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

pomogatorAddMultipleTagsSettings.PATH = '/bla-bla-vla/pomogator/addMultipleTagsSettings';
