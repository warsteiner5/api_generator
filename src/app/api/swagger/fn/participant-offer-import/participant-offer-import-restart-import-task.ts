/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ParticipantOfferImportRestartImportTask$Params {
  taskId: number;
}

export function participantOfferImportRestartImportTask(http: HttpClient, rootUrl: string, params: ParticipantOfferImportRestartImportTask$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
  const rb = new RequestBuilder(rootUrl, participantOfferImportRestartImportTask.PATH, 'get');
  if (params) {
    rb.path('taskId', params.taskId, {});
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

participantOfferImportRestartImportTask.PATH = '/market/api/v1/offerimport/restart/{taskId}';
