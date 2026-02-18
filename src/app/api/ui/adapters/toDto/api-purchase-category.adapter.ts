import { PurchaseCategoryAltEnum } from '../../enums/purchase-category-alt.enum';
import { ApiPurchaseCategoryAltEnum } from '../../../swagger/models/api-purchase-category';

export function adaptApiPurchaseCategoryAltEnum(source?: PurchaseCategoryAltEnum | null): ApiPurchaseCategoryAltEnum {
  switch (source) {
    case PurchaseCategoryAltEnum.DefenceCountry:
      return ApiPurchaseCategoryAltEnum.DefenceCountry;
    case PurchaseCategoryAltEnum.UseOfAtomicEnergy:
      return ApiPurchaseCategoryAltEnum.UseOfAtomicEnergy;
    case PurchaseCategoryAltEnum.SphereOfNaturalMonopolies:
      return ApiPurchaseCategoryAltEnum.SphereOfNaturalMonopolies;
    case PurchaseCategoryAltEnum.OutsideRussianFederation:
      return ApiPurchaseCategoryAltEnum.OutsideRussianFederation;
    case PurchaseCategoryAltEnum.FinancialServices:
      return ApiPurchaseCategoryAltEnum.FinancialServices;
    case PurchaseCategoryAltEnum.StateSecret:
      return ApiPurchaseCategoryAltEnum.StateSecret;
    case PurchaseCategoryAltEnum.GovernmentDecisionPart16Article4:
      return ApiPurchaseCategoryAltEnum.GovernmentDecisionPart16Article4;
    case PurchaseCategoryAltEnum.WaterSupplyServices:
      return ApiPurchaseCategoryAltEnum.WaterSupplyServices;
    case PurchaseCategoryAltEnum.WorkOfExecutivePower:
      return ApiPurchaseCategoryAltEnum.WorkOfExecutivePower;
    case PurchaseCategoryAltEnum.SupervisionOfAuthorServices:
      return ApiPurchaseCategoryAltEnum.SupervisionOfAuthorServices;
    case PurchaseCategoryAltEnum.RealEstate:
      return ApiPurchaseCategoryAltEnum.RealEstate;
    case PurchaseCategoryAltEnum.Energy:
      return ApiPurchaseCategoryAltEnum.Energy;
    case PurchaseCategoryAltEnum.EnergyRecycling:
      return ApiPurchaseCategoryAltEnum.EnergyRecycling;
    case PurchaseCategoryAltEnum.Railways:
      return ApiPurchaseCategoryAltEnum.Railways;
    case PurchaseCategoryAltEnum.IntellectualActivityResults:
      return ApiPurchaseCategoryAltEnum.IntellectualActivityResults;
    case PurchaseCategoryAltEnum.AirTransportationServices:
      return ApiPurchaseCategoryAltEnum.AirTransportationServices;
    case PurchaseCategoryAltEnum.LargeDiameterPipes:
      return ApiPurchaseCategoryAltEnum.LargeDiameterPipes;
    case PurchaseCategoryAltEnum.RadioactiveAndChemicalHazardsPruducts:
      return ApiPurchaseCategoryAltEnum.RadioactiveAndChemicalHazardsPruducts;
    case PurchaseCategoryAltEnum.MaintenanceServices:
      return ApiPurchaseCategoryAltEnum.MaintenanceServices;
    case PurchaseCategoryAltEnum.ProjectsOfShelfProducts:
      return ApiPurchaseCategoryAltEnum.ProjectsOfShelfProducts;
    case PurchaseCategoryAltEnum.MobileRadiotelephoneCommunicationServices:
      return ApiPurchaseCategoryAltEnum.MobileRadiotelephoneCommunicationServices;
    case PurchaseCategoryAltEnum.EducationalOrganizationsServices:
      return ApiPurchaseCategoryAltEnum.EducationalOrganizationsServices;
    case PurchaseCategoryAltEnum.MainAndSubsidaryEconomicalSocietyServices:
      return ApiPurchaseCategoryAltEnum.MainAndSubsidaryEconomicalSocietyServices;
    case PurchaseCategoryAltEnum.SecurityProtectionPersonalInformationServicesGreaterThan200:
      return ApiPurchaseCategoryAltEnum.SecurityProtectionPersonalInformationServicesGreaterThan200;
    case PurchaseCategoryAltEnum.AuditServicesGreater10:
      return ApiPurchaseCategoryAltEnum.AuditServicesGreater10;
    case PurchaseCategoryAltEnum.RoughDiamonds:
      return ApiPurchaseCategoryAltEnum.RoughDiamonds;
    case PurchaseCategoryAltEnum.PurchasesByStateOwnedCompanies:
      return ApiPurchaseCategoryAltEnum.PurchasesByStateOwnedCompanies;
    case PurchaseCategoryAltEnum.ConstructionAndReconstructionServicesForExtremelyDangerousObjects:
      return ApiPurchaseCategoryAltEnum.ConstructionAndReconstructionServicesForExtremelyDangerousObjects;
    case PurchaseCategoryAltEnum.DesigningConstructionReconsctructionServicesForDangerousObjects:
      return ApiPurchaseCategoryAltEnum.DesigningConstructionReconsctructionServicesForDangerousObjects;
    default:
      throw new Error(`Enum value is not defined: PurchaseCategoryAltEnum=${String(source)}`);
  }
}
