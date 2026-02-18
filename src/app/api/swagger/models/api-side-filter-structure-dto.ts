/* tslint:disable */
/* eslint-disable */
export interface ApiSideFilterStructureDto {

  /**
   * Категория
   */
  IsCategoryEnabled?: boolean;

  /**
   * Регионы поставки
   */
  IsDeliveryRegionsEnabled?: boolean;

  /**
   * Местные организации
   */
  IsHomeRegionEnabled?: boolean;

  /**
   * Импортозамещение
   */
  IsImportSubstitutionEnabled?: boolean;

  /**
   * КСР
   */
  IsKsrEnabled?: boolean;

  /**
   * Только от производителя
   */
  IsManufacturerEnabled?: boolean;

  /**
   * МСП
   */
  IsMspEnabled?: boolean;

  /**
   * Мой регион
   */
  IsMyRegionEnabled?: boolean;

  /**
   * Страна происхождения и Регионы происхождения
   */
  IsOriginCountryAndRegionsEnabled?: boolean;

  /**
   * Маркировки
   */
  IsTagCodesEnabled?: boolean;
}
