import { z } from 'zod';
import * as s from './index';

export interface VacationRental {
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

export const VacationRentalSchema: z.ZodType<VacationRental> = z.lazy(() => z.object({
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

export interface Vehicle {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  accelerationTime?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  bodyType?: s.QualitativeValue | string | Array<s.QualitativeValue | string>;
  callSign?: string | Array<string>;
  cargoVolume?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  dateVehicleFirstRegistered?: string | Array<string>;
  driveWheelConfiguration?: s.DriveWheelConfigurationValue | string | Array<s.DriveWheelConfigurationValue | string>;
  emissionsCO2?: number | Array<number>;
  fuelCapacity?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  fuelConsumption?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  fuelEfficiency?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  fuelType?: s.QualitativeValue | string | Array<s.QualitativeValue | string>;
  knownVehicleDamages?: string | Array<string>;
  meetsEmissionStandard?: s.QualitativeValue | string | Array<s.QualitativeValue | string>;
  mileageFromOdometer?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  modelDate?: string | Array<string>;
  numberOfAirbags?: number | string | Array<number | string>;
  numberOfAxles?: number | s.QuantitativeValue | Array<number | s.QuantitativeValue>;
  numberOfDoors?: number | s.QuantitativeValue | Array<number | s.QuantitativeValue>;
  numberOfForwardGears?: number | s.QuantitativeValue | Array<number | s.QuantitativeValue>;
  numberOfPreviousOwners?: number | s.QuantitativeValue | Array<number | s.QuantitativeValue>;
  payload?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  productionDate?: string | Array<string>;
  purchaseDate?: string | Array<string>;
  seatingCapacity?: number | s.QuantitativeValue | Array<number | s.QuantitativeValue>;
  speed?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  steeringPosition?: s.SteeringPositionValue | Array<s.SteeringPositionValue>;
  tongueWeight?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  trailerWeight?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  vehicleConfiguration?: string | Array<string>;
  vehicleEngine?: s.EngineSpecification | Array<s.EngineSpecification>;
  vehicleIdentificationNumber?: string | Array<string>;
  vehicleInteriorColor?: string | Array<string>;
  vehicleInteriorType?: string | Array<string>;
  vehicleModelDate?: string | Array<string>;
  vehicleSeatingCapacity?: number | s.QuantitativeValue | Array<number | s.QuantitativeValue>;
  vehicleSpecialUsage?: s.CarUsageType | string | Array<s.CarUsageType | string>;
  vehicleTransmission?: s.QualitativeValue | string | Array<s.QualitativeValue | string>;
  weightTotal?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  wheelbase?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  additionalProperty?: s.PropertyValue | Array<s.PropertyValue>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  asin?: string | Array<string>;
  audience?: s.Audience | Array<s.Audience>;
  award?: string | Array<string>;
  awards?: string | Array<string>;
  brand?: s.Brand | s.Organization | Array<s.Brand | s.Organization>;
  category?: s.CategoryCode | s.PhysicalActivityCategory | string | s.Thing | Array<s.CategoryCode | s.PhysicalActivityCategory | string | s.Thing>;
  color?: string | Array<string>;
  colorSwatch?: s.ImageObject | string | Array<s.ImageObject | string>;
  countryOfAssembly?: string | Array<string>;
  countryOfLastProcessing?: string | Array<string>;
  countryOfOrigin?: s.Country | Array<s.Country>;
  depth?: s.Distance | s.QuantitativeValue | Array<s.Distance | s.QuantitativeValue>;
  displayLocation?: s.Place | Array<s.Place>;
  funding?: s.Grant | Array<s.Grant>;
  gtin?: string | Array<string>;
  gtin12?: string | Array<string>;
  gtin13?: string | Array<string>;
  gtin14?: string | Array<string>;
  gtin8?: string | Array<string>;
  hasAdultConsideration?: s.AdultOrientedEnumeration | Array<s.AdultOrientedEnumeration>;
  hasCertification?: s.Certification | Array<s.Certification>;
  hasEnergyConsumptionDetails?: s.EnergyConsumptionDetails | Array<s.EnergyConsumptionDetails>;
  hasGS1DigitalLink?: string | Array<string>;
  hasMeasurement?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  hasMerchantReturnPolicy?: s.MerchantReturnPolicy | Array<s.MerchantReturnPolicy>;
  height?: s.Distance | s.QuantitativeValue | Array<s.Distance | s.QuantitativeValue>;
  inProductGroupWithID?: string | Array<string>;
  isAccessoryOrSparePartFor?: s.Product | Array<s.Product>;
  isConsumableFor?: s.Product | Array<s.Product>;
  isFamilyFriendly?: boolean | Array<boolean>;
  isRelatedTo?: s.Product | s.Service | Array<s.Product | s.Service>;
  isSimilarTo?: s.Product | s.Service | Array<s.Product | s.Service>;
  isVariantOf?: s.ProductGroup | s.ProductModel | Array<s.ProductGroup | s.ProductModel>;
  itemCondition?: s.OfferItemCondition | Array<s.OfferItemCondition>;
  keywords?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  logo?: s.ImageObject | string | Array<s.ImageObject | string>;
  manufacturer?: s.Organization | Array<s.Organization>;
  material?: s.Product | string | Array<s.Product | string>;
  mobileUrl?: string | Array<string>;
  model?: s.ProductModel | string | Array<s.ProductModel | string>;
  mpn?: string | Array<string>;
  negativeNotes?: s.ItemList | s.ListItem | string | s.WebContent | Array<s.ItemList | s.ListItem | string | s.WebContent>;
  nsn?: string | Array<string>;
  offers?: s.Demand | s.Offer | Array<s.Demand | s.Offer>;
  pattern?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  positiveNotes?: s.ItemList | s.ListItem | string | s.WebContent | Array<s.ItemList | s.ListItem | string | s.WebContent>;
  productID?: string | Array<string>;
  releaseDate?: string | Array<string>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  size?: s.DefinedTerm | s.QuantitativeValue | s.SizeSpecification | string | Array<s.DefinedTerm | s.QuantitativeValue | s.SizeSpecification | string>;
  sku?: string | Array<string>;
  slogan?: string | Array<string>;
  weight?: s.Mass | s.QuantitativeValue | Array<s.Mass | s.QuantitativeValue>;
  width?: s.Distance | s.QuantitativeValue | Array<s.Distance | s.QuantitativeValue>;
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

export const VehicleSchema: z.ZodType<Vehicle> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  accelerationTime: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  bodyType: z.union([z.union([s.QualitativeValueSchema, z.string(), z.string().url()]), z.array(z.union([s.QualitativeValueSchema, z.string(), z.string().url()]))]).optional(),
  callSign: z.union([z.string(), z.array(z.string())]).optional(),
  cargoVolume: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  dateVehicleFirstRegistered: z.union([z.string(), z.array(z.string())]).optional(),
  driveWheelConfiguration: z.union([z.union([s.DriveWheelConfigurationValueSchema, z.string()]), z.array(z.union([s.DriveWheelConfigurationValueSchema, z.string()]))]).optional(),
  emissionsCO2: z.union([z.number(), z.array(z.number())]).optional(),
  fuelCapacity: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  fuelConsumption: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  fuelEfficiency: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  fuelType: z.union([z.union([s.QualitativeValueSchema, z.string(), z.string().url()]), z.array(z.union([s.QualitativeValueSchema, z.string(), z.string().url()]))]).optional(),
  knownVehicleDamages: z.union([z.string(), z.array(z.string())]).optional(),
  meetsEmissionStandard: z.union([z.union([s.QualitativeValueSchema, z.string(), z.string().url()]), z.array(z.union([s.QualitativeValueSchema, z.string(), z.string().url()]))]).optional(),
  mileageFromOdometer: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  modelDate: z.union([z.string(), z.array(z.string())]).optional(),
  numberOfAirbags: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  numberOfAxles: z.union([z.union([z.number(), s.QuantitativeValueSchema]), z.array(z.union([z.number(), s.QuantitativeValueSchema]))]).optional(),
  numberOfDoors: z.union([z.union([z.number(), s.QuantitativeValueSchema]), z.array(z.union([z.number(), s.QuantitativeValueSchema]))]).optional(),
  numberOfForwardGears: z.union([z.union([z.number(), s.QuantitativeValueSchema]), z.array(z.union([z.number(), s.QuantitativeValueSchema]))]).optional(),
  numberOfPreviousOwners: z.union([z.union([z.number(), s.QuantitativeValueSchema]), z.array(z.union([z.number(), s.QuantitativeValueSchema]))]).optional(),
  payload: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  productionDate: z.union([z.string(), z.array(z.string())]).optional(),
  purchaseDate: z.union([z.string(), z.array(z.string())]).optional(),
  seatingCapacity: z.union([z.union([z.number(), s.QuantitativeValueSchema]), z.array(z.union([z.number(), s.QuantitativeValueSchema]))]).optional(),
  speed: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  steeringPosition: z.union([s.SteeringPositionValueSchema, z.array(s.SteeringPositionValueSchema)]).optional(),
  tongueWeight: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  trailerWeight: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  vehicleConfiguration: z.union([z.string(), z.array(z.string())]).optional(),
  vehicleEngine: z.union([s.EngineSpecificationSchema, z.array(s.EngineSpecificationSchema)]).optional(),
  vehicleIdentificationNumber: z.union([z.string(), z.array(z.string())]).optional(),
  vehicleInteriorColor: z.union([z.string(), z.array(z.string())]).optional(),
  vehicleInteriorType: z.union([z.string(), z.array(z.string())]).optional(),
  vehicleModelDate: z.union([z.string(), z.array(z.string())]).optional(),
  vehicleSeatingCapacity: z.union([z.union([z.number(), s.QuantitativeValueSchema]), z.array(z.union([z.number(), s.QuantitativeValueSchema]))]).optional(),
  vehicleSpecialUsage: z.union([z.union([s.CarUsageTypeSchema, z.string()]), z.array(z.union([s.CarUsageTypeSchema, z.string()]))]).optional(),
  vehicleTransmission: z.union([z.union([s.QualitativeValueSchema, z.string(), z.string().url()]), z.array(z.union([s.QualitativeValueSchema, z.string(), z.string().url()]))]).optional(),
  weightTotal: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  wheelbase: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  additionalProperty: z.union([s.PropertyValueSchema, z.array(s.PropertyValueSchema)]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  asin: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  audience: z.union([s.AudienceSchema, z.array(s.AudienceSchema)]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  awards: z.union([z.string(), z.array(z.string())]).optional(),
  brand: z.union([z.union([s.BrandSchema, s.OrganizationSchema]), z.array(z.union([s.BrandSchema, s.OrganizationSchema]))]).optional(),
  category: z.union([z.union([s.CategoryCodeSchema, s.PhysicalActivityCategorySchema, z.string(), s.ThingSchema, z.string().url()]), z.array(z.union([s.CategoryCodeSchema, s.PhysicalActivityCategorySchema, z.string(), s.ThingSchema, z.string().url()]))]).optional(),
  color: z.union([z.string(), z.array(z.string())]).optional(),
  colorSwatch: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  countryOfAssembly: z.union([z.string(), z.array(z.string())]).optional(),
  countryOfLastProcessing: z.union([z.string(), z.array(z.string())]).optional(),
  countryOfOrigin: z.union([s.CountrySchema, z.array(s.CountrySchema)]).optional(),
  depth: z.union([z.union([s.DistanceSchema, s.QuantitativeValueSchema]), z.array(z.union([s.DistanceSchema, s.QuantitativeValueSchema]))]).optional(),
  displayLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  gtin: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  gtin12: z.union([z.string(), z.array(z.string())]).optional(),
  gtin13: z.union([z.string(), z.array(z.string())]).optional(),
  gtin14: z.union([z.string(), z.array(z.string())]).optional(),
  gtin8: z.union([z.string(), z.array(z.string())]).optional(),
  hasAdultConsideration: z.union([s.AdultOrientedEnumerationSchema, z.array(s.AdultOrientedEnumerationSchema)]).optional(),
  hasCertification: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  hasEnergyConsumptionDetails: z.union([s.EnergyConsumptionDetailsSchema, z.array(s.EnergyConsumptionDetailsSchema)]).optional(),
  hasGS1DigitalLink: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  hasMeasurement: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  hasMerchantReturnPolicy: z.union([s.MerchantReturnPolicySchema, z.array(s.MerchantReturnPolicySchema)]).optional(),
  height: z.union([z.union([s.DistanceSchema, s.QuantitativeValueSchema]), z.array(z.union([s.DistanceSchema, s.QuantitativeValueSchema]))]).optional(),
  inProductGroupWithID: z.union([z.string(), z.array(z.string())]).optional(),
  isAccessoryOrSparePartFor: z.union([s.ProductSchema, z.array(s.ProductSchema)]).optional(),
  isConsumableFor: z.union([s.ProductSchema, z.array(s.ProductSchema)]).optional(),
  isFamilyFriendly: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  isRelatedTo: z.union([z.union([s.ProductSchema, s.ServiceSchema]), z.array(z.union([s.ProductSchema, s.ServiceSchema]))]).optional(),
  isSimilarTo: z.union([z.union([s.ProductSchema, s.ServiceSchema]), z.array(z.union([s.ProductSchema, s.ServiceSchema]))]).optional(),
  isVariantOf: z.union([z.union([s.ProductGroupSchema, s.ProductModelSchema]), z.array(z.union([s.ProductGroupSchema, s.ProductModelSchema]))]).optional(),
  itemCondition: z.union([s.OfferItemConditionSchema, z.array(s.OfferItemConditionSchema)]).optional(),
  keywords: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  logo: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  manufacturer: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  material: z.union([z.union([s.ProductSchema, z.string(), z.string().url()]), z.array(z.union([s.ProductSchema, z.string(), z.string().url()]))]).optional(),
  mobileUrl: z.union([z.string(), z.array(z.string())]).optional(),
  model: z.union([z.union([s.ProductModelSchema, z.string()]), z.array(z.union([s.ProductModelSchema, z.string()]))]).optional(),
  mpn: z.union([z.string(), z.array(z.string())]).optional(),
  negativeNotes: z.union([z.union([s.ItemListSchema, s.ListItemSchema, z.string(), s.WebContentSchema]), z.array(z.union([s.ItemListSchema, s.ListItemSchema, z.string(), s.WebContentSchema]))]).optional(),
  nsn: z.union([z.string(), z.array(z.string())]).optional(),
  offers: z.union([z.union([s.DemandSchema, s.OfferSchema]), z.array(z.union([s.DemandSchema, s.OfferSchema]))]).optional(),
  pattern: z.union([z.union([s.DefinedTermSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, z.string()]))]).optional(),
  positiveNotes: z.union([z.union([s.ItemListSchema, s.ListItemSchema, z.string(), s.WebContentSchema]), z.array(z.union([s.ItemListSchema, s.ListItemSchema, z.string(), s.WebContentSchema]))]).optional(),
  productID: z.union([z.string(), z.array(z.string())]).optional(),
  releaseDate: z.union([z.string(), z.array(z.string())]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  size: z.union([z.union([s.DefinedTermSchema, s.QuantitativeValueSchema, s.SizeSpecificationSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, s.QuantitativeValueSchema, s.SizeSpecificationSchema, z.string()]))]).optional(),
  sku: z.union([z.string(), z.array(z.string())]).optional(),
  slogan: z.union([z.string(), z.array(z.string())]).optional(),
  weight: z.union([z.union([s.MassSchema, s.QuantitativeValueSchema]), z.array(z.union([s.MassSchema, s.QuantitativeValueSchema]))]).optional(),
  width: z.union([z.union([s.DistanceSchema, s.QuantitativeValueSchema]), z.array(z.union([s.DistanceSchema, s.QuantitativeValueSchema]))]).optional(),
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

export interface Vein {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  drainsTo?: s.Vessel | Array<s.Vessel>;
  regionDrained?: s.AnatomicalStructure | s.AnatomicalSystem | Array<s.AnatomicalStructure | s.AnatomicalSystem>;
  tributary?: s.AnatomicalStructure | Array<s.AnatomicalStructure>;
  associatedPathophysiology?: string | Array<string>;
  bodyLocation?: string | Array<string>;
  connectedTo?: s.AnatomicalStructure | Array<s.AnatomicalStructure>;
  diagram?: s.ImageObject | Array<s.ImageObject>;
  partOfSystem?: s.AnatomicalSystem | Array<s.AnatomicalSystem>;
  relatedCondition?: s.MedicalCondition | Array<s.MedicalCondition>;
  relatedTherapy?: s.MedicalTherapy | Array<s.MedicalTherapy>;
  subStructure?: s.AnatomicalStructure | Array<s.AnatomicalStructure>;
  code?: s.MedicalCode | Array<s.MedicalCode>;
  funding?: s.Grant | Array<s.Grant>;
  guideline?: s.MedicalGuideline | Array<s.MedicalGuideline>;
  legalStatus?: s.DrugLegalStatus | s.MedicalEnumeration | string | Array<s.DrugLegalStatus | s.MedicalEnumeration | string>;
  medicineSystem?: s.MedicineSystem | Array<s.MedicineSystem>;
  recognizingAuthority?: s.Organization | Array<s.Organization>;
  relevantSpecialty?: s.MedicalSpecialty | Array<s.MedicalSpecialty>;
  study?: s.MedicalStudy | Array<s.MedicalStudy>;
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

export const VeinSchema: z.ZodType<Vein> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  drainsTo: z.union([s.VesselSchema, z.array(s.VesselSchema)]).optional(),
  regionDrained: z.union([z.union([s.AnatomicalStructureSchema, s.AnatomicalSystemSchema]), z.array(z.union([s.AnatomicalStructureSchema, s.AnatomicalSystemSchema]))]).optional(),
  tributary: z.union([s.AnatomicalStructureSchema, z.array(s.AnatomicalStructureSchema)]).optional(),
  associatedPathophysiology: z.union([z.string(), z.array(z.string())]).optional(),
  bodyLocation: z.union([z.string(), z.array(z.string())]).optional(),
  connectedTo: z.union([s.AnatomicalStructureSchema, z.array(s.AnatomicalStructureSchema)]).optional(),
  diagram: z.union([s.ImageObjectSchema, z.array(s.ImageObjectSchema)]).optional(),
  partOfSystem: z.union([s.AnatomicalSystemSchema, z.array(s.AnatomicalSystemSchema)]).optional(),
  relatedCondition: z.union([s.MedicalConditionSchema, z.array(s.MedicalConditionSchema)]).optional(),
  relatedTherapy: z.union([s.MedicalTherapySchema, z.array(s.MedicalTherapySchema)]).optional(),
  subStructure: z.union([s.AnatomicalStructureSchema, z.array(s.AnatomicalStructureSchema)]).optional(),
  code: z.union([s.MedicalCodeSchema, z.array(s.MedicalCodeSchema)]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  guideline: z.union([s.MedicalGuidelineSchema, z.array(s.MedicalGuidelineSchema)]).optional(),
  legalStatus: z.union([z.union([s.DrugLegalStatusSchema, s.MedicalEnumerationSchema, z.string()]), z.array(z.union([s.DrugLegalStatusSchema, s.MedicalEnumerationSchema, z.string()]))]).optional(),
  medicineSystem: z.union([s.MedicineSystemSchema, z.array(s.MedicineSystemSchema)]).optional(),
  recognizingAuthority: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  relevantSpecialty: z.union([s.MedicalSpecialtySchema, z.array(s.MedicalSpecialtySchema)]).optional(),
  study: z.union([s.MedicalStudySchema, z.array(s.MedicalStudySchema)]).optional(),
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

export interface Vessel {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  associatedPathophysiology?: string | Array<string>;
  bodyLocation?: string | Array<string>;
  connectedTo?: s.AnatomicalStructure | Array<s.AnatomicalStructure>;
  diagram?: s.ImageObject | Array<s.ImageObject>;
  partOfSystem?: s.AnatomicalSystem | Array<s.AnatomicalSystem>;
  relatedCondition?: s.MedicalCondition | Array<s.MedicalCondition>;
  relatedTherapy?: s.MedicalTherapy | Array<s.MedicalTherapy>;
  subStructure?: s.AnatomicalStructure | Array<s.AnatomicalStructure>;
  code?: s.MedicalCode | Array<s.MedicalCode>;
  funding?: s.Grant | Array<s.Grant>;
  guideline?: s.MedicalGuideline | Array<s.MedicalGuideline>;
  legalStatus?: s.DrugLegalStatus | s.MedicalEnumeration | string | Array<s.DrugLegalStatus | s.MedicalEnumeration | string>;
  medicineSystem?: s.MedicineSystem | Array<s.MedicineSystem>;
  recognizingAuthority?: s.Organization | Array<s.Organization>;
  relevantSpecialty?: s.MedicalSpecialty | Array<s.MedicalSpecialty>;
  study?: s.MedicalStudy | Array<s.MedicalStudy>;
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

export const VesselSchema: z.ZodType<Vessel> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  associatedPathophysiology: z.union([z.string(), z.array(z.string())]).optional(),
  bodyLocation: z.union([z.string(), z.array(z.string())]).optional(),
  connectedTo: z.union([s.AnatomicalStructureSchema, z.array(s.AnatomicalStructureSchema)]).optional(),
  diagram: z.union([s.ImageObjectSchema, z.array(s.ImageObjectSchema)]).optional(),
  partOfSystem: z.union([s.AnatomicalSystemSchema, z.array(s.AnatomicalSystemSchema)]).optional(),
  relatedCondition: z.union([s.MedicalConditionSchema, z.array(s.MedicalConditionSchema)]).optional(),
  relatedTherapy: z.union([s.MedicalTherapySchema, z.array(s.MedicalTherapySchema)]).optional(),
  subStructure: z.union([s.AnatomicalStructureSchema, z.array(s.AnatomicalStructureSchema)]).optional(),
  code: z.union([s.MedicalCodeSchema, z.array(s.MedicalCodeSchema)]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  guideline: z.union([s.MedicalGuidelineSchema, z.array(s.MedicalGuidelineSchema)]).optional(),
  legalStatus: z.union([z.union([s.DrugLegalStatusSchema, s.MedicalEnumerationSchema, z.string()]), z.array(z.union([s.DrugLegalStatusSchema, s.MedicalEnumerationSchema, z.string()]))]).optional(),
  medicineSystem: z.union([s.MedicineSystemSchema, z.array(s.MedicineSystemSchema)]).optional(),
  recognizingAuthority: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  relevantSpecialty: z.union([s.MedicalSpecialtySchema, z.array(s.MedicalSpecialtySchema)]).optional(),
  study: z.union([s.MedicalStudySchema, z.array(s.MedicalStudySchema)]).optional(),
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

export interface VeterinaryCare {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  healthPlanNetworkId?: string | Array<string>;
  isAcceptingNewPatients?: boolean | Array<boolean>;
  medicalSpecialty?: s.MedicalSpecialty | Array<s.MedicalSpecialty>;
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
}

export const VeterinaryCareSchema: z.ZodType<VeterinaryCare> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  healthPlanNetworkId: z.union([z.string(), z.array(z.string())]).optional(),
  isAcceptingNewPatients: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  medicalSpecialty: z.union([s.MedicalSpecialtySchema, z.array(s.MedicalSpecialtySchema)]).optional(),
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
}));

export interface VideoGallery {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  breadcrumb?: s.BreadcrumbList | string | Array<s.BreadcrumbList | string>;
  lastReviewed?: string | Array<string>;
  mainContentOfPage?: s.WebPageElement | Array<s.WebPageElement>;
  primaryImageOfPage?: s.ImageObject | Array<s.ImageObject>;
  relatedLink?: string | Array<string>;
  reviewedBy?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  significantLink?: string | Array<string>;
  significantLinks?: string | Array<string>;
  speakable?: s.SpeakableSpecification | string | Array<s.SpeakableSpecification | string>;
  specialty?: s.Specialty | Array<s.Specialty>;
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

export const VideoGallerySchema: z.ZodType<VideoGallery> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  breadcrumb: z.union([z.union([s.BreadcrumbListSchema, z.string()]), z.array(z.union([s.BreadcrumbListSchema, z.string()]))]).optional(),
  lastReviewed: z.union([z.string(), z.array(z.string())]).optional(),
  mainContentOfPage: z.union([s.WebPageElementSchema, z.array(s.WebPageElementSchema)]).optional(),
  primaryImageOfPage: z.union([s.ImageObjectSchema, z.array(s.ImageObjectSchema)]).optional(),
  relatedLink: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  reviewedBy: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  significantLink: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  significantLinks: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  speakable: z.union([z.union([s.SpeakableSpecificationSchema, z.string().url()]), z.array(z.union([s.SpeakableSpecificationSchema, z.string().url()]))]).optional(),
  specialty: z.union([s.SpecialtySchema, z.array(s.SpecialtySchema)]).optional(),
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

export interface VideoGame {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  actor?: s.PerformingGroup | s.Person | Array<s.PerformingGroup | s.Person>;
  actors?: s.Person | Array<s.Person>;
  cheatCode?: s.CreativeWork | Array<s.CreativeWork>;
  director?: s.Person | Array<s.Person>;
  directors?: s.Person | Array<s.Person>;
  gameEdition?: string | Array<string>;
  gamePlatform?: string | s.Thing | Array<string | s.Thing>;
  gameServer?: s.GameServer | Array<s.GameServer>;
  gameTip?: s.CreativeWork | Array<s.CreativeWork>;
  musicBy?: s.MusicGroup | s.Person | Array<s.MusicGroup | s.Person>;
  playMode?: s.GamePlayMode | Array<s.GamePlayMode>;
  trailer?: s.VideoObject | Array<s.VideoObject>;
  characterAttribute?: s.Thing | Array<s.Thing>;
  gameItem?: s.Thing | Array<s.Thing>;
  gameLocation?: s.Place | s.PostalAddress | string | Array<s.Place | s.PostalAddress | string>;
  numberOfPlayers?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  quest?: s.Thing | Array<s.Thing>;
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
  applicationCategory?: string | Array<string>;
  applicationSubCategory?: string | Array<string>;
  applicationSuite?: string | Array<string>;
  availableOnDevice?: string | Array<string>;
  countriesNotSupported?: string | Array<string>;
  countriesSupported?: string | Array<string>;
  device?: string | Array<string>;
  downloadUrl?: string | Array<string>;
  featureList?: string | Array<string>;
  fileSize?: string | Array<string>;
  installUrl?: string | Array<string>;
  memoryRequirements?: string | Array<string>;
  operatingSystem?: s.OperatingSystem | string | Array<s.OperatingSystem | string>;
  permissions?: string | Array<string>;
  processorRequirements?: string | Array<string>;
  releaseNotes?: string | Array<string>;
  requirements?: string | Array<string>;
  runtimePlatform?: s.RuntimePlatform | string | Array<s.RuntimePlatform | string>;
  screenshot?: s.ImageObject | string | Array<s.ImageObject | string>;
  softwareAddOn?: s.SoftwareApplication | Array<s.SoftwareApplication>;
  softwareHelp?: s.CreativeWork | Array<s.CreativeWork>;
  softwareRequirements?: s.SoftwareApplication | string | Array<s.SoftwareApplication | string>;
  softwareVersion?: string | Array<string>;
  storageRequirements?: string | Array<string>;
  supportingData?: s.DataFeed | Array<s.DataFeed>;
}

export const VideoGameSchema: z.ZodType<VideoGame> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  actor: z.union([z.union([s.PerformingGroupSchema, s.PersonSchema]), z.array(z.union([s.PerformingGroupSchema, s.PersonSchema]))]).optional(),
  actors: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  cheatCode: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  director: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  directors: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  gameEdition: z.union([z.string(), z.array(z.string())]).optional(),
  gamePlatform: z.union([z.union([z.string(), s.ThingSchema, z.string().url()]), z.array(z.union([z.string(), s.ThingSchema, z.string().url()]))]).optional(),
  gameServer: z.union([s.GameServerSchema, z.array(s.GameServerSchema)]).optional(),
  gameTip: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  musicBy: z.union([z.union([s.MusicGroupSchema, s.PersonSchema]), z.array(z.union([s.MusicGroupSchema, s.PersonSchema]))]).optional(),
  playMode: z.union([s.GamePlayModeSchema, z.array(s.GamePlayModeSchema)]).optional(),
  trailer: z.union([s.VideoObjectSchema, z.array(s.VideoObjectSchema)]).optional(),
  characterAttribute: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  gameItem: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  gameLocation: z.union([z.union([s.PlaceSchema, s.PostalAddressSchema, z.string().url()]), z.array(z.union([s.PlaceSchema, s.PostalAddressSchema, z.string().url()]))]).optional(),
  numberOfPlayers: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  quest: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
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
  applicationCategory: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  applicationSubCategory: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  applicationSuite: z.union([z.string(), z.array(z.string())]).optional(),
  availableOnDevice: z.union([z.string(), z.array(z.string())]).optional(),
  countriesNotSupported: z.union([z.string(), z.array(z.string())]).optional(),
  countriesSupported: z.union([z.string(), z.array(z.string())]).optional(),
  device: z.union([z.string(), z.array(z.string())]).optional(),
  downloadUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  featureList: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  fileSize: z.union([z.string(), z.array(z.string())]).optional(),
  installUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  memoryRequirements: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  operatingSystem: z.union([z.union([s.OperatingSystemSchema, z.string()]), z.array(z.union([s.OperatingSystemSchema, z.string()]))]).optional(),
  permissions: z.union([z.string(), z.array(z.string())]).optional(),
  processorRequirements: z.union([z.string(), z.array(z.string())]).optional(),
  releaseNotes: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  requirements: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  runtimePlatform: z.union([z.union([s.RuntimePlatformSchema, z.string()]), z.array(z.union([s.RuntimePlatformSchema, z.string()]))]).optional(),
  screenshot: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  softwareAddOn: z.union([s.SoftwareApplicationSchema, z.array(s.SoftwareApplicationSchema)]).optional(),
  softwareHelp: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  softwareRequirements: z.union([z.union([s.SoftwareApplicationSchema, z.string(), z.string().url()]), z.array(z.union([s.SoftwareApplicationSchema, z.string(), z.string().url()]))]).optional(),
  softwareVersion: z.union([z.string(), z.array(z.string())]).optional(),
  storageRequirements: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  supportingData: z.union([s.DataFeedSchema, z.array(s.DataFeedSchema)]).optional(),
}));

export interface VideoGameClip {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  actor?: s.PerformingGroup | s.Person | Array<s.PerformingGroup | s.Person>;
  actors?: s.Person | Array<s.Person>;
  clipNumber?: number | string | Array<number | string>;
  director?: s.Person | Array<s.Person>;
  directors?: s.Person | Array<s.Person>;
  endOffset?: s.HyperTocEntry | number | Array<s.HyperTocEntry | number>;
  musicBy?: s.MusicGroup | s.Person | Array<s.MusicGroup | s.Person>;
  partOfEpisode?: s.Episode | Array<s.Episode>;
  partOfSeason?: s.CreativeWorkSeason | Array<s.CreativeWorkSeason>;
  partOfSeries?: s.CreativeWorkSeries | Array<s.CreativeWorkSeries>;
  startOffset?: s.HyperTocEntry | number | Array<s.HyperTocEntry | number>;
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

export const VideoGameClipSchema: z.ZodType<VideoGameClip> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  actor: z.union([z.union([s.PerformingGroupSchema, s.PersonSchema]), z.array(z.union([s.PerformingGroupSchema, s.PersonSchema]))]).optional(),
  actors: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  clipNumber: z.union([z.union([z.number().int(), z.string()]), z.array(z.union([z.number().int(), z.string()]))]).optional(),
  director: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  directors: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  endOffset: z.union([z.union([s.HyperTocEntrySchema, z.number()]), z.array(z.union([s.HyperTocEntrySchema, z.number()]))]).optional(),
  musicBy: z.union([z.union([s.MusicGroupSchema, s.PersonSchema]), z.array(z.union([s.MusicGroupSchema, s.PersonSchema]))]).optional(),
  partOfEpisode: z.union([s.EpisodeSchema, z.array(s.EpisodeSchema)]).optional(),
  partOfSeason: z.union([s.CreativeWorkSeasonSchema, z.array(s.CreativeWorkSeasonSchema)]).optional(),
  partOfSeries: z.union([s.CreativeWorkSeriesSchema, z.array(s.CreativeWorkSeriesSchema)]).optional(),
  startOffset: z.union([z.union([s.HyperTocEntrySchema, z.number()]), z.array(z.union([s.HyperTocEntrySchema, z.number()]))]).optional(),
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

export interface VideoGameSeries {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  actor?: s.PerformingGroup | s.Person | Array<s.PerformingGroup | s.Person>;
  actors?: s.Person | Array<s.Person>;
  characterAttribute?: s.Thing | Array<s.Thing>;
  cheatCode?: s.CreativeWork | Array<s.CreativeWork>;
  containsSeason?: s.CreativeWorkSeason | Array<s.CreativeWorkSeason>;
  director?: s.Person | Array<s.Person>;
  directors?: s.Person | Array<s.Person>;
  episode?: s.Episode | Array<s.Episode>;
  episodes?: s.Episode | Array<s.Episode>;
  gameItem?: s.Thing | Array<s.Thing>;
  gameLocation?: s.Place | s.PostalAddress | string | Array<s.Place | s.PostalAddress | string>;
  gamePlatform?: string | s.Thing | Array<string | s.Thing>;
  musicBy?: s.MusicGroup | s.Person | Array<s.MusicGroup | s.Person>;
  numberOfEpisodes?: number | Array<number>;
  numberOfPlayers?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  numberOfSeasons?: number | Array<number>;
  playMode?: s.GamePlayMode | Array<s.GamePlayMode>;
  productionCompany?: s.Organization | Array<s.Organization>;
  quest?: s.Thing | Array<s.Thing>;
  season?: s.CreativeWorkSeason | string | Array<s.CreativeWorkSeason | string>;
  seasons?: s.CreativeWorkSeason | Array<s.CreativeWorkSeason>;
  trailer?: s.VideoObject | Array<s.VideoObject>;
  endDate?: string | Array<string>;
  issn?: string | Array<string>;
  startDate?: string | Array<string>;
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

export const VideoGameSeriesSchema: z.ZodType<VideoGameSeries> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  actor: z.union([z.union([s.PerformingGroupSchema, s.PersonSchema]), z.array(z.union([s.PerformingGroupSchema, s.PersonSchema]))]).optional(),
  actors: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  characterAttribute: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  cheatCode: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  containsSeason: z.union([s.CreativeWorkSeasonSchema, z.array(s.CreativeWorkSeasonSchema)]).optional(),
  director: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  directors: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  episode: z.union([s.EpisodeSchema, z.array(s.EpisodeSchema)]).optional(),
  episodes: z.union([s.EpisodeSchema, z.array(s.EpisodeSchema)]).optional(),
  gameItem: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  gameLocation: z.union([z.union([s.PlaceSchema, s.PostalAddressSchema, z.string().url()]), z.array(z.union([s.PlaceSchema, s.PostalAddressSchema, z.string().url()]))]).optional(),
  gamePlatform: z.union([z.union([z.string(), s.ThingSchema, z.string().url()]), z.array(z.union([z.string(), s.ThingSchema, z.string().url()]))]).optional(),
  musicBy: z.union([z.union([s.MusicGroupSchema, s.PersonSchema]), z.array(z.union([s.MusicGroupSchema, s.PersonSchema]))]).optional(),
  numberOfEpisodes: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  numberOfPlayers: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  numberOfSeasons: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  playMode: z.union([s.GamePlayModeSchema, z.array(s.GamePlayModeSchema)]).optional(),
  productionCompany: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  quest: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  season: z.union([z.union([s.CreativeWorkSeasonSchema, z.string().url()]), z.array(z.union([s.CreativeWorkSeasonSchema, z.string().url()]))]).optional(),
  seasons: z.union([s.CreativeWorkSeasonSchema, z.array(s.CreativeWorkSeasonSchema)]).optional(),
  trailer: z.union([s.VideoObjectSchema, z.array(s.VideoObjectSchema)]).optional(),
  endDate: z.union([z.string(), z.array(z.string())]).optional(),
  issn: z.union([z.string(), z.array(z.string())]).optional(),
  startDate: z.union([z.string(), z.array(z.string())]).optional(),
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

export interface VideoObject {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  actor?: s.PerformingGroup | s.Person | Array<s.PerformingGroup | s.Person>;
  actors?: s.Person | Array<s.Person>;
  caption?: s.MediaObject | string | Array<s.MediaObject | string>;
  director?: s.Person | Array<s.Person>;
  directors?: s.Person | Array<s.Person>;
  embeddedTextCaption?: string | Array<string>;
  musicBy?: s.MusicGroup | s.Person | Array<s.MusicGroup | s.Person>;
  transcript?: string | Array<string>;
  videoFrameSize?: string | Array<string>;
  videoQuality?: string | Array<string>;
  associatedArticle?: s.NewsArticle | Array<s.NewsArticle>;
  bitrate?: string | Array<string>;
  contentSize?: string | Array<string>;
  contentUrl?: string | Array<string>;
  duration?: s.Duration | s.QuantitativeValue | Array<s.Duration | s.QuantitativeValue>;
  embedUrl?: string | Array<string>;
  encodesCreativeWork?: s.CreativeWork | Array<s.CreativeWork>;
  encodingFormat?: string | Array<string>;
  endTime?: string | Array<string>;
  height?: s.Distance | s.QuantitativeValue | Array<s.Distance | s.QuantitativeValue>;
  ineligibleRegion?: s.GeoShape | s.Place | string | Array<s.GeoShape | s.Place | string>;
  interpretedAsClaim?: s.Claim | Array<s.Claim>;
  playerType?: string | Array<string>;
  productionCompany?: s.Organization | Array<s.Organization>;
  regionsAllowed?: s.Place | Array<s.Place>;
  requiresSubscription?: boolean | s.MediaSubscription | Array<boolean | s.MediaSubscription>;
  sha256?: string | Array<string>;
  startTime?: string | Array<string>;
  uploadDate?: string | Array<string>;
  width?: s.Distance | s.QuantitativeValue | Array<s.Distance | s.QuantitativeValue>;
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

export const VideoObjectSchema: z.ZodType<VideoObject> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  actor: z.union([z.union([s.PerformingGroupSchema, s.PersonSchema]), z.array(z.union([s.PerformingGroupSchema, s.PersonSchema]))]).optional(),
  actors: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  caption: z.union([z.union([s.MediaObjectSchema, z.string()]), z.array(z.union([s.MediaObjectSchema, z.string()]))]).optional(),
  director: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  directors: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  embeddedTextCaption: z.union([z.string(), z.array(z.string())]).optional(),
  musicBy: z.union([z.union([s.MusicGroupSchema, s.PersonSchema]), z.array(z.union([s.MusicGroupSchema, s.PersonSchema]))]).optional(),
  transcript: z.union([z.string(), z.array(z.string())]).optional(),
  videoFrameSize: z.union([z.string(), z.array(z.string())]).optional(),
  videoQuality: z.union([z.string(), z.array(z.string())]).optional(),
  associatedArticle: z.union([s.NewsArticleSchema, z.array(s.NewsArticleSchema)]).optional(),
  bitrate: z.union([z.string(), z.array(z.string())]).optional(),
  contentSize: z.union([z.string(), z.array(z.string())]).optional(),
  contentUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  duration: z.union([z.union([s.DurationSchema, s.QuantitativeValueSchema]), z.array(z.union([s.DurationSchema, s.QuantitativeValueSchema]))]).optional(),
  embedUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  encodesCreativeWork: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  encodingFormat: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  endTime: z.union([z.string(), z.array(z.string())]).optional(),
  height: z.union([z.union([s.DistanceSchema, s.QuantitativeValueSchema]), z.array(z.union([s.DistanceSchema, s.QuantitativeValueSchema]))]).optional(),
  ineligibleRegion: z.union([z.union([s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  interpretedAsClaim: z.union([s.ClaimSchema, z.array(s.ClaimSchema)]).optional(),
  playerType: z.union([z.string(), z.array(z.string())]).optional(),
  productionCompany: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  regionsAllowed: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  requiresSubscription: z.union([z.union([z.boolean(), s.MediaSubscriptionSchema]), z.array(z.union([z.boolean(), s.MediaSubscriptionSchema]))]).optional(),
  sha256: z.union([z.string(), z.array(z.string())]).optional(),
  startTime: z.union([z.string(), z.array(z.string())]).optional(),
  uploadDate: z.union([z.string(), z.array(z.string())]).optional(),
  width: z.union([z.union([s.DistanceSchema, s.QuantitativeValueSchema]), z.array(z.union([s.DistanceSchema, s.QuantitativeValueSchema]))]).optional(),
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

export interface VideoObjectSnapshot {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  actor?: s.PerformingGroup | s.Person | Array<s.PerformingGroup | s.Person>;
  actors?: s.Person | Array<s.Person>;
  caption?: s.MediaObject | string | Array<s.MediaObject | string>;
  director?: s.Person | Array<s.Person>;
  directors?: s.Person | Array<s.Person>;
  embeddedTextCaption?: string | Array<string>;
  musicBy?: s.MusicGroup | s.Person | Array<s.MusicGroup | s.Person>;
  transcript?: string | Array<string>;
  videoFrameSize?: string | Array<string>;
  videoQuality?: string | Array<string>;
  associatedArticle?: s.NewsArticle | Array<s.NewsArticle>;
  bitrate?: string | Array<string>;
  contentSize?: string | Array<string>;
  contentUrl?: string | Array<string>;
  duration?: s.Duration | s.QuantitativeValue | Array<s.Duration | s.QuantitativeValue>;
  embedUrl?: string | Array<string>;
  encodesCreativeWork?: s.CreativeWork | Array<s.CreativeWork>;
  encodingFormat?: string | Array<string>;
  endTime?: string | Array<string>;
  height?: s.Distance | s.QuantitativeValue | Array<s.Distance | s.QuantitativeValue>;
  ineligibleRegion?: s.GeoShape | s.Place | string | Array<s.GeoShape | s.Place | string>;
  interpretedAsClaim?: s.Claim | Array<s.Claim>;
  playerType?: string | Array<string>;
  productionCompany?: s.Organization | Array<s.Organization>;
  regionsAllowed?: s.Place | Array<s.Place>;
  requiresSubscription?: boolean | s.MediaSubscription | Array<boolean | s.MediaSubscription>;
  sha256?: string | Array<string>;
  startTime?: string | Array<string>;
  uploadDate?: string | Array<string>;
  width?: s.Distance | s.QuantitativeValue | Array<s.Distance | s.QuantitativeValue>;
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

export const VideoObjectSnapshotSchema: z.ZodType<VideoObjectSnapshot> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  actor: z.union([z.union([s.PerformingGroupSchema, s.PersonSchema]), z.array(z.union([s.PerformingGroupSchema, s.PersonSchema]))]).optional(),
  actors: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  caption: z.union([z.union([s.MediaObjectSchema, z.string()]), z.array(z.union([s.MediaObjectSchema, z.string()]))]).optional(),
  director: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  directors: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  embeddedTextCaption: z.union([z.string(), z.array(z.string())]).optional(),
  musicBy: z.union([z.union([s.MusicGroupSchema, s.PersonSchema]), z.array(z.union([s.MusicGroupSchema, s.PersonSchema]))]).optional(),
  transcript: z.union([z.string(), z.array(z.string())]).optional(),
  videoFrameSize: z.union([z.string(), z.array(z.string())]).optional(),
  videoQuality: z.union([z.string(), z.array(z.string())]).optional(),
  associatedArticle: z.union([s.NewsArticleSchema, z.array(s.NewsArticleSchema)]).optional(),
  bitrate: z.union([z.string(), z.array(z.string())]).optional(),
  contentSize: z.union([z.string(), z.array(z.string())]).optional(),
  contentUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  duration: z.union([z.union([s.DurationSchema, s.QuantitativeValueSchema]), z.array(z.union([s.DurationSchema, s.QuantitativeValueSchema]))]).optional(),
  embedUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  encodesCreativeWork: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  encodingFormat: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  endTime: z.union([z.string(), z.array(z.string())]).optional(),
  height: z.union([z.union([s.DistanceSchema, s.QuantitativeValueSchema]), z.array(z.union([s.DistanceSchema, s.QuantitativeValueSchema]))]).optional(),
  ineligibleRegion: z.union([z.union([s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  interpretedAsClaim: z.union([s.ClaimSchema, z.array(s.ClaimSchema)]).optional(),
  playerType: z.union([z.string(), z.array(z.string())]).optional(),
  productionCompany: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  regionsAllowed: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  requiresSubscription: z.union([z.union([z.boolean(), s.MediaSubscriptionSchema]), z.array(z.union([z.boolean(), s.MediaSubscriptionSchema]))]).optional(),
  sha256: z.union([z.string(), z.array(z.string())]).optional(),
  startTime: z.union([z.string(), z.array(z.string())]).optional(),
  uploadDate: z.union([z.string(), z.array(z.string())]).optional(),
  width: z.union([z.union([s.DistanceSchema, s.QuantitativeValueSchema]), z.array(z.union([s.DistanceSchema, s.QuantitativeValueSchema]))]).optional(),
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

export interface ViewAction {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  actionAccessibilityRequirement?: s.ActionAccessSpecification | Array<s.ActionAccessSpecification>;
  expectsAcceptanceOf?: s.Offer | Array<s.Offer>;
  actionProcess?: s.HowTo | Array<s.HowTo>;
  actionStatus?: s.ActionStatusType | Array<s.ActionStatusType>;
  agent?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  endTime?: string | Array<string>;
  error?: s.Thing | Array<s.Thing>;
  instrument?: s.Thing | Array<s.Thing>;
  location?: s.Place | s.PostalAddress | string | s.VirtualLocation | Array<s.Place | s.PostalAddress | string | s.VirtualLocation>;
  object?: s.Thing | Array<s.Thing>;
  participant?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  provider?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  result?: s.Thing | Array<s.Thing>;
  startTime?: string | Array<string>;
  target?: s.EntryPoint | string | Array<s.EntryPoint | string>;
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

export const ViewActionSchema: z.ZodType<ViewAction> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  actionAccessibilityRequirement: z.union([s.ActionAccessSpecificationSchema, z.array(s.ActionAccessSpecificationSchema)]).optional(),
  expectsAcceptanceOf: z.union([s.OfferSchema, z.array(s.OfferSchema)]).optional(),
  actionProcess: z.union([s.HowToSchema, z.array(s.HowToSchema)]).optional(),
  actionStatus: z.union([s.ActionStatusTypeSchema, z.array(s.ActionStatusTypeSchema)]).optional(),
  agent: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  endTime: z.union([z.string(), z.array(z.string())]).optional(),
  error: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  instrument: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  location: z.union([z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]), z.array(z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]))]).optional(),
  object: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  participant: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  provider: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  result: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  startTime: z.union([z.string(), z.array(z.string())]).optional(),
  target: z.union([z.union([s.EntryPointSchema, z.string().url()]), z.array(z.union([s.EntryPointSchema, z.string().url()]))]).optional(),
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

export interface VirtualLocation {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
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

export const VirtualLocationSchema: z.ZodType<VirtualLocation> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
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

export interface VisualArtsEvent {
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

export const VisualArtsEventSchema: z.ZodType<VisualArtsEvent> = z.lazy(() => z.object({
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

export interface VisualArtwork {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  artEdition?: number | string | Array<number | string>;
  artMedium?: string | Array<string>;
  artform?: string | Array<string>;
  artist?: s.Person | Array<s.Person>;
  artworkSurface?: string | Array<string>;
  colorist?: s.Person | Array<s.Person>;
  depth?: s.Distance | s.QuantitativeValue | Array<s.Distance | s.QuantitativeValue>;
  height?: s.Distance | s.QuantitativeValue | Array<s.Distance | s.QuantitativeValue>;
  inker?: s.Person | Array<s.Person>;
  letterer?: s.Person | Array<s.Person>;
  penciler?: s.Person | Array<s.Person>;
  surface?: string | Array<string>;
  weight?: s.Mass | s.QuantitativeValue | Array<s.Mass | s.QuantitativeValue>;
  width?: s.Distance | s.QuantitativeValue | Array<s.Distance | s.QuantitativeValue>;
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

export const VisualArtworkSchema: z.ZodType<VisualArtwork> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  artEdition: z.union([z.union([z.number().int(), z.string()]), z.array(z.union([z.number().int(), z.string()]))]).optional(),
  artMedium: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  artform: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  artist: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  artworkSurface: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  colorist: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  depth: z.union([z.union([s.DistanceSchema, s.QuantitativeValueSchema]), z.array(z.union([s.DistanceSchema, s.QuantitativeValueSchema]))]).optional(),
  height: z.union([z.union([s.DistanceSchema, s.QuantitativeValueSchema]), z.array(z.union([s.DistanceSchema, s.QuantitativeValueSchema]))]).optional(),
  inker: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  letterer: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  penciler: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  surface: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  weight: z.union([z.union([s.MassSchema, s.QuantitativeValueSchema]), z.array(z.union([s.MassSchema, s.QuantitativeValueSchema]))]).optional(),
  width: z.union([z.union([s.DistanceSchema, s.QuantitativeValueSchema]), z.array(z.union([s.DistanceSchema, s.QuantitativeValueSchema]))]).optional(),
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

export interface VitalSign {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  identifyingExam?: s.PhysicalExam | Array<s.PhysicalExam>;
  identifyingTest?: s.MedicalTest | Array<s.MedicalTest>;
  possibleTreatment?: s.Drug | s.DrugClass | s.LifestyleModification | s.MedicalTherapy | Array<s.Drug | s.DrugClass | s.LifestyleModification | s.MedicalTherapy>;
  associatedAnatomy?: s.AnatomicalStructure | s.AnatomicalSystem | s.SuperficialAnatomy | Array<s.AnatomicalStructure | s.AnatomicalSystem | s.SuperficialAnatomy>;
  cause?: s.MedicalCause | Array<s.MedicalCause>;
  differentialDiagnosis?: s.DDxElement | Array<s.DDxElement>;
  drug?: s.Drug | Array<s.Drug>;
  epidemiology?: string | Array<string>;
  expectedPrognosis?: string | Array<string>;
  naturalProgression?: string | Array<string>;
  pathophysiology?: string | Array<string>;
  possibleComplication?: string | Array<string>;
  primaryPrevention?: s.MedicalTherapy | Array<s.MedicalTherapy>;
  riskFactor?: s.MedicalRiskFactor | Array<s.MedicalRiskFactor>;
  secondaryPrevention?: s.Drug | s.DrugClass | s.LifestyleModification | s.MedicalTherapy | Array<s.Drug | s.DrugClass | s.LifestyleModification | s.MedicalTherapy>;
  signOrSymptom?: s.MedicalSignOrSymptom | Array<s.MedicalSignOrSymptom>;
  stage?: s.MedicalConditionStage | Array<s.MedicalConditionStage>;
  status?: s.EventStatusType | s.MedicalStudyStatus | string | Array<s.EventStatusType | s.MedicalStudyStatus | string>;
  typicalTest?: s.MedicalTest | Array<s.MedicalTest>;
  code?: s.MedicalCode | Array<s.MedicalCode>;
  funding?: s.Grant | Array<s.Grant>;
  guideline?: s.MedicalGuideline | Array<s.MedicalGuideline>;
  legalStatus?: s.DrugLegalStatus | s.MedicalEnumeration | string | Array<s.DrugLegalStatus | s.MedicalEnumeration | string>;
  medicineSystem?: s.MedicineSystem | Array<s.MedicineSystem>;
  recognizingAuthority?: s.Organization | Array<s.Organization>;
  relevantSpecialty?: s.MedicalSpecialty | Array<s.MedicalSpecialty>;
  study?: s.MedicalStudy | Array<s.MedicalStudy>;
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

export const VitalSignSchema: z.ZodType<VitalSign> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  identifyingExam: z.union([s.PhysicalExamSchema, z.array(s.PhysicalExamSchema)]).optional(),
  identifyingTest: z.union([s.MedicalTestSchema, z.array(s.MedicalTestSchema)]).optional(),
  possibleTreatment: z.union([z.union([s.DrugSchema, s.DrugClassSchema, s.LifestyleModificationSchema, s.MedicalTherapySchema]), z.array(z.union([s.DrugSchema, s.DrugClassSchema, s.LifestyleModificationSchema, s.MedicalTherapySchema]))]).optional(),
  associatedAnatomy: z.union([z.union([s.AnatomicalStructureSchema, s.AnatomicalSystemSchema, s.SuperficialAnatomySchema]), z.array(z.union([s.AnatomicalStructureSchema, s.AnatomicalSystemSchema, s.SuperficialAnatomySchema]))]).optional(),
  cause: z.union([s.MedicalCauseSchema, z.array(s.MedicalCauseSchema)]).optional(),
  differentialDiagnosis: z.union([s.DDxElementSchema, z.array(s.DDxElementSchema)]).optional(),
  drug: z.union([s.DrugSchema, z.array(s.DrugSchema)]).optional(),
  epidemiology: z.union([z.string(), z.array(z.string())]).optional(),
  expectedPrognosis: z.union([z.string(), z.array(z.string())]).optional(),
  naturalProgression: z.union([z.string(), z.array(z.string())]).optional(),
  pathophysiology: z.union([z.string(), z.array(z.string())]).optional(),
  possibleComplication: z.union([z.string(), z.array(z.string())]).optional(),
  primaryPrevention: z.union([s.MedicalTherapySchema, z.array(s.MedicalTherapySchema)]).optional(),
  riskFactor: z.union([s.MedicalRiskFactorSchema, z.array(s.MedicalRiskFactorSchema)]).optional(),
  secondaryPrevention: z.union([z.union([s.DrugSchema, s.DrugClassSchema, s.LifestyleModificationSchema, s.MedicalTherapySchema]), z.array(z.union([s.DrugSchema, s.DrugClassSchema, s.LifestyleModificationSchema, s.MedicalTherapySchema]))]).optional(),
  signOrSymptom: z.union([s.MedicalSignOrSymptomSchema, z.array(s.MedicalSignOrSymptomSchema)]).optional(),
  stage: z.union([s.MedicalConditionStageSchema, z.array(s.MedicalConditionStageSchema)]).optional(),
  status: z.union([z.union([s.EventStatusTypeSchema, s.MedicalStudyStatusSchema, z.string()]), z.array(z.union([s.EventStatusTypeSchema, s.MedicalStudyStatusSchema, z.string()]))]).optional(),
  typicalTest: z.union([s.MedicalTestSchema, z.array(s.MedicalTestSchema)]).optional(),
  code: z.union([s.MedicalCodeSchema, z.array(s.MedicalCodeSchema)]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  guideline: z.union([s.MedicalGuidelineSchema, z.array(s.MedicalGuidelineSchema)]).optional(),
  legalStatus: z.union([z.union([s.DrugLegalStatusSchema, s.MedicalEnumerationSchema, z.string()]), z.array(z.union([s.DrugLegalStatusSchema, s.MedicalEnumerationSchema, z.string()]))]).optional(),
  medicineSystem: z.union([s.MedicineSystemSchema, z.array(s.MedicineSystemSchema)]).optional(),
  recognizingAuthority: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  relevantSpecialty: z.union([s.MedicalSpecialtySchema, z.array(s.MedicalSpecialtySchema)]).optional(),
  study: z.union([s.MedicalStudySchema, z.array(s.MedicalStudySchema)]).optional(),
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

export interface Volcano {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
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

export const VolcanoSchema: z.ZodType<Volcano> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
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

export interface VoteAction {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  candidate?: s.Person | Array<s.Person>;
  actionOption?: string | s.Thing | Array<string | s.Thing>;
  option?: string | s.Thing | Array<string | s.Thing>;
  actionProcess?: s.HowTo | Array<s.HowTo>;
  actionStatus?: s.ActionStatusType | Array<s.ActionStatusType>;
  agent?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  endTime?: string | Array<string>;
  error?: s.Thing | Array<s.Thing>;
  instrument?: s.Thing | Array<s.Thing>;
  location?: s.Place | s.PostalAddress | string | s.VirtualLocation | Array<s.Place | s.PostalAddress | string | s.VirtualLocation>;
  object?: s.Thing | Array<s.Thing>;
  participant?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  provider?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  result?: s.Thing | Array<s.Thing>;
  startTime?: string | Array<string>;
  target?: s.EntryPoint | string | Array<s.EntryPoint | string>;
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

export const VoteActionSchema: z.ZodType<VoteAction> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  candidate: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  actionOption: z.union([z.union([z.string(), s.ThingSchema]), z.array(z.union([z.string(), s.ThingSchema]))]).optional(),
  option: z.union([z.union([z.string(), s.ThingSchema]), z.array(z.union([z.string(), s.ThingSchema]))]).optional(),
  actionProcess: z.union([s.HowToSchema, z.array(s.HowToSchema)]).optional(),
  actionStatus: z.union([s.ActionStatusTypeSchema, z.array(s.ActionStatusTypeSchema)]).optional(),
  agent: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  endTime: z.union([z.string(), z.array(z.string())]).optional(),
  error: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  instrument: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  location: z.union([z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]), z.array(z.union([s.PlaceSchema, s.PostalAddressSchema, z.string(), s.VirtualLocationSchema]))]).optional(),
  object: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  participant: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  provider: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  result: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  startTime: z.union([z.string(), z.array(z.string())]).optional(),
  target: z.union([z.union([s.EntryPointSchema, z.string().url()]), z.array(z.union([s.EntryPointSchema, z.string().url()]))]).optional(),
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

export interface vcard_VCard {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const vcard_VCardSchema: z.ZodType<vcard_VCard> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));

export interface void_Dataset {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const void_DatasetSchema: z.ZodType<void_Dataset> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));
