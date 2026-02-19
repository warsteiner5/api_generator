import { EntityDtoOfInteger } from './entity-dto-of-integer.interface';

export type OrganizationCountry = EntityDtoOfInteger & { 'Code'?: string | null; 'Name'?: string | null; };
