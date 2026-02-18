import { Injectable, inject } from '@angular/core';
import { MessageQueueServiceApiService } from '../../swagger/services/message-queue-service-api.service';
import { MessageQueueServiceExcelImportStartExportby2Params, messageQueueServiceExcelImportStartExportby2ParamsAdapter } from './params/message-queue-service-excel-import-start-exportby-2.params';
import { MessageQueueServiceExcelImportStartExportbyParams, messageQueueServiceExcelImportStartExportbyParamsAdapter } from './params/message-queue-service-excel-import-start-exportby.params';
import { MessageQueueServiceExcelImportStartParams, messageQueueServiceExcelImportStartParamsAdapter } from './params/message-queue-service-excel-import-start.params';
import { MessageQueueServiceLogSearchActionParams, messageQueueServiceLogSearchActionParamsAdapter } from './params/message-queue-service-log-search-action.params';
import { MessageQueueServiceLogUserActionParams, messageQueueServiceLogUserActionParamsAdapter } from './params/message-queue-service-log-user-action.params';
import { MessageQueueServiceLogUserBatchActionParams, messageQueueServiceLogUserBatchActionParamsAdapter } from './params/message-queue-service-log-user-batch-action.params';
import { MessageQueueServiceOfferImportProcessParams, messageQueueServiceOfferImportProcessParamsAdapter } from './params/message-queue-service-offer-import-process.params';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageQueueServiceRepository {
  private readonly _api = inject(MessageQueueServiceApiService);

  messageQueueServiceExcelImportStart(params: MessageQueueServiceExcelImportStartParams): Observable<Blob> {
    return this._api.messageQueueServiceExcelImportStart(messageQueueServiceExcelImportStartParamsAdapter.adapt(params));
  }

  messageQueueServiceExcelImportStartExportby(params: MessageQueueServiceExcelImportStartExportbyParams): Observable<Blob> {
    return this._api.messageQueueServiceExcelImportStartExportby(messageQueueServiceExcelImportStartExportbyParamsAdapter.adapt(params));
  }

  messageQueueServiceExcelImportStartExportby2(params?: MessageQueueServiceExcelImportStartExportby2Params): Observable<Blob> {
    return this._api.messageQueueServiceExcelImportStartExportby2(messageQueueServiceExcelImportStartExportby2ParamsAdapter.adapt(params));
  }

  messageQueueServiceLogSearchAction(params?: MessageQueueServiceLogSearchActionParams): Observable<Blob> {
    return this._api.messageQueueServiceLogSearchAction(messageQueueServiceLogSearchActionParamsAdapter.adapt(params));
  }

  messageQueueServiceLogUserAction(params?: MessageQueueServiceLogUserActionParams): Observable<Blob> {
    return this._api.messageQueueServiceLogUserAction(messageQueueServiceLogUserActionParamsAdapter.adapt(params));
  }

  messageQueueServiceLogUserBatchAction(params?: MessageQueueServiceLogUserBatchActionParams): Observable<Blob> {
    return this._api.messageQueueServiceLogUserBatchAction(messageQueueServiceLogUserBatchActionParamsAdapter.adapt(params));
  }

  messageQueueServiceOfferImportProcess(params: MessageQueueServiceOfferImportProcessParams): Observable<Blob> {
    return this._api.messageQueueServiceOfferImportProcess(messageQueueServiceOfferImportProcessParamsAdapter.adapt(params));
  }

}
