import { ActionTypeEnum } from '../../enums/action-type.enum';
import { ApiActionTypeEnum } from '../../../swagger/models/api-action-type-enum';

export function adaptApiActionTypeEnum(source?: ActionTypeEnum | null): ApiActionTypeEnum {
  switch (source) {
    case ActionTypeEnum.BuyFromSearch:
      return ApiActionTypeEnum.BuyFromSearch;
    case ActionTypeEnum.ViewOfferDetail:
      return ApiActionTypeEnum.ViewOfferDetail;
    case ActionTypeEnum.CustomerAuthentication44:
      return ApiActionTypeEnum.CustomerAuthentication44;
    case ActionTypeEnum.ParticipantAuthentication44:
      return ApiActionTypeEnum.ParticipantAuthentication44;
    case ActionTypeEnum.CustomerAuthentication223:
      return ApiActionTypeEnum.CustomerAuthentication223;
    case ActionTypeEnum.ParticipantAuthentication223:
      return ApiActionTypeEnum.ParticipantAuthentication223;
    case ActionTypeEnum.CustomerAuthenticationMz:
      return ApiActionTypeEnum.CustomerAuthenticationMz;
    case ActionTypeEnum.ParticipantAuthenticationMz:
      return ApiActionTypeEnum.ParticipantAuthenticationMz;
    case ActionTypeEnum.ManagerEnterAsEmploye:
      return ApiActionTypeEnum.ManagerEnterAsEmploye;
    case ActionTypeEnum.ManagerAddedOrganization:
      return ApiActionTypeEnum.ManagerAddedOrganization;
    case ActionTypeEnum.ManagerStartModerateOffers:
      return ApiActionTypeEnum.ManagerStartModerateOffers;
    case ActionTypeEnum.ManagerDoneModerateOffers:
      return ApiActionTypeEnum.ManagerDoneModerateOffers;
    case ActionTypeEnum.MyCatalogAddPriceList:
      return ApiActionTypeEnum.MyCatalogAddPriceList;
    case ActionTypeEnum.AddAdditionalAgreement:
      return ApiActionTypeEnum.AddAdditionalAgreement;
    case ActionTypeEnum.HistoryAddAsOrganization:
      return ApiActionTypeEnum.HistoryAddAsOrganization;
    case ActionTypeEnum.ManagerClickEnterAsEmploye:
      return ApiActionTypeEnum.ManagerClickEnterAsEmploye;
    case ActionTypeEnum.OffersBatchUpdate:
      return ApiActionTypeEnum.OffersBatchUpdate;
    case ActionTypeEnum.OffersSearch:
      return ApiActionTypeEnum.OffersSearch;
    case ActionTypeEnum.OffersProlongation:
      return ApiActionTypeEnum.OffersProlongation;
    case ActionTypeEnum.OffersExportToExcel:
      return ApiActionTypeEnum.OffersExportToExcel;
    case ActionTypeEnum.OffersSendingToModeration:
      return ApiActionTypeEnum.OffersSendingToModeration;
    case ActionTypeEnum.OffersDisapproving:
      return ApiActionTypeEnum.OffersDisapproving;
    case ActionTypeEnum.OffersApproving:
      return ApiActionTypeEnum.OffersApproving;
    case ActionTypeEnum.OffersRemoving:
      return ApiActionTypeEnum.OffersRemoving;
    case ActionTypeEnum.CartAddFromFavourites:
      return ApiActionTypeEnum.CartAddFromFavourites;
    case ActionTypeEnum.OrderCreationConfirmation:
      return ApiActionTypeEnum.OrderCreationConfirmation;
    case ActionTypeEnum.AddToCartFromFullCart:
      return ApiActionTypeEnum.AddToCartFromFullCart;
    case ActionTypeEnum.ViewMainMenuCustomItem:
      return ApiActionTypeEnum.ViewMainMenuCustomItem;
    case ActionTypeEnum.ReportsMenuItemStatisticsClicked:
      return ApiActionTypeEnum.ReportsMenuItemStatisticsClicked;
    case ActionTypeEnum.ReportsMenuItemRegisterClicked:
      return ApiActionTypeEnum.ReportsMenuItemRegisterClicked;
    case ActionTypeEnum.ReportsTradeRegistryTabClicked:
      return ApiActionTypeEnum.ReportsTradeRegistryTabClicked;
    case ActionTypeEnum.ReportsSupplierRegistryTabClicked:
      return ApiActionTypeEnum.ReportsSupplierRegistryTabClicked;
    case ActionTypeEnum.ReportsCustomerRegistryTabClicked:
      return ApiActionTypeEnum.ReportsCustomerRegistryTabClicked;
    case ActionTypeEnum.ReportsTradeRegistryGenerateButtonClicked:
      return ApiActionTypeEnum.ReportsTradeRegistryGenerateButtonClicked;
    case ActionTypeEnum.ReportsSupplierRegistryGenerateButtonClicked:
      return ApiActionTypeEnum.ReportsSupplierRegistryGenerateButtonClicked;
    case ActionTypeEnum.ReportsCustomerRegistryGenerateButtonClicked:
      return ApiActionTypeEnum.ReportsCustomerRegistryGenerateButtonClicked;
    default:
      throw new Error(`Enum value is not defined: ActionTypeEnum=${String(source)}`);
  }
}
