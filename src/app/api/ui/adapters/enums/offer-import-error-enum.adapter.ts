import { ApiOfferImportErrorEnum } from '../../../swagger/models/api-offer-import-error-enum';
import { OfferImportErrorEnum } from '../../enums/offer-import-error.enum';

export const offerImportErrorEnumAdapter = (source?: ApiOfferImportErrorEnum | null): OfferImportErrorEnum => {
  switch (source) {
    case ApiOfferImportErrorEnum.UnspecifiedError:
      return OfferImportErrorEnum.UnspecifiedError;
    case ApiOfferImportErrorEnum.FailPictureLoad:
      return OfferImportErrorEnum.FailPictureLoad;
    case ApiOfferImportErrorEnum.FailDocumentLoad:
      return OfferImportErrorEnum.FailDocumentLoad;
    case ApiOfferImportErrorEnum.FailSaveDataBase:
      return OfferImportErrorEnum.FailSaveDataBase;
    case ApiOfferImportErrorEnum.FileParsingError:
      return OfferImportErrorEnum.FileParsingError;
    case ApiOfferImportErrorEnum.ValidationError:
      return OfferImportErrorEnum.ValidationError;
    case ApiOfferImportErrorEnum.CategoryError:
      return OfferImportErrorEnum.CategoryError;
    default:
      throw new Error(`Enum value is not defined: ApiOfferImportErrorEnum=${String(source)}`);
  }
}
