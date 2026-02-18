/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTagParticipantViewDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-tag-participant-view-dto';

export interface TagsGetTagsForParticipant$Params {
}

export function tagsGetTagsForParticipant(http: HttpClient, rootUrl: string, params?: TagsGetTagsForParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTagParticipantViewDto>> {
  const rb = new RequestBuilder(rootUrl, tagsGetTagsForParticipant.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTagParticipantViewDto>;
    })
  );
}

tagsGetTagsForParticipant.PATH = '/bla-bla-vla/tags/settings';
