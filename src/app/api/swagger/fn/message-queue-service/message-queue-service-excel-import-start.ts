/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface MessageQueueServiceExcelImportStart$Params {
  taskId: number;
}

export function messageQueueServiceExcelImportStart(http: HttpClient, rootUrl: string, params: MessageQueueServiceExcelImportStart$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, messageQueueServiceExcelImportStart.PATH, 'post');
  if (params) {
    rb.path('taskId', params.taskId, {});
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

messageQueueServiceExcelImportStart.PATH = '/bla-bla-vla/messageQueueService/ExcelImportStart/{taskId}';
