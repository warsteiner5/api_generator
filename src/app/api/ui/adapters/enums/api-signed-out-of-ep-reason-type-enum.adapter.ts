import { SignedOutOfEpReasonTypeEnum } from '../../enums/signed-out-of-ep-reason-type.enum';
import { ApiSignedOutOfEpReasonTypeEnum } from '../../../swagger/models/api-signed-out-of-ep-reason-type-enum';

export const apiSignedOutOfEpReasonTypeEnumAdapter = (source?: SignedOutOfEpReasonTypeEnum | null): ApiSignedOutOfEpReasonTypeEnum => {
  switch (source) {
    case SignedOutOfEpReasonTypeEnum.UtilitiesAndEnergyServices:
      return ApiSignedOutOfEpReasonTypeEnum.UtilitiesAndEnergyServices;
    case SignedOutOfEpReasonTypeEnum.InformationSystemsMaintenance:
      return ApiSignedOutOfEpReasonTypeEnum.InformationSystemsMaintenance;
    case SignedOutOfEpReasonTypeEnum.FixedTelephoneServices:
      return ApiSignedOutOfEpReasonTypeEnum.FixedTelephoneServices;
    case SignedOutOfEpReasonTypeEnum.MobileCommunicationServices:
      return ApiSignedOutOfEpReasonTypeEnum.MobileCommunicationServices;
    case SignedOutOfEpReasonTypeEnum.PersonalServicesContracts:
      return ApiSignedOutOfEpReasonTypeEnum.PersonalServicesContracts;
    case SignedOutOfEpReasonTypeEnum.PostalSuppliesAndServices:
      return ApiSignedOutOfEpReasonTypeEnum.PostalSuppliesAndServices;
    case SignedOutOfEpReasonTypeEnum.SpecialAndCourierPostalServices:
      return ApiSignedOutOfEpReasonTypeEnum.SpecialAndCourierPostalServices;
    case SignedOutOfEpReasonTypeEnum.InformationSecurityServices:
      return ApiSignedOutOfEpReasonTypeEnum.InformationSecurityServices;
    case SignedOutOfEpReasonTypeEnum.CostEstimateVerification:
      return ApiSignedOutOfEpReasonTypeEnum.CostEstimateVerification;
    case SignedOutOfEpReasonTypeEnum.EventParticipationServices:
      return ApiSignedOutOfEpReasonTypeEnum.EventParticipationServices;
    case SignedOutOfEpReasonTypeEnum.NotaryServices:
      return ApiSignedOutOfEpReasonTypeEnum.NotaryServices;
    case SignedOutOfEpReasonTypeEnum.BusinessTripArrangements:
      return ApiSignedOutOfEpReasonTypeEnum.BusinessTripArrangements;
    case SignedOutOfEpReasonTypeEnum.WarrantyVehicleMaintenance:
      return ApiSignedOutOfEpReasonTypeEnum.WarrantyVehicleMaintenance;
    case SignedOutOfEpReasonTypeEnum.EmergencyVehicleRepairs:
      return ApiSignedOutOfEpReasonTypeEnum.EmergencyVehicleRepairs;
    case SignedOutOfEpReasonTypeEnum.HeavyEquipmentTransportForRepair:
      return ApiSignedOutOfEpReasonTypeEnum.HeavyEquipmentTransportForRepair;
    case SignedOutOfEpReasonTypeEnum.OfficialRegistryDocumentRequests:
      return ApiSignedOutOfEpReasonTypeEnum.OfficialRegistryDocumentRequests;
    case SignedOutOfEpReasonTypeEnum.PeriodicalPublicationsSubscription:
      return ApiSignedOutOfEpReasonTypeEnum.PeriodicalPublicationsSubscription;
    case SignedOutOfEpReasonTypeEnum.OfficialPublicationAdvertising:
      return ApiSignedOutOfEpReasonTypeEnum.OfficialPublicationAdvertising;
    case SignedOutOfEpReasonTypeEnum.MediaContentProductionAndPublication:
      return ApiSignedOutOfEpReasonTypeEnum.MediaContentProductionAndPublication;
    case SignedOutOfEpReasonTypeEnum.RealEstateLeasing:
      return ApiSignedOutOfEpReasonTypeEnum.RealEstateLeasing;
    case SignedOutOfEpReasonTypeEnum.GovernmentRepresentationServices:
      return ApiSignedOutOfEpReasonTypeEnum.GovernmentRepresentationServices;
    case SignedOutOfEpReasonTypeEnum.ExtemporaneousMedicines:
      return ApiSignedOutOfEpReasonTypeEnum.ExtemporaneousMedicines;
    case SignedOutOfEpReasonTypeEnum.NarcoticSubstancesManagement:
      return ApiSignedOutOfEpReasonTypeEnum.NarcoticSubstancesManagement;
    case SignedOutOfEpReasonTypeEnum.MedicalSupportServices:
      return ApiSignedOutOfEpReasonTypeEnum.MedicalSupportServices;
    case SignedOutOfEpReasonTypeEnum.UtilityNetworksMaintenance:
      return ApiSignedOutOfEpReasonTypeEnum.UtilityNetworksMaintenance;
    case SignedOutOfEpReasonTypeEnum.MeasurementAndLabEquipmentServices:
      return ApiSignedOutOfEpReasonTypeEnum.MeasurementAndLabEquipmentServices;
    case SignedOutOfEpReasonTypeEnum.FireAndEmergencyResponse:
      return ApiSignedOutOfEpReasonTypeEnum.FireAndEmergencyResponse;
    case SignedOutOfEpReasonTypeEnum.ITAndOfficeEquipmentRepair:
      return ApiSignedOutOfEpReasonTypeEnum.ITAndOfficeEquipmentRepair;
    case SignedOutOfEpReasonTypeEnum.EmergencyApplianceRepairs:
      return ApiSignedOutOfEpReasonTypeEnum.EmergencyApplianceRepairs;
    case SignedOutOfEpReasonTypeEnum.ArchivalAndDocumentServices:
      return ApiSignedOutOfEpReasonTypeEnum.ArchivalAndDocumentServices;
    case SignedOutOfEpReasonTypeEnum.POBoxRental:
      return ApiSignedOutOfEpReasonTypeEnum.POBoxRental;
    case SignedOutOfEpReasonTypeEnum.PsychiatricExaminationServices:
      return ApiSignedOutOfEpReasonTypeEnum.PsychiatricExaminationServices;
    case SignedOutOfEpReasonTypeEnum.OfficialResidenceMaintenance:
      return ApiSignedOutOfEpReasonTypeEnum.OfficialResidenceMaintenance;
    case SignedOutOfEpReasonTypeEnum.PublicSafetyEnhancement:
      return ApiSignedOutOfEpReasonTypeEnum.PublicSafetyEnhancement;
    case SignedOutOfEpReasonTypeEnum.UrgentSmallValueProcurement:
      return ApiSignedOutOfEpReasonTypeEnum.UrgentSmallValueProcurement;
    default:
      throw new Error(`Enum value is not defined: SignedOutOfEpReasonTypeEnum=${String(source)}`);
  }
}
