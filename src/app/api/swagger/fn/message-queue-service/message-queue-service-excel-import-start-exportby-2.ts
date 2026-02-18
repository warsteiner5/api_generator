/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMinPromTorgOfferImportStartMessageDto } from '../../models/api-min-prom-torg-offer-import-start-message-dto';

export interface MessageQueueServiceExcelImportStartExportby2$Params {
      body?: ApiMinPromTorgOfferImportStartMessageDto | null
}

export function messageQueueServiceExcelImportStartExportby2(http: HttpClient, rootUrl: string, params?: MessageQueueServiceExcelImportStartExportby2$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, messageQueueServiceExcelImportStartExportby2.PATH, 'post');
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

messageQueueServiceExcelImportStartExportby2.PATH = '/bla-bla-vla/messageQueueService/MinPromTorgOfferImportStart';
