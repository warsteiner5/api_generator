import { ApiSectionEnum } from '../../../swagger/models/api-section-enum';
import { SectionEnum } from '../../enums/section.enum';

export const sectionEnumAdapter = (source?: ApiSectionEnum | null): SectionEnum => {
  switch (source) {
    case ApiSectionEnum.Trades:
      return SectionEnum.Trades;
    case ApiSectionEnum.Orders:
      return SectionEnum.Orders;
    case ApiSectionEnum.ParticipantPortal:
      return SectionEnum.ParticipantPortal;
    case ApiSectionEnum.SectionSale:
      return SectionEnum.SectionSale;
    case ApiSectionEnum.SectionBuy:
      return SectionEnum.SectionBuy;
    case ApiSectionEnum.PublicSearchBuyButton:
      return SectionEnum.PublicSearchBuyButton;
    case ApiSectionEnum.PublicSearchSellButton:
      return SectionEnum.PublicSearchSellButton;
    case ApiSectionEnum.PublicSearchFindButton:
      return SectionEnum.PublicSearchFindButton;
    case ApiSectionEnum.ParticipantOffers:
      return SectionEnum.ParticipantOffers;
    case ApiSectionEnum.AuthInfo:
      return SectionEnum.AuthInfo;
    case ApiSectionEnum.Services:
      return SectionEnum.Services;
    case ApiSectionEnum.Recommendations:
      return SectionEnum.Recommendations;
    case ApiSectionEnum.PriceAnalysis:
      return SectionEnum.PriceAnalysis;
    case ApiSectionEnum.OrderStatistics:
      return SectionEnum.OrderStatistics;
    case ApiSectionEnum.PrivateBuyButton:
      return SectionEnum.PrivateBuyButton;
    case ApiSectionEnum.AboutServiceSection:
      return SectionEnum.AboutServiceSection;
    case ApiSectionEnum.UisApplicationsSection:
      return SectionEnum.UisApplicationsSection;
    case ApiSectionEnum.AllTradesForCustomer:
      return SectionEnum.AllTradesForCustomer;
    case ApiSectionEnum.WrongContractExecutionListSection:
      return SectionEnum.WrongContractExecutionListSection;
    case ApiSectionEnum.WrongContractExecutionInsertSection:
      return SectionEnum.WrongContractExecutionInsertSection;
    case ApiSectionEnum.ZmoPersonalAccountSection:
      return SectionEnum.ZmoPersonalAccountSection;
    case ApiSectionEnum.SettingsSectionForLK:
      return SectionEnum.SettingsSectionForLK;
    case ApiSectionEnum.ExportToExcelButton:
      return SectionEnum.ExportToExcelButton;
    case ApiSectionEnum.Registration:
      return SectionEnum.Registration;
    case ApiSectionEnum.RtsTenderPro:
      return SectionEnum.RtsTenderPro;
    case ApiSectionEnum.PurchaseSettings:
      return SectionEnum.PurchaseSettings;
    case ApiSectionEnum.Help:
      return SectionEnum.Help;
    case ApiSectionEnum.ChangeRole:
      return SectionEnum.ChangeRole;
    case ApiSectionEnum.ChangePasswordButton:
      return SectionEnum.ChangePasswordButton;
    default:
      throw new Error(`Enum value is not defined: ApiSectionEnum=${String(source)}`);
  }
}
