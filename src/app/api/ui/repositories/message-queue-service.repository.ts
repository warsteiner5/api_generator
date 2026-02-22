import { Injectable, inject } from '@angular/core';
import { MessageQueueServiceApiService } from '../../swagger/services/message-queue-service-api.service';
import { MessageQueueServiceExcelImportStartExportby2Params, messageQueueServiceExcelImportStartExportby2Adapter } from './params/message-queue-service-excel-import-start-exportby-2.params';
import { MessageQueueServiceExcelImportStartExportbyParams, messageQueueServiceExcelImportStartExportbyAdapter } from './params/message-queue-service-excel-import-start-exportby.params';
import { MessageQueueServiceExcelImportStartParams, messageQueueServiceExcelImportStartAdapter } from './params/message-queue-service-excel-import-start.params';
import { MessageQueueServiceLogSearchActionParams, messageQueueServiceLogSearchActionAdapter } from './params/message-queue-service-log-search-action.params';
import { MessageQueueServiceLogUserActionParams, messageQueueServiceLogUserActionAdapter } from './params/message-queue-service-log-user-action.params';
import { MessageQueueServiceLogUserBatchActionParams, messageQueueServiceLogUserBatchActionAdapter } from './params/message-queue-service-log-user-batch-action.params';
import { MessageQueueServiceOfferImportProcessParams, messageQueueServiceOfferImportProcessAdapter } from './params/message-queue-service-offer-import-process.params';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageQueueServiceRepository {
  private readonly _api = inject(MessageQueueServiceApiService);

  messageQueueServiceExcelImportStart(params: MessageQueueServiceExcelImportStartParams): Observable<Blob> {
    return this._api.messageQueueServiceExcelImportStart(messageQueueServiceExcelImportStartAdapter(params));
  }

  messageQueueServiceExcelImportStartExportby(params: MessageQueueServiceExcelImportStartExportbyParams): Observable<Blob> {
    return this._api.messageQueueServiceExcelImportStartExportby(messageQueueServiceExcelImportStartExportbyAdapter(params));
  }

  messageQueueServiceExcelImportStartExportby2(params?: MessageQueueServiceExcelImportStartExportby2Params): Observable<Blob> {
    return this._api.messageQueueServiceExcelImportStartExportby2(messageQueueServiceExcelImportStartExportby2Adapter(params));
  }

  messageQueueServiceLogSearchAction(params?: MessageQueueServiceLogSearchActionParams): Observable<Blob> {
    return this._api.messageQueueServiceLogSearchAction(messageQueueServiceLogSearchActionAdapter(params));
  }

  messageQueueServiceLogUserAction(params?: MessageQueueServiceLogUserActionParams): Observable<Blob> {
    return this._api.messageQueueServiceLogUserAction(messageQueueServiceLogUserActionAdapter(params));
  }

  messageQueueServiceLogUserBatchAction(params?: MessageQueueServiceLogUserBatchActionParams): Observable<Blob> {
    return this._api.messageQueueServiceLogUserBatchAction(messageQueueServiceLogUserBatchActionAdapter(params));
  }

  messageQueueServiceOfferImportProcess(params: MessageQueueServiceOfferImportProcessParams): Observable<Blob> {
    return this._api.messageQueueServiceOfferImportProcess(messageQueueServiceOfferImportProcessAdapter(params));
  }

}
