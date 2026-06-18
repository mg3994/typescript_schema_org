import { z } from 'zod';
import * as s from './index';

export interface hydra_Error {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const hydra_ErrorSchema: z.ZodType<hydra_Error> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));

export interface HVACBusiness {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  branchOf?: s.Organization | Array<s.Organization>;
  currenciesAccepted?: string | Array<string>;
  floorLevel?: string | Array<string>;
  openingHours?: string | Array<string>;
  paymentAccepted?: string | Array<string>;
  priceRange?: string | Array<string>;
  acceptedPaymentMethod?: s.LoanOrCredit | s.PaymentMethod | string | Array<s.LoanOrCredit | s.PaymentMethod | string>;
  actionableFeedbackPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  address?: s.PostalAddress | string | Array<s.PostalAddress | string>;
  agentInteractionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  alumni?: s.Person | Array<s.Person>;
  areaServed?: s.AdministrativeArea | s.GeoShape | s.Place | string | Array<s.AdministrativeArea | s.GeoShape | s.Place | string>;
  award?: string | Array<string>;
  awards?: string | Array<string>;
  brand?: s.Brand | s.Organization | Array<s.Brand | s.Organization>;
  companyRegistration?: s.Certification | Array<s.Certification>;
  contactPoint?: s.ContactPoint | Array<s.ContactPoint>;
  contactPoints?: s.ContactPoint | Array<s.ContactPoint>;
  correctionsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  department?: s.Organization | Array<s.Organization>;
  dissolutionDate?: string | Array<string>;
  diversityPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  diversityStaffingReport?: s.Article | string | Array<s.Article | string>;
  duns?: string | Array<string>;
  email?: string | Array<string>;
  employee?: s.Person | Array<s.Person>;
  employees?: s.Person | Array<s.Person>;
  ethicsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  event?: s.Event | Array<s.Event>;
  events?: s.Event | Array<s.Event>;
  faxNumber?: string | Array<string>;
  founder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  founders?: s.Person | Array<s.Person>;
  foundingDate?: string | Array<string>;
  foundingLocation?: s.Place | Array<s.Place>;
  funder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  funding?: s.Grant | Array<s.Grant>;
  globalLocationNumber?: string | Array<string>;
  hasCertification?: s.Certification | Array<s.Certification>;
  hasCredential?: s.Credential | Array<s.Credential>;
  hasGS1DigitalLink?: string | Array<string>;
  hasMemberProgram?: s.MemberProgram | Array<s.MemberProgram>;
  hasMerchantReturnPolicy?: s.MerchantReturnPolicy | Array<s.MerchantReturnPolicy>;
  hasOfferCatalog?: s.OfferCatalog | Array<s.OfferCatalog>;
  hasPOS?: s.Place | Array<s.Place>;
  hasShippingService?: s.ShippingService | Array<s.ShippingService>;
  interactionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  isicV4?: string | Array<string>;
  iso6523Code?: string | Array<string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  knowsAbout?: string | s.Thing | Array<string | s.Thing>;
  knowsLanguage?: s.Language | string | Array<s.Language | string>;
  legalAddress?: s.PostalAddress | Array<s.PostalAddress>;
  legalName?: string | Array<string>;
  legalRepresentative?: s.Person | Array<s.Person>;
  leiCode?: string | Array<string>;
  location?: s.Place | s.PostalAddress | string | s.VirtualLocation | Array<s.Place | s.PostalAddress | string | s.VirtualLocation>;
  logo?: s.ImageObject | string | Array<s.ImageObject | string>;
  makesOffer?: s.Offer | Array<s.Offer>;
  member?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  memberOf?: s.MemberProgramTier | s.Organization | s.ProgramMembership | Array<s.MemberProgramTier | s.Organization | s.ProgramMembership>;
  members?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  naics?: string | Array<string>;
  nonprofitStatus?: s.NonprofitType | Array<s.NonprofitType>;
  numberOfEmployees?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  ownershipFundingInfo?: s.AboutPage | s.CreativeWork | string | Array<s.AboutPage | s.CreativeWork | string>;
  owns?: s.Thing | Array<s.Thing>;
  parentOrganization?: s.Organization | Array<s.Organization>;
  publishingPrinciples?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  seeks?: s.Demand | Array<s.Demand>;
  serviceArea?: s.AdministrativeArea | s.GeoShape | s.Place | Array<s.AdministrativeArea | s.GeoShape | s.Place>;
  skills?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  slogan?: string | Array<string>;
  sponsor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  subOrganization?: s.Organization | Array<s.Organization>;
  taxID?: string | Array<string>;
  telephone?: string | Array<string>;
  unnamedSourcesPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  vatID?: string | Array<string>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
  additionalProperty?: s.PropertyValue | Array<s.PropertyValue>;
  amenityFeature?: s.LocationFeatureSpecification | Array<s.LocationFeatureSpecification>;
  branchCode?: string | Array<string>;
  containedIn?: s.Place | Array<s.Place>;
  containedInPlace?: s.Place | Array<s.Place>;
  containsPlace?: s.Place | Array<s.Place>;
  geo?: s.GeoCoordinates | s.GeoShape | Array<s.GeoCoordinates | s.GeoShape>;
  geoContains?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCoveredBy?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCovers?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCrosses?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoDisjoint?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoEquals?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoIntersects?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoOverlaps?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoTouches?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoWithin?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  hasDriveThroughService?: boolean | Array<boolean>;
  hasMap?: s.Map | string | Array<s.Map | string>;
  isAccessibleForFree?: boolean | Array<boolean>;
  latitude?: number | string | Array<number | string>;
  longitude?: number | string | Array<number | string>;
  map?: string | Array<string>;
  maps?: string | Array<string>;
  maximumAttendeeCapacity?: number | Array<number>;
  openingHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  photo?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  photos?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  publicAccess?: boolean | Array<boolean>;
  smokingAllowed?: boolean | Array<boolean>;
  specialOpeningHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  tourBookingPage?: string | Array<string>;
}

export const HVACBusinessSchema: z.ZodType<HVACBusiness> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  branchOf: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  currenciesAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  floorLevel: z.union([z.string(), z.array(z.string())]).optional(),
  openingHours: z.union([z.string(), z.array(z.string())]).optional(),
  paymentAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  priceRange: z.union([z.string(), z.array(z.string())]).optional(),
  acceptedPaymentMethod: z.union([z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]), z.array(z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]))]).optional(),
  actionableFeedbackPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  address: z.union([z.union([s.PostalAddressSchema, z.string()]), z.array(z.union([s.PostalAddressSchema, z.string()]))]).optional(),
  agentInteractionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  alumni: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  areaServed: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  awards: z.union([z.string(), z.array(z.string())]).optional(),
  brand: z.union([z.union([s.BrandSchema, s.OrganizationSchema]), z.array(z.union([s.BrandSchema, s.OrganizationSchema]))]).optional(),
  companyRegistration: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  contactPoint: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  contactPoints: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  correctionsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  department: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  dissolutionDate: z.union([z.string(), z.array(z.string())]).optional(),
  diversityPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  diversityStaffingReport: z.union([z.union([s.ArticleSchema, z.string().url()]), z.array(z.union([s.ArticleSchema, z.string().url()]))]).optional(),
  duns: z.union([z.string(), z.array(z.string())]).optional(),
  email: z.union([z.string(), z.array(z.string())]).optional(),
  employee: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  employees: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  ethicsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  event: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  events: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  faxNumber: z.union([z.string(), z.array(z.string())]).optional(),
  founder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  founders: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  foundingDate: z.union([z.string(), z.array(z.string())]).optional(),
  foundingLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  funder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  globalLocationNumber: z.union([z.string(), z.array(z.string())]).optional(),
  hasCertification: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  hasCredential: z.union([s.CredentialSchema, z.array(s.CredentialSchema)]).optional(),
  hasGS1DigitalLink: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  hasMemberProgram: z.union([s.MemberProgramSchema, z.array(s.MemberProgramSchema)]).optional(),
  hasMerchantReturnPolicy: z.union([s.MerchantReturnPolicySchema, z.array(s.MerchantReturnPolicySchema)]).optional(),
  hasOfferCatalog: z.union([s.OfferCatalogSchema, z.array(s.OfferCatalogSchema)]).optional(),
  hasPOS: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  hasShippingService: z.union([s.ShippingServiceSchema, z.array(s.ShippingServiceSchema)]).optional(),
  interactionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  isicV4: z.union([z.string(), z.array(z.string())]).optional(),
  iso6523Code: z.union([z.string(), z.array(z.string())]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  knowsAbout: z.union([z.union([z.string(), s.ThingSchema, z.string().url()]), z.array(z.union([z.string(), s.ThingSchema, z.string().url()]))]).optional(),
  knowsLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  legalAddress: z.union([s.PostalAddressSchema, z.array(s.PostalAddressSchema)]).optional(),
  legalName: z.union([z.string(), z.array(z.string())]).optional(),
  legalRepresentative: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  leiCode: z.union([z.string(), z.array(z.string())]).optional(),
  location: z.union([z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]), z.array(z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]))]).optional(),
  logo: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  makesOffer: z.union([s.OfferSchema, z.array(s.OfferSchema)]).optional(),
  member: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  memberOf: z.union([z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]), z.array(z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]))]).optional(),
  members: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  naics: z.union([z.string(), z.array(z.string())]).optional(),
  nonprofitStatus: z.union([s.NonprofitTypeSchema, z.array(s.NonprofitTypeSchema)]).optional(),
  numberOfEmployees: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  ownershipFundingInfo: z.union([z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]), z.array(z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]))]).optional(),
  owns: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  parentOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  publishingPrinciples: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  seeks: z.union([s.DemandSchema, z.array(s.DemandSchema)]).optional(),
  serviceArea: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]))]).optional(),
  skills: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  slogan: z.union([z.string(), z.array(z.string())]).optional(),
  sponsor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  subOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  taxID: z.union([z.string(), z.array(z.string())]).optional(),
  telephone: z.union([z.string(), z.array(z.string())]).optional(),
  unnamedSourcesPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  vatID: z.union([z.string(), z.array(z.string())]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  additionalProperty: z.union([s.PropertyValueSchema, z.array(s.PropertyValueSchema)]).optional(),
  amenityFeature: z.union([s.LocationFeatureSpecificationSchema, z.array(s.LocationFeatureSpecificationSchema)]).optional(),
  branchCode: z.union([z.string(), z.array(z.string())]).optional(),
  containedIn: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containedInPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containsPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  geo: z.union([z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]), z.array(z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]))]).optional(),
  geoContains: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCoveredBy: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCovers: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCrosses: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoDisjoint: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoEquals: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoIntersects: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoOverlaps: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoTouches: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoWithin: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  hasDriveThroughService: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  hasMap: z.union([z.union([s.MapSchema, z.string().url()]), z.array(z.union([s.MapSchema, z.string().url()]))]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  latitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  longitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  map: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maps: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maximumAttendeeCapacity: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  openingHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  photo: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  photos: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  publicAccess: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  smokingAllowed: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  specialOpeningHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  tourBookingPage: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface Hackathon {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  about?: s.Thing | Array<s.Thing>;
  actor?: s.PerformingGroup | s.Person | Array<s.PerformingGroup | s.Person>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  attendee?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  attendees?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  audience?: s.Audience | Array<s.Audience>;
  composer?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  contributor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  director?: s.Person | Array<s.Person>;
  doorTime?: string | Array<string>;
  duration?: s.Duration | s.QuantitativeValue | Array<s.Duration | s.QuantitativeValue>;
  endDate?: string | Array<string>;
  eventAttendanceMode?: s.EventAttendanceModeEnumeration | Array<s.EventAttendanceModeEnumeration>;
  eventSchedule?: s.Schedule | Array<s.Schedule>;
  eventStatus?: s.EventStatusType | Array<s.EventStatusType>;
  funder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  funding?: s.Grant | Array<s.Grant>;
  hasParticipationOffer?: s.Offer | Array<s.Offer>;
  hasSponsorshipOffer?: s.Offer | Array<s.Offer>;
  inLanguage?: s.Language | string | Array<s.Language | string>;
  isAccessibleForFree?: boolean | Array<boolean>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  location?: s.Place | s.PostalAddress | string | s.VirtualLocation | Array<s.Place | s.PostalAddress | string | s.VirtualLocation>;
  maximumAttendeeCapacity?: number | Array<number>;
  maximumPhysicalAttendeeCapacity?: number | Array<number>;
  maximumVirtualAttendeeCapacity?: number | Array<number>;
  offers?: s.Demand | s.Offer | Array<s.Demand | s.Offer>;
  organizer?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  performer?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  performers?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  previousStartDate?: string | Array<string>;
  recordedIn?: s.CreativeWork | Array<s.CreativeWork>;
  remainingAttendeeCapacity?: number | Array<number>;
  review?: s.Review | Array<s.Review>;
  sponsor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  startDate?: string | Array<string>;
  subEvent?: s.Event | Array<s.Event>;
  subEvents?: s.Event | Array<s.Event>;
  superEvent?: s.Event | Array<s.Event>;
  translator?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  typicalAgeRange?: string | Array<string>;
  workFeatured?: s.CreativeWork | Array<s.CreativeWork>;
  workPerformed?: s.CreativeWork | Array<s.CreativeWork>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
}

export const HackathonSchema: z.ZodType<Hackathon> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  about: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  actor: z.union([z.union([s.PerformingGroupSchema, s.PersonSchema]), z.array(z.union([s.PerformingGroupSchema, s.PersonSchema]))]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  attendee: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  attendees: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  audience: z.union([s.AudienceSchema, z.array(s.AudienceSchema)]).optional(),
  composer: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  contributor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  director: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  doorTime: z.union([z.string(), z.array(z.string())]).optional(),
  duration: z.union([z.union([s.DurationSchema, s.QuantitativeValueSchema]), z.array(z.union([s.DurationSchema, s.QuantitativeValueSchema]))]).optional(),
  endDate: z.union([z.string(), z.array(z.string())]).optional(),
  eventAttendanceMode: z.union([s.EventAttendanceModeEnumerationSchema, z.array(s.EventAttendanceModeEnumerationSchema)]).optional(),
  eventSchedule: z.union([s.ScheduleSchema, z.array(s.ScheduleSchema)]).optional(),
  eventStatus: z.union([s.EventStatusTypeSchema, z.array(s.EventStatusTypeSchema)]).optional(),
  funder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  hasParticipationOffer: z.union([s.OfferSchema, z.array(s.OfferSchema)]).optional(),
  hasSponsorshipOffer: z.union([s.OfferSchema, z.array(s.OfferSchema)]).optional(),
  inLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  location: z.union([z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]), z.array(z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]))]).optional(),
  maximumAttendeeCapacity: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  maximumPhysicalAttendeeCapacity: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  maximumVirtualAttendeeCapacity: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  offers: z.union([z.union([s.DemandSchema, s.OfferSchema]), z.array(z.union([s.DemandSchema, s.OfferSchema]))]).optional(),
  organizer: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  performer: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  performers: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  previousStartDate: z.union([z.string(), z.array(z.string())]).optional(),
  recordedIn: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  remainingAttendeeCapacity: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  sponsor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  startDate: z.union([z.string(), z.array(z.string())]).optional(),
  subEvent: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  subEvents: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  superEvent: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  translator: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  typicalAgeRange: z.union([z.string(), z.array(z.string())]).optional(),
  workFeatured: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  workPerformed: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface HairSalon {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  branchOf?: s.Organization | Array<s.Organization>;
  currenciesAccepted?: string | Array<string>;
  floorLevel?: string | Array<string>;
  openingHours?: string | Array<string>;
  paymentAccepted?: string | Array<string>;
  priceRange?: string | Array<string>;
  acceptedPaymentMethod?: s.LoanOrCredit | s.PaymentMethod | string | Array<s.LoanOrCredit | s.PaymentMethod | string>;
  actionableFeedbackPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  address?: s.PostalAddress | string | Array<s.PostalAddress | string>;
  agentInteractionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  alumni?: s.Person | Array<s.Person>;
  areaServed?: s.AdministrativeArea | s.GeoShape | s.Place | string | Array<s.AdministrativeArea | s.GeoShape | s.Place | string>;
  award?: string | Array<string>;
  awards?: string | Array<string>;
  brand?: s.Brand | s.Organization | Array<s.Brand | s.Organization>;
  companyRegistration?: s.Certification | Array<s.Certification>;
  contactPoint?: s.ContactPoint | Array<s.ContactPoint>;
  contactPoints?: s.ContactPoint | Array<s.ContactPoint>;
  correctionsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  department?: s.Organization | Array<s.Organization>;
  dissolutionDate?: string | Array<string>;
  diversityPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  diversityStaffingReport?: s.Article | string | Array<s.Article | string>;
  duns?: string | Array<string>;
  email?: string | Array<string>;
  employee?: s.Person | Array<s.Person>;
  employees?: s.Person | Array<s.Person>;
  ethicsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  event?: s.Event | Array<s.Event>;
  events?: s.Event | Array<s.Event>;
  faxNumber?: string | Array<string>;
  founder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  founders?: s.Person | Array<s.Person>;
  foundingDate?: string | Array<string>;
  foundingLocation?: s.Place | Array<s.Place>;
  funder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  funding?: s.Grant | Array<s.Grant>;
  globalLocationNumber?: string | Array<string>;
  hasCertification?: s.Certification | Array<s.Certification>;
  hasCredential?: s.Credential | Array<s.Credential>;
  hasGS1DigitalLink?: string | Array<string>;
  hasMemberProgram?: s.MemberProgram | Array<s.MemberProgram>;
  hasMerchantReturnPolicy?: s.MerchantReturnPolicy | Array<s.MerchantReturnPolicy>;
  hasOfferCatalog?: s.OfferCatalog | Array<s.OfferCatalog>;
  hasPOS?: s.Place | Array<s.Place>;
  hasShippingService?: s.ShippingService | Array<s.ShippingService>;
  interactionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  isicV4?: string | Array<string>;
  iso6523Code?: string | Array<string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  knowsAbout?: string | s.Thing | Array<string | s.Thing>;
  knowsLanguage?: s.Language | string | Array<s.Language | string>;
  legalAddress?: s.PostalAddress | Array<s.PostalAddress>;
  legalName?: string | Array<string>;
  legalRepresentative?: s.Person | Array<s.Person>;
  leiCode?: string | Array<string>;
  location?: s.Place | s.PostalAddress | string | s.VirtualLocation | Array<s.Place | s.PostalAddress | string | s.VirtualLocation>;
  logo?: s.ImageObject | string | Array<s.ImageObject | string>;
  makesOffer?: s.Offer | Array<s.Offer>;
  member?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  memberOf?: s.MemberProgramTier | s.Organization | s.ProgramMembership | Array<s.MemberProgramTier | s.Organization | s.ProgramMembership>;
  members?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  naics?: string | Array<string>;
  nonprofitStatus?: s.NonprofitType | Array<s.NonprofitType>;
  numberOfEmployees?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  ownershipFundingInfo?: s.AboutPage | s.CreativeWork | string | Array<s.AboutPage | s.CreativeWork | string>;
  owns?: s.Thing | Array<s.Thing>;
  parentOrganization?: s.Organization | Array<s.Organization>;
  publishingPrinciples?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  seeks?: s.Demand | Array<s.Demand>;
  serviceArea?: s.AdministrativeArea | s.GeoShape | s.Place | Array<s.AdministrativeArea | s.GeoShape | s.Place>;
  skills?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  slogan?: string | Array<string>;
  sponsor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  subOrganization?: s.Organization | Array<s.Organization>;
  taxID?: string | Array<string>;
  telephone?: string | Array<string>;
  unnamedSourcesPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  vatID?: string | Array<string>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
  additionalProperty?: s.PropertyValue | Array<s.PropertyValue>;
  amenityFeature?: s.LocationFeatureSpecification | Array<s.LocationFeatureSpecification>;
  branchCode?: string | Array<string>;
  containedIn?: s.Place | Array<s.Place>;
  containedInPlace?: s.Place | Array<s.Place>;
  containsPlace?: s.Place | Array<s.Place>;
  geo?: s.GeoCoordinates | s.GeoShape | Array<s.GeoCoordinates | s.GeoShape>;
  geoContains?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCoveredBy?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCovers?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCrosses?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoDisjoint?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoEquals?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoIntersects?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoOverlaps?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoTouches?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoWithin?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  hasDriveThroughService?: boolean | Array<boolean>;
  hasMap?: s.Map | string | Array<s.Map | string>;
  isAccessibleForFree?: boolean | Array<boolean>;
  latitude?: number | string | Array<number | string>;
  longitude?: number | string | Array<number | string>;
  map?: string | Array<string>;
  maps?: string | Array<string>;
  maximumAttendeeCapacity?: number | Array<number>;
  openingHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  photo?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  photos?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  publicAccess?: boolean | Array<boolean>;
  smokingAllowed?: boolean | Array<boolean>;
  specialOpeningHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  tourBookingPage?: string | Array<string>;
}

export const HairSalonSchema: z.ZodType<HairSalon> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  branchOf: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  currenciesAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  floorLevel: z.union([z.string(), z.array(z.string())]).optional(),
  openingHours: z.union([z.string(), z.array(z.string())]).optional(),
  paymentAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  priceRange: z.union([z.string(), z.array(z.string())]).optional(),
  acceptedPaymentMethod: z.union([z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]), z.array(z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]))]).optional(),
  actionableFeedbackPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  address: z.union([z.union([s.PostalAddressSchema, z.string()]), z.array(z.union([s.PostalAddressSchema, z.string()]))]).optional(),
  agentInteractionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  alumni: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  areaServed: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  awards: z.union([z.string(), z.array(z.string())]).optional(),
  brand: z.union([z.union([s.BrandSchema, s.OrganizationSchema]), z.array(z.union([s.BrandSchema, s.OrganizationSchema]))]).optional(),
  companyRegistration: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  contactPoint: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  contactPoints: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  correctionsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  department: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  dissolutionDate: z.union([z.string(), z.array(z.string())]).optional(),
  diversityPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  diversityStaffingReport: z.union([z.union([s.ArticleSchema, z.string().url()]), z.array(z.union([s.ArticleSchema, z.string().url()]))]).optional(),
  duns: z.union([z.string(), z.array(z.string())]).optional(),
  email: z.union([z.string(), z.array(z.string())]).optional(),
  employee: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  employees: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  ethicsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  event: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  events: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  faxNumber: z.union([z.string(), z.array(z.string())]).optional(),
  founder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  founders: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  foundingDate: z.union([z.string(), z.array(z.string())]).optional(),
  foundingLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  funder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  globalLocationNumber: z.union([z.string(), z.array(z.string())]).optional(),
  hasCertification: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  hasCredential: z.union([s.CredentialSchema, z.array(s.CredentialSchema)]).optional(),
  hasGS1DigitalLink: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  hasMemberProgram: z.union([s.MemberProgramSchema, z.array(s.MemberProgramSchema)]).optional(),
  hasMerchantReturnPolicy: z.union([s.MerchantReturnPolicySchema, z.array(s.MerchantReturnPolicySchema)]).optional(),
  hasOfferCatalog: z.union([s.OfferCatalogSchema, z.array(s.OfferCatalogSchema)]).optional(),
  hasPOS: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  hasShippingService: z.union([s.ShippingServiceSchema, z.array(s.ShippingServiceSchema)]).optional(),
  interactionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  isicV4: z.union([z.string(), z.array(z.string())]).optional(),
  iso6523Code: z.union([z.string(), z.array(z.string())]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  knowsAbout: z.union([z.union([z.string(), s.ThingSchema, z.string().url()]), z.array(z.union([z.string(), s.ThingSchema, z.string().url()]))]).optional(),
  knowsLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  legalAddress: z.union([s.PostalAddressSchema, z.array(s.PostalAddressSchema)]).optional(),
  legalName: z.union([z.string(), z.array(z.string())]).optional(),
  legalRepresentative: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  leiCode: z.union([z.string(), z.array(z.string())]).optional(),
  location: z.union([z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]), z.array(z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]))]).optional(),
  logo: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  makesOffer: z.union([s.OfferSchema, z.array(s.OfferSchema)]).optional(),
  member: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  memberOf: z.union([z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]), z.array(z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]))]).optional(),
  members: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  naics: z.union([z.string(), z.array(z.string())]).optional(),
  nonprofitStatus: z.union([s.NonprofitTypeSchema, z.array(s.NonprofitTypeSchema)]).optional(),
  numberOfEmployees: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  ownershipFundingInfo: z.union([z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]), z.array(z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]))]).optional(),
  owns: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  parentOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  publishingPrinciples: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  seeks: z.union([s.DemandSchema, z.array(s.DemandSchema)]).optional(),
  serviceArea: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]))]).optional(),
  skills: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  slogan: z.union([z.string(), z.array(z.string())]).optional(),
  sponsor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  subOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  taxID: z.union([z.string(), z.array(z.string())]).optional(),
  telephone: z.union([z.string(), z.array(z.string())]).optional(),
  unnamedSourcesPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  vatID: z.union([z.string(), z.array(z.string())]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  additionalProperty: z.union([s.PropertyValueSchema, z.array(s.PropertyValueSchema)]).optional(),
  amenityFeature: z.union([s.LocationFeatureSpecificationSchema, z.array(s.LocationFeatureSpecificationSchema)]).optional(),
  branchCode: z.union([z.string(), z.array(z.string())]).optional(),
  containedIn: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containedInPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containsPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  geo: z.union([z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]), z.array(z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]))]).optional(),
  geoContains: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCoveredBy: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCovers: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCrosses: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoDisjoint: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoEquals: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoIntersects: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoOverlaps: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoTouches: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoWithin: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  hasDriveThroughService: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  hasMap: z.union([z.union([s.MapSchema, z.string().url()]), z.array(z.union([s.MapSchema, z.string().url()]))]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  latitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  longitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  map: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maps: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maximumAttendeeCapacity: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  openingHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  photo: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  photos: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  publicAccess: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  smokingAllowed: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  specialOpeningHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  tourBookingPage: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface HardwareStore {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  branchOf?: s.Organization | Array<s.Organization>;
  currenciesAccepted?: string | Array<string>;
  floorLevel?: string | Array<string>;
  openingHours?: string | Array<string>;
  paymentAccepted?: string | Array<string>;
  priceRange?: string | Array<string>;
  acceptedPaymentMethod?: s.LoanOrCredit | s.PaymentMethod | string | Array<s.LoanOrCredit | s.PaymentMethod | string>;
  actionableFeedbackPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  address?: s.PostalAddress | string | Array<s.PostalAddress | string>;
  agentInteractionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  alumni?: s.Person | Array<s.Person>;
  areaServed?: s.AdministrativeArea | s.GeoShape | s.Place | string | Array<s.AdministrativeArea | s.GeoShape | s.Place | string>;
  award?: string | Array<string>;
  awards?: string | Array<string>;
  brand?: s.Brand | s.Organization | Array<s.Brand | s.Organization>;
  companyRegistration?: s.Certification | Array<s.Certification>;
  contactPoint?: s.ContactPoint | Array<s.ContactPoint>;
  contactPoints?: s.ContactPoint | Array<s.ContactPoint>;
  correctionsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  department?: s.Organization | Array<s.Organization>;
  dissolutionDate?: string | Array<string>;
  diversityPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  diversityStaffingReport?: s.Article | string | Array<s.Article | string>;
  duns?: string | Array<string>;
  email?: string | Array<string>;
  employee?: s.Person | Array<s.Person>;
  employees?: s.Person | Array<s.Person>;
  ethicsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  event?: s.Event | Array<s.Event>;
  events?: s.Event | Array<s.Event>;
  faxNumber?: string | Array<string>;
  founder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  founders?: s.Person | Array<s.Person>;
  foundingDate?: string | Array<string>;
  foundingLocation?: s.Place | Array<s.Place>;
  funder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  funding?: s.Grant | Array<s.Grant>;
  globalLocationNumber?: string | Array<string>;
  hasCertification?: s.Certification | Array<s.Certification>;
  hasCredential?: s.Credential | Array<s.Credential>;
  hasGS1DigitalLink?: string | Array<string>;
  hasMemberProgram?: s.MemberProgram | Array<s.MemberProgram>;
  hasMerchantReturnPolicy?: s.MerchantReturnPolicy | Array<s.MerchantReturnPolicy>;
  hasOfferCatalog?: s.OfferCatalog | Array<s.OfferCatalog>;
  hasPOS?: s.Place | Array<s.Place>;
  hasShippingService?: s.ShippingService | Array<s.ShippingService>;
  interactionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  isicV4?: string | Array<string>;
  iso6523Code?: string | Array<string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  knowsAbout?: string | s.Thing | Array<string | s.Thing>;
  knowsLanguage?: s.Language | string | Array<s.Language | string>;
  legalAddress?: s.PostalAddress | Array<s.PostalAddress>;
  legalName?: string | Array<string>;
  legalRepresentative?: s.Person | Array<s.Person>;
  leiCode?: string | Array<string>;
  location?: s.Place | s.PostalAddress | string | s.VirtualLocation | Array<s.Place | s.PostalAddress | string | s.VirtualLocation>;
  logo?: s.ImageObject | string | Array<s.ImageObject | string>;
  makesOffer?: s.Offer | Array<s.Offer>;
  member?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  memberOf?: s.MemberProgramTier | s.Organization | s.ProgramMembership | Array<s.MemberProgramTier | s.Organization | s.ProgramMembership>;
  members?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  naics?: string | Array<string>;
  nonprofitStatus?: s.NonprofitType | Array<s.NonprofitType>;
  numberOfEmployees?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  ownershipFundingInfo?: s.AboutPage | s.CreativeWork | string | Array<s.AboutPage | s.CreativeWork | string>;
  owns?: s.Thing | Array<s.Thing>;
  parentOrganization?: s.Organization | Array<s.Organization>;
  publishingPrinciples?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  seeks?: s.Demand | Array<s.Demand>;
  serviceArea?: s.AdministrativeArea | s.GeoShape | s.Place | Array<s.AdministrativeArea | s.GeoShape | s.Place>;
  skills?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  slogan?: string | Array<string>;
  sponsor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  subOrganization?: s.Organization | Array<s.Organization>;
  taxID?: string | Array<string>;
  telephone?: string | Array<string>;
  unnamedSourcesPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  vatID?: string | Array<string>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
  additionalProperty?: s.PropertyValue | Array<s.PropertyValue>;
  amenityFeature?: s.LocationFeatureSpecification | Array<s.LocationFeatureSpecification>;
  branchCode?: string | Array<string>;
  containedIn?: s.Place | Array<s.Place>;
  containedInPlace?: s.Place | Array<s.Place>;
  containsPlace?: s.Place | Array<s.Place>;
  geo?: s.GeoCoordinates | s.GeoShape | Array<s.GeoCoordinates | s.GeoShape>;
  geoContains?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCoveredBy?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCovers?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCrosses?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoDisjoint?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoEquals?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoIntersects?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoOverlaps?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoTouches?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoWithin?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  hasDriveThroughService?: boolean | Array<boolean>;
  hasMap?: s.Map | string | Array<s.Map | string>;
  isAccessibleForFree?: boolean | Array<boolean>;
  latitude?: number | string | Array<number | string>;
  longitude?: number | string | Array<number | string>;
  map?: string | Array<string>;
  maps?: string | Array<string>;
  maximumAttendeeCapacity?: number | Array<number>;
  openingHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  photo?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  photos?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  publicAccess?: boolean | Array<boolean>;
  smokingAllowed?: boolean | Array<boolean>;
  specialOpeningHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  tourBookingPage?: string | Array<string>;
}

export const HardwareStoreSchema: z.ZodType<HardwareStore> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  branchOf: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  currenciesAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  floorLevel: z.union([z.string(), z.array(z.string())]).optional(),
  openingHours: z.union([z.string(), z.array(z.string())]).optional(),
  paymentAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  priceRange: z.union([z.string(), z.array(z.string())]).optional(),
  acceptedPaymentMethod: z.union([z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]), z.array(z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]))]).optional(),
  actionableFeedbackPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  address: z.union([z.union([s.PostalAddressSchema, z.string()]), z.array(z.union([s.PostalAddressSchema, z.string()]))]).optional(),
  agentInteractionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  alumni: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  areaServed: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  awards: z.union([z.string(), z.array(z.string())]).optional(),
  brand: z.union([z.union([s.BrandSchema, s.OrganizationSchema]), z.array(z.union([s.BrandSchema, s.OrganizationSchema]))]).optional(),
  companyRegistration: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  contactPoint: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  contactPoints: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  correctionsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  department: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  dissolutionDate: z.union([z.string(), z.array(z.string())]).optional(),
  diversityPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  diversityStaffingReport: z.union([z.union([s.ArticleSchema, z.string().url()]), z.array(z.union([s.ArticleSchema, z.string().url()]))]).optional(),
  duns: z.union([z.string(), z.array(z.string())]).optional(),
  email: z.union([z.string(), z.array(z.string())]).optional(),
  employee: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  employees: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  ethicsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  event: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  events: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  faxNumber: z.union([z.string(), z.array(z.string())]).optional(),
  founder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  founders: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  foundingDate: z.union([z.string(), z.array(z.string())]).optional(),
  foundingLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  funder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  globalLocationNumber: z.union([z.string(), z.array(z.string())]).optional(),
  hasCertification: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  hasCredential: z.union([s.CredentialSchema, z.array(s.CredentialSchema)]).optional(),
  hasGS1DigitalLink: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  hasMemberProgram: z.union([s.MemberProgramSchema, z.array(s.MemberProgramSchema)]).optional(),
  hasMerchantReturnPolicy: z.union([s.MerchantReturnPolicySchema, z.array(s.MerchantReturnPolicySchema)]).optional(),
  hasOfferCatalog: z.union([s.OfferCatalogSchema, z.array(s.OfferCatalogSchema)]).optional(),
  hasPOS: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  hasShippingService: z.union([s.ShippingServiceSchema, z.array(s.ShippingServiceSchema)]).optional(),
  interactionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  isicV4: z.union([z.string(), z.array(z.string())]).optional(),
  iso6523Code: z.union([z.string(), z.array(z.string())]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  knowsAbout: z.union([z.union([z.string(), s.ThingSchema, z.string().url()]), z.array(z.union([z.string(), s.ThingSchema, z.string().url()]))]).optional(),
  knowsLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  legalAddress: z.union([s.PostalAddressSchema, z.array(s.PostalAddressSchema)]).optional(),
  legalName: z.union([z.string(), z.array(z.string())]).optional(),
  legalRepresentative: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  leiCode: z.union([z.string(), z.array(z.string())]).optional(),
  location: z.union([z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]), z.array(z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]))]).optional(),
  logo: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  makesOffer: z.union([s.OfferSchema, z.array(s.OfferSchema)]).optional(),
  member: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  memberOf: z.union([z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]), z.array(z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]))]).optional(),
  members: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  naics: z.union([z.string(), z.array(z.string())]).optional(),
  nonprofitStatus: z.union([s.NonprofitTypeSchema, z.array(s.NonprofitTypeSchema)]).optional(),
  numberOfEmployees: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  ownershipFundingInfo: z.union([z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]), z.array(z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]))]).optional(),
  owns: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  parentOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  publishingPrinciples: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  seeks: z.union([s.DemandSchema, z.array(s.DemandSchema)]).optional(),
  serviceArea: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]))]).optional(),
  skills: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  slogan: z.union([z.string(), z.array(z.string())]).optional(),
  sponsor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  subOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  taxID: z.union([z.string(), z.array(z.string())]).optional(),
  telephone: z.union([z.string(), z.array(z.string())]).optional(),
  unnamedSourcesPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  vatID: z.union([z.string(), z.array(z.string())]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  additionalProperty: z.union([s.PropertyValueSchema, z.array(s.PropertyValueSchema)]).optional(),
  amenityFeature: z.union([s.LocationFeatureSpecificationSchema, z.array(s.LocationFeatureSpecificationSchema)]).optional(),
  branchCode: z.union([z.string(), z.array(z.string())]).optional(),
  containedIn: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containedInPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containsPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  geo: z.union([z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]), z.array(z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]))]).optional(),
  geoContains: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCoveredBy: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCovers: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCrosses: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoDisjoint: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoEquals: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoIntersects: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoOverlaps: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoTouches: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoWithin: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  hasDriveThroughService: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  hasMap: z.union([z.union([s.MapSchema, z.string().url()]), z.array(z.union([s.MapSchema, z.string().url()]))]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  latitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  longitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  map: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maps: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maximumAttendeeCapacity: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  openingHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  photo: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  photos: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  publicAccess: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  smokingAllowed: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  specialOpeningHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  tourBookingPage: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface HealthAndBeautyBusiness {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  branchOf?: s.Organization | Array<s.Organization>;
  currenciesAccepted?: string | Array<string>;
  floorLevel?: string | Array<string>;
  openingHours?: string | Array<string>;
  paymentAccepted?: string | Array<string>;
  priceRange?: string | Array<string>;
  acceptedPaymentMethod?: s.LoanOrCredit | s.PaymentMethod | string | Array<s.LoanOrCredit | s.PaymentMethod | string>;
  actionableFeedbackPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  address?: s.PostalAddress | string | Array<s.PostalAddress | string>;
  agentInteractionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  alumni?: s.Person | Array<s.Person>;
  areaServed?: s.AdministrativeArea | s.GeoShape | s.Place | string | Array<s.AdministrativeArea | s.GeoShape | s.Place | string>;
  award?: string | Array<string>;
  awards?: string | Array<string>;
  brand?: s.Brand | s.Organization | Array<s.Brand | s.Organization>;
  companyRegistration?: s.Certification | Array<s.Certification>;
  contactPoint?: s.ContactPoint | Array<s.ContactPoint>;
  contactPoints?: s.ContactPoint | Array<s.ContactPoint>;
  correctionsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  department?: s.Organization | Array<s.Organization>;
  dissolutionDate?: string | Array<string>;
  diversityPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  diversityStaffingReport?: s.Article | string | Array<s.Article | string>;
  duns?: string | Array<string>;
  email?: string | Array<string>;
  employee?: s.Person | Array<s.Person>;
  employees?: s.Person | Array<s.Person>;
  ethicsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  event?: s.Event | Array<s.Event>;
  events?: s.Event | Array<s.Event>;
  faxNumber?: string | Array<string>;
  founder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  founders?: s.Person | Array<s.Person>;
  foundingDate?: string | Array<string>;
  foundingLocation?: s.Place | Array<s.Place>;
  funder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  funding?: s.Grant | Array<s.Grant>;
  globalLocationNumber?: string | Array<string>;
  hasCertification?: s.Certification | Array<s.Certification>;
  hasCredential?: s.Credential | Array<s.Credential>;
  hasGS1DigitalLink?: string | Array<string>;
  hasMemberProgram?: s.MemberProgram | Array<s.MemberProgram>;
  hasMerchantReturnPolicy?: s.MerchantReturnPolicy | Array<s.MerchantReturnPolicy>;
  hasOfferCatalog?: s.OfferCatalog | Array<s.OfferCatalog>;
  hasPOS?: s.Place | Array<s.Place>;
  hasShippingService?: s.ShippingService | Array<s.ShippingService>;
  interactionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  isicV4?: string | Array<string>;
  iso6523Code?: string | Array<string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  knowsAbout?: string | s.Thing | Array<string | s.Thing>;
  knowsLanguage?: s.Language | string | Array<s.Language | string>;
  legalAddress?: s.PostalAddress | Array<s.PostalAddress>;
  legalName?: string | Array<string>;
  legalRepresentative?: s.Person | Array<s.Person>;
  leiCode?: string | Array<string>;
  location?: s.Place | s.PostalAddress | string | s.VirtualLocation | Array<s.Place | s.PostalAddress | string | s.VirtualLocation>;
  logo?: s.ImageObject | string | Array<s.ImageObject | string>;
  makesOffer?: s.Offer | Array<s.Offer>;
  member?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  memberOf?: s.MemberProgramTier | s.Organization | s.ProgramMembership | Array<s.MemberProgramTier | s.Organization | s.ProgramMembership>;
  members?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  naics?: string | Array<string>;
  nonprofitStatus?: s.NonprofitType | Array<s.NonprofitType>;
  numberOfEmployees?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  ownershipFundingInfo?: s.AboutPage | s.CreativeWork | string | Array<s.AboutPage | s.CreativeWork | string>;
  owns?: s.Thing | Array<s.Thing>;
  parentOrganization?: s.Organization | Array<s.Organization>;
  publishingPrinciples?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  seeks?: s.Demand | Array<s.Demand>;
  serviceArea?: s.AdministrativeArea | s.GeoShape | s.Place | Array<s.AdministrativeArea | s.GeoShape | s.Place>;
  skills?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  slogan?: string | Array<string>;
  sponsor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  subOrganization?: s.Organization | Array<s.Organization>;
  taxID?: string | Array<string>;
  telephone?: string | Array<string>;
  unnamedSourcesPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  vatID?: string | Array<string>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
  additionalProperty?: s.PropertyValue | Array<s.PropertyValue>;
  amenityFeature?: s.LocationFeatureSpecification | Array<s.LocationFeatureSpecification>;
  branchCode?: string | Array<string>;
  containedIn?: s.Place | Array<s.Place>;
  containedInPlace?: s.Place | Array<s.Place>;
  containsPlace?: s.Place | Array<s.Place>;
  geo?: s.GeoCoordinates | s.GeoShape | Array<s.GeoCoordinates | s.GeoShape>;
  geoContains?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCoveredBy?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCovers?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCrosses?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoDisjoint?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoEquals?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoIntersects?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoOverlaps?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoTouches?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoWithin?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  hasDriveThroughService?: boolean | Array<boolean>;
  hasMap?: s.Map | string | Array<s.Map | string>;
  isAccessibleForFree?: boolean | Array<boolean>;
  latitude?: number | string | Array<number | string>;
  longitude?: number | string | Array<number | string>;
  map?: string | Array<string>;
  maps?: string | Array<string>;
  maximumAttendeeCapacity?: number | Array<number>;
  openingHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  photo?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  photos?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  publicAccess?: boolean | Array<boolean>;
  smokingAllowed?: boolean | Array<boolean>;
  specialOpeningHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  tourBookingPage?: string | Array<string>;
}

export const HealthAndBeautyBusinessSchema: z.ZodType<HealthAndBeautyBusiness> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  branchOf: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  currenciesAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  floorLevel: z.union([z.string(), z.array(z.string())]).optional(),
  openingHours: z.union([z.string(), z.array(z.string())]).optional(),
  paymentAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  priceRange: z.union([z.string(), z.array(z.string())]).optional(),
  acceptedPaymentMethod: z.union([z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]), z.array(z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]))]).optional(),
  actionableFeedbackPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  address: z.union([z.union([s.PostalAddressSchema, z.string()]), z.array(z.union([s.PostalAddressSchema, z.string()]))]).optional(),
  agentInteractionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  alumni: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  areaServed: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  awards: z.union([z.string(), z.array(z.string())]).optional(),
  brand: z.union([z.union([s.BrandSchema, s.OrganizationSchema]), z.array(z.union([s.BrandSchema, s.OrganizationSchema]))]).optional(),
  companyRegistration: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  contactPoint: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  contactPoints: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  correctionsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  department: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  dissolutionDate: z.union([z.string(), z.array(z.string())]).optional(),
  diversityPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  diversityStaffingReport: z.union([z.union([s.ArticleSchema, z.string().url()]), z.array(z.union([s.ArticleSchema, z.string().url()]))]).optional(),
  duns: z.union([z.string(), z.array(z.string())]).optional(),
  email: z.union([z.string(), z.array(z.string())]).optional(),
  employee: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  employees: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  ethicsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  event: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  events: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  faxNumber: z.union([z.string(), z.array(z.string())]).optional(),
  founder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  founders: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  foundingDate: z.union([z.string(), z.array(z.string())]).optional(),
  foundingLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  funder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  globalLocationNumber: z.union([z.string(), z.array(z.string())]).optional(),
  hasCertification: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  hasCredential: z.union([s.CredentialSchema, z.array(s.CredentialSchema)]).optional(),
  hasGS1DigitalLink: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  hasMemberProgram: z.union([s.MemberProgramSchema, z.array(s.MemberProgramSchema)]).optional(),
  hasMerchantReturnPolicy: z.union([s.MerchantReturnPolicySchema, z.array(s.MerchantReturnPolicySchema)]).optional(),
  hasOfferCatalog: z.union([s.OfferCatalogSchema, z.array(s.OfferCatalogSchema)]).optional(),
  hasPOS: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  hasShippingService: z.union([s.ShippingServiceSchema, z.array(s.ShippingServiceSchema)]).optional(),
  interactionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  isicV4: z.union([z.string(), z.array(z.string())]).optional(),
  iso6523Code: z.union([z.string(), z.array(z.string())]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  knowsAbout: z.union([z.union([z.string(), s.ThingSchema, z.string().url()]), z.array(z.union([z.string(), s.ThingSchema, z.string().url()]))]).optional(),
  knowsLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  legalAddress: z.union([s.PostalAddressSchema, z.array(s.PostalAddressSchema)]).optional(),
  legalName: z.union([z.string(), z.array(z.string())]).optional(),
  legalRepresentative: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  leiCode: z.union([z.string(), z.array(z.string())]).optional(),
  location: z.union([z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]), z.array(z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]))]).optional(),
  logo: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  makesOffer: z.union([s.OfferSchema, z.array(s.OfferSchema)]).optional(),
  member: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  memberOf: z.union([z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]), z.array(z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]))]).optional(),
  members: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  naics: z.union([z.string(), z.array(z.string())]).optional(),
  nonprofitStatus: z.union([s.NonprofitTypeSchema, z.array(s.NonprofitTypeSchema)]).optional(),
  numberOfEmployees: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  ownershipFundingInfo: z.union([z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]), z.array(z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]))]).optional(),
  owns: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  parentOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  publishingPrinciples: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  seeks: z.union([s.DemandSchema, z.array(s.DemandSchema)]).optional(),
  serviceArea: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]))]).optional(),
  skills: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  slogan: z.union([z.string(), z.array(z.string())]).optional(),
  sponsor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  subOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  taxID: z.union([z.string(), z.array(z.string())]).optional(),
  telephone: z.union([z.string(), z.array(z.string())]).optional(),
  unnamedSourcesPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  vatID: z.union([z.string(), z.array(z.string())]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  additionalProperty: z.union([s.PropertyValueSchema, z.array(s.PropertyValueSchema)]).optional(),
  amenityFeature: z.union([s.LocationFeatureSpecificationSchema, z.array(s.LocationFeatureSpecificationSchema)]).optional(),
  branchCode: z.union([z.string(), z.array(z.string())]).optional(),
  containedIn: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containedInPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containsPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  geo: z.union([z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]), z.array(z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]))]).optional(),
  geoContains: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCoveredBy: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCovers: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCrosses: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoDisjoint: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoEquals: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoIntersects: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoOverlaps: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoTouches: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoWithin: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  hasDriveThroughService: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  hasMap: z.union([z.union([s.MapSchema, z.string().url()]), z.array(z.union([s.MapSchema, z.string().url()]))]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  latitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  longitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  map: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maps: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maximumAttendeeCapacity: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  openingHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  photo: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  photos: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  publicAccess: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  smokingAllowed: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  specialOpeningHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  tourBookingPage: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export type HealthAspectEnumeration = 'schema:AllergiesHealthAspect' | 'schema:BenefitsHealthAspect' | 'schema:CausesHealthAspect' | 'schema:ContagiousnessHealthAspect' | 'schema:EffectivenessHealthAspect' | 'schema:GettingAccessHealthAspect' | 'schema:HowItWorksHealthAspect' | 'schema:HowOrWhereHealthAspect' | 'schema:IngredientsHealthAspect' | 'schema:LivingWithHealthAspect' | 'schema:MayTreatHealthAspect' | 'schema:MisconceptionsHealthAspect' | 'schema:OverviewHealthAspect' | 'schema:PatientExperienceHealthAspect' | 'schema:PregnancyHealthAspect' | 'schema:PreventionHealthAspect' | 'schema:PrognosisHealthAspect' | 'schema:RelatedTopicsHealthAspect' | 'schema:RisksOrComplicationsHealthAspect' | 'schema:SafetyHealthAspect' | 'schema:ScreeningHealthAspect' | 'schema:SeeDoctorHealthAspect' | 'schema:SelfCareHealthAspect' | 'schema:SideEffectsHealthAspect' | 'schema:StagesHealthAspect' | 'schema:SymptomsHealthAspect' | 'schema:TreatmentsHealthAspect' | 'schema:TypesHealthAspect' | 'schema:UsageOrScheduleHealthAspect';
export const HealthAspectEnumerationSchema = z.union([z.literal('schema:AllergiesHealthAspect'), z.literal('schema:BenefitsHealthAspect'), z.literal('schema:CausesHealthAspect'), z.literal('schema:ContagiousnessHealthAspect'), z.literal('schema:EffectivenessHealthAspect'), z.literal('schema:GettingAccessHealthAspect'), z.literal('schema:HowItWorksHealthAspect'), z.literal('schema:HowOrWhereHealthAspect'), z.literal('schema:IngredientsHealthAspect'), z.literal('schema:LivingWithHealthAspect'), z.literal('schema:MayTreatHealthAspect'), z.literal('schema:MisconceptionsHealthAspect'), z.literal('schema:OverviewHealthAspect'), z.literal('schema:PatientExperienceHealthAspect'), z.literal('schema:PregnancyHealthAspect'), z.literal('schema:PreventionHealthAspect'), z.literal('schema:PrognosisHealthAspect'), z.literal('schema:RelatedTopicsHealthAspect'), z.literal('schema:RisksOrComplicationsHealthAspect'), z.literal('schema:SafetyHealthAspect'), z.literal('schema:ScreeningHealthAspect'), z.literal('schema:SeeDoctorHealthAspect'), z.literal('schema:SelfCareHealthAspect'), z.literal('schema:SideEffectsHealthAspect'), z.literal('schema:StagesHealthAspect'), z.literal('schema:SymptomsHealthAspect'), z.literal('schema:TreatmentsHealthAspect'), z.literal('schema:TypesHealthAspect'), z.literal('schema:UsageOrScheduleHealthAspect')]);

export interface HealthClub {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  branchOf?: s.Organization | Array<s.Organization>;
  currenciesAccepted?: string | Array<string>;
  floorLevel?: string | Array<string>;
  openingHours?: string | Array<string>;
  paymentAccepted?: string | Array<string>;
  priceRange?: string | Array<string>;
  acceptedPaymentMethod?: s.LoanOrCredit | s.PaymentMethod | string | Array<s.LoanOrCredit | s.PaymentMethod | string>;
  actionableFeedbackPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  address?: s.PostalAddress | string | Array<s.PostalAddress | string>;
  agentInteractionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  alumni?: s.Person | Array<s.Person>;
  areaServed?: s.AdministrativeArea | s.GeoShape | s.Place | string | Array<s.AdministrativeArea | s.GeoShape | s.Place | string>;
  award?: string | Array<string>;
  awards?: string | Array<string>;
  brand?: s.Brand | s.Organization | Array<s.Brand | s.Organization>;
  companyRegistration?: s.Certification | Array<s.Certification>;
  contactPoint?: s.ContactPoint | Array<s.ContactPoint>;
  contactPoints?: s.ContactPoint | Array<s.ContactPoint>;
  correctionsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  department?: s.Organization | Array<s.Organization>;
  dissolutionDate?: string | Array<string>;
  diversityPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  diversityStaffingReport?: s.Article | string | Array<s.Article | string>;
  duns?: string | Array<string>;
  email?: string | Array<string>;
  employee?: s.Person | Array<s.Person>;
  employees?: s.Person | Array<s.Person>;
  ethicsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  event?: s.Event | Array<s.Event>;
  events?: s.Event | Array<s.Event>;
  faxNumber?: string | Array<string>;
  founder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  founders?: s.Person | Array<s.Person>;
  foundingDate?: string | Array<string>;
  foundingLocation?: s.Place | Array<s.Place>;
  funder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  funding?: s.Grant | Array<s.Grant>;
  globalLocationNumber?: string | Array<string>;
  hasCertification?: s.Certification | Array<s.Certification>;
  hasCredential?: s.Credential | Array<s.Credential>;
  hasGS1DigitalLink?: string | Array<string>;
  hasMemberProgram?: s.MemberProgram | Array<s.MemberProgram>;
  hasMerchantReturnPolicy?: s.MerchantReturnPolicy | Array<s.MerchantReturnPolicy>;
  hasOfferCatalog?: s.OfferCatalog | Array<s.OfferCatalog>;
  hasPOS?: s.Place | Array<s.Place>;
  hasShippingService?: s.ShippingService | Array<s.ShippingService>;
  interactionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  isicV4?: string | Array<string>;
  iso6523Code?: string | Array<string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  knowsAbout?: string | s.Thing | Array<string | s.Thing>;
  knowsLanguage?: s.Language | string | Array<s.Language | string>;
  legalAddress?: s.PostalAddress | Array<s.PostalAddress>;
  legalName?: string | Array<string>;
  legalRepresentative?: s.Person | Array<s.Person>;
  leiCode?: string | Array<string>;
  location?: s.Place | s.PostalAddress | string | s.VirtualLocation | Array<s.Place | s.PostalAddress | string | s.VirtualLocation>;
  logo?: s.ImageObject | string | Array<s.ImageObject | string>;
  makesOffer?: s.Offer | Array<s.Offer>;
  member?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  memberOf?: s.MemberProgramTier | s.Organization | s.ProgramMembership | Array<s.MemberProgramTier | s.Organization | s.ProgramMembership>;
  members?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  naics?: string | Array<string>;
  nonprofitStatus?: s.NonprofitType | Array<s.NonprofitType>;
  numberOfEmployees?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  ownershipFundingInfo?: s.AboutPage | s.CreativeWork | string | Array<s.AboutPage | s.CreativeWork | string>;
  owns?: s.Thing | Array<s.Thing>;
  parentOrganization?: s.Organization | Array<s.Organization>;
  publishingPrinciples?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  seeks?: s.Demand | Array<s.Demand>;
  serviceArea?: s.AdministrativeArea | s.GeoShape | s.Place | Array<s.AdministrativeArea | s.GeoShape | s.Place>;
  skills?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  slogan?: string | Array<string>;
  sponsor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  subOrganization?: s.Organization | Array<s.Organization>;
  taxID?: string | Array<string>;
  telephone?: string | Array<string>;
  unnamedSourcesPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  vatID?: string | Array<string>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
  additionalProperty?: s.PropertyValue | Array<s.PropertyValue>;
  amenityFeature?: s.LocationFeatureSpecification | Array<s.LocationFeatureSpecification>;
  branchCode?: string | Array<string>;
  containedIn?: s.Place | Array<s.Place>;
  containedInPlace?: s.Place | Array<s.Place>;
  containsPlace?: s.Place | Array<s.Place>;
  geo?: s.GeoCoordinates | s.GeoShape | Array<s.GeoCoordinates | s.GeoShape>;
  geoContains?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCoveredBy?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCovers?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCrosses?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoDisjoint?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoEquals?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoIntersects?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoOverlaps?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoTouches?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoWithin?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  hasDriveThroughService?: boolean | Array<boolean>;
  hasMap?: s.Map | string | Array<s.Map | string>;
  isAccessibleForFree?: boolean | Array<boolean>;
  latitude?: number | string | Array<number | string>;
  longitude?: number | string | Array<number | string>;
  map?: string | Array<string>;
  maps?: string | Array<string>;
  maximumAttendeeCapacity?: number | Array<number>;
  openingHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  photo?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  photos?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  publicAccess?: boolean | Array<boolean>;
  smokingAllowed?: boolean | Array<boolean>;
  specialOpeningHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  tourBookingPage?: string | Array<string>;
}

export const HealthClubSchema: z.ZodType<HealthClub> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  branchOf: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  currenciesAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  floorLevel: z.union([z.string(), z.array(z.string())]).optional(),
  openingHours: z.union([z.string(), z.array(z.string())]).optional(),
  paymentAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  priceRange: z.union([z.string(), z.array(z.string())]).optional(),
  acceptedPaymentMethod: z.union([z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]), z.array(z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]))]).optional(),
  actionableFeedbackPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  address: z.union([z.union([s.PostalAddressSchema, z.string()]), z.array(z.union([s.PostalAddressSchema, z.string()]))]).optional(),
  agentInteractionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  alumni: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  areaServed: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  awards: z.union([z.string(), z.array(z.string())]).optional(),
  brand: z.union([z.union([s.BrandSchema, s.OrganizationSchema]), z.array(z.union([s.BrandSchema, s.OrganizationSchema]))]).optional(),
  companyRegistration: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  contactPoint: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  contactPoints: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  correctionsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  department: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  dissolutionDate: z.union([z.string(), z.array(z.string())]).optional(),
  diversityPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  diversityStaffingReport: z.union([z.union([s.ArticleSchema, z.string().url()]), z.array(z.union([s.ArticleSchema, z.string().url()]))]).optional(),
  duns: z.union([z.string(), z.array(z.string())]).optional(),
  email: z.union([z.string(), z.array(z.string())]).optional(),
  employee: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  employees: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  ethicsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  event: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  events: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  faxNumber: z.union([z.string(), z.array(z.string())]).optional(),
  founder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  founders: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  foundingDate: z.union([z.string(), z.array(z.string())]).optional(),
  foundingLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  funder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  globalLocationNumber: z.union([z.string(), z.array(z.string())]).optional(),
  hasCertification: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  hasCredential: z.union([s.CredentialSchema, z.array(s.CredentialSchema)]).optional(),
  hasGS1DigitalLink: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  hasMemberProgram: z.union([s.MemberProgramSchema, z.array(s.MemberProgramSchema)]).optional(),
  hasMerchantReturnPolicy: z.union([s.MerchantReturnPolicySchema, z.array(s.MerchantReturnPolicySchema)]).optional(),
  hasOfferCatalog: z.union([s.OfferCatalogSchema, z.array(s.OfferCatalogSchema)]).optional(),
  hasPOS: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  hasShippingService: z.union([s.ShippingServiceSchema, z.array(s.ShippingServiceSchema)]).optional(),
  interactionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  isicV4: z.union([z.string(), z.array(z.string())]).optional(),
  iso6523Code: z.union([z.string(), z.array(z.string())]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  knowsAbout: z.union([z.union([z.string(), s.ThingSchema, z.string().url()]), z.array(z.union([z.string(), s.ThingSchema, z.string().url()]))]).optional(),
  knowsLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  legalAddress: z.union([s.PostalAddressSchema, z.array(s.PostalAddressSchema)]).optional(),
  legalName: z.union([z.string(), z.array(z.string())]).optional(),
  legalRepresentative: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  leiCode: z.union([z.string(), z.array(z.string())]).optional(),
  location: z.union([z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]), z.array(z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]))]).optional(),
  logo: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  makesOffer: z.union([s.OfferSchema, z.array(s.OfferSchema)]).optional(),
  member: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  memberOf: z.union([z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]), z.array(z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]))]).optional(),
  members: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  naics: z.union([z.string(), z.array(z.string())]).optional(),
  nonprofitStatus: z.union([s.NonprofitTypeSchema, z.array(s.NonprofitTypeSchema)]).optional(),
  numberOfEmployees: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  ownershipFundingInfo: z.union([z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]), z.array(z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]))]).optional(),
  owns: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  parentOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  publishingPrinciples: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  seeks: z.union([s.DemandSchema, z.array(s.DemandSchema)]).optional(),
  serviceArea: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]))]).optional(),
  skills: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  slogan: z.union([z.string(), z.array(z.string())]).optional(),
  sponsor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  subOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  taxID: z.union([z.string(), z.array(z.string())]).optional(),
  telephone: z.union([z.string(), z.array(z.string())]).optional(),
  unnamedSourcesPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  vatID: z.union([z.string(), z.array(z.string())]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  additionalProperty: z.union([s.PropertyValueSchema, z.array(s.PropertyValueSchema)]).optional(),
  amenityFeature: z.union([s.LocationFeatureSpecificationSchema, z.array(s.LocationFeatureSpecificationSchema)]).optional(),
  branchCode: z.union([z.string(), z.array(z.string())]).optional(),
  containedIn: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containedInPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containsPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  geo: z.union([z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]), z.array(z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]))]).optional(),
  geoContains: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCoveredBy: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCovers: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCrosses: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoDisjoint: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoEquals: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoIntersects: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoOverlaps: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoTouches: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoWithin: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  hasDriveThroughService: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  hasMap: z.union([z.union([s.MapSchema, z.string().url()]), z.array(z.union([s.MapSchema, z.string().url()]))]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  latitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  longitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  map: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maps: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maximumAttendeeCapacity: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  openingHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  photo: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  photos: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  publicAccess: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  smokingAllowed: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  specialOpeningHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  tourBookingPage: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface HealthInsurancePlan {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  benefitsSummaryUrl?: string | Array<string>;
  contactPoint?: s.ContactPoint | Array<s.ContactPoint>;
  healthPlanDrugOption?: string | Array<string>;
  healthPlanDrugTier?: string | Array<string>;
  healthPlanId?: string | Array<string>;
  healthPlanMarketingUrl?: string | Array<string>;
  includesHealthPlanFormulary?: s.HealthPlanFormulary | Array<s.HealthPlanFormulary>;
  includesHealthPlanNetwork?: s.HealthPlanNetwork | Array<s.HealthPlanNetwork>;
  usesHealthPlanIdStandard?: string | Array<string>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
}

export const HealthInsurancePlanSchema: z.ZodType<HealthInsurancePlan> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  benefitsSummaryUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  contactPoint: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  healthPlanDrugOption: z.union([z.string(), z.array(z.string())]).optional(),
  healthPlanDrugTier: z.union([z.string(), z.array(z.string())]).optional(),
  healthPlanId: z.union([z.string(), z.array(z.string())]).optional(),
  healthPlanMarketingUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  includesHealthPlanFormulary: z.union([s.HealthPlanFormularySchema, z.array(s.HealthPlanFormularySchema)]).optional(),
  includesHealthPlanNetwork: z.union([s.HealthPlanNetworkSchema, z.array(s.HealthPlanNetworkSchema)]).optional(),
  usesHealthPlanIdStandard: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface HealthPlanCostSharingSpecification {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  healthPlanCoinsuranceOption?: string | Array<string>;
  healthPlanCoinsuranceRate?: number | Array<number>;
  healthPlanCopay?: s.PriceSpecification | Array<s.PriceSpecification>;
  healthPlanCopayOption?: string | Array<string>;
  healthPlanPharmacyCategory?: string | Array<string>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
}

export const HealthPlanCostSharingSpecificationSchema: z.ZodType<HealthPlanCostSharingSpecification> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  healthPlanCoinsuranceOption: z.union([z.string(), z.array(z.string())]).optional(),
  healthPlanCoinsuranceRate: z.union([z.number(), z.array(z.number())]).optional(),
  healthPlanCopay: z.union([s.PriceSpecificationSchema, z.array(s.PriceSpecificationSchema)]).optional(),
  healthPlanCopayOption: z.union([z.string(), z.array(z.string())]).optional(),
  healthPlanPharmacyCategory: z.union([z.string(), z.array(z.string())]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface HealthPlanFormulary {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  healthPlanCostSharing?: boolean | s.HealthPlanCostSharingSpecification | Array<boolean | s.HealthPlanCostSharingSpecification>;
  healthPlanDrugTier?: string | Array<string>;
  offersPrescriptionByMail?: boolean | Array<boolean>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
}

export const HealthPlanFormularySchema: z.ZodType<HealthPlanFormulary> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  healthPlanCostSharing: z.union([z.union([z.boolean(), s.HealthPlanCostSharingSpecificationSchema]), z.array(z.union([z.boolean(), s.HealthPlanCostSharingSpecificationSchema]))]).optional(),
  healthPlanDrugTier: z.union([z.string(), z.array(z.string())]).optional(),
  offersPrescriptionByMail: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface HealthPlanNetwork {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  healthPlanCostSharing?: boolean | s.HealthPlanCostSharingSpecification | Array<boolean | s.HealthPlanCostSharingSpecification>;
  healthPlanNetworkId?: string | Array<string>;
  healthPlanNetworkTier?: string | Array<string>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
}

export const HealthPlanNetworkSchema: z.ZodType<HealthPlanNetwork> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  healthPlanCostSharing: z.union([z.union([z.boolean(), s.HealthPlanCostSharingSpecificationSchema]), z.array(z.union([z.boolean(), s.HealthPlanCostSharingSpecificationSchema]))]).optional(),
  healthPlanNetworkId: z.union([z.string(), z.array(z.string())]).optional(),
  healthPlanNetworkTier: z.union([z.string(), z.array(z.string())]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface HealthTopicContent {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  hasHealthAspect?: s.HealthAspectEnumeration | Array<s.HealthAspectEnumeration>;
  about?: s.Thing | Array<s.Thing>;
  abstract?: string | Array<string>;
  accessMode?: string | Array<string>;
  accessModeSufficient?: s.ItemList | Array<s.ItemList>;
  accessibilityAPI?: string | Array<string>;
  accessibilityControl?: string | Array<string>;
  accessibilityFeature?: string | Array<string>;
  accessibilityHazard?: string | Array<string>;
  accessibilitySummary?: string | Array<string>;
  accountablePerson?: s.Person | Array<s.Person>;
  acquireLicensePage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  alternativeHeadline?: string | Array<string>;
  archivedAt?: string | s.WebPage | Array<string | s.WebPage>;
  assesses?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  associatedMedia?: s.MediaObject | Array<s.MediaObject>;
  audience?: s.Audience | Array<s.Audience>;
  audio?: s.AudioObject | s.Clip | s.MusicRecording | Array<s.AudioObject | s.Clip | s.MusicRecording>;
  author?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  award?: string | Array<string>;
  awards?: string | Array<string>;
  character?: s.Person | Array<s.Person>;
  citation?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  comment?: s.Comment | Array<s.Comment>;
  commentCount?: number | Array<number>;
  conditionsOfAccess?: string | Array<string>;
  contentLocation?: s.Place | Array<s.Place>;
  contentRating?: s.Rating | string | Array<s.Rating | string>;
  contentReferenceTime?: string | Array<string>;
  contributor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  copyrightHolder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  copyrightNotice?: string | Array<string>;
  copyrightYear?: number | Array<number>;
  correction?: s.CorrectionComment | string | Array<s.CorrectionComment | string>;
  countryOfOrigin?: s.Country | Array<s.Country>;
  creativeWorkStatus?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  creator?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  creditText?: string | Array<string>;
  dateCreated?: string | Array<string>;
  dateModified?: string | Array<string>;
  datePublished?: string | Array<string>;
  digitalSourceType?: s.IPTCDigitalSourceEnumeration | Array<s.IPTCDigitalSourceEnumeration>;
  discussionUrl?: string | Array<string>;
  displayLocation?: s.Place | Array<s.Place>;
  editEIDR?: string | Array<string>;
  editor?: s.Person | Array<s.Person>;
  educationalAlignment?: s.AlignmentObject | Array<s.AlignmentObject>;
  educationalLevel?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  educationalUse?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  encoding?: s.MediaObject | Array<s.MediaObject>;
  encodingFormat?: string | Array<string>;
  encodings?: s.MediaObject | Array<s.MediaObject>;
  exampleOfWork?: s.CreativeWork | Array<s.CreativeWork>;
  expires?: string | Array<string>;
  fileFormat?: string | Array<string>;
  funder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  funding?: s.Grant | Array<s.Grant>;
  genre?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  hasPart?: s.CreativeWork | Array<s.CreativeWork>;
  headline?: string | Array<string>;
  inLanguage?: s.Language | string | Array<s.Language | string>;
  interactionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  interactivityType?: string | Array<string>;
  interpretedAsClaim?: s.Claim | Array<s.Claim>;
  isAccessibleForFree?: boolean | Array<boolean>;
  isBasedOn?: s.CreativeWork | s.Product | string | Array<s.CreativeWork | s.Product | string>;
  isBasedOnUrl?: s.CreativeWork | s.Product | string | Array<s.CreativeWork | s.Product | string>;
  isFamilyFriendly?: boolean | Array<boolean>;
  isPartOf?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  learningResourceType?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  license?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  locationCreated?: s.Place | Array<s.Place>;
  mainEntity?: s.Thing | Array<s.Thing>;
  maintainer?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  material?: s.Product | string | Array<s.Product | string>;
  materialExtent?: s.QuantitativeValue | string | Array<s.QuantitativeValue | string>;
  mentions?: s.Thing | Array<s.Thing>;
  offers?: s.Demand | s.Offer | Array<s.Demand | s.Offer>;
  pattern?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  position?: number | string | Array<number | string>;
  producer?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  provider?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  publication?: s.PublicationEvent | Array<s.PublicationEvent>;
  publisher?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  publisherImprint?: s.Organization | Array<s.Organization>;
  publishingPrinciples?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  recordedAt?: s.Event | Array<s.Event>;
  releasedEvent?: s.PublicationEvent | Array<s.PublicationEvent>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  schemaVersion?: string | Array<string>;
  sdDatePublished?: string | Array<string>;
  sdLicense?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  sdPublisher?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  size?: s.DefinedTerm | s.QuantitativeValue | s.SizeSpecification | string | Array<s.DefinedTerm | s.QuantitativeValue | s.SizeSpecification | string>;
  sourceOrganization?: s.Organization | Array<s.Organization>;
  spatial?: s.Place | Array<s.Place>;
  spatialCoverage?: s.Place | Array<s.Place>;
  sponsor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  teaches?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  temporal?: string | Array<string>;
  temporalCoverage?: string | Array<string>;
  text?: string | Array<string>;
  thumbnail?: s.ImageObject | Array<s.ImageObject>;
  thumbnailUrl?: string | Array<string>;
  timeRequired?: s.Duration | Array<s.Duration>;
  translationOfWork?: s.CreativeWork | Array<s.CreativeWork>;
  translator?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  typicalAgeRange?: string | Array<string>;
  usageInfo?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  version?: number | string | Array<number | string>;
  video?: s.Clip | s.VideoObject | Array<s.Clip | s.VideoObject>;
  wordCount?: number | Array<number>;
  workExample?: s.CreativeWork | Array<s.CreativeWork>;
  workTranslation?: s.CreativeWork | Array<s.CreativeWork>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
}

export const HealthTopicContentSchema: z.ZodType<HealthTopicContent> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  hasHealthAspect: z.union([s.HealthAspectEnumerationSchema, z.array(s.HealthAspectEnumerationSchema)]).optional(),
  about: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  abstract: z.union([z.string(), z.array(z.string())]).optional(),
  accessMode: z.union([z.string(), z.array(z.string())]).optional(),
  accessModeSufficient: z.union([s.ItemListSchema, z.array(s.ItemListSchema)]).optional(),
  accessibilityAPI: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityControl: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityFeature: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityHazard: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilitySummary: z.union([z.string(), z.array(z.string())]).optional(),
  accountablePerson: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  acquireLicensePage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  alternativeHeadline: z.union([z.string(), z.array(z.string())]).optional(),
  archivedAt: z.union([z.union([z.string().url(), s.WebPageSchema]), z.array(z.union([z.string().url(), s.WebPageSchema]))]).optional(),
  assesses: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  associatedMedia: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  audience: z.union([s.AudienceSchema, z.array(s.AudienceSchema)]).optional(),
  audio: z.union([z.union([s.AudioObjectSchema, s.ClipSchema, s.MusicRecordingSchema]), z.array(z.union([s.AudioObjectSchema, s.ClipSchema, s.MusicRecordingSchema]))]).optional(),
  author: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  awards: z.union([z.string(), z.array(z.string())]).optional(),
  character: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  citation: z.union([z.union([s.CreativeWorkSchema, z.string()]), z.array(z.union([s.CreativeWorkSchema, z.string()]))]).optional(),
  comment: z.union([s.CommentSchema, z.array(s.CommentSchema)]).optional(),
  commentCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  conditionsOfAccess: z.union([z.string(), z.array(z.string())]).optional(),
  contentLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  contentRating: z.union([z.union([s.RatingSchema, z.string()]), z.array(z.union([s.RatingSchema, z.string()]))]).optional(),
  contentReferenceTime: z.union([z.string(), z.array(z.string())]).optional(),
  contributor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  copyrightHolder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  copyrightNotice: z.union([z.string(), z.array(z.string())]).optional(),
  copyrightYear: z.union([z.number(), z.array(z.number())]).optional(),
  correction: z.union([z.union([s.CorrectionCommentSchema, z.string(), z.string().url()]), z.array(z.union([s.CorrectionCommentSchema, z.string(), z.string().url()]))]).optional(),
  countryOfOrigin: z.union([s.CountrySchema, z.array(s.CountrySchema)]).optional(),
  creativeWorkStatus: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  creator: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  creditText: z.union([z.string(), z.array(z.string())]).optional(),
  dateCreated: z.union([z.string(), z.array(z.string())]).optional(),
  dateModified: z.union([z.string(), z.array(z.string())]).optional(),
  datePublished: z.union([z.string(), z.array(z.string())]).optional(),
  digitalSourceType: z.union([s.IPTCDigitalSourceEnumerationSchema, z.array(s.IPTCDigitalSourceEnumerationSchema)]).optional(),
  discussionUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  displayLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  editEIDR: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  editor: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  educationalAlignment: z.union([s.AlignmentObjectSchema, z.array(s.AlignmentObjectSchema)]).optional(),
  educationalLevel: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  educationalUse: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  encoding: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  encodingFormat: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  encodings: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  exampleOfWork: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  expires: z.union([z.string(), z.array(z.string())]).optional(),
  fileFormat: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  funder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  genre: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  hasPart: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  headline: z.union([z.string(), z.array(z.string())]).optional(),
  inLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  interactionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  interactivityType: z.union([z.string(), z.array(z.string())]).optional(),
  interpretedAsClaim: z.union([s.ClaimSchema, z.array(s.ClaimSchema)]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  isBasedOn: z.union([z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]))]).optional(),
  isBasedOnUrl: z.union([z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]))]).optional(),
  isFamilyFriendly: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  isPartOf: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  learningResourceType: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  license: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  locationCreated: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  mainEntity: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  maintainer: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  material: z.union([z.union([s.ProductSchema, z.string(), z.string().url()]), z.array(z.union([s.ProductSchema, z.string(), z.string().url()]))]).optional(),
  materialExtent: z.union([z.union([s.QuantitativeValueSchema, z.string()]), z.array(z.union([s.QuantitativeValueSchema, z.string()]))]).optional(),
  mentions: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  offers: z.union([z.union([s.DemandSchema, s.OfferSchema]), z.array(z.union([s.DemandSchema, s.OfferSchema]))]).optional(),
  pattern: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  position: z.union([z.union([z.number().int(), z.string()]), z.array(z.union([z.number().int(), z.string()]))]).optional(),
  producer: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  provider: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  publication: z.union([s.PublicationEventSchema, z.array(s.PublicationEventSchema)]).optional(),
  publisher: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  publisherImprint: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  publishingPrinciples: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  recordedAt: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  releasedEvent: z.union([s.PublicationEventSchema, z.array(s.PublicationEventSchema)]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  schemaVersion: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  sdDatePublished: z.union([z.string(), z.array(z.string())]).optional(),
  sdLicense: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  sdPublisher: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  size: z.union([z.union([s.DefinedTermSchema, s.QuantitativeValueSchema, s.SizeSpecificationSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, s.QuantitativeValueSchema, s.SizeSpecificationSchema, z.string()]))]).optional(),
  sourceOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  spatial: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  spatialCoverage: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  sponsor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  teaches: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  temporal: z.union([z.string(), z.array(z.string())]).optional(),
  temporalCoverage: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  text: z.union([z.string(), z.array(z.string())]).optional(),
  thumbnail: z.union([s.ImageObjectSchema, z.array(s.ImageObjectSchema)]).optional(),
  thumbnailUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  timeRequired: z.union([s.DurationSchema, z.array(s.DurationSchema)]).optional(),
  translationOfWork: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  translator: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  typicalAgeRange: z.union([z.string(), z.array(z.string())]).optional(),
  usageInfo: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  version: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  video: z.union([z.union([s.ClipSchema, s.VideoObjectSchema]), z.array(z.union([s.ClipSchema, s.VideoObjectSchema]))]).optional(),
  wordCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  workExample: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  workTranslation: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface HighSchool {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  alumni?: s.Person | Array<s.Person>;
  openingHours?: string | Array<string>;
  additionalProperty?: s.PropertyValue | Array<s.PropertyValue>;
  address?: s.PostalAddress | string | Array<s.PostalAddress | string>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  amenityFeature?: s.LocationFeatureSpecification | Array<s.LocationFeatureSpecification>;
  branchCode?: string | Array<string>;
  containedIn?: s.Place | Array<s.Place>;
  containedInPlace?: s.Place | Array<s.Place>;
  containsPlace?: s.Place | Array<s.Place>;
  event?: s.Event | Array<s.Event>;
  events?: s.Event | Array<s.Event>;
  faxNumber?: string | Array<string>;
  geo?: s.GeoCoordinates | s.GeoShape | Array<s.GeoCoordinates | s.GeoShape>;
  geoContains?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCoveredBy?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCovers?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCrosses?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoDisjoint?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoEquals?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoIntersects?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoOverlaps?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoTouches?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoWithin?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  globalLocationNumber?: string | Array<string>;
  hasCertification?: s.Certification | Array<s.Certification>;
  hasDriveThroughService?: boolean | Array<boolean>;
  hasGS1DigitalLink?: string | Array<string>;
  hasMap?: s.Map | string | Array<s.Map | string>;
  isAccessibleForFree?: boolean | Array<boolean>;
  isicV4?: string | Array<string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  latitude?: number | string | Array<number | string>;
  logo?: s.ImageObject | string | Array<s.ImageObject | string>;
  longitude?: number | string | Array<number | string>;
  map?: string | Array<string>;
  maps?: string | Array<string>;
  maximumAttendeeCapacity?: number | Array<number>;
  openingHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  photo?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  photos?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  publicAccess?: boolean | Array<boolean>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  slogan?: string | Array<string>;
  smokingAllowed?: boolean | Array<boolean>;
  specialOpeningHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  telephone?: string | Array<string>;
  tourBookingPage?: string | Array<string>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
  acceptedPaymentMethod?: s.LoanOrCredit | s.PaymentMethod | string | Array<s.LoanOrCredit | s.PaymentMethod | string>;
  actionableFeedbackPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  agentInteractionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  areaServed?: s.AdministrativeArea | s.GeoShape | s.Place | string | Array<s.AdministrativeArea | s.GeoShape | s.Place | string>;
  award?: string | Array<string>;
  awards?: string | Array<string>;
  brand?: s.Brand | s.Organization | Array<s.Brand | s.Organization>;
  companyRegistration?: s.Certification | Array<s.Certification>;
  contactPoint?: s.ContactPoint | Array<s.ContactPoint>;
  contactPoints?: s.ContactPoint | Array<s.ContactPoint>;
  correctionsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  department?: s.Organization | Array<s.Organization>;
  dissolutionDate?: string | Array<string>;
  diversityPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  diversityStaffingReport?: s.Article | string | Array<s.Article | string>;
  duns?: string | Array<string>;
  email?: string | Array<string>;
  employee?: s.Person | Array<s.Person>;
  employees?: s.Person | Array<s.Person>;
  ethicsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  founder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  founders?: s.Person | Array<s.Person>;
  foundingDate?: string | Array<string>;
  foundingLocation?: s.Place | Array<s.Place>;
  funder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  funding?: s.Grant | Array<s.Grant>;
  hasCredential?: s.Credential | Array<s.Credential>;
  hasMemberProgram?: s.MemberProgram | Array<s.MemberProgram>;
  hasMerchantReturnPolicy?: s.MerchantReturnPolicy | Array<s.MerchantReturnPolicy>;
  hasOfferCatalog?: s.OfferCatalog | Array<s.OfferCatalog>;
  hasPOS?: s.Place | Array<s.Place>;
  hasShippingService?: s.ShippingService | Array<s.ShippingService>;
  interactionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  iso6523Code?: string | Array<string>;
  knowsAbout?: string | s.Thing | Array<string | s.Thing>;
  knowsLanguage?: s.Language | string | Array<s.Language | string>;
  legalAddress?: s.PostalAddress | Array<s.PostalAddress>;
  legalName?: string | Array<string>;
  legalRepresentative?: s.Person | Array<s.Person>;
  leiCode?: string | Array<string>;
  location?: s.Place | s.PostalAddress | string | s.VirtualLocation | Array<s.Place | s.PostalAddress | string | s.VirtualLocation>;
  makesOffer?: s.Offer | Array<s.Offer>;
  member?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  memberOf?: s.MemberProgramTier | s.Organization | s.ProgramMembership | Array<s.MemberProgramTier | s.Organization | s.ProgramMembership>;
  members?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  naics?: string | Array<string>;
  nonprofitStatus?: s.NonprofitType | Array<s.NonprofitType>;
  numberOfEmployees?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  ownershipFundingInfo?: s.AboutPage | s.CreativeWork | string | Array<s.AboutPage | s.CreativeWork | string>;
  owns?: s.Thing | Array<s.Thing>;
  parentOrganization?: s.Organization | Array<s.Organization>;
  publishingPrinciples?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  seeks?: s.Demand | Array<s.Demand>;
  serviceArea?: s.AdministrativeArea | s.GeoShape | s.Place | Array<s.AdministrativeArea | s.GeoShape | s.Place>;
  skills?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  sponsor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  subOrganization?: s.Organization | Array<s.Organization>;
  taxID?: string | Array<string>;
  unnamedSourcesPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  vatID?: string | Array<string>;
}

export const HighSchoolSchema: z.ZodType<HighSchool> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  alumni: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  openingHours: z.union([z.string(), z.array(z.string())]).optional(),
  additionalProperty: z.union([s.PropertyValueSchema, z.array(s.PropertyValueSchema)]).optional(),
  address: z.union([z.union([s.PostalAddressSchema, z.string()]), z.array(z.union([s.PostalAddressSchema, z.string()]))]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  amenityFeature: z.union([s.LocationFeatureSpecificationSchema, z.array(s.LocationFeatureSpecificationSchema)]).optional(),
  branchCode: z.union([z.string(), z.array(z.string())]).optional(),
  containedIn: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containedInPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containsPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  event: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  events: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  faxNumber: z.union([z.string(), z.array(z.string())]).optional(),
  geo: z.union([z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]), z.array(z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]))]).optional(),
  geoContains: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCoveredBy: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCovers: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCrosses: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoDisjoint: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoEquals: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoIntersects: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoOverlaps: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoTouches: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoWithin: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  globalLocationNumber: z.union([z.string(), z.array(z.string())]).optional(),
  hasCertification: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  hasDriveThroughService: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  hasGS1DigitalLink: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  hasMap: z.union([z.union([s.MapSchema, z.string().url()]), z.array(z.union([s.MapSchema, z.string().url()]))]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  isicV4: z.union([z.string(), z.array(z.string())]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  latitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  logo: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  longitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  map: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maps: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maximumAttendeeCapacity: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  openingHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  photo: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  photos: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  publicAccess: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  slogan: z.union([z.string(), z.array(z.string())]).optional(),
  smokingAllowed: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  specialOpeningHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  telephone: z.union([z.string(), z.array(z.string())]).optional(),
  tourBookingPage: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  acceptedPaymentMethod: z.union([z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]), z.array(z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]))]).optional(),
  actionableFeedbackPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  agentInteractionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  areaServed: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  awards: z.union([z.string(), z.array(z.string())]).optional(),
  brand: z.union([z.union([s.BrandSchema, s.OrganizationSchema]), z.array(z.union([s.BrandSchema, s.OrganizationSchema]))]).optional(),
  companyRegistration: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  contactPoint: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  contactPoints: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  correctionsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  department: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  dissolutionDate: z.union([z.string(), z.array(z.string())]).optional(),
  diversityPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  diversityStaffingReport: z.union([z.union([s.ArticleSchema, z.string().url()]), z.array(z.union([s.ArticleSchema, z.string().url()]))]).optional(),
  duns: z.union([z.string(), z.array(z.string())]).optional(),
  email: z.union([z.string(), z.array(z.string())]).optional(),
  employee: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  employees: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  ethicsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  founder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  founders: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  foundingDate: z.union([z.string(), z.array(z.string())]).optional(),
  foundingLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  funder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  hasCredential: z.union([s.CredentialSchema, z.array(s.CredentialSchema)]).optional(),
  hasMemberProgram: z.union([s.MemberProgramSchema, z.array(s.MemberProgramSchema)]).optional(),
  hasMerchantReturnPolicy: z.union([s.MerchantReturnPolicySchema, z.array(s.MerchantReturnPolicySchema)]).optional(),
  hasOfferCatalog: z.union([s.OfferCatalogSchema, z.array(s.OfferCatalogSchema)]).optional(),
  hasPOS: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  hasShippingService: z.union([s.ShippingServiceSchema, z.array(s.ShippingServiceSchema)]).optional(),
  interactionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  iso6523Code: z.union([z.string(), z.array(z.string())]).optional(),
  knowsAbout: z.union([z.union([z.string(), s.ThingSchema, z.string().url()]), z.array(z.union([z.string(), s.ThingSchema, z.string().url()]))]).optional(),
  knowsLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  legalAddress: z.union([s.PostalAddressSchema, z.array(s.PostalAddressSchema)]).optional(),
  legalName: z.union([z.string(), z.array(z.string())]).optional(),
  legalRepresentative: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  leiCode: z.union([z.string(), z.array(z.string())]).optional(),
  location: z.union([z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]), z.array(z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]))]).optional(),
  makesOffer: z.union([s.OfferSchema, z.array(s.OfferSchema)]).optional(),
  member: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  memberOf: z.union([z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]), z.array(z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]))]).optional(),
  members: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  naics: z.union([z.string(), z.array(z.string())]).optional(),
  nonprofitStatus: z.union([s.NonprofitTypeSchema, z.array(s.NonprofitTypeSchema)]).optional(),
  numberOfEmployees: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  ownershipFundingInfo: z.union([z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]), z.array(z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]))]).optional(),
  owns: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  parentOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  publishingPrinciples: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  seeks: z.union([s.DemandSchema, z.array(s.DemandSchema)]).optional(),
  serviceArea: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]))]).optional(),
  skills: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  sponsor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  subOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  taxID: z.union([z.string(), z.array(z.string())]).optional(),
  unnamedSourcesPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  vatID: z.union([z.string(), z.array(z.string())]).optional(),
}));

export interface HinduTemple {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  openingHours?: string | Array<string>;
  additionalProperty?: s.PropertyValue | Array<s.PropertyValue>;
  address?: s.PostalAddress | string | Array<s.PostalAddress | string>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  amenityFeature?: s.LocationFeatureSpecification | Array<s.LocationFeatureSpecification>;
  branchCode?: string | Array<string>;
  containedIn?: s.Place | Array<s.Place>;
  containedInPlace?: s.Place | Array<s.Place>;
  containsPlace?: s.Place | Array<s.Place>;
  event?: s.Event | Array<s.Event>;
  events?: s.Event | Array<s.Event>;
  faxNumber?: string | Array<string>;
  geo?: s.GeoCoordinates | s.GeoShape | Array<s.GeoCoordinates | s.GeoShape>;
  geoContains?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCoveredBy?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCovers?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCrosses?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoDisjoint?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoEquals?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoIntersects?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoOverlaps?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoTouches?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoWithin?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  globalLocationNumber?: string | Array<string>;
  hasCertification?: s.Certification | Array<s.Certification>;
  hasDriveThroughService?: boolean | Array<boolean>;
  hasGS1DigitalLink?: string | Array<string>;
  hasMap?: s.Map | string | Array<s.Map | string>;
  isAccessibleForFree?: boolean | Array<boolean>;
  isicV4?: string | Array<string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  latitude?: number | string | Array<number | string>;
  logo?: s.ImageObject | string | Array<s.ImageObject | string>;
  longitude?: number | string | Array<number | string>;
  map?: string | Array<string>;
  maps?: string | Array<string>;
  maximumAttendeeCapacity?: number | Array<number>;
  openingHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  photo?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  photos?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  publicAccess?: boolean | Array<boolean>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  slogan?: string | Array<string>;
  smokingAllowed?: boolean | Array<boolean>;
  specialOpeningHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  telephone?: string | Array<string>;
  tourBookingPage?: string | Array<string>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
}

export const HinduTempleSchema: z.ZodType<HinduTemple> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  openingHours: z.union([z.string(), z.array(z.string())]).optional(),
  additionalProperty: z.union([s.PropertyValueSchema, z.array(s.PropertyValueSchema)]).optional(),
  address: z.union([z.union([s.PostalAddressSchema, z.string()]), z.array(z.union([s.PostalAddressSchema, z.string()]))]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  amenityFeature: z.union([s.LocationFeatureSpecificationSchema, z.array(s.LocationFeatureSpecificationSchema)]).optional(),
  branchCode: z.union([z.string(), z.array(z.string())]).optional(),
  containedIn: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containedInPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containsPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  event: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  events: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  faxNumber: z.union([z.string(), z.array(z.string())]).optional(),
  geo: z.union([z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]), z.array(z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]))]).optional(),
  geoContains: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCoveredBy: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCovers: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCrosses: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoDisjoint: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoEquals: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoIntersects: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoOverlaps: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoTouches: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoWithin: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  globalLocationNumber: z.union([z.string(), z.array(z.string())]).optional(),
  hasCertification: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  hasDriveThroughService: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  hasGS1DigitalLink: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  hasMap: z.union([z.union([s.MapSchema, z.string().url()]), z.array(z.union([s.MapSchema, z.string().url()]))]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  isicV4: z.union([z.string(), z.array(z.string())]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  latitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  logo: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  longitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  map: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maps: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maximumAttendeeCapacity: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  openingHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  photo: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  photos: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  publicAccess: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  slogan: z.union([z.string(), z.array(z.string())]).optional(),
  smokingAllowed: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  specialOpeningHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  telephone: z.union([z.string(), z.array(z.string())]).optional(),
  tourBookingPage: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface HobbyShop {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  branchOf?: s.Organization | Array<s.Organization>;
  currenciesAccepted?: string | Array<string>;
  floorLevel?: string | Array<string>;
  openingHours?: string | Array<string>;
  paymentAccepted?: string | Array<string>;
  priceRange?: string | Array<string>;
  acceptedPaymentMethod?: s.LoanOrCredit | s.PaymentMethod | string | Array<s.LoanOrCredit | s.PaymentMethod | string>;
  actionableFeedbackPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  address?: s.PostalAddress | string | Array<s.PostalAddress | string>;
  agentInteractionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  alumni?: s.Person | Array<s.Person>;
  areaServed?: s.AdministrativeArea | s.GeoShape | s.Place | string | Array<s.AdministrativeArea | s.GeoShape | s.Place | string>;
  award?: string | Array<string>;
  awards?: string | Array<string>;
  brand?: s.Brand | s.Organization | Array<s.Brand | s.Organization>;
  companyRegistration?: s.Certification | Array<s.Certification>;
  contactPoint?: s.ContactPoint | Array<s.ContactPoint>;
  contactPoints?: s.ContactPoint | Array<s.ContactPoint>;
  correctionsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  department?: s.Organization | Array<s.Organization>;
  dissolutionDate?: string | Array<string>;
  diversityPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  diversityStaffingReport?: s.Article | string | Array<s.Article | string>;
  duns?: string | Array<string>;
  email?: string | Array<string>;
  employee?: s.Person | Array<s.Person>;
  employees?: s.Person | Array<s.Person>;
  ethicsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  event?: s.Event | Array<s.Event>;
  events?: s.Event | Array<s.Event>;
  faxNumber?: string | Array<string>;
  founder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  founders?: s.Person | Array<s.Person>;
  foundingDate?: string | Array<string>;
  foundingLocation?: s.Place | Array<s.Place>;
  funder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  funding?: s.Grant | Array<s.Grant>;
  globalLocationNumber?: string | Array<string>;
  hasCertification?: s.Certification | Array<s.Certification>;
  hasCredential?: s.Credential | Array<s.Credential>;
  hasGS1DigitalLink?: string | Array<string>;
  hasMemberProgram?: s.MemberProgram | Array<s.MemberProgram>;
  hasMerchantReturnPolicy?: s.MerchantReturnPolicy | Array<s.MerchantReturnPolicy>;
  hasOfferCatalog?: s.OfferCatalog | Array<s.OfferCatalog>;
  hasPOS?: s.Place | Array<s.Place>;
  hasShippingService?: s.ShippingService | Array<s.ShippingService>;
  interactionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  isicV4?: string | Array<string>;
  iso6523Code?: string | Array<string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  knowsAbout?: string | s.Thing | Array<string | s.Thing>;
  knowsLanguage?: s.Language | string | Array<s.Language | string>;
  legalAddress?: s.PostalAddress | Array<s.PostalAddress>;
  legalName?: string | Array<string>;
  legalRepresentative?: s.Person | Array<s.Person>;
  leiCode?: string | Array<string>;
  location?: s.Place | s.PostalAddress | string | s.VirtualLocation | Array<s.Place | s.PostalAddress | string | s.VirtualLocation>;
  logo?: s.ImageObject | string | Array<s.ImageObject | string>;
  makesOffer?: s.Offer | Array<s.Offer>;
  member?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  memberOf?: s.MemberProgramTier | s.Organization | s.ProgramMembership | Array<s.MemberProgramTier | s.Organization | s.ProgramMembership>;
  members?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  naics?: string | Array<string>;
  nonprofitStatus?: s.NonprofitType | Array<s.NonprofitType>;
  numberOfEmployees?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  ownershipFundingInfo?: s.AboutPage | s.CreativeWork | string | Array<s.AboutPage | s.CreativeWork | string>;
  owns?: s.Thing | Array<s.Thing>;
  parentOrganization?: s.Organization | Array<s.Organization>;
  publishingPrinciples?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  seeks?: s.Demand | Array<s.Demand>;
  serviceArea?: s.AdministrativeArea | s.GeoShape | s.Place | Array<s.AdministrativeArea | s.GeoShape | s.Place>;
  skills?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  slogan?: string | Array<string>;
  sponsor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  subOrganization?: s.Organization | Array<s.Organization>;
  taxID?: string | Array<string>;
  telephone?: string | Array<string>;
  unnamedSourcesPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  vatID?: string | Array<string>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
  additionalProperty?: s.PropertyValue | Array<s.PropertyValue>;
  amenityFeature?: s.LocationFeatureSpecification | Array<s.LocationFeatureSpecification>;
  branchCode?: string | Array<string>;
  containedIn?: s.Place | Array<s.Place>;
  containedInPlace?: s.Place | Array<s.Place>;
  containsPlace?: s.Place | Array<s.Place>;
  geo?: s.GeoCoordinates | s.GeoShape | Array<s.GeoCoordinates | s.GeoShape>;
  geoContains?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCoveredBy?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCovers?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCrosses?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoDisjoint?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoEquals?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoIntersects?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoOverlaps?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoTouches?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoWithin?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  hasDriveThroughService?: boolean | Array<boolean>;
  hasMap?: s.Map | string | Array<s.Map | string>;
  isAccessibleForFree?: boolean | Array<boolean>;
  latitude?: number | string | Array<number | string>;
  longitude?: number | string | Array<number | string>;
  map?: string | Array<string>;
  maps?: string | Array<string>;
  maximumAttendeeCapacity?: number | Array<number>;
  openingHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  photo?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  photos?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  publicAccess?: boolean | Array<boolean>;
  smokingAllowed?: boolean | Array<boolean>;
  specialOpeningHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  tourBookingPage?: string | Array<string>;
}

export const HobbyShopSchema: z.ZodType<HobbyShop> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  branchOf: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  currenciesAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  floorLevel: z.union([z.string(), z.array(z.string())]).optional(),
  openingHours: z.union([z.string(), z.array(z.string())]).optional(),
  paymentAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  priceRange: z.union([z.string(), z.array(z.string())]).optional(),
  acceptedPaymentMethod: z.union([z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]), z.array(z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]))]).optional(),
  actionableFeedbackPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  address: z.union([z.union([s.PostalAddressSchema, z.string()]), z.array(z.union([s.PostalAddressSchema, z.string()]))]).optional(),
  agentInteractionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  alumni: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  areaServed: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  awards: z.union([z.string(), z.array(z.string())]).optional(),
  brand: z.union([z.union([s.BrandSchema, s.OrganizationSchema]), z.array(z.union([s.BrandSchema, s.OrganizationSchema]))]).optional(),
  companyRegistration: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  contactPoint: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  contactPoints: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  correctionsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  department: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  dissolutionDate: z.union([z.string(), z.array(z.string())]).optional(),
  diversityPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  diversityStaffingReport: z.union([z.union([s.ArticleSchema, z.string().url()]), z.array(z.union([s.ArticleSchema, z.string().url()]))]).optional(),
  duns: z.union([z.string(), z.array(z.string())]).optional(),
  email: z.union([z.string(), z.array(z.string())]).optional(),
  employee: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  employees: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  ethicsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  event: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  events: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  faxNumber: z.union([z.string(), z.array(z.string())]).optional(),
  founder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  founders: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  foundingDate: z.union([z.string(), z.array(z.string())]).optional(),
  foundingLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  funder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  globalLocationNumber: z.union([z.string(), z.array(z.string())]).optional(),
  hasCertification: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  hasCredential: z.union([s.CredentialSchema, z.array(s.CredentialSchema)]).optional(),
  hasGS1DigitalLink: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  hasMemberProgram: z.union([s.MemberProgramSchema, z.array(s.MemberProgramSchema)]).optional(),
  hasMerchantReturnPolicy: z.union([s.MerchantReturnPolicySchema, z.array(s.MerchantReturnPolicySchema)]).optional(),
  hasOfferCatalog: z.union([s.OfferCatalogSchema, z.array(s.OfferCatalogSchema)]).optional(),
  hasPOS: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  hasShippingService: z.union([s.ShippingServiceSchema, z.array(s.ShippingServiceSchema)]).optional(),
  interactionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  isicV4: z.union([z.string(), z.array(z.string())]).optional(),
  iso6523Code: z.union([z.string(), z.array(z.string())]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  knowsAbout: z.union([z.union([z.string(), s.ThingSchema, z.string().url()]), z.array(z.union([z.string(), s.ThingSchema, z.string().url()]))]).optional(),
  knowsLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  legalAddress: z.union([s.PostalAddressSchema, z.array(s.PostalAddressSchema)]).optional(),
  legalName: z.union([z.string(), z.array(z.string())]).optional(),
  legalRepresentative: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  leiCode: z.union([z.string(), z.array(z.string())]).optional(),
  location: z.union([z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]), z.array(z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]))]).optional(),
  logo: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  makesOffer: z.union([s.OfferSchema, z.array(s.OfferSchema)]).optional(),
  member: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  memberOf: z.union([z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]), z.array(z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]))]).optional(),
  members: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  naics: z.union([z.string(), z.array(z.string())]).optional(),
  nonprofitStatus: z.union([s.NonprofitTypeSchema, z.array(s.NonprofitTypeSchema)]).optional(),
  numberOfEmployees: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  ownershipFundingInfo: z.union([z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]), z.array(z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]))]).optional(),
  owns: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  parentOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  publishingPrinciples: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  seeks: z.union([s.DemandSchema, z.array(s.DemandSchema)]).optional(),
  serviceArea: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]))]).optional(),
  skills: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  slogan: z.union([z.string(), z.array(z.string())]).optional(),
  sponsor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  subOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  taxID: z.union([z.string(), z.array(z.string())]).optional(),
  telephone: z.union([z.string(), z.array(z.string())]).optional(),
  unnamedSourcesPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  vatID: z.union([z.string(), z.array(z.string())]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  additionalProperty: z.union([s.PropertyValueSchema, z.array(s.PropertyValueSchema)]).optional(),
  amenityFeature: z.union([s.LocationFeatureSpecificationSchema, z.array(s.LocationFeatureSpecificationSchema)]).optional(),
  branchCode: z.union([z.string(), z.array(z.string())]).optional(),
  containedIn: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containedInPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containsPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  geo: z.union([z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]), z.array(z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]))]).optional(),
  geoContains: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCoveredBy: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCovers: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCrosses: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoDisjoint: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoEquals: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoIntersects: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoOverlaps: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoTouches: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoWithin: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  hasDriveThroughService: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  hasMap: z.union([z.union([s.MapSchema, z.string().url()]), z.array(z.union([s.MapSchema, z.string().url()]))]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  latitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  longitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  map: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maps: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maximumAttendeeCapacity: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  openingHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  photo: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  photos: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  publicAccess: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  smokingAllowed: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  specialOpeningHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  tourBookingPage: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface HomeAndConstructionBusiness {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  branchOf?: s.Organization | Array<s.Organization>;
  currenciesAccepted?: string | Array<string>;
  floorLevel?: string | Array<string>;
  openingHours?: string | Array<string>;
  paymentAccepted?: string | Array<string>;
  priceRange?: string | Array<string>;
  acceptedPaymentMethod?: s.LoanOrCredit | s.PaymentMethod | string | Array<s.LoanOrCredit | s.PaymentMethod | string>;
  actionableFeedbackPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  address?: s.PostalAddress | string | Array<s.PostalAddress | string>;
  agentInteractionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  alumni?: s.Person | Array<s.Person>;
  areaServed?: s.AdministrativeArea | s.GeoShape | s.Place | string | Array<s.AdministrativeArea | s.GeoShape | s.Place | string>;
  award?: string | Array<string>;
  awards?: string | Array<string>;
  brand?: s.Brand | s.Organization | Array<s.Brand | s.Organization>;
  companyRegistration?: s.Certification | Array<s.Certification>;
  contactPoint?: s.ContactPoint | Array<s.ContactPoint>;
  contactPoints?: s.ContactPoint | Array<s.ContactPoint>;
  correctionsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  department?: s.Organization | Array<s.Organization>;
  dissolutionDate?: string | Array<string>;
  diversityPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  diversityStaffingReport?: s.Article | string | Array<s.Article | string>;
  duns?: string | Array<string>;
  email?: string | Array<string>;
  employee?: s.Person | Array<s.Person>;
  employees?: s.Person | Array<s.Person>;
  ethicsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  event?: s.Event | Array<s.Event>;
  events?: s.Event | Array<s.Event>;
  faxNumber?: string | Array<string>;
  founder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  founders?: s.Person | Array<s.Person>;
  foundingDate?: string | Array<string>;
  foundingLocation?: s.Place | Array<s.Place>;
  funder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  funding?: s.Grant | Array<s.Grant>;
  globalLocationNumber?: string | Array<string>;
  hasCertification?: s.Certification | Array<s.Certification>;
  hasCredential?: s.Credential | Array<s.Credential>;
  hasGS1DigitalLink?: string | Array<string>;
  hasMemberProgram?: s.MemberProgram | Array<s.MemberProgram>;
  hasMerchantReturnPolicy?: s.MerchantReturnPolicy | Array<s.MerchantReturnPolicy>;
  hasOfferCatalog?: s.OfferCatalog | Array<s.OfferCatalog>;
  hasPOS?: s.Place | Array<s.Place>;
  hasShippingService?: s.ShippingService | Array<s.ShippingService>;
  interactionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  isicV4?: string | Array<string>;
  iso6523Code?: string | Array<string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  knowsAbout?: string | s.Thing | Array<string | s.Thing>;
  knowsLanguage?: s.Language | string | Array<s.Language | string>;
  legalAddress?: s.PostalAddress | Array<s.PostalAddress>;
  legalName?: string | Array<string>;
  legalRepresentative?: s.Person | Array<s.Person>;
  leiCode?: string | Array<string>;
  location?: s.Place | s.PostalAddress | string | s.VirtualLocation | Array<s.Place | s.PostalAddress | string | s.VirtualLocation>;
  logo?: s.ImageObject | string | Array<s.ImageObject | string>;
  makesOffer?: s.Offer | Array<s.Offer>;
  member?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  memberOf?: s.MemberProgramTier | s.Organization | s.ProgramMembership | Array<s.MemberProgramTier | s.Organization | s.ProgramMembership>;
  members?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  naics?: string | Array<string>;
  nonprofitStatus?: s.NonprofitType | Array<s.NonprofitType>;
  numberOfEmployees?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  ownershipFundingInfo?: s.AboutPage | s.CreativeWork | string | Array<s.AboutPage | s.CreativeWork | string>;
  owns?: s.Thing | Array<s.Thing>;
  parentOrganization?: s.Organization | Array<s.Organization>;
  publishingPrinciples?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  seeks?: s.Demand | Array<s.Demand>;
  serviceArea?: s.AdministrativeArea | s.GeoShape | s.Place | Array<s.AdministrativeArea | s.GeoShape | s.Place>;
  skills?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  slogan?: string | Array<string>;
  sponsor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  subOrganization?: s.Organization | Array<s.Organization>;
  taxID?: string | Array<string>;
  telephone?: string | Array<string>;
  unnamedSourcesPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  vatID?: string | Array<string>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
  additionalProperty?: s.PropertyValue | Array<s.PropertyValue>;
  amenityFeature?: s.LocationFeatureSpecification | Array<s.LocationFeatureSpecification>;
  branchCode?: string | Array<string>;
  containedIn?: s.Place | Array<s.Place>;
  containedInPlace?: s.Place | Array<s.Place>;
  containsPlace?: s.Place | Array<s.Place>;
  geo?: s.GeoCoordinates | s.GeoShape | Array<s.GeoCoordinates | s.GeoShape>;
  geoContains?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCoveredBy?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCovers?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCrosses?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoDisjoint?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoEquals?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoIntersects?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoOverlaps?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoTouches?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoWithin?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  hasDriveThroughService?: boolean | Array<boolean>;
  hasMap?: s.Map | string | Array<s.Map | string>;
  isAccessibleForFree?: boolean | Array<boolean>;
  latitude?: number | string | Array<number | string>;
  longitude?: number | string | Array<number | string>;
  map?: string | Array<string>;
  maps?: string | Array<string>;
  maximumAttendeeCapacity?: number | Array<number>;
  openingHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  photo?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  photos?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  publicAccess?: boolean | Array<boolean>;
  smokingAllowed?: boolean | Array<boolean>;
  specialOpeningHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  tourBookingPage?: string | Array<string>;
}

export const HomeAndConstructionBusinessSchema: z.ZodType<HomeAndConstructionBusiness> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  branchOf: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  currenciesAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  floorLevel: z.union([z.string(), z.array(z.string())]).optional(),
  openingHours: z.union([z.string(), z.array(z.string())]).optional(),
  paymentAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  priceRange: z.union([z.string(), z.array(z.string())]).optional(),
  acceptedPaymentMethod: z.union([z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]), z.array(z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]))]).optional(),
  actionableFeedbackPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  address: z.union([z.union([s.PostalAddressSchema, z.string()]), z.array(z.union([s.PostalAddressSchema, z.string()]))]).optional(),
  agentInteractionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  alumni: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  areaServed: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  awards: z.union([z.string(), z.array(z.string())]).optional(),
  brand: z.union([z.union([s.BrandSchema, s.OrganizationSchema]), z.array(z.union([s.BrandSchema, s.OrganizationSchema]))]).optional(),
  companyRegistration: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  contactPoint: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  contactPoints: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  correctionsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  department: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  dissolutionDate: z.union([z.string(), z.array(z.string())]).optional(),
  diversityPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  diversityStaffingReport: z.union([z.union([s.ArticleSchema, z.string().url()]), z.array(z.union([s.ArticleSchema, z.string().url()]))]).optional(),
  duns: z.union([z.string(), z.array(z.string())]).optional(),
  email: z.union([z.string(), z.array(z.string())]).optional(),
  employee: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  employees: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  ethicsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  event: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  events: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  faxNumber: z.union([z.string(), z.array(z.string())]).optional(),
  founder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  founders: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  foundingDate: z.union([z.string(), z.array(z.string())]).optional(),
  foundingLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  funder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  globalLocationNumber: z.union([z.string(), z.array(z.string())]).optional(),
  hasCertification: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  hasCredential: z.union([s.CredentialSchema, z.array(s.CredentialSchema)]).optional(),
  hasGS1DigitalLink: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  hasMemberProgram: z.union([s.MemberProgramSchema, z.array(s.MemberProgramSchema)]).optional(),
  hasMerchantReturnPolicy: z.union([s.MerchantReturnPolicySchema, z.array(s.MerchantReturnPolicySchema)]).optional(),
  hasOfferCatalog: z.union([s.OfferCatalogSchema, z.array(s.OfferCatalogSchema)]).optional(),
  hasPOS: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  hasShippingService: z.union([s.ShippingServiceSchema, z.array(s.ShippingServiceSchema)]).optional(),
  interactionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  isicV4: z.union([z.string(), z.array(z.string())]).optional(),
  iso6523Code: z.union([z.string(), z.array(z.string())]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  knowsAbout: z.union([z.union([z.string(), s.ThingSchema, z.string().url()]), z.array(z.union([z.string(), s.ThingSchema, z.string().url()]))]).optional(),
  knowsLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  legalAddress: z.union([s.PostalAddressSchema, z.array(s.PostalAddressSchema)]).optional(),
  legalName: z.union([z.string(), z.array(z.string())]).optional(),
  legalRepresentative: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  leiCode: z.union([z.string(), z.array(z.string())]).optional(),
  location: z.union([z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]), z.array(z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]))]).optional(),
  logo: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  makesOffer: z.union([s.OfferSchema, z.array(s.OfferSchema)]).optional(),
  member: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  memberOf: z.union([z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]), z.array(z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]))]).optional(),
  members: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  naics: z.union([z.string(), z.array(z.string())]).optional(),
  nonprofitStatus: z.union([s.NonprofitTypeSchema, z.array(s.NonprofitTypeSchema)]).optional(),
  numberOfEmployees: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  ownershipFundingInfo: z.union([z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]), z.array(z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]))]).optional(),
  owns: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  parentOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  publishingPrinciples: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  seeks: z.union([s.DemandSchema, z.array(s.DemandSchema)]).optional(),
  serviceArea: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]))]).optional(),
  skills: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  slogan: z.union([z.string(), z.array(z.string())]).optional(),
  sponsor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  subOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  taxID: z.union([z.string(), z.array(z.string())]).optional(),
  telephone: z.union([z.string(), z.array(z.string())]).optional(),
  unnamedSourcesPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  vatID: z.union([z.string(), z.array(z.string())]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  additionalProperty: z.union([s.PropertyValueSchema, z.array(s.PropertyValueSchema)]).optional(),
  amenityFeature: z.union([s.LocationFeatureSpecificationSchema, z.array(s.LocationFeatureSpecificationSchema)]).optional(),
  branchCode: z.union([z.string(), z.array(z.string())]).optional(),
  containedIn: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containedInPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containsPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  geo: z.union([z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]), z.array(z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]))]).optional(),
  geoContains: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCoveredBy: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCovers: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCrosses: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoDisjoint: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoEquals: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoIntersects: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoOverlaps: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoTouches: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoWithin: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  hasDriveThroughService: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  hasMap: z.union([z.union([s.MapSchema, z.string().url()]), z.array(z.union([s.MapSchema, z.string().url()]))]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  latitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  longitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  map: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maps: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maximumAttendeeCapacity: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  openingHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  photo: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  photos: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  publicAccess: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  smokingAllowed: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  specialOpeningHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  tourBookingPage: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface HomeGoodsStore {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  branchOf?: s.Organization | Array<s.Organization>;
  currenciesAccepted?: string | Array<string>;
  floorLevel?: string | Array<string>;
  openingHours?: string | Array<string>;
  paymentAccepted?: string | Array<string>;
  priceRange?: string | Array<string>;
  acceptedPaymentMethod?: s.LoanOrCredit | s.PaymentMethod | string | Array<s.LoanOrCredit | s.PaymentMethod | string>;
  actionableFeedbackPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  address?: s.PostalAddress | string | Array<s.PostalAddress | string>;
  agentInteractionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  alumni?: s.Person | Array<s.Person>;
  areaServed?: s.AdministrativeArea | s.GeoShape | s.Place | string | Array<s.AdministrativeArea | s.GeoShape | s.Place | string>;
  award?: string | Array<string>;
  awards?: string | Array<string>;
  brand?: s.Brand | s.Organization | Array<s.Brand | s.Organization>;
  companyRegistration?: s.Certification | Array<s.Certification>;
  contactPoint?: s.ContactPoint | Array<s.ContactPoint>;
  contactPoints?: s.ContactPoint | Array<s.ContactPoint>;
  correctionsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  department?: s.Organization | Array<s.Organization>;
  dissolutionDate?: string | Array<string>;
  diversityPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  diversityStaffingReport?: s.Article | string | Array<s.Article | string>;
  duns?: string | Array<string>;
  email?: string | Array<string>;
  employee?: s.Person | Array<s.Person>;
  employees?: s.Person | Array<s.Person>;
  ethicsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  event?: s.Event | Array<s.Event>;
  events?: s.Event | Array<s.Event>;
  faxNumber?: string | Array<string>;
  founder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  founders?: s.Person | Array<s.Person>;
  foundingDate?: string | Array<string>;
  foundingLocation?: s.Place | Array<s.Place>;
  funder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  funding?: s.Grant | Array<s.Grant>;
  globalLocationNumber?: string | Array<string>;
  hasCertification?: s.Certification | Array<s.Certification>;
  hasCredential?: s.Credential | Array<s.Credential>;
  hasGS1DigitalLink?: string | Array<string>;
  hasMemberProgram?: s.MemberProgram | Array<s.MemberProgram>;
  hasMerchantReturnPolicy?: s.MerchantReturnPolicy | Array<s.MerchantReturnPolicy>;
  hasOfferCatalog?: s.OfferCatalog | Array<s.OfferCatalog>;
  hasPOS?: s.Place | Array<s.Place>;
  hasShippingService?: s.ShippingService | Array<s.ShippingService>;
  interactionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  isicV4?: string | Array<string>;
  iso6523Code?: string | Array<string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  knowsAbout?: string | s.Thing | Array<string | s.Thing>;
  knowsLanguage?: s.Language | string | Array<s.Language | string>;
  legalAddress?: s.PostalAddress | Array<s.PostalAddress>;
  legalName?: string | Array<string>;
  legalRepresentative?: s.Person | Array<s.Person>;
  leiCode?: string | Array<string>;
  location?: s.Place | s.PostalAddress | string | s.VirtualLocation | Array<s.Place | s.PostalAddress | string | s.VirtualLocation>;
  logo?: s.ImageObject | string | Array<s.ImageObject | string>;
  makesOffer?: s.Offer | Array<s.Offer>;
  member?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  memberOf?: s.MemberProgramTier | s.Organization | s.ProgramMembership | Array<s.MemberProgramTier | s.Organization | s.ProgramMembership>;
  members?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  naics?: string | Array<string>;
  nonprofitStatus?: s.NonprofitType | Array<s.NonprofitType>;
  numberOfEmployees?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  ownershipFundingInfo?: s.AboutPage | s.CreativeWork | string | Array<s.AboutPage | s.CreativeWork | string>;
  owns?: s.Thing | Array<s.Thing>;
  parentOrganization?: s.Organization | Array<s.Organization>;
  publishingPrinciples?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  seeks?: s.Demand | Array<s.Demand>;
  serviceArea?: s.AdministrativeArea | s.GeoShape | s.Place | Array<s.AdministrativeArea | s.GeoShape | s.Place>;
  skills?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  slogan?: string | Array<string>;
  sponsor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  subOrganization?: s.Organization | Array<s.Organization>;
  taxID?: string | Array<string>;
  telephone?: string | Array<string>;
  unnamedSourcesPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  vatID?: string | Array<string>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
  additionalProperty?: s.PropertyValue | Array<s.PropertyValue>;
  amenityFeature?: s.LocationFeatureSpecification | Array<s.LocationFeatureSpecification>;
  branchCode?: string | Array<string>;
  containedIn?: s.Place | Array<s.Place>;
  containedInPlace?: s.Place | Array<s.Place>;
  containsPlace?: s.Place | Array<s.Place>;
  geo?: s.GeoCoordinates | s.GeoShape | Array<s.GeoCoordinates | s.GeoShape>;
  geoContains?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCoveredBy?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCovers?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCrosses?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoDisjoint?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoEquals?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoIntersects?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoOverlaps?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoTouches?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoWithin?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  hasDriveThroughService?: boolean | Array<boolean>;
  hasMap?: s.Map | string | Array<s.Map | string>;
  isAccessibleForFree?: boolean | Array<boolean>;
  latitude?: number | string | Array<number | string>;
  longitude?: number | string | Array<number | string>;
  map?: string | Array<string>;
  maps?: string | Array<string>;
  maximumAttendeeCapacity?: number | Array<number>;
  openingHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  photo?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  photos?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  publicAccess?: boolean | Array<boolean>;
  smokingAllowed?: boolean | Array<boolean>;
  specialOpeningHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  tourBookingPage?: string | Array<string>;
}

export const HomeGoodsStoreSchema: z.ZodType<HomeGoodsStore> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  branchOf: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  currenciesAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  floorLevel: z.union([z.string(), z.array(z.string())]).optional(),
  openingHours: z.union([z.string(), z.array(z.string())]).optional(),
  paymentAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  priceRange: z.union([z.string(), z.array(z.string())]).optional(),
  acceptedPaymentMethod: z.union([z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]), z.array(z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]))]).optional(),
  actionableFeedbackPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  address: z.union([z.union([s.PostalAddressSchema, z.string()]), z.array(z.union([s.PostalAddressSchema, z.string()]))]).optional(),
  agentInteractionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  alumni: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  areaServed: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  awards: z.union([z.string(), z.array(z.string())]).optional(),
  brand: z.union([z.union([s.BrandSchema, s.OrganizationSchema]), z.array(z.union([s.BrandSchema, s.OrganizationSchema]))]).optional(),
  companyRegistration: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  contactPoint: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  contactPoints: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  correctionsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  department: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  dissolutionDate: z.union([z.string(), z.array(z.string())]).optional(),
  diversityPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  diversityStaffingReport: z.union([z.union([s.ArticleSchema, z.string().url()]), z.array(z.union([s.ArticleSchema, z.string().url()]))]).optional(),
  duns: z.union([z.string(), z.array(z.string())]).optional(),
  email: z.union([z.string(), z.array(z.string())]).optional(),
  employee: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  employees: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  ethicsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  event: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  events: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  faxNumber: z.union([z.string(), z.array(z.string())]).optional(),
  founder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  founders: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  foundingDate: z.union([z.string(), z.array(z.string())]).optional(),
  foundingLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  funder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  globalLocationNumber: z.union([z.string(), z.array(z.string())]).optional(),
  hasCertification: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  hasCredential: z.union([s.CredentialSchema, z.array(s.CredentialSchema)]).optional(),
  hasGS1DigitalLink: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  hasMemberProgram: z.union([s.MemberProgramSchema, z.array(s.MemberProgramSchema)]).optional(),
  hasMerchantReturnPolicy: z.union([s.MerchantReturnPolicySchema, z.array(s.MerchantReturnPolicySchema)]).optional(),
  hasOfferCatalog: z.union([s.OfferCatalogSchema, z.array(s.OfferCatalogSchema)]).optional(),
  hasPOS: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  hasShippingService: z.union([s.ShippingServiceSchema, z.array(s.ShippingServiceSchema)]).optional(),
  interactionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  isicV4: z.union([z.string(), z.array(z.string())]).optional(),
  iso6523Code: z.union([z.string(), z.array(z.string())]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  knowsAbout: z.union([z.union([z.string(), s.ThingSchema, z.string().url()]), z.array(z.union([z.string(), s.ThingSchema, z.string().url()]))]).optional(),
  knowsLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  legalAddress: z.union([s.PostalAddressSchema, z.array(s.PostalAddressSchema)]).optional(),
  legalName: z.union([z.string(), z.array(z.string())]).optional(),
  legalRepresentative: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  leiCode: z.union([z.string(), z.array(z.string())]).optional(),
  location: z.union([z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]), z.array(z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]))]).optional(),
  logo: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  makesOffer: z.union([s.OfferSchema, z.array(s.OfferSchema)]).optional(),
  member: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  memberOf: z.union([z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]), z.array(z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]))]).optional(),
  members: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  naics: z.union([z.string(), z.array(z.string())]).optional(),
  nonprofitStatus: z.union([s.NonprofitTypeSchema, z.array(s.NonprofitTypeSchema)]).optional(),
  numberOfEmployees: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  ownershipFundingInfo: z.union([z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]), z.array(z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]))]).optional(),
  owns: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  parentOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  publishingPrinciples: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  seeks: z.union([s.DemandSchema, z.array(s.DemandSchema)]).optional(),
  serviceArea: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]))]).optional(),
  skills: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  slogan: z.union([z.string(), z.array(z.string())]).optional(),
  sponsor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  subOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  taxID: z.union([z.string(), z.array(z.string())]).optional(),
  telephone: z.union([z.string(), z.array(z.string())]).optional(),
  unnamedSourcesPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  vatID: z.union([z.string(), z.array(z.string())]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  additionalProperty: z.union([s.PropertyValueSchema, z.array(s.PropertyValueSchema)]).optional(),
  amenityFeature: z.union([s.LocationFeatureSpecificationSchema, z.array(s.LocationFeatureSpecificationSchema)]).optional(),
  branchCode: z.union([z.string(), z.array(z.string())]).optional(),
  containedIn: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containedInPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containsPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  geo: z.union([z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]), z.array(z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]))]).optional(),
  geoContains: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCoveredBy: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCovers: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCrosses: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoDisjoint: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoEquals: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoIntersects: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoOverlaps: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoTouches: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoWithin: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  hasDriveThroughService: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  hasMap: z.union([z.union([s.MapSchema, z.string().url()]), z.array(z.union([s.MapSchema, z.string().url()]))]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  latitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  longitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  map: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maps: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maximumAttendeeCapacity: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  openingHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  photo: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  photos: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  publicAccess: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  smokingAllowed: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  specialOpeningHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  tourBookingPage: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface Hospital {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  availableService?: s.MedicalProcedure | s.MedicalTest | s.MedicalTherapy | Array<s.MedicalProcedure | s.MedicalTest | s.MedicalTherapy>;
  healthcareReportingData?: s.CDCPMDRecord | s.Dataset | Array<s.CDCPMDRecord | s.Dataset>;
  medicalSpecialty?: s.MedicalSpecialty | Array<s.MedicalSpecialty>;
  openingHours?: string | Array<string>;
  additionalProperty?: s.PropertyValue | Array<s.PropertyValue>;
  address?: s.PostalAddress | string | Array<s.PostalAddress | string>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  amenityFeature?: s.LocationFeatureSpecification | Array<s.LocationFeatureSpecification>;
  branchCode?: string | Array<string>;
  containedIn?: s.Place | Array<s.Place>;
  containedInPlace?: s.Place | Array<s.Place>;
  containsPlace?: s.Place | Array<s.Place>;
  event?: s.Event | Array<s.Event>;
  events?: s.Event | Array<s.Event>;
  faxNumber?: string | Array<string>;
  geo?: s.GeoCoordinates | s.GeoShape | Array<s.GeoCoordinates | s.GeoShape>;
  geoContains?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCoveredBy?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCovers?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCrosses?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoDisjoint?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoEquals?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoIntersects?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoOverlaps?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoTouches?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoWithin?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  globalLocationNumber?: string | Array<string>;
  hasCertification?: s.Certification | Array<s.Certification>;
  hasDriveThroughService?: boolean | Array<boolean>;
  hasGS1DigitalLink?: string | Array<string>;
  hasMap?: s.Map | string | Array<s.Map | string>;
  isAccessibleForFree?: boolean | Array<boolean>;
  isicV4?: string | Array<string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  latitude?: number | string | Array<number | string>;
  logo?: s.ImageObject | string | Array<s.ImageObject | string>;
  longitude?: number | string | Array<number | string>;
  map?: string | Array<string>;
  maps?: string | Array<string>;
  maximumAttendeeCapacity?: number | Array<number>;
  openingHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  photo?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  photos?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  publicAccess?: boolean | Array<boolean>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  slogan?: string | Array<string>;
  smokingAllowed?: boolean | Array<boolean>;
  specialOpeningHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  telephone?: string | Array<string>;
  tourBookingPage?: string | Array<string>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
  branchOf?: s.Organization | Array<s.Organization>;
  currenciesAccepted?: string | Array<string>;
  floorLevel?: string | Array<string>;
  paymentAccepted?: string | Array<string>;
  priceRange?: string | Array<string>;
  acceptedPaymentMethod?: s.LoanOrCredit | s.PaymentMethod | string | Array<s.LoanOrCredit | s.PaymentMethod | string>;
  actionableFeedbackPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  agentInteractionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  alumni?: s.Person | Array<s.Person>;
  areaServed?: s.AdministrativeArea | s.GeoShape | s.Place | string | Array<s.AdministrativeArea | s.GeoShape | s.Place | string>;
  award?: string | Array<string>;
  awards?: string | Array<string>;
  brand?: s.Brand | s.Organization | Array<s.Brand | s.Organization>;
  companyRegistration?: s.Certification | Array<s.Certification>;
  contactPoint?: s.ContactPoint | Array<s.ContactPoint>;
  contactPoints?: s.ContactPoint | Array<s.ContactPoint>;
  correctionsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  department?: s.Organization | Array<s.Organization>;
  dissolutionDate?: string | Array<string>;
  diversityPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  diversityStaffingReport?: s.Article | string | Array<s.Article | string>;
  duns?: string | Array<string>;
  email?: string | Array<string>;
  employee?: s.Person | Array<s.Person>;
  employees?: s.Person | Array<s.Person>;
  ethicsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  founder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  founders?: s.Person | Array<s.Person>;
  foundingDate?: string | Array<string>;
  foundingLocation?: s.Place | Array<s.Place>;
  funder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  funding?: s.Grant | Array<s.Grant>;
  hasCredential?: s.Credential | Array<s.Credential>;
  hasMemberProgram?: s.MemberProgram | Array<s.MemberProgram>;
  hasMerchantReturnPolicy?: s.MerchantReturnPolicy | Array<s.MerchantReturnPolicy>;
  hasOfferCatalog?: s.OfferCatalog | Array<s.OfferCatalog>;
  hasPOS?: s.Place | Array<s.Place>;
  hasShippingService?: s.ShippingService | Array<s.ShippingService>;
  interactionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  iso6523Code?: string | Array<string>;
  knowsAbout?: string | s.Thing | Array<string | s.Thing>;
  knowsLanguage?: s.Language | string | Array<s.Language | string>;
  legalAddress?: s.PostalAddress | Array<s.PostalAddress>;
  legalName?: string | Array<string>;
  legalRepresentative?: s.Person | Array<s.Person>;
  leiCode?: string | Array<string>;
  location?: s.Place | s.PostalAddress | string | s.VirtualLocation | Array<s.Place | s.PostalAddress | string | s.VirtualLocation>;
  makesOffer?: s.Offer | Array<s.Offer>;
  member?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  memberOf?: s.MemberProgramTier | s.Organization | s.ProgramMembership | Array<s.MemberProgramTier | s.Organization | s.ProgramMembership>;
  members?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  naics?: string | Array<string>;
  nonprofitStatus?: s.NonprofitType | Array<s.NonprofitType>;
  numberOfEmployees?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  ownershipFundingInfo?: s.AboutPage | s.CreativeWork | string | Array<s.AboutPage | s.CreativeWork | string>;
  owns?: s.Thing | Array<s.Thing>;
  parentOrganization?: s.Organization | Array<s.Organization>;
  publishingPrinciples?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  seeks?: s.Demand | Array<s.Demand>;
  serviceArea?: s.AdministrativeArea | s.GeoShape | s.Place | Array<s.AdministrativeArea | s.GeoShape | s.Place>;
  skills?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  sponsor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  subOrganization?: s.Organization | Array<s.Organization>;
  taxID?: string | Array<string>;
  unnamedSourcesPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  vatID?: string | Array<string>;
  healthPlanNetworkId?: string | Array<string>;
  isAcceptingNewPatients?: boolean | Array<boolean>;
}

export const HospitalSchema: z.ZodType<Hospital> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  availableService: z.union([z.union([s.MedicalProcedureSchema, s.MedicalTestSchema, s.MedicalTherapySchema]), z.array(z.union([s.MedicalProcedureSchema, s.MedicalTestSchema, s.MedicalTherapySchema]))]).optional(),
  healthcareReportingData: z.union([z.union([s.CDCPMDRecordSchema, s.DatasetSchema]), z.array(z.union([s.CDCPMDRecordSchema, s.DatasetSchema]))]).optional(),
  medicalSpecialty: z.union([s.MedicalSpecialtySchema, z.array(s.MedicalSpecialtySchema)]).optional(),
  openingHours: z.union([z.string(), z.array(z.string())]).optional(),
  additionalProperty: z.union([s.PropertyValueSchema, z.array(s.PropertyValueSchema)]).optional(),
  address: z.union([z.union([s.PostalAddressSchema, z.string()]), z.array(z.union([s.PostalAddressSchema, z.string()]))]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  amenityFeature: z.union([s.LocationFeatureSpecificationSchema, z.array(s.LocationFeatureSpecificationSchema)]).optional(),
  branchCode: z.union([z.string(), z.array(z.string())]).optional(),
  containedIn: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containedInPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containsPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  event: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  events: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  faxNumber: z.union([z.string(), z.array(z.string())]).optional(),
  geo: z.union([z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]), z.array(z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]))]).optional(),
  geoContains: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCoveredBy: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCovers: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCrosses: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoDisjoint: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoEquals: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoIntersects: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoOverlaps: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoTouches: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoWithin: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  globalLocationNumber: z.union([z.string(), z.array(z.string())]).optional(),
  hasCertification: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  hasDriveThroughService: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  hasGS1DigitalLink: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  hasMap: z.union([z.union([s.MapSchema, z.string().url()]), z.array(z.union([s.MapSchema, z.string().url()]))]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  isicV4: z.union([z.string(), z.array(z.string())]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  latitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  logo: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  longitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  map: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maps: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maximumAttendeeCapacity: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  openingHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  photo: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  photos: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  publicAccess: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  slogan: z.union([z.string(), z.array(z.string())]).optional(),
  smokingAllowed: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  specialOpeningHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  telephone: z.union([z.string(), z.array(z.string())]).optional(),
  tourBookingPage: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  branchOf: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  currenciesAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  floorLevel: z.union([z.string(), z.array(z.string())]).optional(),
  paymentAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  priceRange: z.union([z.string(), z.array(z.string())]).optional(),
  acceptedPaymentMethod: z.union([z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]), z.array(z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]))]).optional(),
  actionableFeedbackPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  agentInteractionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  alumni: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  areaServed: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  awards: z.union([z.string(), z.array(z.string())]).optional(),
  brand: z.union([z.union([s.BrandSchema, s.OrganizationSchema]), z.array(z.union([s.BrandSchema, s.OrganizationSchema]))]).optional(),
  companyRegistration: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  contactPoint: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  contactPoints: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  correctionsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  department: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  dissolutionDate: z.union([z.string(), z.array(z.string())]).optional(),
  diversityPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  diversityStaffingReport: z.union([z.union([s.ArticleSchema, z.string().url()]), z.array(z.union([s.ArticleSchema, z.string().url()]))]).optional(),
  duns: z.union([z.string(), z.array(z.string())]).optional(),
  email: z.union([z.string(), z.array(z.string())]).optional(),
  employee: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  employees: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  ethicsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  founder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  founders: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  foundingDate: z.union([z.string(), z.array(z.string())]).optional(),
  foundingLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  funder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  hasCredential: z.union([s.CredentialSchema, z.array(s.CredentialSchema)]).optional(),
  hasMemberProgram: z.union([s.MemberProgramSchema, z.array(s.MemberProgramSchema)]).optional(),
  hasMerchantReturnPolicy: z.union([s.MerchantReturnPolicySchema, z.array(s.MerchantReturnPolicySchema)]).optional(),
  hasOfferCatalog: z.union([s.OfferCatalogSchema, z.array(s.OfferCatalogSchema)]).optional(),
  hasPOS: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  hasShippingService: z.union([s.ShippingServiceSchema, z.array(s.ShippingServiceSchema)]).optional(),
  interactionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  iso6523Code: z.union([z.string(), z.array(z.string())]).optional(),
  knowsAbout: z.union([z.union([z.string(), s.ThingSchema, z.string().url()]), z.array(z.union([z.string(), s.ThingSchema, z.string().url()]))]).optional(),
  knowsLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  legalAddress: z.union([s.PostalAddressSchema, z.array(s.PostalAddressSchema)]).optional(),
  legalName: z.union([z.string(), z.array(z.string())]).optional(),
  legalRepresentative: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  leiCode: z.union([z.string(), z.array(z.string())]).optional(),
  location: z.union([z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]), z.array(z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]))]).optional(),
  makesOffer: z.union([s.OfferSchema, z.array(s.OfferSchema)]).optional(),
  member: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  memberOf: z.union([z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]), z.array(z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]))]).optional(),
  members: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  naics: z.union([z.string(), z.array(z.string())]).optional(),
  nonprofitStatus: z.union([s.NonprofitTypeSchema, z.array(s.NonprofitTypeSchema)]).optional(),
  numberOfEmployees: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  ownershipFundingInfo: z.union([z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]), z.array(z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]))]).optional(),
  owns: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  parentOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  publishingPrinciples: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  seeks: z.union([s.DemandSchema, z.array(s.DemandSchema)]).optional(),
  serviceArea: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]))]).optional(),
  skills: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  sponsor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  subOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  taxID: z.union([z.string(), z.array(z.string())]).optional(),
  unnamedSourcesPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  vatID: z.union([z.string(), z.array(z.string())]).optional(),
  healthPlanNetworkId: z.union([z.string(), z.array(z.string())]).optional(),
  isAcceptingNewPatients: z.union([z.boolean(), z.array(z.boolean())]).optional(),
}));

export interface Hostel {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  amenityFeature?: s.LocationFeatureSpecification | Array<s.LocationFeatureSpecification>;
  audience?: s.Audience | Array<s.Audience>;
  availableLanguage?: s.Language | string | Array<s.Language | string>;
  checkinTime?: string | Array<string>;
  checkoutTime?: string | Array<string>;
  numberOfRooms?: number | s.QuantitativeValue | Array<number | s.QuantitativeValue>;
  petsAllowed?: boolean | string | Array<boolean | string>;
  starRating?: s.Rating | Array<s.Rating>;
  branchOf?: s.Organization | Array<s.Organization>;
  currenciesAccepted?: string | Array<string>;
  floorLevel?: string | Array<string>;
  openingHours?: string | Array<string>;
  paymentAccepted?: string | Array<string>;
  priceRange?: string | Array<string>;
  acceptedPaymentMethod?: s.LoanOrCredit | s.PaymentMethod | string | Array<s.LoanOrCredit | s.PaymentMethod | string>;
  actionableFeedbackPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  address?: s.PostalAddress | string | Array<s.PostalAddress | string>;
  agentInteractionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  alumni?: s.Person | Array<s.Person>;
  areaServed?: s.AdministrativeArea | s.GeoShape | s.Place | string | Array<s.AdministrativeArea | s.GeoShape | s.Place | string>;
  award?: string | Array<string>;
  awards?: string | Array<string>;
  brand?: s.Brand | s.Organization | Array<s.Brand | s.Organization>;
  companyRegistration?: s.Certification | Array<s.Certification>;
  contactPoint?: s.ContactPoint | Array<s.ContactPoint>;
  contactPoints?: s.ContactPoint | Array<s.ContactPoint>;
  correctionsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  department?: s.Organization | Array<s.Organization>;
  dissolutionDate?: string | Array<string>;
  diversityPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  diversityStaffingReport?: s.Article | string | Array<s.Article | string>;
  duns?: string | Array<string>;
  email?: string | Array<string>;
  employee?: s.Person | Array<s.Person>;
  employees?: s.Person | Array<s.Person>;
  ethicsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  event?: s.Event | Array<s.Event>;
  events?: s.Event | Array<s.Event>;
  faxNumber?: string | Array<string>;
  founder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  founders?: s.Person | Array<s.Person>;
  foundingDate?: string | Array<string>;
  foundingLocation?: s.Place | Array<s.Place>;
  funder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  funding?: s.Grant | Array<s.Grant>;
  globalLocationNumber?: string | Array<string>;
  hasCertification?: s.Certification | Array<s.Certification>;
  hasCredential?: s.Credential | Array<s.Credential>;
  hasGS1DigitalLink?: string | Array<string>;
  hasMemberProgram?: s.MemberProgram | Array<s.MemberProgram>;
  hasMerchantReturnPolicy?: s.MerchantReturnPolicy | Array<s.MerchantReturnPolicy>;
  hasOfferCatalog?: s.OfferCatalog | Array<s.OfferCatalog>;
  hasPOS?: s.Place | Array<s.Place>;
  hasShippingService?: s.ShippingService | Array<s.ShippingService>;
  interactionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  isicV4?: string | Array<string>;
  iso6523Code?: string | Array<string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  knowsAbout?: string | s.Thing | Array<string | s.Thing>;
  knowsLanguage?: s.Language | string | Array<s.Language | string>;
  legalAddress?: s.PostalAddress | Array<s.PostalAddress>;
  legalName?: string | Array<string>;
  legalRepresentative?: s.Person | Array<s.Person>;
  leiCode?: string | Array<string>;
  location?: s.Place | s.PostalAddress | string | s.VirtualLocation | Array<s.Place | s.PostalAddress | string | s.VirtualLocation>;
  logo?: s.ImageObject | string | Array<s.ImageObject | string>;
  makesOffer?: s.Offer | Array<s.Offer>;
  member?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  memberOf?: s.MemberProgramTier | s.Organization | s.ProgramMembership | Array<s.MemberProgramTier | s.Organization | s.ProgramMembership>;
  members?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  naics?: string | Array<string>;
  nonprofitStatus?: s.NonprofitType | Array<s.NonprofitType>;
  numberOfEmployees?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  ownershipFundingInfo?: s.AboutPage | s.CreativeWork | string | Array<s.AboutPage | s.CreativeWork | string>;
  owns?: s.Thing | Array<s.Thing>;
  parentOrganization?: s.Organization | Array<s.Organization>;
  publishingPrinciples?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  seeks?: s.Demand | Array<s.Demand>;
  serviceArea?: s.AdministrativeArea | s.GeoShape | s.Place | Array<s.AdministrativeArea | s.GeoShape | s.Place>;
  skills?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  slogan?: string | Array<string>;
  sponsor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  subOrganization?: s.Organization | Array<s.Organization>;
  taxID?: string | Array<string>;
  telephone?: string | Array<string>;
  unnamedSourcesPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  vatID?: string | Array<string>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
  additionalProperty?: s.PropertyValue | Array<s.PropertyValue>;
  branchCode?: string | Array<string>;
  containedIn?: s.Place | Array<s.Place>;
  containedInPlace?: s.Place | Array<s.Place>;
  containsPlace?: s.Place | Array<s.Place>;
  geo?: s.GeoCoordinates | s.GeoShape | Array<s.GeoCoordinates | s.GeoShape>;
  geoContains?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCoveredBy?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCovers?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCrosses?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoDisjoint?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoEquals?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoIntersects?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoOverlaps?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoTouches?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoWithin?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  hasDriveThroughService?: boolean | Array<boolean>;
  hasMap?: s.Map | string | Array<s.Map | string>;
  isAccessibleForFree?: boolean | Array<boolean>;
  latitude?: number | string | Array<number | string>;
  longitude?: number | string | Array<number | string>;
  map?: string | Array<string>;
  maps?: string | Array<string>;
  maximumAttendeeCapacity?: number | Array<number>;
  openingHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  photo?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  photos?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  publicAccess?: boolean | Array<boolean>;
  smokingAllowed?: boolean | Array<boolean>;
  specialOpeningHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  tourBookingPage?: string | Array<string>;
}

export const HostelSchema: z.ZodType<Hostel> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  amenityFeature: z.union([s.LocationFeatureSpecificationSchema, z.array(s.LocationFeatureSpecificationSchema)]).optional(),
  audience: z.union([s.AudienceSchema, z.array(s.AudienceSchema)]).optional(),
  availableLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  checkinTime: z.union([z.string(), z.array(z.string())]).optional(),
  checkoutTime: z.union([z.string(), z.array(z.string())]).optional(),
  numberOfRooms: z.union([z.union([z.number(), s.QuantitativeValueSchema]), z.array(z.union([z.number(), s.QuantitativeValueSchema]))]).optional(),
  petsAllowed: z.union([z.union([z.boolean(), z.string()]), z.array(z.union([z.boolean(), z.string()]))]).optional(),
  starRating: z.union([s.RatingSchema, z.array(s.RatingSchema)]).optional(),
  branchOf: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  currenciesAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  floorLevel: z.union([z.string(), z.array(z.string())]).optional(),
  openingHours: z.union([z.string(), z.array(z.string())]).optional(),
  paymentAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  priceRange: z.union([z.string(), z.array(z.string())]).optional(),
  acceptedPaymentMethod: z.union([z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]), z.array(z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]))]).optional(),
  actionableFeedbackPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  address: z.union([z.union([s.PostalAddressSchema, z.string()]), z.array(z.union([s.PostalAddressSchema, z.string()]))]).optional(),
  agentInteractionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  alumni: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  areaServed: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  awards: z.union([z.string(), z.array(z.string())]).optional(),
  brand: z.union([z.union([s.BrandSchema, s.OrganizationSchema]), z.array(z.union([s.BrandSchema, s.OrganizationSchema]))]).optional(),
  companyRegistration: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  contactPoint: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  contactPoints: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  correctionsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  department: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  dissolutionDate: z.union([z.string(), z.array(z.string())]).optional(),
  diversityPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  diversityStaffingReport: z.union([z.union([s.ArticleSchema, z.string().url()]), z.array(z.union([s.ArticleSchema, z.string().url()]))]).optional(),
  duns: z.union([z.string(), z.array(z.string())]).optional(),
  email: z.union([z.string(), z.array(z.string())]).optional(),
  employee: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  employees: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  ethicsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  event: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  events: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  faxNumber: z.union([z.string(), z.array(z.string())]).optional(),
  founder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  founders: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  foundingDate: z.union([z.string(), z.array(z.string())]).optional(),
  foundingLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  funder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  globalLocationNumber: z.union([z.string(), z.array(z.string())]).optional(),
  hasCertification: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  hasCredential: z.union([s.CredentialSchema, z.array(s.CredentialSchema)]).optional(),
  hasGS1DigitalLink: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  hasMemberProgram: z.union([s.MemberProgramSchema, z.array(s.MemberProgramSchema)]).optional(),
  hasMerchantReturnPolicy: z.union([s.MerchantReturnPolicySchema, z.array(s.MerchantReturnPolicySchema)]).optional(),
  hasOfferCatalog: z.union([s.OfferCatalogSchema, z.array(s.OfferCatalogSchema)]).optional(),
  hasPOS: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  hasShippingService: z.union([s.ShippingServiceSchema, z.array(s.ShippingServiceSchema)]).optional(),
  interactionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  isicV4: z.union([z.string(), z.array(z.string())]).optional(),
  iso6523Code: z.union([z.string(), z.array(z.string())]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  knowsAbout: z.union([z.union([z.string(), s.ThingSchema, z.string().url()]), z.array(z.union([z.string(), s.ThingSchema, z.string().url()]))]).optional(),
  knowsLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  legalAddress: z.union([s.PostalAddressSchema, z.array(s.PostalAddressSchema)]).optional(),
  legalName: z.union([z.string(), z.array(z.string())]).optional(),
  legalRepresentative: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  leiCode: z.union([z.string(), z.array(z.string())]).optional(),
  location: z.union([z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]), z.array(z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]))]).optional(),
  logo: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  makesOffer: z.union([s.OfferSchema, z.array(s.OfferSchema)]).optional(),
  member: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  memberOf: z.union([z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]), z.array(z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]))]).optional(),
  members: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  naics: z.union([z.string(), z.array(z.string())]).optional(),
  nonprofitStatus: z.union([s.NonprofitTypeSchema, z.array(s.NonprofitTypeSchema)]).optional(),
  numberOfEmployees: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  ownershipFundingInfo: z.union([z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]), z.array(z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]))]).optional(),
  owns: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  parentOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  publishingPrinciples: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  seeks: z.union([s.DemandSchema, z.array(s.DemandSchema)]).optional(),
  serviceArea: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]))]).optional(),
  skills: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  slogan: z.union([z.string(), z.array(z.string())]).optional(),
  sponsor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  subOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  taxID: z.union([z.string(), z.array(z.string())]).optional(),
  telephone: z.union([z.string(), z.array(z.string())]).optional(),
  unnamedSourcesPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  vatID: z.union([z.string(), z.array(z.string())]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  additionalProperty: z.union([s.PropertyValueSchema, z.array(s.PropertyValueSchema)]).optional(),
  branchCode: z.union([z.string(), z.array(z.string())]).optional(),
  containedIn: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containedInPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containsPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  geo: z.union([z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]), z.array(z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]))]).optional(),
  geoContains: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCoveredBy: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCovers: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCrosses: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoDisjoint: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoEquals: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoIntersects: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoOverlaps: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoTouches: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoWithin: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  hasDriveThroughService: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  hasMap: z.union([z.union([s.MapSchema, z.string().url()]), z.array(z.union([s.MapSchema, z.string().url()]))]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  latitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  longitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  map: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maps: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maximumAttendeeCapacity: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  openingHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  photo: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  photos: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  publicAccess: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  smokingAllowed: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  specialOpeningHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  tourBookingPage: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface Hotel {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  amenityFeature?: s.LocationFeatureSpecification | Array<s.LocationFeatureSpecification>;
  audience?: s.Audience | Array<s.Audience>;
  availableLanguage?: s.Language | string | Array<s.Language | string>;
  checkinTime?: string | Array<string>;
  checkoutTime?: string | Array<string>;
  numberOfRooms?: number | s.QuantitativeValue | Array<number | s.QuantitativeValue>;
  petsAllowed?: boolean | string | Array<boolean | string>;
  starRating?: s.Rating | Array<s.Rating>;
  branchOf?: s.Organization | Array<s.Organization>;
  currenciesAccepted?: string | Array<string>;
  floorLevel?: string | Array<string>;
  openingHours?: string | Array<string>;
  paymentAccepted?: string | Array<string>;
  priceRange?: string | Array<string>;
  acceptedPaymentMethod?: s.LoanOrCredit | s.PaymentMethod | string | Array<s.LoanOrCredit | s.PaymentMethod | string>;
  actionableFeedbackPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  address?: s.PostalAddress | string | Array<s.PostalAddress | string>;
  agentInteractionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  alumni?: s.Person | Array<s.Person>;
  areaServed?: s.AdministrativeArea | s.GeoShape | s.Place | string | Array<s.AdministrativeArea | s.GeoShape | s.Place | string>;
  award?: string | Array<string>;
  awards?: string | Array<string>;
  brand?: s.Brand | s.Organization | Array<s.Brand | s.Organization>;
  companyRegistration?: s.Certification | Array<s.Certification>;
  contactPoint?: s.ContactPoint | Array<s.ContactPoint>;
  contactPoints?: s.ContactPoint | Array<s.ContactPoint>;
  correctionsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  department?: s.Organization | Array<s.Organization>;
  dissolutionDate?: string | Array<string>;
  diversityPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  diversityStaffingReport?: s.Article | string | Array<s.Article | string>;
  duns?: string | Array<string>;
  email?: string | Array<string>;
  employee?: s.Person | Array<s.Person>;
  employees?: s.Person | Array<s.Person>;
  ethicsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  event?: s.Event | Array<s.Event>;
  events?: s.Event | Array<s.Event>;
  faxNumber?: string | Array<string>;
  founder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  founders?: s.Person | Array<s.Person>;
  foundingDate?: string | Array<string>;
  foundingLocation?: s.Place | Array<s.Place>;
  funder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  funding?: s.Grant | Array<s.Grant>;
  globalLocationNumber?: string | Array<string>;
  hasCertification?: s.Certification | Array<s.Certification>;
  hasCredential?: s.Credential | Array<s.Credential>;
  hasGS1DigitalLink?: string | Array<string>;
  hasMemberProgram?: s.MemberProgram | Array<s.MemberProgram>;
  hasMerchantReturnPolicy?: s.MerchantReturnPolicy | Array<s.MerchantReturnPolicy>;
  hasOfferCatalog?: s.OfferCatalog | Array<s.OfferCatalog>;
  hasPOS?: s.Place | Array<s.Place>;
  hasShippingService?: s.ShippingService | Array<s.ShippingService>;
  interactionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  isicV4?: string | Array<string>;
  iso6523Code?: string | Array<string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  knowsAbout?: string | s.Thing | Array<string | s.Thing>;
  knowsLanguage?: s.Language | string | Array<s.Language | string>;
  legalAddress?: s.PostalAddress | Array<s.PostalAddress>;
  legalName?: string | Array<string>;
  legalRepresentative?: s.Person | Array<s.Person>;
  leiCode?: string | Array<string>;
  location?: s.Place | s.PostalAddress | string | s.VirtualLocation | Array<s.Place | s.PostalAddress | string | s.VirtualLocation>;
  logo?: s.ImageObject | string | Array<s.ImageObject | string>;
  makesOffer?: s.Offer | Array<s.Offer>;
  member?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  memberOf?: s.MemberProgramTier | s.Organization | s.ProgramMembership | Array<s.MemberProgramTier | s.Organization | s.ProgramMembership>;
  members?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  naics?: string | Array<string>;
  nonprofitStatus?: s.NonprofitType | Array<s.NonprofitType>;
  numberOfEmployees?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  ownershipFundingInfo?: s.AboutPage | s.CreativeWork | string | Array<s.AboutPage | s.CreativeWork | string>;
  owns?: s.Thing | Array<s.Thing>;
  parentOrganization?: s.Organization | Array<s.Organization>;
  publishingPrinciples?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  seeks?: s.Demand | Array<s.Demand>;
  serviceArea?: s.AdministrativeArea | s.GeoShape | s.Place | Array<s.AdministrativeArea | s.GeoShape | s.Place>;
  skills?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  slogan?: string | Array<string>;
  sponsor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  subOrganization?: s.Organization | Array<s.Organization>;
  taxID?: string | Array<string>;
  telephone?: string | Array<string>;
  unnamedSourcesPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  vatID?: string | Array<string>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
  additionalProperty?: s.PropertyValue | Array<s.PropertyValue>;
  branchCode?: string | Array<string>;
  containedIn?: s.Place | Array<s.Place>;
  containedInPlace?: s.Place | Array<s.Place>;
  containsPlace?: s.Place | Array<s.Place>;
  geo?: s.GeoCoordinates | s.GeoShape | Array<s.GeoCoordinates | s.GeoShape>;
  geoContains?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCoveredBy?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCovers?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCrosses?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoDisjoint?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoEquals?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoIntersects?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoOverlaps?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoTouches?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoWithin?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  hasDriveThroughService?: boolean | Array<boolean>;
  hasMap?: s.Map | string | Array<s.Map | string>;
  isAccessibleForFree?: boolean | Array<boolean>;
  latitude?: number | string | Array<number | string>;
  longitude?: number | string | Array<number | string>;
  map?: string | Array<string>;
  maps?: string | Array<string>;
  maximumAttendeeCapacity?: number | Array<number>;
  openingHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  photo?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  photos?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  publicAccess?: boolean | Array<boolean>;
  smokingAllowed?: boolean | Array<boolean>;
  specialOpeningHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  tourBookingPage?: string | Array<string>;
}

export const HotelSchema: z.ZodType<Hotel> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  amenityFeature: z.union([s.LocationFeatureSpecificationSchema, z.array(s.LocationFeatureSpecificationSchema)]).optional(),
  audience: z.union([s.AudienceSchema, z.array(s.AudienceSchema)]).optional(),
  availableLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  checkinTime: z.union([z.string(), z.array(z.string())]).optional(),
  checkoutTime: z.union([z.string(), z.array(z.string())]).optional(),
  numberOfRooms: z.union([z.union([z.number(), s.QuantitativeValueSchema]), z.array(z.union([z.number(), s.QuantitativeValueSchema]))]).optional(),
  petsAllowed: z.union([z.union([z.boolean(), z.string()]), z.array(z.union([z.boolean(), z.string()]))]).optional(),
  starRating: z.union([s.RatingSchema, z.array(s.RatingSchema)]).optional(),
  branchOf: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  currenciesAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  floorLevel: z.union([z.string(), z.array(z.string())]).optional(),
  openingHours: z.union([z.string(), z.array(z.string())]).optional(),
  paymentAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  priceRange: z.union([z.string(), z.array(z.string())]).optional(),
  acceptedPaymentMethod: z.union([z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]), z.array(z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]))]).optional(),
  actionableFeedbackPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  address: z.union([z.union([s.PostalAddressSchema, z.string()]), z.array(z.union([s.PostalAddressSchema, z.string()]))]).optional(),
  agentInteractionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  alumni: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  areaServed: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  awards: z.union([z.string(), z.array(z.string())]).optional(),
  brand: z.union([z.union([s.BrandSchema, s.OrganizationSchema]), z.array(z.union([s.BrandSchema, s.OrganizationSchema]))]).optional(),
  companyRegistration: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  contactPoint: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  contactPoints: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  correctionsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  department: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  dissolutionDate: z.union([z.string(), z.array(z.string())]).optional(),
  diversityPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  diversityStaffingReport: z.union([z.union([s.ArticleSchema, z.string().url()]), z.array(z.union([s.ArticleSchema, z.string().url()]))]).optional(),
  duns: z.union([z.string(), z.array(z.string())]).optional(),
  email: z.union([z.string(), z.array(z.string())]).optional(),
  employee: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  employees: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  ethicsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  event: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  events: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  faxNumber: z.union([z.string(), z.array(z.string())]).optional(),
  founder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  founders: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  foundingDate: z.union([z.string(), z.array(z.string())]).optional(),
  foundingLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  funder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  globalLocationNumber: z.union([z.string(), z.array(z.string())]).optional(),
  hasCertification: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  hasCredential: z.union([s.CredentialSchema, z.array(s.CredentialSchema)]).optional(),
  hasGS1DigitalLink: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  hasMemberProgram: z.union([s.MemberProgramSchema, z.array(s.MemberProgramSchema)]).optional(),
  hasMerchantReturnPolicy: z.union([s.MerchantReturnPolicySchema, z.array(s.MerchantReturnPolicySchema)]).optional(),
  hasOfferCatalog: z.union([s.OfferCatalogSchema, z.array(s.OfferCatalogSchema)]).optional(),
  hasPOS: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  hasShippingService: z.union([s.ShippingServiceSchema, z.array(s.ShippingServiceSchema)]).optional(),
  interactionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  isicV4: z.union([z.string(), z.array(z.string())]).optional(),
  iso6523Code: z.union([z.string(), z.array(z.string())]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  knowsAbout: z.union([z.union([z.string(), s.ThingSchema, z.string().url()]), z.array(z.union([z.string(), s.ThingSchema, z.string().url()]))]).optional(),
  knowsLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  legalAddress: z.union([s.PostalAddressSchema, z.array(s.PostalAddressSchema)]).optional(),
  legalName: z.union([z.string(), z.array(z.string())]).optional(),
  legalRepresentative: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  leiCode: z.union([z.string(), z.array(z.string())]).optional(),
  location: z.union([z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]), z.array(z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]))]).optional(),
  logo: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  makesOffer: z.union([s.OfferSchema, z.array(s.OfferSchema)]).optional(),
  member: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  memberOf: z.union([z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]), z.array(z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]))]).optional(),
  members: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  naics: z.union([z.string(), z.array(z.string())]).optional(),
  nonprofitStatus: z.union([s.NonprofitTypeSchema, z.array(s.NonprofitTypeSchema)]).optional(),
  numberOfEmployees: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  ownershipFundingInfo: z.union([z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]), z.array(z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]))]).optional(),
  owns: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  parentOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  publishingPrinciples: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  seeks: z.union([s.DemandSchema, z.array(s.DemandSchema)]).optional(),
  serviceArea: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]))]).optional(),
  skills: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  slogan: z.union([z.string(), z.array(z.string())]).optional(),
  sponsor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  subOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  taxID: z.union([z.string(), z.array(z.string())]).optional(),
  telephone: z.union([z.string(), z.array(z.string())]).optional(),
  unnamedSourcesPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  vatID: z.union([z.string(), z.array(z.string())]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  additionalProperty: z.union([s.PropertyValueSchema, z.array(s.PropertyValueSchema)]).optional(),
  branchCode: z.union([z.string(), z.array(z.string())]).optional(),
  containedIn: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containedInPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containsPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  geo: z.union([z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]), z.array(z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]))]).optional(),
  geoContains: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCoveredBy: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCovers: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCrosses: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoDisjoint: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoEquals: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoIntersects: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoOverlaps: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoTouches: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoWithin: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  hasDriveThroughService: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  hasMap: z.union([z.union([s.MapSchema, z.string().url()]), z.array(z.union([s.MapSchema, z.string().url()]))]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  latitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  longitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  map: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maps: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maximumAttendeeCapacity: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  openingHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  photo: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  photos: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  publicAccess: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  smokingAllowed: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  specialOpeningHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  tourBookingPage: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface HotelRoom {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  bed?: s.BedDetails | s.BedType | string | Array<s.BedDetails | s.BedType | string>;
  occupancy?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  accommodationCategory?: string | Array<string>;
  accommodationFloorPlan?: s.FloorPlan | Array<s.FloorPlan>;
  amenityFeature?: s.LocationFeatureSpecification | Array<s.LocationFeatureSpecification>;
  floorLevel?: string | Array<string>;
  floorSize?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  leaseLength?: s.Duration | s.QuantitativeValue | Array<s.Duration | s.QuantitativeValue>;
  numberOfBathroomsTotal?: number | Array<number>;
  numberOfBedrooms?: number | s.QuantitativeValue | Array<number | s.QuantitativeValue>;
  numberOfFullBathrooms?: number | Array<number>;
  numberOfPartialBathrooms?: number | Array<number>;
  numberOfRooms?: number | s.QuantitativeValue | Array<number | s.QuantitativeValue>;
  permittedUsage?: string | Array<string>;
  petsAllowed?: boolean | string | Array<boolean | string>;
  tourBookingPage?: string | Array<string>;
  yearBuilt?: number | Array<number>;
  additionalProperty?: s.PropertyValue | Array<s.PropertyValue>;
  address?: s.PostalAddress | string | Array<s.PostalAddress | string>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  branchCode?: string | Array<string>;
  containedIn?: s.Place | Array<s.Place>;
  containedInPlace?: s.Place | Array<s.Place>;
  containsPlace?: s.Place | Array<s.Place>;
  event?: s.Event | Array<s.Event>;
  events?: s.Event | Array<s.Event>;
  faxNumber?: string | Array<string>;
  geo?: s.GeoCoordinates | s.GeoShape | Array<s.GeoCoordinates | s.GeoShape>;
  geoContains?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCoveredBy?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCovers?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCrosses?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoDisjoint?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoEquals?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoIntersects?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoOverlaps?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoTouches?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoWithin?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  globalLocationNumber?: string | Array<string>;
  hasCertification?: s.Certification | Array<s.Certification>;
  hasDriveThroughService?: boolean | Array<boolean>;
  hasGS1DigitalLink?: string | Array<string>;
  hasMap?: s.Map | string | Array<s.Map | string>;
  isAccessibleForFree?: boolean | Array<boolean>;
  isicV4?: string | Array<string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  latitude?: number | string | Array<number | string>;
  logo?: s.ImageObject | string | Array<s.ImageObject | string>;
  longitude?: number | string | Array<number | string>;
  map?: string | Array<string>;
  maps?: string | Array<string>;
  maximumAttendeeCapacity?: number | Array<number>;
  openingHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  photo?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  photos?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  publicAccess?: boolean | Array<boolean>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  slogan?: string | Array<string>;
  smokingAllowed?: boolean | Array<boolean>;
  specialOpeningHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  telephone?: string | Array<string>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
}

export const HotelRoomSchema: z.ZodType<HotelRoom> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  bed: z.union([z.union([s.BedDetailsSchema, s.BedTypeSchema, z.string()]), z.array(z.union([s.BedDetailsSchema, s.BedTypeSchema, z.string()]))]).optional(),
  occupancy: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  accommodationCategory: z.union([z.string(), z.array(z.string())]).optional(),
  accommodationFloorPlan: z.union([s.FloorPlanSchema, z.array(s.FloorPlanSchema)]).optional(),
  amenityFeature: z.union([s.LocationFeatureSpecificationSchema, z.array(s.LocationFeatureSpecificationSchema)]).optional(),
  floorLevel: z.union([z.string(), z.array(z.string())]).optional(),
  floorSize: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  leaseLength: z.union([z.union([s.DurationSchema, s.QuantitativeValueSchema]), z.array(z.union([s.DurationSchema, s.QuantitativeValueSchema]))]).optional(),
  numberOfBathroomsTotal: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  numberOfBedrooms: z.union([z.union([z.number(), s.QuantitativeValueSchema]), z.array(z.union([z.number(), s.QuantitativeValueSchema]))]).optional(),
  numberOfFullBathrooms: z.union([z.number(), z.array(z.number())]).optional(),
  numberOfPartialBathrooms: z.union([z.number(), z.array(z.number())]).optional(),
  numberOfRooms: z.union([z.union([z.number(), s.QuantitativeValueSchema]), z.array(z.union([z.number(), s.QuantitativeValueSchema]))]).optional(),
  permittedUsage: z.union([z.string(), z.array(z.string())]).optional(),
  petsAllowed: z.union([z.union([z.boolean(), z.string()]), z.array(z.union([z.boolean(), z.string()]))]).optional(),
  tourBookingPage: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  yearBuilt: z.union([z.number(), z.array(z.number())]).optional(),
  additionalProperty: z.union([s.PropertyValueSchema, z.array(s.PropertyValueSchema)]).optional(),
  address: z.union([z.union([s.PostalAddressSchema, z.string()]), z.array(z.union([s.PostalAddressSchema, z.string()]))]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  branchCode: z.union([z.string(), z.array(z.string())]).optional(),
  containedIn: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containedInPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containsPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  event: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  events: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  faxNumber: z.union([z.string(), z.array(z.string())]).optional(),
  geo: z.union([z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]), z.array(z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]))]).optional(),
  geoContains: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCoveredBy: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCovers: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCrosses: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoDisjoint: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoEquals: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoIntersects: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoOverlaps: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoTouches: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoWithin: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  globalLocationNumber: z.union([z.string(), z.array(z.string())]).optional(),
  hasCertification: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  hasDriveThroughService: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  hasGS1DigitalLink: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  hasMap: z.union([z.union([s.MapSchema, z.string().url()]), z.array(z.union([s.MapSchema, z.string().url()]))]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  isicV4: z.union([z.string(), z.array(z.string())]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  latitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  logo: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  longitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  map: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maps: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maximumAttendeeCapacity: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  openingHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  photo: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  photos: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  publicAccess: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  slogan: z.union([z.string(), z.array(z.string())]).optional(),
  smokingAllowed: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  specialOpeningHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  telephone: z.union([z.string(), z.array(z.string())]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface House {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  numberOfRooms?: number | s.QuantitativeValue | Array<number | s.QuantitativeValue>;
  accommodationCategory?: string | Array<string>;
  accommodationFloorPlan?: s.FloorPlan | Array<s.FloorPlan>;
  amenityFeature?: s.LocationFeatureSpecification | Array<s.LocationFeatureSpecification>;
  bed?: s.BedDetails | s.BedType | string | Array<s.BedDetails | s.BedType | string>;
  floorLevel?: string | Array<string>;
  floorSize?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  leaseLength?: s.Duration | s.QuantitativeValue | Array<s.Duration | s.QuantitativeValue>;
  numberOfBathroomsTotal?: number | Array<number>;
  numberOfBedrooms?: number | s.QuantitativeValue | Array<number | s.QuantitativeValue>;
  numberOfFullBathrooms?: number | Array<number>;
  numberOfPartialBathrooms?: number | Array<number>;
  occupancy?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  permittedUsage?: string | Array<string>;
  petsAllowed?: boolean | string | Array<boolean | string>;
  tourBookingPage?: string | Array<string>;
  yearBuilt?: number | Array<number>;
  additionalProperty?: s.PropertyValue | Array<s.PropertyValue>;
  address?: s.PostalAddress | string | Array<s.PostalAddress | string>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  branchCode?: string | Array<string>;
  containedIn?: s.Place | Array<s.Place>;
  containedInPlace?: s.Place | Array<s.Place>;
  containsPlace?: s.Place | Array<s.Place>;
  event?: s.Event | Array<s.Event>;
  events?: s.Event | Array<s.Event>;
  faxNumber?: string | Array<string>;
  geo?: s.GeoCoordinates | s.GeoShape | Array<s.GeoCoordinates | s.GeoShape>;
  geoContains?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCoveredBy?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCovers?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCrosses?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoDisjoint?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoEquals?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoIntersects?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoOverlaps?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoTouches?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoWithin?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  globalLocationNumber?: string | Array<string>;
  hasCertification?: s.Certification | Array<s.Certification>;
  hasDriveThroughService?: boolean | Array<boolean>;
  hasGS1DigitalLink?: string | Array<string>;
  hasMap?: s.Map | string | Array<s.Map | string>;
  isAccessibleForFree?: boolean | Array<boolean>;
  isicV4?: string | Array<string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  latitude?: number | string | Array<number | string>;
  logo?: s.ImageObject | string | Array<s.ImageObject | string>;
  longitude?: number | string | Array<number | string>;
  map?: string | Array<string>;
  maps?: string | Array<string>;
  maximumAttendeeCapacity?: number | Array<number>;
  openingHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  photo?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  photos?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  publicAccess?: boolean | Array<boolean>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  slogan?: string | Array<string>;
  smokingAllowed?: boolean | Array<boolean>;
  specialOpeningHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  telephone?: string | Array<string>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
}

export const HouseSchema: z.ZodType<House> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  numberOfRooms: z.union([z.union([z.number(), s.QuantitativeValueSchema]), z.array(z.union([z.number(), s.QuantitativeValueSchema]))]).optional(),
  accommodationCategory: z.union([z.string(), z.array(z.string())]).optional(),
  accommodationFloorPlan: z.union([s.FloorPlanSchema, z.array(s.FloorPlanSchema)]).optional(),
  amenityFeature: z.union([s.LocationFeatureSpecificationSchema, z.array(s.LocationFeatureSpecificationSchema)]).optional(),
  bed: z.union([z.union([s.BedDetailsSchema, s.BedTypeSchema, z.string()]), z.array(z.union([s.BedDetailsSchema, s.BedTypeSchema, z.string()]))]).optional(),
  floorLevel: z.union([z.string(), z.array(z.string())]).optional(),
  floorSize: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  leaseLength: z.union([z.union([s.DurationSchema, s.QuantitativeValueSchema]), z.array(z.union([s.DurationSchema, s.QuantitativeValueSchema]))]).optional(),
  numberOfBathroomsTotal: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  numberOfBedrooms: z.union([z.union([z.number(), s.QuantitativeValueSchema]), z.array(z.union([z.number(), s.QuantitativeValueSchema]))]).optional(),
  numberOfFullBathrooms: z.union([z.number(), z.array(z.number())]).optional(),
  numberOfPartialBathrooms: z.union([z.number(), z.array(z.number())]).optional(),
  occupancy: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  permittedUsage: z.union([z.string(), z.array(z.string())]).optional(),
  petsAllowed: z.union([z.union([z.boolean(), z.string()]), z.array(z.union([z.boolean(), z.string()]))]).optional(),
  tourBookingPage: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  yearBuilt: z.union([z.number(), z.array(z.number())]).optional(),
  additionalProperty: z.union([s.PropertyValueSchema, z.array(s.PropertyValueSchema)]).optional(),
  address: z.union([z.union([s.PostalAddressSchema, z.string()]), z.array(z.union([s.PostalAddressSchema, z.string()]))]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  branchCode: z.union([z.string(), z.array(z.string())]).optional(),
  containedIn: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containedInPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containsPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  event: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  events: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  faxNumber: z.union([z.string(), z.array(z.string())]).optional(),
  geo: z.union([z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]), z.array(z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]))]).optional(),
  geoContains: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCoveredBy: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCovers: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCrosses: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoDisjoint: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoEquals: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoIntersects: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoOverlaps: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoTouches: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoWithin: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  globalLocationNumber: z.union([z.string(), z.array(z.string())]).optional(),
  hasCertification: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  hasDriveThroughService: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  hasGS1DigitalLink: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  hasMap: z.union([z.union([s.MapSchema, z.string().url()]), z.array(z.union([s.MapSchema, z.string().url()]))]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  isicV4: z.union([z.string(), z.array(z.string())]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  latitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  logo: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  longitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  map: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maps: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maximumAttendeeCapacity: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  openingHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  photo: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  photos: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  publicAccess: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  slogan: z.union([z.string(), z.array(z.string())]).optional(),
  smokingAllowed: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  specialOpeningHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  telephone: z.union([z.string(), z.array(z.string())]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface HousePainter {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  branchOf?: s.Organization | Array<s.Organization>;
  currenciesAccepted?: string | Array<string>;
  floorLevel?: string | Array<string>;
  openingHours?: string | Array<string>;
  paymentAccepted?: string | Array<string>;
  priceRange?: string | Array<string>;
  acceptedPaymentMethod?: s.LoanOrCredit | s.PaymentMethod | string | Array<s.LoanOrCredit | s.PaymentMethod | string>;
  actionableFeedbackPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  address?: s.PostalAddress | string | Array<s.PostalAddress | string>;
  agentInteractionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  alumni?: s.Person | Array<s.Person>;
  areaServed?: s.AdministrativeArea | s.GeoShape | s.Place | string | Array<s.AdministrativeArea | s.GeoShape | s.Place | string>;
  award?: string | Array<string>;
  awards?: string | Array<string>;
  brand?: s.Brand | s.Organization | Array<s.Brand | s.Organization>;
  companyRegistration?: s.Certification | Array<s.Certification>;
  contactPoint?: s.ContactPoint | Array<s.ContactPoint>;
  contactPoints?: s.ContactPoint | Array<s.ContactPoint>;
  correctionsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  department?: s.Organization | Array<s.Organization>;
  dissolutionDate?: string | Array<string>;
  diversityPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  diversityStaffingReport?: s.Article | string | Array<s.Article | string>;
  duns?: string | Array<string>;
  email?: string | Array<string>;
  employee?: s.Person | Array<s.Person>;
  employees?: s.Person | Array<s.Person>;
  ethicsPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  event?: s.Event | Array<s.Event>;
  events?: s.Event | Array<s.Event>;
  faxNumber?: string | Array<string>;
  founder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  founders?: s.Person | Array<s.Person>;
  foundingDate?: string | Array<string>;
  foundingLocation?: s.Place | Array<s.Place>;
  funder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  funding?: s.Grant | Array<s.Grant>;
  globalLocationNumber?: string | Array<string>;
  hasCertification?: s.Certification | Array<s.Certification>;
  hasCredential?: s.Credential | Array<s.Credential>;
  hasGS1DigitalLink?: string | Array<string>;
  hasMemberProgram?: s.MemberProgram | Array<s.MemberProgram>;
  hasMerchantReturnPolicy?: s.MerchantReturnPolicy | Array<s.MerchantReturnPolicy>;
  hasOfferCatalog?: s.OfferCatalog | Array<s.OfferCatalog>;
  hasPOS?: s.Place | Array<s.Place>;
  hasShippingService?: s.ShippingService | Array<s.ShippingService>;
  interactionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  isicV4?: string | Array<string>;
  iso6523Code?: string | Array<string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  knowsAbout?: string | s.Thing | Array<string | s.Thing>;
  knowsLanguage?: s.Language | string | Array<s.Language | string>;
  legalAddress?: s.PostalAddress | Array<s.PostalAddress>;
  legalName?: string | Array<string>;
  legalRepresentative?: s.Person | Array<s.Person>;
  leiCode?: string | Array<string>;
  location?: s.Place | s.PostalAddress | string | s.VirtualLocation | Array<s.Place | s.PostalAddress | string | s.VirtualLocation>;
  logo?: s.ImageObject | string | Array<s.ImageObject | string>;
  makesOffer?: s.Offer | Array<s.Offer>;
  member?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  memberOf?: s.MemberProgramTier | s.Organization | s.ProgramMembership | Array<s.MemberProgramTier | s.Organization | s.ProgramMembership>;
  members?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  naics?: string | Array<string>;
  nonprofitStatus?: s.NonprofitType | Array<s.NonprofitType>;
  numberOfEmployees?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  ownershipFundingInfo?: s.AboutPage | s.CreativeWork | string | Array<s.AboutPage | s.CreativeWork | string>;
  owns?: s.Thing | Array<s.Thing>;
  parentOrganization?: s.Organization | Array<s.Organization>;
  publishingPrinciples?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  seeks?: s.Demand | Array<s.Demand>;
  serviceArea?: s.AdministrativeArea | s.GeoShape | s.Place | Array<s.AdministrativeArea | s.GeoShape | s.Place>;
  skills?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  slogan?: string | Array<string>;
  sponsor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  subOrganization?: s.Organization | Array<s.Organization>;
  taxID?: string | Array<string>;
  telephone?: string | Array<string>;
  unnamedSourcesPolicy?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  vatID?: string | Array<string>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
  additionalProperty?: s.PropertyValue | Array<s.PropertyValue>;
  amenityFeature?: s.LocationFeatureSpecification | Array<s.LocationFeatureSpecification>;
  branchCode?: string | Array<string>;
  containedIn?: s.Place | Array<s.Place>;
  containedInPlace?: s.Place | Array<s.Place>;
  containsPlace?: s.Place | Array<s.Place>;
  geo?: s.GeoCoordinates | s.GeoShape | Array<s.GeoCoordinates | s.GeoShape>;
  geoContains?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCoveredBy?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCovers?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoCrosses?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoDisjoint?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoEquals?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoIntersects?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoOverlaps?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoTouches?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  geoWithin?: s.GeospatialGeometry | s.Place | Array<s.GeospatialGeometry | s.Place>;
  hasDriveThroughService?: boolean | Array<boolean>;
  hasMap?: s.Map | string | Array<s.Map | string>;
  isAccessibleForFree?: boolean | Array<boolean>;
  latitude?: number | string | Array<number | string>;
  longitude?: number | string | Array<number | string>;
  map?: string | Array<string>;
  maps?: string | Array<string>;
  maximumAttendeeCapacity?: number | Array<number>;
  openingHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  photo?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  photos?: s.ImageObject | s.Photograph | Array<s.ImageObject | s.Photograph>;
  publicAccess?: boolean | Array<boolean>;
  smokingAllowed?: boolean | Array<boolean>;
  specialOpeningHoursSpecification?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  tourBookingPage?: string | Array<string>;
}

export const HousePainterSchema: z.ZodType<HousePainter> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  branchOf: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  currenciesAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  floorLevel: z.union([z.string(), z.array(z.string())]).optional(),
  openingHours: z.union([z.string(), z.array(z.string())]).optional(),
  paymentAccepted: z.union([z.string(), z.array(z.string())]).optional(),
  priceRange: z.union([z.string(), z.array(z.string())]).optional(),
  acceptedPaymentMethod: z.union([z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]), z.array(z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]))]).optional(),
  actionableFeedbackPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  address: z.union([z.union([s.PostalAddressSchema, z.string()]), z.array(z.union([s.PostalAddressSchema, z.string()]))]).optional(),
  agentInteractionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  alumni: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  areaServed: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  awards: z.union([z.string(), z.array(z.string())]).optional(),
  brand: z.union([z.union([s.BrandSchema, s.OrganizationSchema]), z.array(z.union([s.BrandSchema, s.OrganizationSchema]))]).optional(),
  companyRegistration: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  contactPoint: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  contactPoints: z.union([s.ContactPointSchema, z.array(s.ContactPointSchema)]).optional(),
  correctionsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  department: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  dissolutionDate: z.union([z.string(), z.array(z.string())]).optional(),
  diversityPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  diversityStaffingReport: z.union([z.union([s.ArticleSchema, z.string().url()]), z.array(z.union([s.ArticleSchema, z.string().url()]))]).optional(),
  duns: z.union([z.string(), z.array(z.string())]).optional(),
  email: z.union([z.string(), z.array(z.string())]).optional(),
  employee: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  employees: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  ethicsPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  event: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  events: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  faxNumber: z.union([z.string(), z.array(z.string())]).optional(),
  founder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  founders: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  foundingDate: z.union([z.string(), z.array(z.string())]).optional(),
  foundingLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  funder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  globalLocationNumber: z.union([z.string(), z.array(z.string())]).optional(),
  hasCertification: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  hasCredential: z.union([s.CredentialSchema, z.array(s.CredentialSchema)]).optional(),
  hasGS1DigitalLink: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  hasMemberProgram: z.union([s.MemberProgramSchema, z.array(s.MemberProgramSchema)]).optional(),
  hasMerchantReturnPolicy: z.union([s.MerchantReturnPolicySchema, z.array(s.MerchantReturnPolicySchema)]).optional(),
  hasOfferCatalog: z.union([s.OfferCatalogSchema, z.array(s.OfferCatalogSchema)]).optional(),
  hasPOS: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  hasShippingService: z.union([s.ShippingServiceSchema, z.array(s.ShippingServiceSchema)]).optional(),
  interactionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  isicV4: z.union([z.string(), z.array(z.string())]).optional(),
  iso6523Code: z.union([z.string(), z.array(z.string())]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  knowsAbout: z.union([z.union([z.string(), s.ThingSchema, z.string().url()]), z.array(z.union([z.string(), s.ThingSchema, z.string().url()]))]).optional(),
  knowsLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  legalAddress: z.union([s.PostalAddressSchema, z.array(s.PostalAddressSchema)]).optional(),
  legalName: z.union([z.string(), z.array(z.string())]).optional(),
  legalRepresentative: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  leiCode: z.union([z.string(), z.array(z.string())]).optional(),
  location: z.union([z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]), z.array(z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]))]).optional(),
  logo: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  makesOffer: z.union([s.OfferSchema, z.array(s.OfferSchema)]).optional(),
  member: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  memberOf: z.union([z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]), z.array(z.union([s.MemberProgramTierSchema, s.OrganizationSchema, s.ProgramMembershipSchema]))]).optional(),
  members: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  naics: z.union([z.string(), z.array(z.string())]).optional(),
  nonprofitStatus: z.union([s.NonprofitTypeSchema, z.array(s.NonprofitTypeSchema)]).optional(),
  numberOfEmployees: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  ownershipFundingInfo: z.union([z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]), z.array(z.union([s.AboutPageSchema, s.CreativeWorkSchema, z.string(), z.string().url()]))]).optional(),
  owns: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  parentOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  publishingPrinciples: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  seeks: z.union([s.DemandSchema, z.array(s.DemandSchema)]).optional(),
  serviceArea: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]))]).optional(),
  skills: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  slogan: z.union([z.string(), z.array(z.string())]).optional(),
  sponsor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  subOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  taxID: z.union([z.string(), z.array(z.string())]).optional(),
  telephone: z.union([z.string(), z.array(z.string())]).optional(),
  unnamedSourcesPolicy: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  vatID: z.union([z.string(), z.array(z.string())]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  additionalProperty: z.union([s.PropertyValueSchema, z.array(s.PropertyValueSchema)]).optional(),
  amenityFeature: z.union([s.LocationFeatureSpecificationSchema, z.array(s.LocationFeatureSpecificationSchema)]).optional(),
  branchCode: z.union([z.string(), z.array(z.string())]).optional(),
  containedIn: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containedInPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  containsPlace: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  geo: z.union([z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]), z.array(z.union([s.GeoCoordinatesSchema, s.GeoShapeSchema]))]).optional(),
  geoContains: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCoveredBy: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCovers: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoCrosses: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoDisjoint: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoEquals: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoIntersects: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoOverlaps: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoTouches: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  geoWithin: z.union([z.union([s.GeospatialGeometrySchema, s.PlaceSchema]), z.array(z.union([s.GeospatialGeometrySchema, s.PlaceSchema]))]).optional(),
  hasDriveThroughService: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  hasMap: z.union([z.union([s.MapSchema, z.string().url()]), z.array(z.union([s.MapSchema, z.string().url()]))]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  latitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  longitude: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  map: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maps: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  maximumAttendeeCapacity: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  openingHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  photo: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  photos: z.union([z.union([s.ImageObjectSchema, s.PhotographSchema]), z.array(z.union([s.ImageObjectSchema, s.PhotographSchema]))]).optional(),
  publicAccess: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  smokingAllowed: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  specialOpeningHoursSpecification: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  tourBookingPage: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface HowTo {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  estimatedCost?: s.MonetaryAmount | string | Array<s.MonetaryAmount | string>;
  performTime?: s.Duration | Array<s.Duration>;
  prepTime?: s.Duration | Array<s.Duration>;
  step?: s.CreativeWork | s.HowToSection | s.HowToStep | string | Array<s.CreativeWork | s.HowToSection | s.HowToStep | string>;
  steps?: s.CreativeWork | s.ItemList | string | Array<s.CreativeWork | s.ItemList | string>;
  supply?: s.HowToSupply | string | Array<s.HowToSupply | string>;
  tool?: s.HowToTool | string | Array<s.HowToTool | string>;
  totalTime?: s.Duration | Array<s.Duration>;
  yield?: s.QuantitativeValue | string | Array<s.QuantitativeValue | string>;
  about?: s.Thing | Array<s.Thing>;
  abstract?: string | Array<string>;
  accessMode?: string | Array<string>;
  accessModeSufficient?: s.ItemList | Array<s.ItemList>;
  accessibilityAPI?: string | Array<string>;
  accessibilityControl?: string | Array<string>;
  accessibilityFeature?: string | Array<string>;
  accessibilityHazard?: string | Array<string>;
  accessibilitySummary?: string | Array<string>;
  accountablePerson?: s.Person | Array<s.Person>;
  acquireLicensePage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  alternativeHeadline?: string | Array<string>;
  archivedAt?: string | s.WebPage | Array<string | s.WebPage>;
  assesses?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  associatedMedia?: s.MediaObject | Array<s.MediaObject>;
  audience?: s.Audience | Array<s.Audience>;
  audio?: s.AudioObject | s.Clip | s.MusicRecording | Array<s.AudioObject | s.Clip | s.MusicRecording>;
  author?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  award?: string | Array<string>;
  awards?: string | Array<string>;
  character?: s.Person | Array<s.Person>;
  citation?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  comment?: s.Comment | Array<s.Comment>;
  commentCount?: number | Array<number>;
  conditionsOfAccess?: string | Array<string>;
  contentLocation?: s.Place | Array<s.Place>;
  contentRating?: s.Rating | string | Array<s.Rating | string>;
  contentReferenceTime?: string | Array<string>;
  contributor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  copyrightHolder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  copyrightNotice?: string | Array<string>;
  copyrightYear?: number | Array<number>;
  correction?: s.CorrectionComment | string | Array<s.CorrectionComment | string>;
  countryOfOrigin?: s.Country | Array<s.Country>;
  creativeWorkStatus?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  creator?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  creditText?: string | Array<string>;
  dateCreated?: string | Array<string>;
  dateModified?: string | Array<string>;
  datePublished?: string | Array<string>;
  digitalSourceType?: s.IPTCDigitalSourceEnumeration | Array<s.IPTCDigitalSourceEnumeration>;
  discussionUrl?: string | Array<string>;
  displayLocation?: s.Place | Array<s.Place>;
  editEIDR?: string | Array<string>;
  editor?: s.Person | Array<s.Person>;
  educationalAlignment?: s.AlignmentObject | Array<s.AlignmentObject>;
  educationalLevel?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  educationalUse?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  encoding?: s.MediaObject | Array<s.MediaObject>;
  encodingFormat?: string | Array<string>;
  encodings?: s.MediaObject | Array<s.MediaObject>;
  exampleOfWork?: s.CreativeWork | Array<s.CreativeWork>;
  expires?: string | Array<string>;
  fileFormat?: string | Array<string>;
  funder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  funding?: s.Grant | Array<s.Grant>;
  genre?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  hasPart?: s.CreativeWork | Array<s.CreativeWork>;
  headline?: string | Array<string>;
  inLanguage?: s.Language | string | Array<s.Language | string>;
  interactionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  interactivityType?: string | Array<string>;
  interpretedAsClaim?: s.Claim | Array<s.Claim>;
  isAccessibleForFree?: boolean | Array<boolean>;
  isBasedOn?: s.CreativeWork | s.Product | string | Array<s.CreativeWork | s.Product | string>;
  isBasedOnUrl?: s.CreativeWork | s.Product | string | Array<s.CreativeWork | s.Product | string>;
  isFamilyFriendly?: boolean | Array<boolean>;
  isPartOf?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  learningResourceType?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  license?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  locationCreated?: s.Place | Array<s.Place>;
  mainEntity?: s.Thing | Array<s.Thing>;
  maintainer?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  material?: s.Product | string | Array<s.Product | string>;
  materialExtent?: s.QuantitativeValue | string | Array<s.QuantitativeValue | string>;
  mentions?: s.Thing | Array<s.Thing>;
  offers?: s.Demand | s.Offer | Array<s.Demand | s.Offer>;
  pattern?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  position?: number | string | Array<number | string>;
  producer?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  provider?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  publication?: s.PublicationEvent | Array<s.PublicationEvent>;
  publisher?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  publisherImprint?: s.Organization | Array<s.Organization>;
  publishingPrinciples?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  recordedAt?: s.Event | Array<s.Event>;
  releasedEvent?: s.PublicationEvent | Array<s.PublicationEvent>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  schemaVersion?: string | Array<string>;
  sdDatePublished?: string | Array<string>;
  sdLicense?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  sdPublisher?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  size?: s.DefinedTerm | s.QuantitativeValue | s.SizeSpecification | string | Array<s.DefinedTerm | s.QuantitativeValue | s.SizeSpecification | string>;
  sourceOrganization?: s.Organization | Array<s.Organization>;
  spatial?: s.Place | Array<s.Place>;
  spatialCoverage?: s.Place | Array<s.Place>;
  sponsor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  teaches?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  temporal?: string | Array<string>;
  temporalCoverage?: string | Array<string>;
  text?: string | Array<string>;
  thumbnail?: s.ImageObject | Array<s.ImageObject>;
  thumbnailUrl?: string | Array<string>;
  timeRequired?: s.Duration | Array<s.Duration>;
  translationOfWork?: s.CreativeWork | Array<s.CreativeWork>;
  translator?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  typicalAgeRange?: string | Array<string>;
  usageInfo?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  version?: number | string | Array<number | string>;
  video?: s.Clip | s.VideoObject | Array<s.Clip | s.VideoObject>;
  wordCount?: number | Array<number>;
  workExample?: s.CreativeWork | Array<s.CreativeWork>;
  workTranslation?: s.CreativeWork | Array<s.CreativeWork>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
}

export const HowToSchema: z.ZodType<HowTo> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  estimatedCost: z.union([z.union([s.MonetaryAmountSchema, z.string()]), z.array(z.union([s.MonetaryAmountSchema, z.string()]))]).optional(),
  performTime: z.union([s.DurationSchema, z.array(s.DurationSchema)]).optional(),
  prepTime: z.union([s.DurationSchema, z.array(s.DurationSchema)]).optional(),
  step: z.union([z.union([s.CreativeWorkSchema, s.HowToSectionSchema, s.HowToStepSchema, z.string()]), z.array(z.union([s.CreativeWorkSchema, s.HowToSectionSchema, s.HowToStepSchema, z.string()]))]).optional(),
  steps: z.union([z.union([s.CreativeWorkSchema, s.ItemListSchema, z.string()]), z.array(z.union([s.CreativeWorkSchema, s.ItemListSchema, z.string()]))]).optional(),
  supply: z.union([z.union([s.HowToSupplySchema, z.string()]), z.array(z.union([s.HowToSupplySchema, z.string()]))]).optional(),
  tool: z.union([z.union([s.HowToToolSchema, z.string()]), z.array(z.union([s.HowToToolSchema, z.string()]))]).optional(),
  totalTime: z.union([s.DurationSchema, z.array(s.DurationSchema)]).optional(),
  yield: z.union([z.union([s.QuantitativeValueSchema, z.string()]), z.array(z.union([s.QuantitativeValueSchema, z.string()]))]).optional(),
  about: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  abstract: z.union([z.string(), z.array(z.string())]).optional(),
  accessMode: z.union([z.string(), z.array(z.string())]).optional(),
  accessModeSufficient: z.union([s.ItemListSchema, z.array(s.ItemListSchema)]).optional(),
  accessibilityAPI: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityControl: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityFeature: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityHazard: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilitySummary: z.union([z.string(), z.array(z.string())]).optional(),
  accountablePerson: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  acquireLicensePage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  alternativeHeadline: z.union([z.string(), z.array(z.string())]).optional(),
  archivedAt: z.union([z.union([z.string().url(), s.WebPageSchema]), z.array(z.union([z.string().url(), s.WebPageSchema]))]).optional(),
  assesses: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  associatedMedia: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  audience: z.union([s.AudienceSchema, z.array(s.AudienceSchema)]).optional(),
  audio: z.union([z.union([s.AudioObjectSchema, s.ClipSchema, s.MusicRecordingSchema]), z.array(z.union([s.AudioObjectSchema, s.ClipSchema, s.MusicRecordingSchema]))]).optional(),
  author: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  awards: z.union([z.string(), z.array(z.string())]).optional(),
  character: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  citation: z.union([z.union([s.CreativeWorkSchema, z.string()]), z.array(z.union([s.CreativeWorkSchema, z.string()]))]).optional(),
  comment: z.union([s.CommentSchema, z.array(s.CommentSchema)]).optional(),
  commentCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  conditionsOfAccess: z.union([z.string(), z.array(z.string())]).optional(),
  contentLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  contentRating: z.union([z.union([s.RatingSchema, z.string()]), z.array(z.union([s.RatingSchema, z.string()]))]).optional(),
  contentReferenceTime: z.union([z.string(), z.array(z.string())]).optional(),
  contributor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  copyrightHolder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  copyrightNotice: z.union([z.string(), z.array(z.string())]).optional(),
  copyrightYear: z.union([z.number(), z.array(z.number())]).optional(),
  correction: z.union([z.union([s.CorrectionCommentSchema, z.string(), z.string().url()]), z.array(z.union([s.CorrectionCommentSchema, z.string(), z.string().url()]))]).optional(),
  countryOfOrigin: z.union([s.CountrySchema, z.array(s.CountrySchema)]).optional(),
  creativeWorkStatus: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  creator: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  creditText: z.union([z.string(), z.array(z.string())]).optional(),
  dateCreated: z.union([z.string(), z.array(z.string())]).optional(),
  dateModified: z.union([z.string(), z.array(z.string())]).optional(),
  datePublished: z.union([z.string(), z.array(z.string())]).optional(),
  digitalSourceType: z.union([s.IPTCDigitalSourceEnumerationSchema, z.array(s.IPTCDigitalSourceEnumerationSchema)]).optional(),
  discussionUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  displayLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  editEIDR: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  editor: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  educationalAlignment: z.union([s.AlignmentObjectSchema, z.array(s.AlignmentObjectSchema)]).optional(),
  educationalLevel: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  educationalUse: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  encoding: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  encodingFormat: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  encodings: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  exampleOfWork: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  expires: z.union([z.string(), z.array(z.string())]).optional(),
  fileFormat: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  funder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  genre: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  hasPart: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  headline: z.union([z.string(), z.array(z.string())]).optional(),
  inLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  interactionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  interactivityType: z.union([z.string(), z.array(z.string())]).optional(),
  interpretedAsClaim: z.union([s.ClaimSchema, z.array(s.ClaimSchema)]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  isBasedOn: z.union([z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]))]).optional(),
  isBasedOnUrl: z.union([z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]))]).optional(),
  isFamilyFriendly: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  isPartOf: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  learningResourceType: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  license: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  locationCreated: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  mainEntity: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  maintainer: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  material: z.union([z.union([s.ProductSchema, z.string(), z.string().url()]), z.array(z.union([s.ProductSchema, z.string(), z.string().url()]))]).optional(),
  materialExtent: z.union([z.union([s.QuantitativeValueSchema, z.string()]), z.array(z.union([s.QuantitativeValueSchema, z.string()]))]).optional(),
  mentions: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  offers: z.union([z.union([s.DemandSchema, s.OfferSchema]), z.array(z.union([s.DemandSchema, s.OfferSchema]))]).optional(),
  pattern: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  position: z.union([z.union([z.number().int(), z.string()]), z.array(z.union([z.number().int(), z.string()]))]).optional(),
  producer: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  provider: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  publication: z.union([s.PublicationEventSchema, z.array(s.PublicationEventSchema)]).optional(),
  publisher: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  publisherImprint: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  publishingPrinciples: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  recordedAt: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  releasedEvent: z.union([s.PublicationEventSchema, z.array(s.PublicationEventSchema)]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  schemaVersion: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  sdDatePublished: z.union([z.string(), z.array(z.string())]).optional(),
  sdLicense: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  sdPublisher: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  size: z.union([z.union([s.DefinedTermSchema, s.QuantitativeValueSchema, s.SizeSpecificationSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, s.QuantitativeValueSchema, s.SizeSpecificationSchema, z.string()]))]).optional(),
  sourceOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  spatial: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  spatialCoverage: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  sponsor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  teaches: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  temporal: z.union([z.string(), z.array(z.string())]).optional(),
  temporalCoverage: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  text: z.union([z.string(), z.array(z.string())]).optional(),
  thumbnail: z.union([s.ImageObjectSchema, z.array(s.ImageObjectSchema)]).optional(),
  thumbnailUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  timeRequired: z.union([s.DurationSchema, z.array(s.DurationSchema)]).optional(),
  translationOfWork: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  translator: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  typicalAgeRange: z.union([z.string(), z.array(z.string())]).optional(),
  usageInfo: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  version: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  video: z.union([z.union([s.ClipSchema, s.VideoObjectSchema]), z.array(z.union([s.ClipSchema, s.VideoObjectSchema]))]).optional(),
  wordCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  workExample: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  workTranslation: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface HowToDirection {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  afterMedia?: s.MediaObject | string | Array<s.MediaObject | string>;
  beforeMedia?: s.MediaObject | string | Array<s.MediaObject | string>;
  duringMedia?: s.MediaObject | string | Array<s.MediaObject | string>;
  performTime?: s.Duration | Array<s.Duration>;
  prepTime?: s.Duration | Array<s.Duration>;
  supply?: s.HowToSupply | string | Array<s.HowToSupply | string>;
  tool?: s.HowToTool | string | Array<s.HowToTool | string>;
  totalTime?: s.Duration | Array<s.Duration>;
  about?: s.Thing | Array<s.Thing>;
  abstract?: string | Array<string>;
  accessMode?: string | Array<string>;
  accessModeSufficient?: s.ItemList | Array<s.ItemList>;
  accessibilityAPI?: string | Array<string>;
  accessibilityControl?: string | Array<string>;
  accessibilityFeature?: string | Array<string>;
  accessibilityHazard?: string | Array<string>;
  accessibilitySummary?: string | Array<string>;
  accountablePerson?: s.Person | Array<s.Person>;
  acquireLicensePage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  alternativeHeadline?: string | Array<string>;
  archivedAt?: string | s.WebPage | Array<string | s.WebPage>;
  assesses?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  associatedMedia?: s.MediaObject | Array<s.MediaObject>;
  audience?: s.Audience | Array<s.Audience>;
  audio?: s.AudioObject | s.Clip | s.MusicRecording | Array<s.AudioObject | s.Clip | s.MusicRecording>;
  author?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  award?: string | Array<string>;
  awards?: string | Array<string>;
  character?: s.Person | Array<s.Person>;
  citation?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  comment?: s.Comment | Array<s.Comment>;
  commentCount?: number | Array<number>;
  conditionsOfAccess?: string | Array<string>;
  contentLocation?: s.Place | Array<s.Place>;
  contentRating?: s.Rating | string | Array<s.Rating | string>;
  contentReferenceTime?: string | Array<string>;
  contributor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  copyrightHolder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  copyrightNotice?: string | Array<string>;
  copyrightYear?: number | Array<number>;
  correction?: s.CorrectionComment | string | Array<s.CorrectionComment | string>;
  countryOfOrigin?: s.Country | Array<s.Country>;
  creativeWorkStatus?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  creator?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  creditText?: string | Array<string>;
  dateCreated?: string | Array<string>;
  dateModified?: string | Array<string>;
  datePublished?: string | Array<string>;
  digitalSourceType?: s.IPTCDigitalSourceEnumeration | Array<s.IPTCDigitalSourceEnumeration>;
  discussionUrl?: string | Array<string>;
  displayLocation?: s.Place | Array<s.Place>;
  editEIDR?: string | Array<string>;
  editor?: s.Person | Array<s.Person>;
  educationalAlignment?: s.AlignmentObject | Array<s.AlignmentObject>;
  educationalLevel?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  educationalUse?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  encoding?: s.MediaObject | Array<s.MediaObject>;
  encodingFormat?: string | Array<string>;
  encodings?: s.MediaObject | Array<s.MediaObject>;
  exampleOfWork?: s.CreativeWork | Array<s.CreativeWork>;
  expires?: string | Array<string>;
  fileFormat?: string | Array<string>;
  funder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  funding?: s.Grant | Array<s.Grant>;
  genre?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  hasPart?: s.CreativeWork | Array<s.CreativeWork>;
  headline?: string | Array<string>;
  inLanguage?: s.Language | string | Array<s.Language | string>;
  interactionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  interactivityType?: string | Array<string>;
  interpretedAsClaim?: s.Claim | Array<s.Claim>;
  isAccessibleForFree?: boolean | Array<boolean>;
  isBasedOn?: s.CreativeWork | s.Product | string | Array<s.CreativeWork | s.Product | string>;
  isBasedOnUrl?: s.CreativeWork | s.Product | string | Array<s.CreativeWork | s.Product | string>;
  isFamilyFriendly?: boolean | Array<boolean>;
  isPartOf?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  learningResourceType?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  license?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  locationCreated?: s.Place | Array<s.Place>;
  mainEntity?: s.Thing | Array<s.Thing>;
  maintainer?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  material?: s.Product | string | Array<s.Product | string>;
  materialExtent?: s.QuantitativeValue | string | Array<s.QuantitativeValue | string>;
  mentions?: s.Thing | Array<s.Thing>;
  offers?: s.Demand | s.Offer | Array<s.Demand | s.Offer>;
  pattern?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  position?: number | string | Array<number | string>;
  producer?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  provider?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  publication?: s.PublicationEvent | Array<s.PublicationEvent>;
  publisher?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  publisherImprint?: s.Organization | Array<s.Organization>;
  publishingPrinciples?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  recordedAt?: s.Event | Array<s.Event>;
  releasedEvent?: s.PublicationEvent | Array<s.PublicationEvent>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  schemaVersion?: string | Array<string>;
  sdDatePublished?: string | Array<string>;
  sdLicense?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  sdPublisher?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  size?: s.DefinedTerm | s.QuantitativeValue | s.SizeSpecification | string | Array<s.DefinedTerm | s.QuantitativeValue | s.SizeSpecification | string>;
  sourceOrganization?: s.Organization | Array<s.Organization>;
  spatial?: s.Place | Array<s.Place>;
  spatialCoverage?: s.Place | Array<s.Place>;
  sponsor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  teaches?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  temporal?: string | Array<string>;
  temporalCoverage?: string | Array<string>;
  text?: string | Array<string>;
  thumbnail?: s.ImageObject | Array<s.ImageObject>;
  thumbnailUrl?: string | Array<string>;
  timeRequired?: s.Duration | Array<s.Duration>;
  translationOfWork?: s.CreativeWork | Array<s.CreativeWork>;
  translator?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  typicalAgeRange?: string | Array<string>;
  usageInfo?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  version?: number | string | Array<number | string>;
  video?: s.Clip | s.VideoObject | Array<s.Clip | s.VideoObject>;
  wordCount?: number | Array<number>;
  workExample?: s.CreativeWork | Array<s.CreativeWork>;
  workTranslation?: s.CreativeWork | Array<s.CreativeWork>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
  item?: s.Thing | Array<s.Thing>;
  nextItem?: s.ListItem | Array<s.ListItem>;
  previousItem?: s.ListItem | Array<s.ListItem>;
}

export const HowToDirectionSchema: z.ZodType<HowToDirection> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  afterMedia: z.union([z.union([s.MediaObjectSchema, z.string().url()]), z.array(z.union([s.MediaObjectSchema, z.string().url()]))]).optional(),
  beforeMedia: z.union([z.union([s.MediaObjectSchema, z.string().url()]), z.array(z.union([s.MediaObjectSchema, z.string().url()]))]).optional(),
  duringMedia: z.union([z.union([s.MediaObjectSchema, z.string().url()]), z.array(z.union([s.MediaObjectSchema, z.string().url()]))]).optional(),
  performTime: z.union([s.DurationSchema, z.array(s.DurationSchema)]).optional(),
  prepTime: z.union([s.DurationSchema, z.array(s.DurationSchema)]).optional(),
  supply: z.union([z.union([s.HowToSupplySchema, z.string()]), z.array(z.union([s.HowToSupplySchema, z.string()]))]).optional(),
  tool: z.union([z.union([s.HowToToolSchema, z.string()]), z.array(z.union([s.HowToToolSchema, z.string()]))]).optional(),
  totalTime: z.union([s.DurationSchema, z.array(s.DurationSchema)]).optional(),
  about: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  abstract: z.union([z.string(), z.array(z.string())]).optional(),
  accessMode: z.union([z.string(), z.array(z.string())]).optional(),
  accessModeSufficient: z.union([s.ItemListSchema, z.array(s.ItemListSchema)]).optional(),
  accessibilityAPI: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityControl: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityFeature: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityHazard: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilitySummary: z.union([z.string(), z.array(z.string())]).optional(),
  accountablePerson: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  acquireLicensePage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  alternativeHeadline: z.union([z.string(), z.array(z.string())]).optional(),
  archivedAt: z.union([z.union([z.string().url(), s.WebPageSchema]), z.array(z.union([z.string().url(), s.WebPageSchema]))]).optional(),
  assesses: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  associatedMedia: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  audience: z.union([s.AudienceSchema, z.array(s.AudienceSchema)]).optional(),
  audio: z.union([z.union([s.AudioObjectSchema, s.ClipSchema, s.MusicRecordingSchema]), z.array(z.union([s.AudioObjectSchema, s.ClipSchema, s.MusicRecordingSchema]))]).optional(),
  author: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  awards: z.union([z.string(), z.array(z.string())]).optional(),
  character: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  citation: z.union([z.union([s.CreativeWorkSchema, z.string()]), z.array(z.union([s.CreativeWorkSchema, z.string()]))]).optional(),
  comment: z.union([s.CommentSchema, z.array(s.CommentSchema)]).optional(),
  commentCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  conditionsOfAccess: z.union([z.string(), z.array(z.string())]).optional(),
  contentLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  contentRating: z.union([z.union([s.RatingSchema, z.string()]), z.array(z.union([s.RatingSchema, z.string()]))]).optional(),
  contentReferenceTime: z.union([z.string(), z.array(z.string())]).optional(),
  contributor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  copyrightHolder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  copyrightNotice: z.union([z.string(), z.array(z.string())]).optional(),
  copyrightYear: z.union([z.number(), z.array(z.number())]).optional(),
  correction: z.union([z.union([s.CorrectionCommentSchema, z.string(), z.string().url()]), z.array(z.union([s.CorrectionCommentSchema, z.string(), z.string().url()]))]).optional(),
  countryOfOrigin: z.union([s.CountrySchema, z.array(s.CountrySchema)]).optional(),
  creativeWorkStatus: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  creator: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  creditText: z.union([z.string(), z.array(z.string())]).optional(),
  dateCreated: z.union([z.string(), z.array(z.string())]).optional(),
  dateModified: z.union([z.string(), z.array(z.string())]).optional(),
  datePublished: z.union([z.string(), z.array(z.string())]).optional(),
  digitalSourceType: z.union([s.IPTCDigitalSourceEnumerationSchema, z.array(s.IPTCDigitalSourceEnumerationSchema)]).optional(),
  discussionUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  displayLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  editEIDR: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  editor: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  educationalAlignment: z.union([s.AlignmentObjectSchema, z.array(s.AlignmentObjectSchema)]).optional(),
  educationalLevel: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  educationalUse: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  encoding: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  encodingFormat: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  encodings: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  exampleOfWork: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  expires: z.union([z.string(), z.array(z.string())]).optional(),
  fileFormat: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  funder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  genre: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  hasPart: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  headline: z.union([z.string(), z.array(z.string())]).optional(),
  inLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  interactionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  interactivityType: z.union([z.string(), z.array(z.string())]).optional(),
  interpretedAsClaim: z.union([s.ClaimSchema, z.array(s.ClaimSchema)]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  isBasedOn: z.union([z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]))]).optional(),
  isBasedOnUrl: z.union([z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]))]).optional(),
  isFamilyFriendly: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  isPartOf: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  learningResourceType: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  license: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  locationCreated: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  mainEntity: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  maintainer: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  material: z.union([z.union([s.ProductSchema, z.string(), z.string().url()]), z.array(z.union([s.ProductSchema, z.string(), z.string().url()]))]).optional(),
  materialExtent: z.union([z.union([s.QuantitativeValueSchema, z.string()]), z.array(z.union([s.QuantitativeValueSchema, z.string()]))]).optional(),
  mentions: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  offers: z.union([z.union([s.DemandSchema, s.OfferSchema]), z.array(z.union([s.DemandSchema, s.OfferSchema]))]).optional(),
  pattern: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  position: z.union([z.union([z.number().int(), z.string()]), z.array(z.union([z.number().int(), z.string()]))]).optional(),
  producer: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  provider: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  publication: z.union([s.PublicationEventSchema, z.array(s.PublicationEventSchema)]).optional(),
  publisher: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  publisherImprint: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  publishingPrinciples: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  recordedAt: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  releasedEvent: z.union([s.PublicationEventSchema, z.array(s.PublicationEventSchema)]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  schemaVersion: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  sdDatePublished: z.union([z.string(), z.array(z.string())]).optional(),
  sdLicense: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  sdPublisher: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  size: z.union([z.union([s.DefinedTermSchema, s.QuantitativeValueSchema, s.SizeSpecificationSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, s.QuantitativeValueSchema, s.SizeSpecificationSchema, z.string()]))]).optional(),
  sourceOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  spatial: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  spatialCoverage: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  sponsor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  teaches: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  temporal: z.union([z.string(), z.array(z.string())]).optional(),
  temporalCoverage: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  text: z.union([z.string(), z.array(z.string())]).optional(),
  thumbnail: z.union([s.ImageObjectSchema, z.array(s.ImageObjectSchema)]).optional(),
  thumbnailUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  timeRequired: z.union([s.DurationSchema, z.array(s.DurationSchema)]).optional(),
  translationOfWork: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  translator: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  typicalAgeRange: z.union([z.string(), z.array(z.string())]).optional(),
  usageInfo: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  version: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  video: z.union([z.union([s.ClipSchema, s.VideoObjectSchema]), z.array(z.union([s.ClipSchema, s.VideoObjectSchema]))]).optional(),
  wordCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  workExample: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  workTranslation: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  item: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  nextItem: z.union([s.ListItemSchema, z.array(s.ListItemSchema)]).optional(),
  previousItem: z.union([s.ListItemSchema, z.array(s.ListItemSchema)]).optional(),
}));

export interface HowToItem {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  requiredQuantity?: number | s.QuantitativeValue | string | Array<number | s.QuantitativeValue | string>;
  item?: s.Thing | Array<s.Thing>;
  nextItem?: s.ListItem | Array<s.ListItem>;
  position?: number | string | Array<number | string>;
  previousItem?: s.ListItem | Array<s.ListItem>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
}

export const HowToItemSchema: z.ZodType<HowToItem> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  requiredQuantity: z.union([z.union([z.number(), s.QuantitativeValueSchema, z.string()]), z.array(z.union([z.number(), s.QuantitativeValueSchema, z.string()]))]).optional(),
  item: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  nextItem: z.union([s.ListItemSchema, z.array(s.ListItemSchema)]).optional(),
  position: z.union([z.union([z.number().int(), z.string()]), z.array(z.union([z.number().int(), z.string()]))]).optional(),
  previousItem: z.union([s.ListItemSchema, z.array(s.ListItemSchema)]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface HowToSection {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  steps?: s.CreativeWork | s.ItemList | string | Array<s.CreativeWork | s.ItemList | string>;
  about?: s.Thing | Array<s.Thing>;
  abstract?: string | Array<string>;
  accessMode?: string | Array<string>;
  accessModeSufficient?: s.ItemList | Array<s.ItemList>;
  accessibilityAPI?: string | Array<string>;
  accessibilityControl?: string | Array<string>;
  accessibilityFeature?: string | Array<string>;
  accessibilityHazard?: string | Array<string>;
  accessibilitySummary?: string | Array<string>;
  accountablePerson?: s.Person | Array<s.Person>;
  acquireLicensePage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  alternativeHeadline?: string | Array<string>;
  archivedAt?: string | s.WebPage | Array<string | s.WebPage>;
  assesses?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  associatedMedia?: s.MediaObject | Array<s.MediaObject>;
  audience?: s.Audience | Array<s.Audience>;
  audio?: s.AudioObject | s.Clip | s.MusicRecording | Array<s.AudioObject | s.Clip | s.MusicRecording>;
  author?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  award?: string | Array<string>;
  awards?: string | Array<string>;
  character?: s.Person | Array<s.Person>;
  citation?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  comment?: s.Comment | Array<s.Comment>;
  commentCount?: number | Array<number>;
  conditionsOfAccess?: string | Array<string>;
  contentLocation?: s.Place | Array<s.Place>;
  contentRating?: s.Rating | string | Array<s.Rating | string>;
  contentReferenceTime?: string | Array<string>;
  contributor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  copyrightHolder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  copyrightNotice?: string | Array<string>;
  copyrightYear?: number | Array<number>;
  correction?: s.CorrectionComment | string | Array<s.CorrectionComment | string>;
  countryOfOrigin?: s.Country | Array<s.Country>;
  creativeWorkStatus?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  creator?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  creditText?: string | Array<string>;
  dateCreated?: string | Array<string>;
  dateModified?: string | Array<string>;
  datePublished?: string | Array<string>;
  digitalSourceType?: s.IPTCDigitalSourceEnumeration | Array<s.IPTCDigitalSourceEnumeration>;
  discussionUrl?: string | Array<string>;
  displayLocation?: s.Place | Array<s.Place>;
  editEIDR?: string | Array<string>;
  editor?: s.Person | Array<s.Person>;
  educationalAlignment?: s.AlignmentObject | Array<s.AlignmentObject>;
  educationalLevel?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  educationalUse?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  encoding?: s.MediaObject | Array<s.MediaObject>;
  encodingFormat?: string | Array<string>;
  encodings?: s.MediaObject | Array<s.MediaObject>;
  exampleOfWork?: s.CreativeWork | Array<s.CreativeWork>;
  expires?: string | Array<string>;
  fileFormat?: string | Array<string>;
  funder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  funding?: s.Grant | Array<s.Grant>;
  genre?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  hasPart?: s.CreativeWork | Array<s.CreativeWork>;
  headline?: string | Array<string>;
  inLanguage?: s.Language | string | Array<s.Language | string>;
  interactionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  interactivityType?: string | Array<string>;
  interpretedAsClaim?: s.Claim | Array<s.Claim>;
  isAccessibleForFree?: boolean | Array<boolean>;
  isBasedOn?: s.CreativeWork | s.Product | string | Array<s.CreativeWork | s.Product | string>;
  isBasedOnUrl?: s.CreativeWork | s.Product | string | Array<s.CreativeWork | s.Product | string>;
  isFamilyFriendly?: boolean | Array<boolean>;
  isPartOf?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  learningResourceType?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  license?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  locationCreated?: s.Place | Array<s.Place>;
  mainEntity?: s.Thing | Array<s.Thing>;
  maintainer?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  material?: s.Product | string | Array<s.Product | string>;
  materialExtent?: s.QuantitativeValue | string | Array<s.QuantitativeValue | string>;
  mentions?: s.Thing | Array<s.Thing>;
  offers?: s.Demand | s.Offer | Array<s.Demand | s.Offer>;
  pattern?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  position?: number | string | Array<number | string>;
  producer?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  provider?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  publication?: s.PublicationEvent | Array<s.PublicationEvent>;
  publisher?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  publisherImprint?: s.Organization | Array<s.Organization>;
  publishingPrinciples?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  recordedAt?: s.Event | Array<s.Event>;
  releasedEvent?: s.PublicationEvent | Array<s.PublicationEvent>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  schemaVersion?: string | Array<string>;
  sdDatePublished?: string | Array<string>;
  sdLicense?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  sdPublisher?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  size?: s.DefinedTerm | s.QuantitativeValue | s.SizeSpecification | string | Array<s.DefinedTerm | s.QuantitativeValue | s.SizeSpecification | string>;
  sourceOrganization?: s.Organization | Array<s.Organization>;
  spatial?: s.Place | Array<s.Place>;
  spatialCoverage?: s.Place | Array<s.Place>;
  sponsor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  teaches?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  temporal?: string | Array<string>;
  temporalCoverage?: string | Array<string>;
  text?: string | Array<string>;
  thumbnail?: s.ImageObject | Array<s.ImageObject>;
  thumbnailUrl?: string | Array<string>;
  timeRequired?: s.Duration | Array<s.Duration>;
  translationOfWork?: s.CreativeWork | Array<s.CreativeWork>;
  translator?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  typicalAgeRange?: string | Array<string>;
  usageInfo?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  version?: number | string | Array<number | string>;
  video?: s.Clip | s.VideoObject | Array<s.Clip | s.VideoObject>;
  wordCount?: number | Array<number>;
  workExample?: s.CreativeWork | Array<s.CreativeWork>;
  workTranslation?: s.CreativeWork | Array<s.CreativeWork>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
  aggregateElement?: s.Thing | Array<s.Thing>;
  itemListElement?: s.ListItem | string | s.Thing | Array<s.ListItem | string | s.Thing>;
  itemListOrder?: s.ItemListOrderType | string | Array<s.ItemListOrderType | string>;
  numberOfItems?: number | Array<number>;
  item?: s.Thing | Array<s.Thing>;
  nextItem?: s.ListItem | Array<s.ListItem>;
  previousItem?: s.ListItem | Array<s.ListItem>;
}

export const HowToSectionSchema: z.ZodType<HowToSection> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  steps: z.union([z.union([s.CreativeWorkSchema, s.ItemListSchema, z.string()]), z.array(z.union([s.CreativeWorkSchema, s.ItemListSchema, z.string()]))]).optional(),
  about: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  abstract: z.union([z.string(), z.array(z.string())]).optional(),
  accessMode: z.union([z.string(), z.array(z.string())]).optional(),
  accessModeSufficient: z.union([s.ItemListSchema, z.array(s.ItemListSchema)]).optional(),
  accessibilityAPI: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityControl: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityFeature: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityHazard: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilitySummary: z.union([z.string(), z.array(z.string())]).optional(),
  accountablePerson: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  acquireLicensePage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  alternativeHeadline: z.union([z.string(), z.array(z.string())]).optional(),
  archivedAt: z.union([z.union([z.string().url(), s.WebPageSchema]), z.array(z.union([z.string().url(), s.WebPageSchema]))]).optional(),
  assesses: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  associatedMedia: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  audience: z.union([s.AudienceSchema, z.array(s.AudienceSchema)]).optional(),
  audio: z.union([z.union([s.AudioObjectSchema, s.ClipSchema, s.MusicRecordingSchema]), z.array(z.union([s.AudioObjectSchema, s.ClipSchema, s.MusicRecordingSchema]))]).optional(),
  author: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  awards: z.union([z.string(), z.array(z.string())]).optional(),
  character: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  citation: z.union([z.union([s.CreativeWorkSchema, z.string()]), z.array(z.union([s.CreativeWorkSchema, z.string()]))]).optional(),
  comment: z.union([s.CommentSchema, z.array(s.CommentSchema)]).optional(),
  commentCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  conditionsOfAccess: z.union([z.string(), z.array(z.string())]).optional(),
  contentLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  contentRating: z.union([z.union([s.RatingSchema, z.string()]), z.array(z.union([s.RatingSchema, z.string()]))]).optional(),
  contentReferenceTime: z.union([z.string(), z.array(z.string())]).optional(),
  contributor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  copyrightHolder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  copyrightNotice: z.union([z.string(), z.array(z.string())]).optional(),
  copyrightYear: z.union([z.number(), z.array(z.number())]).optional(),
  correction: z.union([z.union([s.CorrectionCommentSchema, z.string(), z.string().url()]), z.array(z.union([s.CorrectionCommentSchema, z.string(), z.string().url()]))]).optional(),
  countryOfOrigin: z.union([s.CountrySchema, z.array(s.CountrySchema)]).optional(),
  creativeWorkStatus: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  creator: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  creditText: z.union([z.string(), z.array(z.string())]).optional(),
  dateCreated: z.union([z.string(), z.array(z.string())]).optional(),
  dateModified: z.union([z.string(), z.array(z.string())]).optional(),
  datePublished: z.union([z.string(), z.array(z.string())]).optional(),
  digitalSourceType: z.union([s.IPTCDigitalSourceEnumerationSchema, z.array(s.IPTCDigitalSourceEnumerationSchema)]).optional(),
  discussionUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  displayLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  editEIDR: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  editor: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  educationalAlignment: z.union([s.AlignmentObjectSchema, z.array(s.AlignmentObjectSchema)]).optional(),
  educationalLevel: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  educationalUse: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  encoding: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  encodingFormat: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  encodings: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  exampleOfWork: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  expires: z.union([z.string(), z.array(z.string())]).optional(),
  fileFormat: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  funder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  genre: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  hasPart: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  headline: z.union([z.string(), z.array(z.string())]).optional(),
  inLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  interactionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  interactivityType: z.union([z.string(), z.array(z.string())]).optional(),
  interpretedAsClaim: z.union([s.ClaimSchema, z.array(s.ClaimSchema)]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  isBasedOn: z.union([z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]))]).optional(),
  isBasedOnUrl: z.union([z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]))]).optional(),
  isFamilyFriendly: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  isPartOf: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  learningResourceType: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  license: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  locationCreated: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  mainEntity: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  maintainer: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  material: z.union([z.union([s.ProductSchema, z.string(), z.string().url()]), z.array(z.union([s.ProductSchema, z.string(), z.string().url()]))]).optional(),
  materialExtent: z.union([z.union([s.QuantitativeValueSchema, z.string()]), z.array(z.union([s.QuantitativeValueSchema, z.string()]))]).optional(),
  mentions: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  offers: z.union([z.union([s.DemandSchema, s.OfferSchema]), z.array(z.union([s.DemandSchema, s.OfferSchema]))]).optional(),
  pattern: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  position: z.union([z.union([z.number().int(), z.string()]), z.array(z.union([z.number().int(), z.string()]))]).optional(),
  producer: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  provider: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  publication: z.union([s.PublicationEventSchema, z.array(s.PublicationEventSchema)]).optional(),
  publisher: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  publisherImprint: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  publishingPrinciples: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  recordedAt: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  releasedEvent: z.union([s.PublicationEventSchema, z.array(s.PublicationEventSchema)]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  schemaVersion: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  sdDatePublished: z.union([z.string(), z.array(z.string())]).optional(),
  sdLicense: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  sdPublisher: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  size: z.union([z.union([s.DefinedTermSchema, s.QuantitativeValueSchema, s.SizeSpecificationSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, s.QuantitativeValueSchema, s.SizeSpecificationSchema, z.string()]))]).optional(),
  sourceOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  spatial: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  spatialCoverage: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  sponsor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  teaches: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  temporal: z.union([z.string(), z.array(z.string())]).optional(),
  temporalCoverage: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  text: z.union([z.string(), z.array(z.string())]).optional(),
  thumbnail: z.union([s.ImageObjectSchema, z.array(s.ImageObjectSchema)]).optional(),
  thumbnailUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  timeRequired: z.union([s.DurationSchema, z.array(s.DurationSchema)]).optional(),
  translationOfWork: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  translator: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  typicalAgeRange: z.union([z.string(), z.array(z.string())]).optional(),
  usageInfo: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  version: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  video: z.union([z.union([s.ClipSchema, s.VideoObjectSchema]), z.array(z.union([s.ClipSchema, s.VideoObjectSchema]))]).optional(),
  wordCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  workExample: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  workTranslation: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  aggregateElement: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  itemListElement: z.union([z.union([s.ListItemSchema, z.string(), s.ThingSchema]), z.array(z.union([s.ListItemSchema, z.string(), s.ThingSchema]))]).optional(),
  itemListOrder: z.union([z.union([s.ItemListOrderTypeSchema, z.string()]), z.array(z.union([s.ItemListOrderTypeSchema, z.string()]))]).optional(),
  numberOfItems: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  item: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  nextItem: z.union([s.ListItemSchema, z.array(s.ListItemSchema)]).optional(),
  previousItem: z.union([s.ListItemSchema, z.array(s.ListItemSchema)]).optional(),
}));

export interface HowToStep {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  about?: s.Thing | Array<s.Thing>;
  abstract?: string | Array<string>;
  accessMode?: string | Array<string>;
  accessModeSufficient?: s.ItemList | Array<s.ItemList>;
  accessibilityAPI?: string | Array<string>;
  accessibilityControl?: string | Array<string>;
  accessibilityFeature?: string | Array<string>;
  accessibilityHazard?: string | Array<string>;
  accessibilitySummary?: string | Array<string>;
  accountablePerson?: s.Person | Array<s.Person>;
  acquireLicensePage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  alternativeHeadline?: string | Array<string>;
  archivedAt?: string | s.WebPage | Array<string | s.WebPage>;
  assesses?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  associatedMedia?: s.MediaObject | Array<s.MediaObject>;
  audience?: s.Audience | Array<s.Audience>;
  audio?: s.AudioObject | s.Clip | s.MusicRecording | Array<s.AudioObject | s.Clip | s.MusicRecording>;
  author?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  award?: string | Array<string>;
  awards?: string | Array<string>;
  character?: s.Person | Array<s.Person>;
  citation?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  comment?: s.Comment | Array<s.Comment>;
  commentCount?: number | Array<number>;
  conditionsOfAccess?: string | Array<string>;
  contentLocation?: s.Place | Array<s.Place>;
  contentRating?: s.Rating | string | Array<s.Rating | string>;
  contentReferenceTime?: string | Array<string>;
  contributor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  copyrightHolder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  copyrightNotice?: string | Array<string>;
  copyrightYear?: number | Array<number>;
  correction?: s.CorrectionComment | string | Array<s.CorrectionComment | string>;
  countryOfOrigin?: s.Country | Array<s.Country>;
  creativeWorkStatus?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  creator?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  creditText?: string | Array<string>;
  dateCreated?: string | Array<string>;
  dateModified?: string | Array<string>;
  datePublished?: string | Array<string>;
  digitalSourceType?: s.IPTCDigitalSourceEnumeration | Array<s.IPTCDigitalSourceEnumeration>;
  discussionUrl?: string | Array<string>;
  displayLocation?: s.Place | Array<s.Place>;
  editEIDR?: string | Array<string>;
  editor?: s.Person | Array<s.Person>;
  educationalAlignment?: s.AlignmentObject | Array<s.AlignmentObject>;
  educationalLevel?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  educationalUse?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  encoding?: s.MediaObject | Array<s.MediaObject>;
  encodingFormat?: string | Array<string>;
  encodings?: s.MediaObject | Array<s.MediaObject>;
  exampleOfWork?: s.CreativeWork | Array<s.CreativeWork>;
  expires?: string | Array<string>;
  fileFormat?: string | Array<string>;
  funder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  funding?: s.Grant | Array<s.Grant>;
  genre?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  hasPart?: s.CreativeWork | Array<s.CreativeWork>;
  headline?: string | Array<string>;
  inLanguage?: s.Language | string | Array<s.Language | string>;
  interactionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  interactivityType?: string | Array<string>;
  interpretedAsClaim?: s.Claim | Array<s.Claim>;
  isAccessibleForFree?: boolean | Array<boolean>;
  isBasedOn?: s.CreativeWork | s.Product | string | Array<s.CreativeWork | s.Product | string>;
  isBasedOnUrl?: s.CreativeWork | s.Product | string | Array<s.CreativeWork | s.Product | string>;
  isFamilyFriendly?: boolean | Array<boolean>;
  isPartOf?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  learningResourceType?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  license?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  locationCreated?: s.Place | Array<s.Place>;
  mainEntity?: s.Thing | Array<s.Thing>;
  maintainer?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  material?: s.Product | string | Array<s.Product | string>;
  materialExtent?: s.QuantitativeValue | string | Array<s.QuantitativeValue | string>;
  mentions?: s.Thing | Array<s.Thing>;
  offers?: s.Demand | s.Offer | Array<s.Demand | s.Offer>;
  pattern?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  position?: number | string | Array<number | string>;
  producer?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  provider?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  publication?: s.PublicationEvent | Array<s.PublicationEvent>;
  publisher?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  publisherImprint?: s.Organization | Array<s.Organization>;
  publishingPrinciples?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  recordedAt?: s.Event | Array<s.Event>;
  releasedEvent?: s.PublicationEvent | Array<s.PublicationEvent>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  schemaVersion?: string | Array<string>;
  sdDatePublished?: string | Array<string>;
  sdLicense?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  sdPublisher?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  size?: s.DefinedTerm | s.QuantitativeValue | s.SizeSpecification | string | Array<s.DefinedTerm | s.QuantitativeValue | s.SizeSpecification | string>;
  sourceOrganization?: s.Organization | Array<s.Organization>;
  spatial?: s.Place | Array<s.Place>;
  spatialCoverage?: s.Place | Array<s.Place>;
  sponsor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  teaches?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  temporal?: string | Array<string>;
  temporalCoverage?: string | Array<string>;
  text?: string | Array<string>;
  thumbnail?: s.ImageObject | Array<s.ImageObject>;
  thumbnailUrl?: string | Array<string>;
  timeRequired?: s.Duration | Array<s.Duration>;
  translationOfWork?: s.CreativeWork | Array<s.CreativeWork>;
  translator?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  typicalAgeRange?: string | Array<string>;
  usageInfo?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  version?: number | string | Array<number | string>;
  video?: s.Clip | s.VideoObject | Array<s.Clip | s.VideoObject>;
  wordCount?: number | Array<number>;
  workExample?: s.CreativeWork | Array<s.CreativeWork>;
  workTranslation?: s.CreativeWork | Array<s.CreativeWork>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
  aggregateElement?: s.Thing | Array<s.Thing>;
  itemListElement?: s.ListItem | string | s.Thing | Array<s.ListItem | string | s.Thing>;
  itemListOrder?: s.ItemListOrderType | string | Array<s.ItemListOrderType | string>;
  numberOfItems?: number | Array<number>;
  item?: s.Thing | Array<s.Thing>;
  nextItem?: s.ListItem | Array<s.ListItem>;
  previousItem?: s.ListItem | Array<s.ListItem>;
}

export const HowToStepSchema: z.ZodType<HowToStep> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  about: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  abstract: z.union([z.string(), z.array(z.string())]).optional(),
  accessMode: z.union([z.string(), z.array(z.string())]).optional(),
  accessModeSufficient: z.union([s.ItemListSchema, z.array(s.ItemListSchema)]).optional(),
  accessibilityAPI: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityControl: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityFeature: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityHazard: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilitySummary: z.union([z.string(), z.array(z.string())]).optional(),
  accountablePerson: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  acquireLicensePage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  alternativeHeadline: z.union([z.string(), z.array(z.string())]).optional(),
  archivedAt: z.union([z.union([z.string().url(), s.WebPageSchema]), z.array(z.union([z.string().url(), s.WebPageSchema]))]).optional(),
  assesses: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  associatedMedia: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  audience: z.union([s.AudienceSchema, z.array(s.AudienceSchema)]).optional(),
  audio: z.union([z.union([s.AudioObjectSchema, s.ClipSchema, s.MusicRecordingSchema]), z.array(z.union([s.AudioObjectSchema, s.ClipSchema, s.MusicRecordingSchema]))]).optional(),
  author: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  awards: z.union([z.string(), z.array(z.string())]).optional(),
  character: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  citation: z.union([z.union([s.CreativeWorkSchema, z.string()]), z.array(z.union([s.CreativeWorkSchema, z.string()]))]).optional(),
  comment: z.union([s.CommentSchema, z.array(s.CommentSchema)]).optional(),
  commentCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  conditionsOfAccess: z.union([z.string(), z.array(z.string())]).optional(),
  contentLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  contentRating: z.union([z.union([s.RatingSchema, z.string()]), z.array(z.union([s.RatingSchema, z.string()]))]).optional(),
  contentReferenceTime: z.union([z.string(), z.array(z.string())]).optional(),
  contributor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  copyrightHolder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  copyrightNotice: z.union([z.string(), z.array(z.string())]).optional(),
  copyrightYear: z.union([z.number(), z.array(z.number())]).optional(),
  correction: z.union([z.union([s.CorrectionCommentSchema, z.string(), z.string().url()]), z.array(z.union([s.CorrectionCommentSchema, z.string(), z.string().url()]))]).optional(),
  countryOfOrigin: z.union([s.CountrySchema, z.array(s.CountrySchema)]).optional(),
  creativeWorkStatus: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  creator: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  creditText: z.union([z.string(), z.array(z.string())]).optional(),
  dateCreated: z.union([z.string(), z.array(z.string())]).optional(),
  dateModified: z.union([z.string(), z.array(z.string())]).optional(),
  datePublished: z.union([z.string(), z.array(z.string())]).optional(),
  digitalSourceType: z.union([s.IPTCDigitalSourceEnumerationSchema, z.array(s.IPTCDigitalSourceEnumerationSchema)]).optional(),
  discussionUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  displayLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  editEIDR: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  editor: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  educationalAlignment: z.union([s.AlignmentObjectSchema, z.array(s.AlignmentObjectSchema)]).optional(),
  educationalLevel: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  educationalUse: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  encoding: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  encodingFormat: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  encodings: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  exampleOfWork: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  expires: z.union([z.string(), z.array(z.string())]).optional(),
  fileFormat: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  funder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  genre: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  hasPart: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  headline: z.union([z.string(), z.array(z.string())]).optional(),
  inLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  interactionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  interactivityType: z.union([z.string(), z.array(z.string())]).optional(),
  interpretedAsClaim: z.union([s.ClaimSchema, z.array(s.ClaimSchema)]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  isBasedOn: z.union([z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]))]).optional(),
  isBasedOnUrl: z.union([z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]))]).optional(),
  isFamilyFriendly: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  isPartOf: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  learningResourceType: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  license: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  locationCreated: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  mainEntity: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  maintainer: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  material: z.union([z.union([s.ProductSchema, z.string(), z.string().url()]), z.array(z.union([s.ProductSchema, z.string(), z.string().url()]))]).optional(),
  materialExtent: z.union([z.union([s.QuantitativeValueSchema, z.string()]), z.array(z.union([s.QuantitativeValueSchema, z.string()]))]).optional(),
  mentions: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  offers: z.union([z.union([s.DemandSchema, s.OfferSchema]), z.array(z.union([s.DemandSchema, s.OfferSchema]))]).optional(),
  pattern: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  position: z.union([z.union([z.number().int(), z.string()]), z.array(z.union([z.number().int(), z.string()]))]).optional(),
  producer: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  provider: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  publication: z.union([s.PublicationEventSchema, z.array(s.PublicationEventSchema)]).optional(),
  publisher: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  publisherImprint: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  publishingPrinciples: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  recordedAt: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  releasedEvent: z.union([s.PublicationEventSchema, z.array(s.PublicationEventSchema)]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  schemaVersion: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  sdDatePublished: z.union([z.string(), z.array(z.string())]).optional(),
  sdLicense: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  sdPublisher: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  size: z.union([z.union([s.DefinedTermSchema, s.QuantitativeValueSchema, s.SizeSpecificationSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, s.QuantitativeValueSchema, s.SizeSpecificationSchema, z.string()]))]).optional(),
  sourceOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  spatial: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  spatialCoverage: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  sponsor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  teaches: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  temporal: z.union([z.string(), z.array(z.string())]).optional(),
  temporalCoverage: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  text: z.union([z.string(), z.array(z.string())]).optional(),
  thumbnail: z.union([s.ImageObjectSchema, z.array(s.ImageObjectSchema)]).optional(),
  thumbnailUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  timeRequired: z.union([s.DurationSchema, z.array(s.DurationSchema)]).optional(),
  translationOfWork: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  translator: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  typicalAgeRange: z.union([z.string(), z.array(z.string())]).optional(),
  usageInfo: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  version: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  video: z.union([z.union([s.ClipSchema, s.VideoObjectSchema]), z.array(z.union([s.ClipSchema, s.VideoObjectSchema]))]).optional(),
  wordCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  workExample: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  workTranslation: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  aggregateElement: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  itemListElement: z.union([z.union([s.ListItemSchema, z.string(), s.ThingSchema]), z.array(z.union([s.ListItemSchema, z.string(), s.ThingSchema]))]).optional(),
  itemListOrder: z.union([z.union([s.ItemListOrderTypeSchema, z.string()]), z.array(z.union([s.ItemListOrderTypeSchema, z.string()]))]).optional(),
  numberOfItems: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  item: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  nextItem: z.union([s.ListItemSchema, z.array(s.ListItemSchema)]).optional(),
  previousItem: z.union([s.ListItemSchema, z.array(s.ListItemSchema)]).optional(),
}));

export interface HowToSupply {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  estimatedCost?: s.MonetaryAmount | string | Array<s.MonetaryAmount | string>;
  requiredQuantity?: number | s.QuantitativeValue | string | Array<number | s.QuantitativeValue | string>;
  item?: s.Thing | Array<s.Thing>;
  nextItem?: s.ListItem | Array<s.ListItem>;
  position?: number | string | Array<number | string>;
  previousItem?: s.ListItem | Array<s.ListItem>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
}

export const HowToSupplySchema: z.ZodType<HowToSupply> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  estimatedCost: z.union([z.union([s.MonetaryAmountSchema, z.string()]), z.array(z.union([s.MonetaryAmountSchema, z.string()]))]).optional(),
  requiredQuantity: z.union([z.union([z.number(), s.QuantitativeValueSchema, z.string()]), z.array(z.union([z.number(), s.QuantitativeValueSchema, z.string()]))]).optional(),
  item: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  nextItem: z.union([s.ListItemSchema, z.array(s.ListItemSchema)]).optional(),
  position: z.union([z.union([z.number().int(), z.string()]), z.array(z.union([z.number().int(), z.string()]))]).optional(),
  previousItem: z.union([s.ListItemSchema, z.array(s.ListItemSchema)]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface HowToTip {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  about?: s.Thing | Array<s.Thing>;
  abstract?: string | Array<string>;
  accessMode?: string | Array<string>;
  accessModeSufficient?: s.ItemList | Array<s.ItemList>;
  accessibilityAPI?: string | Array<string>;
  accessibilityControl?: string | Array<string>;
  accessibilityFeature?: string | Array<string>;
  accessibilityHazard?: string | Array<string>;
  accessibilitySummary?: string | Array<string>;
  accountablePerson?: s.Person | Array<s.Person>;
  acquireLicensePage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  alternativeHeadline?: string | Array<string>;
  archivedAt?: string | s.WebPage | Array<string | s.WebPage>;
  assesses?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  associatedMedia?: s.MediaObject | Array<s.MediaObject>;
  audience?: s.Audience | Array<s.Audience>;
  audio?: s.AudioObject | s.Clip | s.MusicRecording | Array<s.AudioObject | s.Clip | s.MusicRecording>;
  author?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  award?: string | Array<string>;
  awards?: string | Array<string>;
  character?: s.Person | Array<s.Person>;
  citation?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  comment?: s.Comment | Array<s.Comment>;
  commentCount?: number | Array<number>;
  conditionsOfAccess?: string | Array<string>;
  contentLocation?: s.Place | Array<s.Place>;
  contentRating?: s.Rating | string | Array<s.Rating | string>;
  contentReferenceTime?: string | Array<string>;
  contributor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  copyrightHolder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  copyrightNotice?: string | Array<string>;
  copyrightYear?: number | Array<number>;
  correction?: s.CorrectionComment | string | Array<s.CorrectionComment | string>;
  countryOfOrigin?: s.Country | Array<s.Country>;
  creativeWorkStatus?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  creator?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  creditText?: string | Array<string>;
  dateCreated?: string | Array<string>;
  dateModified?: string | Array<string>;
  datePublished?: string | Array<string>;
  digitalSourceType?: s.IPTCDigitalSourceEnumeration | Array<s.IPTCDigitalSourceEnumeration>;
  discussionUrl?: string | Array<string>;
  displayLocation?: s.Place | Array<s.Place>;
  editEIDR?: string | Array<string>;
  editor?: s.Person | Array<s.Person>;
  educationalAlignment?: s.AlignmentObject | Array<s.AlignmentObject>;
  educationalLevel?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  educationalUse?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  encoding?: s.MediaObject | Array<s.MediaObject>;
  encodingFormat?: string | Array<string>;
  encodings?: s.MediaObject | Array<s.MediaObject>;
  exampleOfWork?: s.CreativeWork | Array<s.CreativeWork>;
  expires?: string | Array<string>;
  fileFormat?: string | Array<string>;
  funder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  funding?: s.Grant | Array<s.Grant>;
  genre?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  hasPart?: s.CreativeWork | Array<s.CreativeWork>;
  headline?: string | Array<string>;
  inLanguage?: s.Language | string | Array<s.Language | string>;
  interactionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  interactivityType?: string | Array<string>;
  interpretedAsClaim?: s.Claim | Array<s.Claim>;
  isAccessibleForFree?: boolean | Array<boolean>;
  isBasedOn?: s.CreativeWork | s.Product | string | Array<s.CreativeWork | s.Product | string>;
  isBasedOnUrl?: s.CreativeWork | s.Product | string | Array<s.CreativeWork | s.Product | string>;
  isFamilyFriendly?: boolean | Array<boolean>;
  isPartOf?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  learningResourceType?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  license?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  locationCreated?: s.Place | Array<s.Place>;
  mainEntity?: s.Thing | Array<s.Thing>;
  maintainer?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  material?: s.Product | string | Array<s.Product | string>;
  materialExtent?: s.QuantitativeValue | string | Array<s.QuantitativeValue | string>;
  mentions?: s.Thing | Array<s.Thing>;
  offers?: s.Demand | s.Offer | Array<s.Demand | s.Offer>;
  pattern?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  position?: number | string | Array<number | string>;
  producer?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  provider?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  publication?: s.PublicationEvent | Array<s.PublicationEvent>;
  publisher?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  publisherImprint?: s.Organization | Array<s.Organization>;
  publishingPrinciples?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  recordedAt?: s.Event | Array<s.Event>;
  releasedEvent?: s.PublicationEvent | Array<s.PublicationEvent>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  schemaVersion?: string | Array<string>;
  sdDatePublished?: string | Array<string>;
  sdLicense?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  sdPublisher?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  size?: s.DefinedTerm | s.QuantitativeValue | s.SizeSpecification | string | Array<s.DefinedTerm | s.QuantitativeValue | s.SizeSpecification | string>;
  sourceOrganization?: s.Organization | Array<s.Organization>;
  spatial?: s.Place | Array<s.Place>;
  spatialCoverage?: s.Place | Array<s.Place>;
  sponsor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  teaches?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  temporal?: string | Array<string>;
  temporalCoverage?: string | Array<string>;
  text?: string | Array<string>;
  thumbnail?: s.ImageObject | Array<s.ImageObject>;
  thumbnailUrl?: string | Array<string>;
  timeRequired?: s.Duration | Array<s.Duration>;
  translationOfWork?: s.CreativeWork | Array<s.CreativeWork>;
  translator?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  typicalAgeRange?: string | Array<string>;
  usageInfo?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  version?: number | string | Array<number | string>;
  video?: s.Clip | s.VideoObject | Array<s.Clip | s.VideoObject>;
  wordCount?: number | Array<number>;
  workExample?: s.CreativeWork | Array<s.CreativeWork>;
  workTranslation?: s.CreativeWork | Array<s.CreativeWork>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
  item?: s.Thing | Array<s.Thing>;
  nextItem?: s.ListItem | Array<s.ListItem>;
  previousItem?: s.ListItem | Array<s.ListItem>;
}

export const HowToTipSchema: z.ZodType<HowToTip> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  about: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  abstract: z.union([z.string(), z.array(z.string())]).optional(),
  accessMode: z.union([z.string(), z.array(z.string())]).optional(),
  accessModeSufficient: z.union([s.ItemListSchema, z.array(s.ItemListSchema)]).optional(),
  accessibilityAPI: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityControl: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityFeature: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityHazard: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilitySummary: z.union([z.string(), z.array(z.string())]).optional(),
  accountablePerson: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  acquireLicensePage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  alternativeHeadline: z.union([z.string(), z.array(z.string())]).optional(),
  archivedAt: z.union([z.union([z.string().url(), s.WebPageSchema]), z.array(z.union([z.string().url(), s.WebPageSchema]))]).optional(),
  assesses: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  associatedMedia: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  audience: z.union([s.AudienceSchema, z.array(s.AudienceSchema)]).optional(),
  audio: z.union([z.union([s.AudioObjectSchema, s.ClipSchema, s.MusicRecordingSchema]), z.array(z.union([s.AudioObjectSchema, s.ClipSchema, s.MusicRecordingSchema]))]).optional(),
  author: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  awards: z.union([z.string(), z.array(z.string())]).optional(),
  character: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  citation: z.union([z.union([s.CreativeWorkSchema, z.string()]), z.array(z.union([s.CreativeWorkSchema, z.string()]))]).optional(),
  comment: z.union([s.CommentSchema, z.array(s.CommentSchema)]).optional(),
  commentCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  conditionsOfAccess: z.union([z.string(), z.array(z.string())]).optional(),
  contentLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  contentRating: z.union([z.union([s.RatingSchema, z.string()]), z.array(z.union([s.RatingSchema, z.string()]))]).optional(),
  contentReferenceTime: z.union([z.string(), z.array(z.string())]).optional(),
  contributor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  copyrightHolder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  copyrightNotice: z.union([z.string(), z.array(z.string())]).optional(),
  copyrightYear: z.union([z.number(), z.array(z.number())]).optional(),
  correction: z.union([z.union([s.CorrectionCommentSchema, z.string(), z.string().url()]), z.array(z.union([s.CorrectionCommentSchema, z.string(), z.string().url()]))]).optional(),
  countryOfOrigin: z.union([s.CountrySchema, z.array(s.CountrySchema)]).optional(),
  creativeWorkStatus: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  creator: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  creditText: z.union([z.string(), z.array(z.string())]).optional(),
  dateCreated: z.union([z.string(), z.array(z.string())]).optional(),
  dateModified: z.union([z.string(), z.array(z.string())]).optional(),
  datePublished: z.union([z.string(), z.array(z.string())]).optional(),
  digitalSourceType: z.union([s.IPTCDigitalSourceEnumerationSchema, z.array(s.IPTCDigitalSourceEnumerationSchema)]).optional(),
  discussionUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  displayLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  editEIDR: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  editor: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  educationalAlignment: z.union([s.AlignmentObjectSchema, z.array(s.AlignmentObjectSchema)]).optional(),
  educationalLevel: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  educationalUse: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  encoding: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  encodingFormat: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  encodings: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  exampleOfWork: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  expires: z.union([z.string(), z.array(z.string())]).optional(),
  fileFormat: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  funder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  genre: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  hasPart: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  headline: z.union([z.string(), z.array(z.string())]).optional(),
  inLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  interactionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  interactivityType: z.union([z.string(), z.array(z.string())]).optional(),
  interpretedAsClaim: z.union([s.ClaimSchema, z.array(s.ClaimSchema)]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  isBasedOn: z.union([z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]))]).optional(),
  isBasedOnUrl: z.union([z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]))]).optional(),
  isFamilyFriendly: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  isPartOf: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  learningResourceType: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  license: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  locationCreated: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  mainEntity: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  maintainer: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  material: z.union([z.union([s.ProductSchema, z.string(), z.string().url()]), z.array(z.union([s.ProductSchema, z.string(), z.string().url()]))]).optional(),
  materialExtent: z.union([z.union([s.QuantitativeValueSchema, z.string()]), z.array(z.union([s.QuantitativeValueSchema, z.string()]))]).optional(),
  mentions: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  offers: z.union([z.union([s.DemandSchema, s.OfferSchema]), z.array(z.union([s.DemandSchema, s.OfferSchema]))]).optional(),
  pattern: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  position: z.union([z.union([z.number().int(), z.string()]), z.array(z.union([z.number().int(), z.string()]))]).optional(),
  producer: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  provider: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  publication: z.union([s.PublicationEventSchema, z.array(s.PublicationEventSchema)]).optional(),
  publisher: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  publisherImprint: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  publishingPrinciples: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  recordedAt: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  releasedEvent: z.union([s.PublicationEventSchema, z.array(s.PublicationEventSchema)]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  schemaVersion: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  sdDatePublished: z.union([z.string(), z.array(z.string())]).optional(),
  sdLicense: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  sdPublisher: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  size: z.union([z.union([s.DefinedTermSchema, s.QuantitativeValueSchema, s.SizeSpecificationSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, s.QuantitativeValueSchema, s.SizeSpecificationSchema, z.string()]))]).optional(),
  sourceOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  spatial: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  spatialCoverage: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  sponsor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  teaches: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  temporal: z.union([z.string(), z.array(z.string())]).optional(),
  temporalCoverage: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  text: z.union([z.string(), z.array(z.string())]).optional(),
  thumbnail: z.union([s.ImageObjectSchema, z.array(s.ImageObjectSchema)]).optional(),
  thumbnailUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  timeRequired: z.union([s.DurationSchema, z.array(s.DurationSchema)]).optional(),
  translationOfWork: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  translator: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  typicalAgeRange: z.union([z.string(), z.array(z.string())]).optional(),
  usageInfo: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  version: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  video: z.union([z.union([s.ClipSchema, s.VideoObjectSchema]), z.array(z.union([s.ClipSchema, s.VideoObjectSchema]))]).optional(),
  wordCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  workExample: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  workTranslation: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  item: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  nextItem: z.union([s.ListItemSchema, z.array(s.ListItemSchema)]).optional(),
  previousItem: z.union([s.ListItemSchema, z.array(s.ListItemSchema)]).optional(),
}));

export interface HowToTool {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  requiredQuantity?: number | s.QuantitativeValue | string | Array<number | s.QuantitativeValue | string>;
  item?: s.Thing | Array<s.Thing>;
  nextItem?: s.ListItem | Array<s.ListItem>;
  position?: number | string | Array<number | string>;
  previousItem?: s.ListItem | Array<s.ListItem>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
}

export const HowToToolSchema: z.ZodType<HowToTool> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  requiredQuantity: z.union([z.union([z.number(), s.QuantitativeValueSchema, z.string()]), z.array(z.union([z.number(), s.QuantitativeValueSchema, z.string()]))]).optional(),
  item: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  nextItem: z.union([s.ListItemSchema, z.array(s.ListItemSchema)]).optional(),
  position: z.union([z.union([z.number().int(), z.string()]), z.array(z.union([z.number().int(), z.string()]))]).optional(),
  previousItem: z.union([s.ListItemSchema, z.array(s.ListItemSchema)]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface HyperToc {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  associatedMedia?: s.MediaObject | Array<s.MediaObject>;
  tocEntry?: s.HyperTocEntry | Array<s.HyperTocEntry>;
  about?: s.Thing | Array<s.Thing>;
  abstract?: string | Array<string>;
  accessMode?: string | Array<string>;
  accessModeSufficient?: s.ItemList | Array<s.ItemList>;
  accessibilityAPI?: string | Array<string>;
  accessibilityControl?: string | Array<string>;
  accessibilityFeature?: string | Array<string>;
  accessibilityHazard?: string | Array<string>;
  accessibilitySummary?: string | Array<string>;
  accountablePerson?: s.Person | Array<s.Person>;
  acquireLicensePage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  alternativeHeadline?: string | Array<string>;
  archivedAt?: string | s.WebPage | Array<string | s.WebPage>;
  assesses?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  audience?: s.Audience | Array<s.Audience>;
  audio?: s.AudioObject | s.Clip | s.MusicRecording | Array<s.AudioObject | s.Clip | s.MusicRecording>;
  author?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  award?: string | Array<string>;
  awards?: string | Array<string>;
  character?: s.Person | Array<s.Person>;
  citation?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  comment?: s.Comment | Array<s.Comment>;
  commentCount?: number | Array<number>;
  conditionsOfAccess?: string | Array<string>;
  contentLocation?: s.Place | Array<s.Place>;
  contentRating?: s.Rating | string | Array<s.Rating | string>;
  contentReferenceTime?: string | Array<string>;
  contributor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  copyrightHolder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  copyrightNotice?: string | Array<string>;
  copyrightYear?: number | Array<number>;
  correction?: s.CorrectionComment | string | Array<s.CorrectionComment | string>;
  countryOfOrigin?: s.Country | Array<s.Country>;
  creativeWorkStatus?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  creator?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  creditText?: string | Array<string>;
  dateCreated?: string | Array<string>;
  dateModified?: string | Array<string>;
  datePublished?: string | Array<string>;
  digitalSourceType?: s.IPTCDigitalSourceEnumeration | Array<s.IPTCDigitalSourceEnumeration>;
  discussionUrl?: string | Array<string>;
  displayLocation?: s.Place | Array<s.Place>;
  editEIDR?: string | Array<string>;
  editor?: s.Person | Array<s.Person>;
  educationalAlignment?: s.AlignmentObject | Array<s.AlignmentObject>;
  educationalLevel?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  educationalUse?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  encoding?: s.MediaObject | Array<s.MediaObject>;
  encodingFormat?: string | Array<string>;
  encodings?: s.MediaObject | Array<s.MediaObject>;
  exampleOfWork?: s.CreativeWork | Array<s.CreativeWork>;
  expires?: string | Array<string>;
  fileFormat?: string | Array<string>;
  funder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  funding?: s.Grant | Array<s.Grant>;
  genre?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  hasPart?: s.CreativeWork | Array<s.CreativeWork>;
  headline?: string | Array<string>;
  inLanguage?: s.Language | string | Array<s.Language | string>;
  interactionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  interactivityType?: string | Array<string>;
  interpretedAsClaim?: s.Claim | Array<s.Claim>;
  isAccessibleForFree?: boolean | Array<boolean>;
  isBasedOn?: s.CreativeWork | s.Product | string | Array<s.CreativeWork | s.Product | string>;
  isBasedOnUrl?: s.CreativeWork | s.Product | string | Array<s.CreativeWork | s.Product | string>;
  isFamilyFriendly?: boolean | Array<boolean>;
  isPartOf?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  learningResourceType?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  license?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  locationCreated?: s.Place | Array<s.Place>;
  mainEntity?: s.Thing | Array<s.Thing>;
  maintainer?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  material?: s.Product | string | Array<s.Product | string>;
  materialExtent?: s.QuantitativeValue | string | Array<s.QuantitativeValue | string>;
  mentions?: s.Thing | Array<s.Thing>;
  offers?: s.Demand | s.Offer | Array<s.Demand | s.Offer>;
  pattern?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  position?: number | string | Array<number | string>;
  producer?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  provider?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  publication?: s.PublicationEvent | Array<s.PublicationEvent>;
  publisher?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  publisherImprint?: s.Organization | Array<s.Organization>;
  publishingPrinciples?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  recordedAt?: s.Event | Array<s.Event>;
  releasedEvent?: s.PublicationEvent | Array<s.PublicationEvent>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  schemaVersion?: string | Array<string>;
  sdDatePublished?: string | Array<string>;
  sdLicense?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  sdPublisher?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  size?: s.DefinedTerm | s.QuantitativeValue | s.SizeSpecification | string | Array<s.DefinedTerm | s.QuantitativeValue | s.SizeSpecification | string>;
  sourceOrganization?: s.Organization | Array<s.Organization>;
  spatial?: s.Place | Array<s.Place>;
  spatialCoverage?: s.Place | Array<s.Place>;
  sponsor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  teaches?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  temporal?: string | Array<string>;
  temporalCoverage?: string | Array<string>;
  text?: string | Array<string>;
  thumbnail?: s.ImageObject | Array<s.ImageObject>;
  thumbnailUrl?: string | Array<string>;
  timeRequired?: s.Duration | Array<s.Duration>;
  translationOfWork?: s.CreativeWork | Array<s.CreativeWork>;
  translator?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  typicalAgeRange?: string | Array<string>;
  usageInfo?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  version?: number | string | Array<number | string>;
  video?: s.Clip | s.VideoObject | Array<s.Clip | s.VideoObject>;
  wordCount?: number | Array<number>;
  workExample?: s.CreativeWork | Array<s.CreativeWork>;
  workTranslation?: s.CreativeWork | Array<s.CreativeWork>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
}

export const HyperTocSchema: z.ZodType<HyperToc> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  associatedMedia: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  tocEntry: z.union([s.HyperTocEntrySchema, z.array(s.HyperTocEntrySchema)]).optional(),
  about: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  abstract: z.union([z.string(), z.array(z.string())]).optional(),
  accessMode: z.union([z.string(), z.array(z.string())]).optional(),
  accessModeSufficient: z.union([s.ItemListSchema, z.array(s.ItemListSchema)]).optional(),
  accessibilityAPI: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityControl: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityFeature: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityHazard: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilitySummary: z.union([z.string(), z.array(z.string())]).optional(),
  accountablePerson: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  acquireLicensePage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  alternativeHeadline: z.union([z.string(), z.array(z.string())]).optional(),
  archivedAt: z.union([z.union([z.string().url(), s.WebPageSchema]), z.array(z.union([z.string().url(), s.WebPageSchema]))]).optional(),
  assesses: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  audience: z.union([s.AudienceSchema, z.array(s.AudienceSchema)]).optional(),
  audio: z.union([z.union([s.AudioObjectSchema, s.ClipSchema, s.MusicRecordingSchema]), z.array(z.union([s.AudioObjectSchema, s.ClipSchema, s.MusicRecordingSchema]))]).optional(),
  author: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  awards: z.union([z.string(), z.array(z.string())]).optional(),
  character: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  citation: z.union([z.union([s.CreativeWorkSchema, z.string()]), z.array(z.union([s.CreativeWorkSchema, z.string()]))]).optional(),
  comment: z.union([s.CommentSchema, z.array(s.CommentSchema)]).optional(),
  commentCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  conditionsOfAccess: z.union([z.string(), z.array(z.string())]).optional(),
  contentLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  contentRating: z.union([z.union([s.RatingSchema, z.string()]), z.array(z.union([s.RatingSchema, z.string()]))]).optional(),
  contentReferenceTime: z.union([z.string(), z.array(z.string())]).optional(),
  contributor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  copyrightHolder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  copyrightNotice: z.union([z.string(), z.array(z.string())]).optional(),
  copyrightYear: z.union([z.number(), z.array(z.number())]).optional(),
  correction: z.union([z.union([s.CorrectionCommentSchema, z.string(), z.string().url()]), z.array(z.union([s.CorrectionCommentSchema, z.string(), z.string().url()]))]).optional(),
  countryOfOrigin: z.union([s.CountrySchema, z.array(s.CountrySchema)]).optional(),
  creativeWorkStatus: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  creator: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  creditText: z.union([z.string(), z.array(z.string())]).optional(),
  dateCreated: z.union([z.string(), z.array(z.string())]).optional(),
  dateModified: z.union([z.string(), z.array(z.string())]).optional(),
  datePublished: z.union([z.string(), z.array(z.string())]).optional(),
  digitalSourceType: z.union([s.IPTCDigitalSourceEnumerationSchema, z.array(s.IPTCDigitalSourceEnumerationSchema)]).optional(),
  discussionUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  displayLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  editEIDR: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  editor: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  educationalAlignment: z.union([s.AlignmentObjectSchema, z.array(s.AlignmentObjectSchema)]).optional(),
  educationalLevel: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  educationalUse: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  encoding: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  encodingFormat: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  encodings: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  exampleOfWork: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  expires: z.union([z.string(), z.array(z.string())]).optional(),
  fileFormat: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  funder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  genre: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  hasPart: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  headline: z.union([z.string(), z.array(z.string())]).optional(),
  inLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  interactionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  interactivityType: z.union([z.string(), z.array(z.string())]).optional(),
  interpretedAsClaim: z.union([s.ClaimSchema, z.array(s.ClaimSchema)]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  isBasedOn: z.union([z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]))]).optional(),
  isBasedOnUrl: z.union([z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]))]).optional(),
  isFamilyFriendly: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  isPartOf: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  learningResourceType: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  license: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  locationCreated: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  mainEntity: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  maintainer: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  material: z.union([z.union([s.ProductSchema, z.string(), z.string().url()]), z.array(z.union([s.ProductSchema, z.string(), z.string().url()]))]).optional(),
  materialExtent: z.union([z.union([s.QuantitativeValueSchema, z.string()]), z.array(z.union([s.QuantitativeValueSchema, z.string()]))]).optional(),
  mentions: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  offers: z.union([z.union([s.DemandSchema, s.OfferSchema]), z.array(z.union([s.DemandSchema, s.OfferSchema]))]).optional(),
  pattern: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  position: z.union([z.union([z.number().int(), z.string()]), z.array(z.union([z.number().int(), z.string()]))]).optional(),
  producer: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  provider: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  publication: z.union([s.PublicationEventSchema, z.array(s.PublicationEventSchema)]).optional(),
  publisher: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  publisherImprint: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  publishingPrinciples: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  recordedAt: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  releasedEvent: z.union([s.PublicationEventSchema, z.array(s.PublicationEventSchema)]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  schemaVersion: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  sdDatePublished: z.union([z.string(), z.array(z.string())]).optional(),
  sdLicense: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  sdPublisher: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  size: z.union([z.union([s.DefinedTermSchema, s.QuantitativeValueSchema, s.SizeSpecificationSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, s.QuantitativeValueSchema, s.SizeSpecificationSchema, z.string()]))]).optional(),
  sourceOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  spatial: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  spatialCoverage: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  sponsor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  teaches: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  temporal: z.union([z.string(), z.array(z.string())]).optional(),
  temporalCoverage: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  text: z.union([z.string(), z.array(z.string())]).optional(),
  thumbnail: z.union([s.ImageObjectSchema, z.array(s.ImageObjectSchema)]).optional(),
  thumbnailUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  timeRequired: z.union([s.DurationSchema, z.array(s.DurationSchema)]).optional(),
  translationOfWork: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  translator: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  typicalAgeRange: z.union([z.string(), z.array(z.string())]).optional(),
  usageInfo: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  version: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  video: z.union([z.union([s.ClipSchema, s.VideoObjectSchema]), z.array(z.union([s.ClipSchema, s.VideoObjectSchema]))]).optional(),
  wordCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  workExample: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  workTranslation: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));

export interface HyperTocEntry {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  associatedMedia?: s.MediaObject | Array<s.MediaObject>;
  tocContinuation?: s.HyperTocEntry | Array<s.HyperTocEntry>;
  utterances?: string | Array<string>;
  about?: s.Thing | Array<s.Thing>;
  abstract?: string | Array<string>;
  accessMode?: string | Array<string>;
  accessModeSufficient?: s.ItemList | Array<s.ItemList>;
  accessibilityAPI?: string | Array<string>;
  accessibilityControl?: string | Array<string>;
  accessibilityFeature?: string | Array<string>;
  accessibilityHazard?: string | Array<string>;
  accessibilitySummary?: string | Array<string>;
  accountablePerson?: s.Person | Array<s.Person>;
  acquireLicensePage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  alternativeHeadline?: string | Array<string>;
  archivedAt?: string | s.WebPage | Array<string | s.WebPage>;
  assesses?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  audience?: s.Audience | Array<s.Audience>;
  audio?: s.AudioObject | s.Clip | s.MusicRecording | Array<s.AudioObject | s.Clip | s.MusicRecording>;
  author?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  award?: string | Array<string>;
  awards?: string | Array<string>;
  character?: s.Person | Array<s.Person>;
  citation?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  comment?: s.Comment | Array<s.Comment>;
  commentCount?: number | Array<number>;
  conditionsOfAccess?: string | Array<string>;
  contentLocation?: s.Place | Array<s.Place>;
  contentRating?: s.Rating | string | Array<s.Rating | string>;
  contentReferenceTime?: string | Array<string>;
  contributor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  copyrightHolder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  copyrightNotice?: string | Array<string>;
  copyrightYear?: number | Array<number>;
  correction?: s.CorrectionComment | string | Array<s.CorrectionComment | string>;
  countryOfOrigin?: s.Country | Array<s.Country>;
  creativeWorkStatus?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  creator?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  creditText?: string | Array<string>;
  dateCreated?: string | Array<string>;
  dateModified?: string | Array<string>;
  datePublished?: string | Array<string>;
  digitalSourceType?: s.IPTCDigitalSourceEnumeration | Array<s.IPTCDigitalSourceEnumeration>;
  discussionUrl?: string | Array<string>;
  displayLocation?: s.Place | Array<s.Place>;
  editEIDR?: string | Array<string>;
  editor?: s.Person | Array<s.Person>;
  educationalAlignment?: s.AlignmentObject | Array<s.AlignmentObject>;
  educationalLevel?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  educationalUse?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  encoding?: s.MediaObject | Array<s.MediaObject>;
  encodingFormat?: string | Array<string>;
  encodings?: s.MediaObject | Array<s.MediaObject>;
  exampleOfWork?: s.CreativeWork | Array<s.CreativeWork>;
  expires?: string | Array<string>;
  fileFormat?: string | Array<string>;
  funder?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  funding?: s.Grant | Array<s.Grant>;
  genre?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  hasPart?: s.CreativeWork | Array<s.CreativeWork>;
  headline?: string | Array<string>;
  inLanguage?: s.Language | string | Array<s.Language | string>;
  interactionStatistic?: s.InteractionCounter | Array<s.InteractionCounter>;
  interactivityType?: string | Array<string>;
  interpretedAsClaim?: s.Claim | Array<s.Claim>;
  isAccessibleForFree?: boolean | Array<boolean>;
  isBasedOn?: s.CreativeWork | s.Product | string | Array<s.CreativeWork | s.Product | string>;
  isBasedOnUrl?: s.CreativeWork | s.Product | string | Array<s.CreativeWork | s.Product | string>;
  isFamilyFriendly?: boolean | Array<boolean>;
  isPartOf?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  learningResourceType?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  license?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  locationCreated?: s.Place | Array<s.Place>;
  mainEntity?: s.Thing | Array<s.Thing>;
  maintainer?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  material?: s.Product | string | Array<s.Product | string>;
  materialExtent?: s.QuantitativeValue | string | Array<s.QuantitativeValue | string>;
  mentions?: s.Thing | Array<s.Thing>;
  offers?: s.Demand | s.Offer | Array<s.Demand | s.Offer>;
  pattern?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  position?: number | string | Array<number | string>;
  producer?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  provider?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  publication?: s.PublicationEvent | Array<s.PublicationEvent>;
  publisher?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  publisherImprint?: s.Organization | Array<s.Organization>;
  publishingPrinciples?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  recordedAt?: s.Event | Array<s.Event>;
  releasedEvent?: s.PublicationEvent | Array<s.PublicationEvent>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  schemaVersion?: string | Array<string>;
  sdDatePublished?: string | Array<string>;
  sdLicense?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  sdPublisher?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  size?: s.DefinedTerm | s.QuantitativeValue | s.SizeSpecification | string | Array<s.DefinedTerm | s.QuantitativeValue | s.SizeSpecification | string>;
  sourceOrganization?: s.Organization | Array<s.Organization>;
  spatial?: s.Place | Array<s.Place>;
  spatialCoverage?: s.Place | Array<s.Place>;
  sponsor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  teaches?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  temporal?: string | Array<string>;
  temporalCoverage?: string | Array<string>;
  text?: string | Array<string>;
  thumbnail?: s.ImageObject | Array<s.ImageObject>;
  thumbnailUrl?: string | Array<string>;
  timeRequired?: s.Duration | Array<s.Duration>;
  translationOfWork?: s.CreativeWork | Array<s.CreativeWork>;
  translator?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  typicalAgeRange?: string | Array<string>;
  usageInfo?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  version?: number | string | Array<number | string>;
  video?: s.Clip | s.VideoObject | Array<s.Clip | s.VideoObject>;
  wordCount?: number | Array<number>;
  workExample?: s.CreativeWork | Array<s.CreativeWork>;
  workTranslation?: s.CreativeWork | Array<s.CreativeWork>;
  additionalType?: string | Array<string>;
  alternateName?: string | Array<string>;
  description?: string | s.TextObject | Array<string | s.TextObject>;
  disambiguatingDescription?: string | Array<string>;
  identifier?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  image?: s.ImageObject | string | Array<s.ImageObject | string>;
  mainEntityOfPage?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  name?: string | Array<string>;
  owner?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  potentialAction?: s.Action | Array<s.Action>;
  sameAs?: string | Array<string>;
  subjectOf?: s.CreativeWork | s.Event | Array<s.CreativeWork | s.Event>;
  url?: string | Array<string>;
}

export const HyperTocEntrySchema: z.ZodType<HyperTocEntry> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  associatedMedia: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  tocContinuation: z.union([s.HyperTocEntrySchema, z.array(s.HyperTocEntrySchema)]).optional(),
  utterances: z.union([z.string(), z.array(z.string())]).optional(),
  about: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  abstract: z.union([z.string(), z.array(z.string())]).optional(),
  accessMode: z.union([z.string(), z.array(z.string())]).optional(),
  accessModeSufficient: z.union([s.ItemListSchema, z.array(s.ItemListSchema)]).optional(),
  accessibilityAPI: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityControl: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityFeature: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilityHazard: z.union([z.string(), z.array(z.string())]).optional(),
  accessibilitySummary: z.union([z.string(), z.array(z.string())]).optional(),
  accountablePerson: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  acquireLicensePage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  alternativeHeadline: z.union([z.string(), z.array(z.string())]).optional(),
  archivedAt: z.union([z.union([z.string().url(), s.WebPageSchema]), z.array(z.union([z.string().url(), s.WebPageSchema]))]).optional(),
  assesses: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  audience: z.union([s.AudienceSchema, z.array(s.AudienceSchema)]).optional(),
  audio: z.union([z.union([s.AudioObjectSchema, s.ClipSchema, s.MusicRecordingSchema]), z.array(z.union([s.AudioObjectSchema, s.ClipSchema, s.MusicRecordingSchema]))]).optional(),
  author: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  awards: z.union([z.string(), z.array(z.string())]).optional(),
  character: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  citation: z.union([z.union([s.CreativeWorkSchema, z.string()]), z.array(z.union([s.CreativeWorkSchema, z.string()]))]).optional(),
  comment: z.union([s.CommentSchema, z.array(s.CommentSchema)]).optional(),
  commentCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  conditionsOfAccess: z.union([z.string(), z.array(z.string())]).optional(),
  contentLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  contentRating: z.union([z.union([s.RatingSchema, z.string()]), z.array(z.union([s.RatingSchema, z.string()]))]).optional(),
  contentReferenceTime: z.union([z.string(), z.array(z.string())]).optional(),
  contributor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  copyrightHolder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  copyrightNotice: z.union([z.string(), z.array(z.string())]).optional(),
  copyrightYear: z.union([z.number(), z.array(z.number())]).optional(),
  correction: z.union([z.union([s.CorrectionCommentSchema, z.string(), z.string().url()]), z.array(z.union([s.CorrectionCommentSchema, z.string(), z.string().url()]))]).optional(),
  countryOfOrigin: z.union([s.CountrySchema, z.array(s.CountrySchema)]).optional(),
  creativeWorkStatus: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  creator: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  creditText: z.union([z.string(), z.array(z.string())]).optional(),
  dateCreated: z.union([z.string(), z.array(z.string())]).optional(),
  dateModified: z.union([z.string(), z.array(z.string())]).optional(),
  datePublished: z.union([z.string(), z.array(z.string())]).optional(),
  digitalSourceType: z.union([s.IPTCDigitalSourceEnumerationSchema, z.array(s.IPTCDigitalSourceEnumerationSchema)]).optional(),
  discussionUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  displayLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  editEIDR: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  editor: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  educationalAlignment: z.union([s.AlignmentObjectSchema, z.array(s.AlignmentObjectSchema)]).optional(),
  educationalLevel: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  educationalUse: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  encoding: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  encodingFormat: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  encodings: z.union([s.MediaObjectSchema, z.array(s.MediaObjectSchema)]).optional(),
  exampleOfWork: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  expires: z.union([z.string(), z.array(z.string())]).optional(),
  fileFormat: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  funder: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  genre: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  hasPart: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  headline: z.union([z.string(), z.array(z.string())]).optional(),
  inLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  interactionStatistic: z.union([s.InteractionCounterSchema, z.array(s.InteractionCounterSchema)]).optional(),
  interactivityType: z.union([z.string(), z.array(z.string())]).optional(),
  interpretedAsClaim: z.union([s.ClaimSchema, z.array(s.ClaimSchema)]).optional(),
  isAccessibleForFree: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  isBasedOn: z.union([z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]))]).optional(),
  isBasedOnUrl: z.union([z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, s.ProductSchema, z.string().url()]))]).optional(),
  isFamilyFriendly: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  isPartOf: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  learningResourceType: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  license: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  locationCreated: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  mainEntity: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  maintainer: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  material: z.union([z.union([s.ProductSchema, z.string(), z.string().url()]), z.array(z.union([s.ProductSchema, z.string(), z.string().url()]))]).optional(),
  materialExtent: z.union([z.union([s.QuantitativeValueSchema, z.string()]), z.array(z.union([s.QuantitativeValueSchema, z.string()]))]).optional(),
  mentions: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  offers: z.union([z.union([s.DemandSchema, s.OfferSchema]), z.array(z.union([s.DemandSchema, s.OfferSchema]))]).optional(),
  pattern: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  position: z.union([z.union([z.number().int(), z.string()]), z.array(z.union([z.number().int(), z.string()]))]).optional(),
  producer: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  provider: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  publication: z.union([s.PublicationEventSchema, z.array(s.PublicationEventSchema)]).optional(),
  publisher: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  publisherImprint: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  publishingPrinciples: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  recordedAt: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  releasedEvent: z.union([s.PublicationEventSchema, z.array(s.PublicationEventSchema)]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  schemaVersion: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  sdDatePublished: z.union([z.string(), z.array(z.string())]).optional(),
  sdLicense: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  sdPublisher: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  size: z.union([z.union([s.DefinedTermSchema, s.QuantitativeValueSchema, s.SizeSpecificationSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, s.QuantitativeValueSchema, s.SizeSpecificationSchema, z.string()]))]).optional(),
  sourceOrganization: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  spatial: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  spatialCoverage: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  sponsor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  teaches: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  temporal: z.union([z.string(), z.array(z.string())]).optional(),
  temporalCoverage: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  text: z.union([z.string(), z.array(z.string())]).optional(),
  thumbnail: z.union([s.ImageObjectSchema, z.array(s.ImageObjectSchema)]).optional(),
  thumbnailUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  timeRequired: z.union([s.DurationSchema, z.array(s.DurationSchema)]).optional(),
  translationOfWork: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  translator: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  typicalAgeRange: z.union([z.string(), z.array(z.string())]).optional(),
  usageInfo: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  version: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  video: z.union([z.union([s.ClipSchema, s.VideoObjectSchema]), z.array(z.union([s.ClipSchema, s.VideoObjectSchema]))]).optional(),
  wordCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  workExample: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  workTranslation: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  additionalType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  alternateName: z.union([z.string(), z.array(z.string())]).optional(),
  description: z.union([z.union([z.string(), s.TextObjectSchema]), z.array(z.union([z.string(), s.TextObjectSchema]))]).optional(),
  disambiguatingDescription: z.union([z.string(), z.array(z.string())]).optional(),
  identifier: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  image: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  mainEntityOfPage: z.union([z.union([s.CreativeWorkSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSchema, z.string().url()]))]).optional(),
  name: z.union([z.string(), z.array(z.string())]).optional(),
  owner: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  potentialAction: z.union([s.ActionSchema, z.array(s.ActionSchema)]).optional(),
  sameAs: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  subjectOf: z.union([z.union([s.CreativeWorkSchema, s.EventSchema]), z.array(z.union([s.CreativeWorkSchema, s.EventSchema]))]).optional(),
  url: z.union([z.string().url(), z.array(z.string().url())]).optional(),
}));
