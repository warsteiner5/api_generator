/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiLogUserActionMessageDto } from '../../models/api-log-user-action-message-dto';

export interface MessageQueueServiceLogUserAction$Params {
      body?: ApiLogUserActionMessageDto | null
}

export function messageQueueServiceLogUserAction(http: HttpClient, rootUrl: string, params?: MessageQueueServiceLogUserAction$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, messageQueueServiceLogUserAction.PATH, 'post');
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

messageQueueServiceLogUserAction.PATH = '/market/api/v1/messageQueueService/FksMarketUser';
