import { z } from 'zod';
import * as s from './index';

export interface fibo_be_corp_corp_Corporation {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const fibo_be_corp_corp_CorporationSchema: z.ZodType<fibo_be_corp_corp_Corporation> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));

export interface fibo_be_le_cb_CooperativeSociety {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const fibo_be_le_cb_CooperativeSocietySchema: z.ZodType<fibo_be_le_cb_CooperativeSociety> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));

export interface fibo_be_nfp_nfp_NonGovernmentalOrganization {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const fibo_be_nfp_nfp_NonGovernmentalOrganizationSchema: z.ZodType<fibo_be_nfp_nfp_NonGovernmentalOrganization> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));

export interface fibo_fbc_pas_fpas_BankAccount {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const fibo_fbc_pas_fpas_BankAccountSchema: z.ZodType<fibo_fbc_pas_fpas_BankAccount> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));

export interface fibo_fbc_pas_fpas_PaymentMechanism {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const fibo_fbc_pas_fpas_PaymentMechanismSchema: z.ZodType<fibo_fbc_pas_fpas_PaymentMechanism> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));

export interface fibo_fnd_agr_ctr_MutualContractualAgreement {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const fibo_fnd_agr_ctr_MutualContractualAgreementSchema: z.ZodType<fibo_fnd_agr_ctr_MutualContractualAgreement> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));

export interface fibo_fnd_arr_doc_Certificate {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const fibo_fnd_arr_doc_CertificateSchema: z.ZodType<fibo_fnd_arr_doc_Certificate> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));

export interface fibo_fnd_arr_doc_Document {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const fibo_fnd_arr_doc_DocumentSchema: z.ZodType<fibo_fnd_arr_doc_Document> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));

export interface fibo_fnd_arr_doc_LegalDocument {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const fibo_fnd_arr_doc_LegalDocumentSchema: z.ZodType<fibo_fnd_arr_doc_LegalDocument> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));

export interface fibo_fnd_dt_oc_Occurrence {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const fibo_fnd_dt_oc_OccurrenceSchema: z.ZodType<fibo_fnd_dt_oc_Occurrence> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));

export interface fibo_fnd_org_org_ContactPoint {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const fibo_fnd_org_org_ContactPointSchema: z.ZodType<fibo_fnd_org_org_ContactPoint> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));

export interface fibo_fnd_org_org_Organization {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const fibo_fnd_org_org_OrganizationSchema: z.ZodType<fibo_fnd_org_org_Organization> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));

export interface fibo_fnd_pas_pas_Offer {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const fibo_fnd_pas_pas_OfferSchema: z.ZodType<fibo_fnd_pas_pas_Offer> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));

export interface fibo_fnd_pas_pas_Price {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const fibo_fnd_pas_pas_PriceSchema: z.ZodType<fibo_fnd_pas_pas_Price> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));

export interface fibo_fnd_pas_pas_Product {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const fibo_fnd_pas_pas_ProductSchema: z.ZodType<fibo_fnd_pas_pas_Product> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));

export interface fibo_fnd_plc_adr_PostalAddress {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const fibo_fnd_plc_adr_PostalAddressSchema: z.ZodType<fibo_fnd_plc_adr_PostalAddress> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));

export interface fibo_fnd_plc_loc_Municipality {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const fibo_fnd_plc_loc_MunicipalitySchema: z.ZodType<fibo_fnd_plc_loc_Municipality> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));

export interface fibo_pay_ps_ps_PaymentService {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const fibo_pay_ps_ps_PaymentServiceSchema: z.ZodType<fibo_pay_ps_ps_PaymentService> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));

export interface foaf_Person {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
}

export const foaf_PersonSchema: z.ZodType<foaf_Person> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
}));

export interface FAQPage {
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

export const FAQPageSchema: z.ZodType<FAQPage> = z.lazy(() => z.object({
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

export interface FMRadioChannel {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  broadcastChannelId?: string | Array<string>;
  broadcastFrequency?: s.BroadcastFrequencySpecification | string | Array<s.BroadcastFrequencySpecification | string>;
  broadcastServiceTier?: string | Array<string>;
  genre?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  inBroadcastLineup?: s.CableOrSatelliteService | Array<s.CableOrSatelliteService>;
  providesBroadcastService?: s.BroadcastService | Array<s.BroadcastService>;
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

export const FMRadioChannelSchema: z.ZodType<FMRadioChannel> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  broadcastChannelId: z.union([z.string(), z.array(z.string())]).optional(),
  broadcastFrequency: z.union([z.union([s.BroadcastFrequencySpecificationSchema, z.string()]), z.array(z.union([s.BroadcastFrequencySpecificationSchema, z.string()]))]).optional(),
  broadcastServiceTier: z.union([z.string(), z.array(z.string())]).optional(),
  genre: z.union([z.union([s.DefinedTermSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, z.string(), z.string().url()]))]).optional(),
  inBroadcastLineup: z.union([s.CableOrSatelliteServiceSchema, z.array(s.CableOrSatelliteServiceSchema)]).optional(),
  providesBroadcastService: z.union([s.BroadcastServiceSchema, z.array(s.BroadcastServiceSchema)]).optional(),
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

export interface FastFoodRestaurant {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  acceptsReservations?: boolean | string | Array<boolean | string>;
  hasMenu?: s.Menu | string | Array<s.Menu | string>;
  menu?: s.Menu | string | Array<s.Menu | string>;
  servesCuisine?: string | Array<string>;
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

export const FastFoodRestaurantSchema: z.ZodType<FastFoodRestaurant> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  acceptsReservations: z.union([z.union([z.boolean(), z.string(), z.string().url()]), z.array(z.union([z.boolean(), z.string(), z.string().url()]))]).optional(),
  hasMenu: z.union([z.union([s.MenuSchema, z.string(), z.string().url()]), z.array(z.union([s.MenuSchema, z.string(), z.string().url()]))]).optional(),
  menu: z.union([z.union([s.MenuSchema, z.string(), z.string().url()]), z.array(z.union([s.MenuSchema, z.string(), z.string().url()]))]).optional(),
  servesCuisine: z.union([z.string(), z.array(z.string())]).optional(),
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

export interface Festival {
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

export const FestivalSchema: z.ZodType<Festival> = z.lazy(() => z.object({
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

export interface FilmAction {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
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

export const FilmActionSchema: z.ZodType<FilmAction> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
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

export interface FinancialIncentive {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  areaServed?: s.AdministrativeArea | s.GeoShape | s.Place | string | Array<s.AdministrativeArea | s.GeoShape | s.Place | string>;
  eligibleWithSupplier?: s.Organization | Array<s.Organization>;
  incentiveAmount?: s.LoanOrCredit | s.QuantitativeValue | s.UnitPriceSpecification | Array<s.LoanOrCredit | s.QuantitativeValue | s.UnitPriceSpecification>;
  incentiveStatus?: s.IncentiveStatus | Array<s.IncentiveStatus>;
  incentiveType?: s.IncentiveType | Array<s.IncentiveType>;
  incentivizedItem?: s.DefinedTerm | s.Product | Array<s.DefinedTerm | s.Product>;
  incomeLimit?: s.MonetaryAmount | string | Array<s.MonetaryAmount | string>;
  provider?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  publisher?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  purchasePriceLimit?: s.MonetaryAmount | Array<s.MonetaryAmount>;
  purchaseType?: s.PurchaseType | Array<s.PurchaseType>;
  qualifiedExpense?: s.IncentiveQualifiedExpenseType | Array<s.IncentiveQualifiedExpenseType>;
  validFrom?: string | Array<string>;
  validThrough?: string | Array<string>;
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

export const FinancialIncentiveSchema: z.ZodType<FinancialIncentive> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  areaServed: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  eligibleWithSupplier: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  incentiveAmount: z.union([z.union([s.LoanOrCreditSchema, s.QuantitativeValueSchema, s.UnitPriceSpecificationSchema]), z.array(z.union([s.LoanOrCreditSchema, s.QuantitativeValueSchema, s.UnitPriceSpecificationSchema]))]).optional(),
  incentiveStatus: z.union([s.IncentiveStatusSchema, z.array(s.IncentiveStatusSchema)]).optional(),
  incentiveType: z.union([s.IncentiveTypeSchema, z.array(s.IncentiveTypeSchema)]).optional(),
  incentivizedItem: z.union([z.union([s.DefinedTermSchema, s.ProductSchema]), z.array(z.union([s.DefinedTermSchema, s.ProductSchema]))]).optional(),
  incomeLimit: z.union([z.union([s.MonetaryAmountSchema, z.string()]), z.array(z.union([s.MonetaryAmountSchema, z.string()]))]).optional(),
  provider: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  publisher: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  purchasePriceLimit: z.union([s.MonetaryAmountSchema, z.array(s.MonetaryAmountSchema)]).optional(),
  purchaseType: z.union([s.PurchaseTypeSchema, z.array(s.PurchaseTypeSchema)]).optional(),
  qualifiedExpense: z.union([s.IncentiveQualifiedExpenseTypeSchema, z.array(s.IncentiveQualifiedExpenseTypeSchema)]).optional(),
  validFrom: z.union([z.string(), z.array(z.string())]).optional(),
  validThrough: z.union([z.string(), z.array(z.string())]).optional(),
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

export interface FinancialProduct {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  annualPercentageRate?: number | s.QuantitativeValue | Array<number | s.QuantitativeValue>;
  feesAndCommissionsSpecification?: string | Array<string>;
  interestRate?: number | s.QuantitativeValue | Array<number | s.QuantitativeValue>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  areaServed?: s.AdministrativeArea | s.GeoShape | s.Place | string | Array<s.AdministrativeArea | s.GeoShape | s.Place | string>;
  audience?: s.Audience | Array<s.Audience>;
  availableChannel?: s.ServiceChannel | Array<s.ServiceChannel>;
  award?: string | Array<string>;
  brand?: s.Brand | s.Organization | Array<s.Brand | s.Organization>;
  broker?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  category?: s.CategoryCode | s.PhysicalActivityCategory | string | s.Thing | Array<s.CategoryCode | s.PhysicalActivityCategory | string | s.Thing>;
  hasCertification?: s.Certification | Array<s.Certification>;
  hasOfferCatalog?: s.OfferCatalog | Array<s.OfferCatalog>;
  hoursAvailable?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  isRelatedTo?: s.Product | s.Service | Array<s.Product | s.Service>;
  isSimilarTo?: s.Product | s.Service | Array<s.Product | s.Service>;
  logo?: s.ImageObject | string | Array<s.ImageObject | string>;
  offers?: s.Demand | s.Offer | Array<s.Demand | s.Offer>;
  produces?: s.Thing | Array<s.Thing>;
  provider?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  providerMobility?: string | Array<string>;
  review?: s.Review | Array<s.Review>;
  serviceArea?: s.AdministrativeArea | s.GeoShape | s.Place | Array<s.AdministrativeArea | s.GeoShape | s.Place>;
  serviceAudience?: s.Audience | Array<s.Audience>;
  serviceOutput?: s.Thing | Array<s.Thing>;
  serviceType?: s.GovernmentBenefitsType | string | Array<s.GovernmentBenefitsType | string>;
  slogan?: string | Array<string>;
  termsOfService?: string | Array<string>;
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

export const FinancialProductSchema: z.ZodType<FinancialProduct> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  annualPercentageRate: z.union([z.union([z.number(), s.QuantitativeValueSchema]), z.array(z.union([z.number(), s.QuantitativeValueSchema]))]).optional(),
  feesAndCommissionsSpecification: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  interestRate: z.union([z.union([z.number(), s.QuantitativeValueSchema]), z.array(z.union([z.number(), s.QuantitativeValueSchema]))]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  areaServed: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  audience: z.union([s.AudienceSchema, z.array(s.AudienceSchema)]).optional(),
  availableChannel: z.union([s.ServiceChannelSchema, z.array(s.ServiceChannelSchema)]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  brand: z.union([z.union([s.BrandSchema, s.OrganizationSchema]), z.array(z.union([s.BrandSchema, s.OrganizationSchema]))]).optional(),
  broker: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  category: z.union([z.union([s.CategoryCodeSchema, s.PhysicalActivityCategorySchema, z.string(), s.ThingSchema, z.string().url()]), z.array(z.union([s.CategoryCodeSchema, s.PhysicalActivityCategorySchema, z.string(), s.ThingSchema, z.string().url()]))]).optional(),
  hasCertification: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  hasOfferCatalog: z.union([s.OfferCatalogSchema, z.array(s.OfferCatalogSchema)]).optional(),
  hoursAvailable: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  isRelatedTo: z.union([z.union([s.ProductSchema, s.ServiceSchema]), z.array(z.union([s.ProductSchema, s.ServiceSchema]))]).optional(),
  isSimilarTo: z.union([z.union([s.ProductSchema, s.ServiceSchema]), z.array(z.union([s.ProductSchema, s.ServiceSchema]))]).optional(),
  logo: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  offers: z.union([z.union([s.DemandSchema, s.OfferSchema]), z.array(z.union([s.DemandSchema, s.OfferSchema]))]).optional(),
  produces: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  provider: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  providerMobility: z.union([z.string(), z.array(z.string())]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  serviceArea: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]))]).optional(),
  serviceAudience: z.union([s.AudienceSchema, z.array(s.AudienceSchema)]).optional(),
  serviceOutput: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  serviceType: z.union([z.union([s.GovernmentBenefitsTypeSchema, z.string()]), z.array(z.union([s.GovernmentBenefitsTypeSchema, z.string()]))]).optional(),
  slogan: z.union([z.string(), z.array(z.string())]).optional(),
  termsOfService: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
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

export interface FinancialService {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  feesAndCommissionsSpecification?: string | Array<string>;
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

export const FinancialServiceSchema: z.ZodType<FinancialService> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  feesAndCommissionsSpecification: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
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

export interface FindAction {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
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

export const FindActionSchema: z.ZodType<FindAction> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
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

export interface FireStation {
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
}

export const FireStationSchema: z.ZodType<FireStation> = z.lazy(() => z.object({
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
}));

export interface Flight {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  aircraft?: string | s.Vehicle | Array<string | s.Vehicle>;
  arrivalAirport?: s.Airport | Array<s.Airport>;
  arrivalGate?: string | Array<string>;
  arrivalTerminal?: string | Array<string>;
  boardingPolicy?: s.BoardingPolicyType | Array<s.BoardingPolicyType>;
  carrier?: s.Organization | Array<s.Organization>;
  departureAirport?: s.Airport | Array<s.Airport>;
  departureGate?: string | Array<string>;
  departureTerminal?: string | Array<string>;
  estimatedFlightDuration?: s.Duration | string | Array<s.Duration | string>;
  flightDistance?: s.Distance | string | Array<s.Distance | string>;
  flightNumber?: string | Array<string>;
  mealService?: string | Array<string>;
  seller?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  webCheckinTime?: string | Array<string>;
  arrivalTime?: string | Array<string>;
  departureTime?: string | Array<string>;
  itinerary?: s.ItemList | s.Place | Array<s.ItemList | s.Place>;
  offers?: s.Demand | s.Offer | Array<s.Demand | s.Offer>;
  partOfTrip?: s.Trip | Array<s.Trip>;
  provider?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  subTrip?: s.Trip | Array<s.Trip>;
  tripOrigin?: s.Place | Array<s.Place>;
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

export const FlightSchema: z.ZodType<Flight> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  aircraft: z.union([z.union([z.string(), s.VehicleSchema]), z.array(z.union([z.string(), s.VehicleSchema]))]).optional(),
  arrivalAirport: z.union([s.AirportSchema, z.array(s.AirportSchema)]).optional(),
  arrivalGate: z.union([z.string(), z.array(z.string())]).optional(),
  arrivalTerminal: z.union([z.string(), z.array(z.string())]).optional(),
  boardingPolicy: z.union([s.BoardingPolicyTypeSchema, z.array(s.BoardingPolicyTypeSchema)]).optional(),
  carrier: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  departureAirport: z.union([s.AirportSchema, z.array(s.AirportSchema)]).optional(),
  departureGate: z.union([z.string(), z.array(z.string())]).optional(),
  departureTerminal: z.union([z.string(), z.array(z.string())]).optional(),
  estimatedFlightDuration: z.union([z.union([s.DurationSchema, z.string()]), z.array(z.union([s.DurationSchema, z.string()]))]).optional(),
  flightDistance: z.union([z.union([s.DistanceSchema, z.string()]), z.array(z.union([s.DistanceSchema, z.string()]))]).optional(),
  flightNumber: z.union([z.string(), z.array(z.string())]).optional(),
  mealService: z.union([z.string(), z.array(z.string())]).optional(),
  seller: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  webCheckinTime: z.union([z.string(), z.array(z.string())]).optional(),
  arrivalTime: z.union([z.string(), z.array(z.string())]).optional(),
  departureTime: z.union([z.string(), z.array(z.string())]).optional(),
  itinerary: z.union([z.union([s.ItemListSchema, s.PlaceSchema]), z.array(z.union([s.ItemListSchema, s.PlaceSchema]))]).optional(),
  offers: z.union([z.union([s.DemandSchema, s.OfferSchema]), z.array(z.union([s.DemandSchema, s.OfferSchema]))]).optional(),
  partOfTrip: z.union([s.TripSchema, z.array(s.TripSchema)]).optional(),
  provider: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  subTrip: z.union([s.TripSchema, z.array(s.TripSchema)]).optional(),
  tripOrigin: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
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

export interface FlightReservation {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  boardingGroup?: string | Array<string>;
  passengerPriorityStatus?: s.QualitativeValue | string | Array<s.QualitativeValue | string>;
  passengerSequenceNumber?: string | Array<string>;
  securityScreening?: string | Array<string>;
  bookingAgent?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  bookingTime?: string | Array<string>;
  broker?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  modifiedTime?: string | Array<string>;
  priceCurrency?: string | Array<string>;
  programMembershipUsed?: s.ProgramMembership | Array<s.ProgramMembership>;
  provider?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  reservationFor?: s.Thing | Array<s.Thing>;
  reservationId?: string | Array<string>;
  reservationStatus?: s.ReservationStatusType | Array<s.ReservationStatusType>;
  reservedTicket?: s.Ticket | Array<s.Ticket>;
  totalPrice?: number | s.PriceSpecification | string | Array<number | s.PriceSpecification | string>;
  underName?: s.Organization | s.Person | Array<s.Organization | s.Person>;
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

export const FlightReservationSchema: z.ZodType<FlightReservation> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  boardingGroup: z.union([z.string(), z.array(z.string())]).optional(),
  passengerPriorityStatus: z.union([z.union([s.QualitativeValueSchema, z.string()]), z.array(z.union([s.QualitativeValueSchema, z.string()]))]).optional(),
  passengerSequenceNumber: z.union([z.string(), z.array(z.string())]).optional(),
  securityScreening: z.union([z.string(), z.array(z.string())]).optional(),
  bookingAgent: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  bookingTime: z.union([z.string(), z.array(z.string())]).optional(),
  broker: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  modifiedTime: z.union([z.string(), z.array(z.string())]).optional(),
  priceCurrency: z.union([z.string(), z.array(z.string())]).optional(),
  programMembershipUsed: z.union([s.ProgramMembershipSchema, z.array(s.ProgramMembershipSchema)]).optional(),
  provider: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  reservationFor: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  reservationId: z.union([z.string(), z.array(z.string())]).optional(),
  reservationStatus: z.union([s.ReservationStatusTypeSchema, z.array(s.ReservationStatusTypeSchema)]).optional(),
  reservedTicket: z.union([s.TicketSchema, z.array(s.TicketSchema)]).optional(),
  totalPrice: z.union([z.union([z.number(), s.PriceSpecificationSchema, z.string()]), z.array(z.union([z.number(), s.PriceSpecificationSchema, z.string()]))]).optional(),
  underName: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
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

export interface FloorPlan {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  amenityFeature?: s.LocationFeatureSpecification | Array<s.LocationFeatureSpecification>;
  floorSize?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  isPlanForApartment?: s.Accommodation | Array<s.Accommodation>;
  layoutImage?: s.ImageObject | string | Array<s.ImageObject | string>;
  numberOfAccommodationUnits?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  numberOfAvailableAccommodationUnits?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  numberOfBathroomsTotal?: number | Array<number>;
  numberOfBedrooms?: number | s.QuantitativeValue | Array<number | s.QuantitativeValue>;
  numberOfFullBathrooms?: number | Array<number>;
  numberOfPartialBathrooms?: number | Array<number>;
  numberOfRooms?: number | s.QuantitativeValue | Array<number | s.QuantitativeValue>;
  petsAllowed?: boolean | string | Array<boolean | string>;
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

export const FloorPlanSchema: z.ZodType<FloorPlan> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  amenityFeature: z.union([s.LocationFeatureSpecificationSchema, z.array(s.LocationFeatureSpecificationSchema)]).optional(),
  floorSize: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  isPlanForApartment: z.union([s.AccommodationSchema, z.array(s.AccommodationSchema)]).optional(),
  layoutImage: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  numberOfAccommodationUnits: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  numberOfAvailableAccommodationUnits: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  numberOfBathroomsTotal: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  numberOfBedrooms: z.union([z.union([z.number(), s.QuantitativeValueSchema]), z.array(z.union([z.number(), s.QuantitativeValueSchema]))]).optional(),
  numberOfFullBathrooms: z.union([z.number(), z.array(z.number())]).optional(),
  numberOfPartialBathrooms: z.union([z.number(), z.array(z.number())]).optional(),
  numberOfRooms: z.union([z.union([z.number(), s.QuantitativeValueSchema]), z.array(z.union([z.number(), s.QuantitativeValueSchema]))]).optional(),
  petsAllowed: z.union([z.union([z.boolean(), z.string()]), z.array(z.union([z.boolean(), z.string()]))]).optional(),
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

export interface Florist {
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

export const FloristSchema: z.ZodType<Florist> = z.lazy(() => z.object({
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

export interface FollowAction {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  followee?: s.Organization | s.Person | Array<s.Organization | s.Person>;
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

export const FollowActionSchema: z.ZodType<FollowAction> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  followee: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
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

export interface FoodEstablishment {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  acceptsReservations?: boolean | string | Array<boolean | string>;
  hasMenu?: s.Menu | string | Array<s.Menu | string>;
  menu?: s.Menu | string | Array<s.Menu | string>;
  servesCuisine?: string | Array<string>;
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

export const FoodEstablishmentSchema: z.ZodType<FoodEstablishment> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  acceptsReservations: z.union([z.union([z.boolean(), z.string(), z.string().url()]), z.array(z.union([z.boolean(), z.string(), z.string().url()]))]).optional(),
  hasMenu: z.union([z.union([s.MenuSchema, z.string(), z.string().url()]), z.array(z.union([s.MenuSchema, z.string(), z.string().url()]))]).optional(),
  menu: z.union([z.union([s.MenuSchema, z.string(), z.string().url()]), z.array(z.union([s.MenuSchema, z.string(), z.string().url()]))]).optional(),
  servesCuisine: z.union([z.string(), z.array(z.string())]).optional(),
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

export interface FoodEstablishmentReservation {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  endTime?: string | Array<string>;
  partySize?: number | s.QuantitativeValue | Array<number | s.QuantitativeValue>;
  startTime?: string | Array<string>;
  bookingAgent?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  bookingTime?: string | Array<string>;
  broker?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  modifiedTime?: string | Array<string>;
  priceCurrency?: string | Array<string>;
  programMembershipUsed?: s.ProgramMembership | Array<s.ProgramMembership>;
  provider?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  reservationFor?: s.Thing | Array<s.Thing>;
  reservationId?: string | Array<string>;
  reservationStatus?: s.ReservationStatusType | Array<s.ReservationStatusType>;
  reservedTicket?: s.Ticket | Array<s.Ticket>;
  totalPrice?: number | s.PriceSpecification | string | Array<number | s.PriceSpecification | string>;
  underName?: s.Organization | s.Person | Array<s.Organization | s.Person>;
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

export const FoodEstablishmentReservationSchema: z.ZodType<FoodEstablishmentReservation> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  endTime: z.union([z.string(), z.array(z.string())]).optional(),
  partySize: z.union([z.union([z.number().int(), s.QuantitativeValueSchema]), z.array(z.union([z.number().int(), s.QuantitativeValueSchema]))]).optional(),
  startTime: z.union([z.string(), z.array(z.string())]).optional(),
  bookingAgent: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  bookingTime: z.union([z.string(), z.array(z.string())]).optional(),
  broker: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  modifiedTime: z.union([z.string(), z.array(z.string())]).optional(),
  priceCurrency: z.union([z.string(), z.array(z.string())]).optional(),
  programMembershipUsed: z.union([s.ProgramMembershipSchema, z.array(s.ProgramMembershipSchema)]).optional(),
  provider: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  reservationFor: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  reservationId: z.union([z.string(), z.array(z.string())]).optional(),
  reservationStatus: z.union([s.ReservationStatusTypeSchema, z.array(s.ReservationStatusTypeSchema)]).optional(),
  reservedTicket: z.union([s.TicketSchema, z.array(s.TicketSchema)]).optional(),
  totalPrice: z.union([z.union([z.number(), s.PriceSpecificationSchema, z.string()]), z.array(z.union([z.number(), s.PriceSpecificationSchema, z.string()]))]).optional(),
  underName: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
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

export interface FoodEvent {
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

export const FoodEventSchema: z.ZodType<FoodEvent> = z.lazy(() => z.object({
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

export interface FoodService {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  areaServed?: s.AdministrativeArea | s.GeoShape | s.Place | string | Array<s.AdministrativeArea | s.GeoShape | s.Place | string>;
  audience?: s.Audience | Array<s.Audience>;
  availableChannel?: s.ServiceChannel | Array<s.ServiceChannel>;
  award?: string | Array<string>;
  brand?: s.Brand | s.Organization | Array<s.Brand | s.Organization>;
  broker?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  category?: s.CategoryCode | s.PhysicalActivityCategory | string | s.Thing | Array<s.CategoryCode | s.PhysicalActivityCategory | string | s.Thing>;
  hasCertification?: s.Certification | Array<s.Certification>;
  hasOfferCatalog?: s.OfferCatalog | Array<s.OfferCatalog>;
  hoursAvailable?: s.OpeningHoursSpecification | Array<s.OpeningHoursSpecification>;
  isRelatedTo?: s.Product | s.Service | Array<s.Product | s.Service>;
  isSimilarTo?: s.Product | s.Service | Array<s.Product | s.Service>;
  logo?: s.ImageObject | string | Array<s.ImageObject | string>;
  offers?: s.Demand | s.Offer | Array<s.Demand | s.Offer>;
  produces?: s.Thing | Array<s.Thing>;
  provider?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  providerMobility?: string | Array<string>;
  review?: s.Review | Array<s.Review>;
  serviceArea?: s.AdministrativeArea | s.GeoShape | s.Place | Array<s.AdministrativeArea | s.GeoShape | s.Place>;
  serviceAudience?: s.Audience | Array<s.Audience>;
  serviceOutput?: s.Thing | Array<s.Thing>;
  serviceType?: s.GovernmentBenefitsType | string | Array<s.GovernmentBenefitsType | string>;
  slogan?: string | Array<string>;
  termsOfService?: string | Array<string>;
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

export const FoodServiceSchema: z.ZodType<FoodService> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  areaServed: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  audience: z.union([s.AudienceSchema, z.array(s.AudienceSchema)]).optional(),
  availableChannel: z.union([s.ServiceChannelSchema, z.array(s.ServiceChannelSchema)]).optional(),
  award: z.union([z.string(), z.array(z.string())]).optional(),
  brand: z.union([z.union([s.BrandSchema, s.OrganizationSchema]), z.array(z.union([s.BrandSchema, s.OrganizationSchema]))]).optional(),
  broker: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  category: z.union([z.union([s.CategoryCodeSchema, s.PhysicalActivityCategorySchema, z.string(), s.ThingSchema, z.string().url()]), z.array(z.union([s.CategoryCodeSchema, s.PhysicalActivityCategorySchema, z.string(), s.ThingSchema, z.string().url()]))]).optional(),
  hasCertification: z.union([s.CertificationSchema, z.array(s.CertificationSchema)]).optional(),
  hasOfferCatalog: z.union([s.OfferCatalogSchema, z.array(s.OfferCatalogSchema)]).optional(),
  hoursAvailable: z.union([s.OpeningHoursSpecificationSchema, z.array(s.OpeningHoursSpecificationSchema)]).optional(),
  isRelatedTo: z.union([z.union([s.ProductSchema, s.ServiceSchema]), z.array(z.union([s.ProductSchema, s.ServiceSchema]))]).optional(),
  isSimilarTo: z.union([z.union([s.ProductSchema, s.ServiceSchema]), z.array(z.union([s.ProductSchema, s.ServiceSchema]))]).optional(),
  logo: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  offers: z.union([z.union([s.DemandSchema, s.OfferSchema]), z.array(z.union([s.DemandSchema, s.OfferSchema]))]).optional(),
  produces: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  provider: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  providerMobility: z.union([z.string(), z.array(z.string())]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  serviceArea: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema]))]).optional(),
  serviceAudience: z.union([s.AudienceSchema, z.array(s.AudienceSchema)]).optional(),
  serviceOutput: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  serviceType: z.union([z.union([s.GovernmentBenefitsTypeSchema, z.string()]), z.array(z.union([s.GovernmentBenefitsTypeSchema, z.string()]))]).optional(),
  slogan: z.union([z.string(), z.array(z.string())]).optional(),
  termsOfService: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
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

export type FulfillmentTypeEnumeration = 'schema:FulfillmentTypeCollectionPoint' | 'schema:FulfillmentTypeDelivery' | 'schema:FulfillmentTypePickupDropoff' | 'schema:FulfillmentTypePickupInStore' | 'schema:FulfillmentTypeScheduledDelivery';
export const FulfillmentTypeEnumerationSchema = z.union([z.literal('schema:FulfillmentTypeCollectionPoint'), z.literal('schema:FulfillmentTypeDelivery'), z.literal('schema:FulfillmentTypePickupDropoff'), z.literal('schema:FulfillmentTypePickupInStore'), z.literal('schema:FulfillmentTypeScheduledDelivery')]);

export interface FundingAgency {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
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

export const FundingAgencySchema: z.ZodType<FundingAgency> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
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

export interface FundingScheme {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
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

export const FundingSchemeSchema: z.ZodType<FundingScheme> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
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

export interface FurnitureStore {
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

export const FurnitureStoreSchema: z.ZodType<FurnitureStore> = z.lazy(() => z.object({
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
