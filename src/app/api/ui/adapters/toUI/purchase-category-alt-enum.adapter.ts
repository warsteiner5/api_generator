import { ApiPurchaseCategoryAltEnum } from '../../../swagger/models/api-purchase-category';
import { PurchaseCategoryAltEnum } from '../../enums/purchase-category-alt.enum';

export function adaptPurchaseCategoryAltEnumToUI(source?: ApiPurchaseCategoryAltEnum | null): PurchaseCategoryAltEnum {
  switch (source) {
    case ApiPurchaseCategoryAltEnum.DefenceCountry:
      return PurchaseCategoryAltEnum.DefenceCountry;
    case ApiPurchaseCategoryAltEnum.UseOfAtomicEnergy:
      return PurchaseCategoryAltEnum.UseOfAtomicEnergy;
    case ApiPurchaseCategoryAltEnum.SphereOfNaturalMonopolies:
      return PurchaseCategoryAltEnum.SphereOfNaturalMonopolies;
    case ApiPurchaseCategoryAltEnum.OutsideRussianFederation:
      return PurchaseCategoryAltEnum.OutsideRussianFederation;
    case ApiPurchaseCategoryAltEnum.FinancialServices:
      return PurchaseCategoryAltEnum.FinancialServices;
    case ApiPurchaseCategoryAltEnum.StateSecret:
      return PurchaseCategoryAltEnum.StateSecret;
    case ApiPurchaseCategoryAltEnum.GovernmentDecisionPart16Article4:
      return PurchaseCategoryAltEnum.GovernmentDecisionPart16Article4;
    case ApiPurchaseCategoryAltEnum.WaterSupplyServices:
      return PurchaseCategoryAltEnum.WaterSupplyServices;
    case ApiPurchaseCategoryAltEnum.WorkOfExecutivePower:
      return PurchaseCategoryAltEnum.WorkOfExecutivePower;
    case ApiPurchaseCategoryAltEnum.SupervisionOfAuthorServices:
      return PurchaseCategoryAltEnum.SupervisionOfAuthorServices;
    case ApiPurchaseCategoryAltEnum.RealEstate:
      return PurchaseCategoryAltEnum.RealEstate;
    case ApiPurchaseCategoryAltEnum.Energy:
      return PurchaseCategoryAltEnum.Energy;
    case ApiPurchaseCategoryAltEnum.EnergyRecycling:
      return PurchaseCategoryAltEnum.EnergyRecycling;
    case ApiPurchaseCategoryAltEnum.Railways:
      return PurchaseCategoryAltEnum.Railways;
    case ApiPurchaseCategoryAltEnum.IntellectualActivityResults:
      return PurchaseCategoryAltEnum.IntellectualActivityResults;
    case ApiPurchaseCategoryAltEnum.AirTransportationServices:
      return PurchaseCategoryAltEnum.AirTransportationServices;
    case ApiPurchaseCategoryAltEnum.LargeDiameterPipes:
      return PurchaseCategoryAltEnum.LargeDiameterPipes;
    case ApiPurchaseCategoryAltEnum.RadioactiveAndChemicalHazardsPruducts:
      return PurchaseCategoryAltEnum.RadioactiveAndChemicalHazardsPruducts;
    case ApiPurchaseCategoryAltEnum.MaintenanceServices:
      return PurchaseCategoryAltEnum.MaintenanceServices;
    case ApiPurchaseCategoryAltEnum.ProjectsOfShelfProducts:
      return PurchaseCategoryAltEnum.ProjectsOfShelfProducts;
    case ApiPurchaseCategoryAltEnum.MobileRadiotelephoneCommunicationServices:
      return PurchaseCategoryAltEnum.MobileRadiotelephoneCommunicationServices;
    case ApiPurchaseCategoryAltEnum.EducationalOrganizationsServices:
      return PurchaseCategoryAltEnum.EducationalOrganizationsServices;
    case ApiPurchaseCategoryAltEnum.MainAndSubsidaryEconomicalSocietyServices:
      return PurchaseCategoryAltEnum.MainAndSubsidaryEconomicalSocietyServices;
    case ApiPurchaseCategoryAltEnum.SecurityProtectionPersonalInformationServicesGreaterThan200:
      return PurchaseCategoryAltEnum.SecurityProtectionPersonalInformationServicesGreaterThan200;
    case ApiPurchaseCategoryAltEnum.AuditServicesGreater10:
      return PurchaseCategoryAltEnum.AuditServicesGreater10;
    case ApiPurchaseCategoryAltEnum.RoughDiamonds:
      return PurchaseCategoryAltEnum.RoughDiamonds;
    case ApiPurchaseCategoryAltEnum.PurchasesByStateOwnedCompanies:
      return PurchaseCategoryAltEnum.PurchasesByStateOwnedCompanies;
    case ApiPurchaseCategoryAltEnum.ConstructionAndReconstructionServicesForExtremelyDangerousObjects:
      return PurchaseCategoryAltEnum.ConstructionAndReconstructionServicesForExtremelyDangerousObjects;
    case ApiPurchaseCategoryAltEnum.DesigningConstructionReconsctructionServicesForDangerousObjects:
      return PurchaseCategoryAltEnum.DesigningConstructionReconsctructionServicesForDangerousObjects;
    default:
      throw new Error(`Enum value is not defined: ApiPurchaseCategoryAltEnum=${String(source)}`);
  }
}
