/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiLogUserBatchActionMessageDto } from '../../models/api-log-user-batch-action-message-dto';

export interface MessageQueueServiceLogUserBatchAction$Params {
      body?: ApiLogUserBatchActionMessageDto | null
}

export function messageQueueServiceLogUserBatchAction(http: HttpClient, rootUrl: string, params?: MessageQueueServiceLogUserBatchAction$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, messageQueueServiceLogUserBatchAction.PATH, 'post');
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

messageQueueServiceLogUserBatchAction.PATH = '/bla-bla-vla/messageQueueService/FksMarketUserBatch';
