/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCreateImportTaskRequestAltDto } from '../../models/api-create-import-task-request';

export interface ParticipantOfferImportCreateImportTask$Params {
      body?: ApiCreateImportTaskRequestAltDto | null
}

export function participantOfferImportCreateImportTask(http: HttpClient, rootUrl: string, params?: ParticipantOfferImportCreateImportTask$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
  const rb = new RequestBuilder(rootUrl, participantOfferImportCreateImportTask.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
    })
  );
}

participantOfferImportCreateImportTask.PATH = '/market/api/v1/offerimport/create';
