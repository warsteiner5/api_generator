import { EntityRead } from '../../models/entity-read.interface';
import { OutDocumentSetOutDocumentRead$Params } from '../../../swagger/fn/out-document/out-document-set-out-document-read';
import { apiEntityReadDtoAdapter } from '../../adapters/models/api-entity-read-dto.adapter';

// @ts-ignore
export interface OutDocumentSetOutDocumentReadParams {
  body?: EntityRead;
}

export function outDocumentSetOutDocumentReadAdapter(params?: OutDocumentSetOutDocumentReadParams): OutDocumentSetOutDocumentRead$Params {
  if (!params) {
    return {} as OutDocumentSetOutDocumentRead$Params;
  }
  return {
      body: apiEntityReadDtoAdapter(params.body),
  };
}
