import { MessageQueueServiceExcelImportStartExportby2$Params } from '../../../swagger/fn/message-queue-service/message-queue-service-excel-import-start-exportby-2';
import { MinPromTorgOfferImportStartMessage } from '../../models/min-prom-torg-offer-import-start-message.interface';
import { apiMinPromTorgOfferImportStartMessageDtoAdapter } from '../../adapters/models/api-min-prom-torg-offer-import-start-message-dto.adapter';

// @ts-ignore
export interface MessageQueueServiceExcelImportStartExportby2Params {
  body?: MinPromTorgOfferImportStartMessage;
}

export function messageQueueServiceExcelImportStartExportby2Adapter(params?: MessageQueueServiceExcelImportStartExportby2Params): MessageQueueServiceExcelImportStartExportby2$Params {
  if (!params) {
    return {} as MessageQueueServiceExcelImportStartExportby2$Params;
  }
  return {
      body: apiMinPromTorgOfferImportStartMessageDtoAdapter(params.body),
  };
}
