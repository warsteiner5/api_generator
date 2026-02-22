import { EntityDtoBase } from './entity-dto-base.interface';
import { TradeDocumentTypeEnum } from '../enums/trade-document-type.enum';

// @ts-ignore
export interface DocumentDto3 extends EntityDtoBase {
  isaccreditationstring: string;
  name: string;
  fileGuid: string;
  fileName: string;
  userFio: string;
  tag: number;
  tradeDocumentType: TradeDocumentTypeEnum;
  type: string;
  isAccreditationString: string;
  documentContent: string;
  changeDate: string;
  soapHash: string;
  base64Hash: string;
  signature: string;
  uploadDate: string;
  size: number;
  fromLastRevision: boolean;
}
