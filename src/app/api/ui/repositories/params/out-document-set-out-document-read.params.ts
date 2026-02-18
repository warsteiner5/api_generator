import { EntityRead } from '../../models/entity-read.interface';
import { OutDocumentSetOutDocumentRead$Params } from '../../../swagger/fn/out-document/out-document-set-out-document-read';
import { adaptApiEntityReadDto } from '../../adapters/toDto/api-entity-read-dto.adapter';

export interface OutDocumentSetOutDocumentReadParams {
  body?: EntityRead;
}

export const outDocumentSetOutDocumentReadParamsAdapter = {
  adapt(params?: OutDocumentSetOutDocumentReadParams): OutDocumentSetOutDocumentRead$Params {
    if (!params) {
      return {} as OutDocumentSetOutDocumentRead$Params;
    }
    return {
      body: adaptApiEntityReadDto(params.body),
    };
  }
};
