import { MessageQueueServiceExcelImportStartExportby2$Params } from '../../../swagger/fn/message-queue-service/message-queue-service-excel-import-start-exportby-2';
import { MinPromTorgOfferImportStartMessage } from '../../models/min-prom-torg-offer-import-start-message.interface';
import { adaptApiMinPromTorgOfferImportStartMessageDto } from '../../adapters/toDto/api-min-prom-torg-offer-import-start-message-dto.adapter';

export interface MessageQueueServiceExcelImportStartExportby2Params {
  body?: MinPromTorgOfferImportStartMessage;
}

export const messageQueueServiceExcelImportStartExportby2ParamsAdapter = {
  adapt(params?: MessageQueueServiceExcelImportStartExportby2Params): MessageQueueServiceExcelImportStartExportby2$Params {
    if (!params) {
      return {} as MessageQueueServiceExcelImportStartExportby2$Params;
    }
    return {
      body: adaptApiMinPromTorgOfferImportStartMessageDto(params.body),
    };
  }
};
