import { SectionEnum } from '../../enums/section.enum';
import { ApiSectionEnum } from '../../../swagger/models/api-section-enum';

export const apiSectionEnumAdapter = (source?: SectionEnum | null): ApiSectionEnum => {
  switch (source) {
    case SectionEnum.Trades:
      return ApiSectionEnum.Trades;
    case SectionEnum.Orders:
      return ApiSectionEnum.Orders;
    case SectionEnum.ParticipantPortal:
      return ApiSectionEnum.ParticipantPortal;
    case SectionEnum.SectionSale:
      return ApiSectionEnum.SectionSale;
    case SectionEnum.SectionBuy:
      return ApiSectionEnum.SectionBuy;
    case SectionEnum.PublicSearchBuyButton:
      return ApiSectionEnum.PublicSearchBuyButton;
    case SectionEnum.PublicSearchSellButton:
      return ApiSectionEnum.PublicSearchSellButton;
    case SectionEnum.PublicSearchFindButton:
      return ApiSectionEnum.PublicSearchFindButton;
    case SectionEnum.ParticipantOffers:
      return ApiSectionEnum.ParticipantOffers;
    case SectionEnum.AuthInfo:
      return ApiSectionEnum.AuthInfo;
    case SectionEnum.Services:
      return ApiSectionEnum.Services;
    case SectionEnum.Recommendations:
      return ApiSectionEnum.Recommendations;
    case SectionEnum.PriceAnalysis:
      return ApiSectionEnum.PriceAnalysis;
    case SectionEnum.OrderStatistics:
      return ApiSectionEnum.OrderStatistics;
    case SectionEnum.PrivateBuyButton:
      return ApiSectionEnum.PrivateBuyButton;
    case SectionEnum.AboutServiceSection:
      return ApiSectionEnum.AboutServiceSection;
    case SectionEnum.UisApplicationsSection:
      return ApiSectionEnum.UisApplicationsSection;
    case SectionEnum.AllTradesForCustomer:
      return ApiSectionEnum.AllTradesForCustomer;
    case SectionEnum.WrongContractExecutionListSection:
      return ApiSectionEnum.WrongContractExecutionListSection;
    case SectionEnum.WrongContractExecutionInsertSection:
      return ApiSectionEnum.WrongContractExecutionInsertSection;
    case SectionEnum.ZmoPersonalAccountSection:
      return ApiSectionEnum.ZmoPersonalAccountSection;
    case SectionEnum.SettingsSectionForLK:
      return ApiSectionEnum.SettingsSectionForLK;
    case SectionEnum.ExportToExcelButton:
      return ApiSectionEnum.ExportToExcelButton;
    case SectionEnum.Registration:
      return ApiSectionEnum.Registration;
    case SectionEnum.RtsTenderPro:
      return ApiSectionEnum.RtsTenderPro;
    case SectionEnum.PurchaseSettings:
      return ApiSectionEnum.PurchaseSettings;
    case SectionEnum.Help:
      return ApiSectionEnum.Help;
    case SectionEnum.ChangeRole:
      return ApiSectionEnum.ChangeRole;
    case SectionEnum.ChangePasswordButton:
      return ApiSectionEnum.ChangePasswordButton;
    default:
      throw new Error(`Enum value is not defined: SectionEnum=${String(source)}`);
  }
}
