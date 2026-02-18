import { EntityDtoBaseAlt } from './entity-dto-base-alt.interface';
import { TradeDocumentTypeEnum } from '../enums/trade-document-type.enum';

export type DocumentDto3 = EntityDtoBaseAlt & { '_isAccreditationString'?: string | null; 'Name'?: string | null; 'FileGuid'?: string; 'FileName'?: string | null; 'UserFio'?: string | null; 'Tag'?: number; 'TradeDocumentType'?: TradeDocumentTypeEnum | null; 'Type'?: string | null; 'isAccreditationString'?: string | null; 'DocumentContent'?: string | null; 'ChangeDate'?: string | null; 'SoapHash'?: string | null; 'Base64Hash'?: string | null; 'Signature'?: string | null; 'UploadDate'?: string | null; 'Size'?: number | null; 'FromLastRevision'?: boolean | null; };
