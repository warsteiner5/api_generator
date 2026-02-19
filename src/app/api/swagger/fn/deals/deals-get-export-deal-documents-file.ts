/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DealsGetExportDealDocumentsFile$Params {
  id: number;
  tradeId: number;
}

export function dealsGetExportDealDocumentsFile(http: HttpClient, rootUrl: string, params: DealsGetExportDealDocumentsFile$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, dealsGetExportDealDocumentsFile.PATH, 'get');
  if (params) {
    rb.query('id', params.id, {});
    rb.query('tradeId', params.tradeId, {});
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

dealsGetExportDealDocumentsFile.PATH = '/market/api/v1/deals/export_documents/file';
