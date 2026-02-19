/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiParticipantOfferImportTaskFilterAltDto } from '../../models/api-participant-offer-import-task-filter';
import { ApiSearchResultOfParticipantOfferImportTaskGridItemAltDto } from '../../models/api-search-result-of-participant-offer-import-task-grid-item';

export interface ParticipantOfferImportGetImportTasks$Params {
      body?: ApiParticipantOfferImportTaskFilterAltDto | null
}

export function participantOfferImportGetImportTasks(http: HttpClient, rootUrl: string, params?: ParticipantOfferImportGetImportTasks$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiSearchResultOfParticipantOfferImportTaskGridItemAltDto>> {
  const rb = new RequestBuilder(rootUrl, participantOfferImportGetImportTasks.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiSearchResultOfParticipantOfferImportTaskGridItemAltDto>;
    })
  );
}

participantOfferImportGetImportTasks.PATH = '/market/api/v1/offerimport/gettasks';
