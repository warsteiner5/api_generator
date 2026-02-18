import { OfferImportErrorEnum } from '../../enums/offer-import-error.enum';
import { ApiOfferImportErrorEnum } from '../../../swagger/models/api-offer-import-error-enum';

export function adaptApiOfferImportErrorEnum(source?: OfferImportErrorEnum | null): ApiOfferImportErrorEnum {
  switch (source) {
    case OfferImportErrorEnum.UnspecifiedError:
      return ApiOfferImportErrorEnum.UnspecifiedError;
    case OfferImportErrorEnum.FailPictureLoad:
      return ApiOfferImportErrorEnum.FailPictureLoad;
    case OfferImportErrorEnum.FailDocumentLoad:
      return ApiOfferImportErrorEnum.FailDocumentLoad;
    case OfferImportErrorEnum.FailSaveDataBase:
      return ApiOfferImportErrorEnum.FailSaveDataBase;
    case OfferImportErrorEnum.FileParsingError:
      return ApiOfferImportErrorEnum.FileParsingError;
    case OfferImportErrorEnum.ValidationError:
      return ApiOfferImportErrorEnum.ValidationError;
    case OfferImportErrorEnum.CategoryError:
      return ApiOfferImportErrorEnum.CategoryError;
    default:
      throw new Error(`Enum value is not defined: OfferImportErrorEnum=${String(source)}`);
  }
}
