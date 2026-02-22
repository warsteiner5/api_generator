import { ApiActionTypeEnum } from '../../../swagger/models/api-action-type-enum';
import { ActionTypeEnum } from '../../enums/action-type.enum';

export const actionTypeEnumAdapter = (source?: ApiActionTypeEnum | null): ActionTypeEnum => {
  switch (source) {
    case ApiActionTypeEnum.BuyFromSearch:
      return ActionTypeEnum.BuyFromSearch;
    case ApiActionTypeEnum.ViewOfferDetail:
      return ActionTypeEnum.ViewOfferDetail;
    case ApiActionTypeEnum.CustomerAuthentication44:
      return ActionTypeEnum.CustomerAuthentication44;
    case ApiActionTypeEnum.ParticipantAuthentication44:
      return ActionTypeEnum.ParticipantAuthentication44;
    case ApiActionTypeEnum.CustomerAuthentication223:
      return ActionTypeEnum.CustomerAuthentication223;
    case ApiActionTypeEnum.ParticipantAuthentication223:
      return ActionTypeEnum.ParticipantAuthentication223;
    case ApiActionTypeEnum.CustomerAuthenticationMz:
      return ActionTypeEnum.CustomerAuthenticationMz;
    case ApiActionTypeEnum.ParticipantAuthenticationMz:
      return ActionTypeEnum.ParticipantAuthenticationMz;
    case ApiActionTypeEnum.ManagerEnterAsEmploye:
      return ActionTypeEnum.ManagerEnterAsEmploye;
    case ApiActionTypeEnum.ManagerAddedOrganization:
      return ActionTypeEnum.ManagerAddedOrganization;
    case ApiActionTypeEnum.ManagerStartModerateOffers:
      return ActionTypeEnum.ManagerStartModerateOffers;
    case ApiActionTypeEnum.ManagerDoneModerateOffers:
      return ActionTypeEnum.ManagerDoneModerateOffers;
    case ApiActionTypeEnum.MyCatalogAddPriceList:
      return ActionTypeEnum.MyCatalogAddPriceList;
    case ApiActionTypeEnum.AddAdditionalAgreement:
      return ActionTypeEnum.AddAdditionalAgreement;
    case ApiActionTypeEnum.HistoryAddAsOrganization:
      return ActionTypeEnum.HistoryAddAsOrganization;
    case ApiActionTypeEnum.ManagerClickEnterAsEmploye:
      return ActionTypeEnum.ManagerClickEnterAsEmploye;
    case ApiActionTypeEnum.OffersBatchUpdate:
      return ActionTypeEnum.OffersBatchUpdate;
    case ApiActionTypeEnum.OffersSearch:
      return ActionTypeEnum.OffersSearch;
    case ApiActionTypeEnum.OffersProlongation:
      return ActionTypeEnum.OffersProlongation;
    case ApiActionTypeEnum.OffersExportToExcel:
      return ActionTypeEnum.OffersExportToExcel;
    case ApiActionTypeEnum.OffersSendingToModeration:
      return ActionTypeEnum.OffersSendingToModeration;
    case ApiActionTypeEnum.OffersDisapproving:
      return ActionTypeEnum.OffersDisapproving;
    case ApiActionTypeEnum.OffersApproving:
      return ActionTypeEnum.OffersApproving;
    case ApiActionTypeEnum.OffersRemoving:
      return ActionTypeEnum.OffersRemoving;
    case ApiActionTypeEnum.CartAddFromFavourites:
      return ActionTypeEnum.CartAddFromFavourites;
    case ApiActionTypeEnum.OrderCreationConfirmation:
      return ActionTypeEnum.OrderCreationConfirmation;
    case ApiActionTypeEnum.AddToCartFromFullCart:
      return ActionTypeEnum.AddToCartFromFullCart;
    case ApiActionTypeEnum.ViewMainMenuCustomItem:
      return ActionTypeEnum.ViewMainMenuCustomItem;
    case ApiActionTypeEnum.ReportsMenuItemStatisticsClicked:
      return ActionTypeEnum.ReportsMenuItemStatisticsClicked;
    case ApiActionTypeEnum.ReportsMenuItemRegisterClicked:
      return ActionTypeEnum.ReportsMenuItemRegisterClicked;
    case ApiActionTypeEnum.ReportsTradeRegistryTabClicked:
      return ActionTypeEnum.ReportsTradeRegistryTabClicked;
    case ApiActionTypeEnum.ReportsSupplierRegistryTabClicked:
      return ActionTypeEnum.ReportsSupplierRegistryTabClicked;
    case ApiActionTypeEnum.ReportsCustomerRegistryTabClicked:
      return ActionTypeEnum.ReportsCustomerRegistryTabClicked;
    case ApiActionTypeEnum.ReportsTradeRegistryGenerateButtonClicked:
      return ActionTypeEnum.ReportsTradeRegistryGenerateButtonClicked;
    case ApiActionTypeEnum.ReportsSupplierRegistryGenerateButtonClicked:
      return ActionTypeEnum.ReportsSupplierRegistryGenerateButtonClicked;
    case ApiActionTypeEnum.ReportsCustomerRegistryGenerateButtonClicked:
      return ActionTypeEnum.ReportsCustomerRegistryGenerateButtonClicked;
    default:
      throw new Error(`Enum value is not defined: ApiActionTypeEnum=${String(source)}`);
  }
}
