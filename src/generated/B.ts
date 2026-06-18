import { z } from 'zod';
import * as s from './index';

export interface bibo_Issue {
  '@context'?: s.Context;
  '@type'?: 'bibo:Issue' | Array<'bibo:Issue'>;
  '@id'?: string;
}

export const bibo_IssueSchema: z.ZodType<bibo_Issue> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('bibo:Issue'), z.array(z.literal('bibo:Issue'))]).optional(),
  '@id': z.string().optional(),
}));

export interface bibo_Periodical {
  '@context'?: s.Context;
  '@type'?: 'bibo:Periodical' | Array<'bibo:Periodical'>;
  '@id'?: string;
}

export const bibo_PeriodicalSchema: z.ZodType<bibo_Periodical> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('bibo:Periodical'), z.array(z.literal('bibo:Periodical'))]).optional(),
  '@id': z.string().optional(),
}));

export interface BackgroundNewsArticle {
  '@context'?: s.Context;
  '@type'?: 'BackgroundNewsArticle' | Array<'BackgroundNewsArticle'>;
  '@id'?: string;
  dateline?: string | Array<string>;
  printColumn?: string | Array<string>;
  printEdition?: string | Array<string>;
  printPage?: string | Array<string>;
  printSection?: string | Array<string>;
  articleBody?: string | Array<string>;
  articleSection?: string | Array<string>;
  backstory?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  pageEnd?: number | string | Array<number | string>;
  pageStart?: number | string | Array<number | string>;
  pagination?: string | Array<string>;
  speakable?: s.SpeakableSpecification | string | Array<s.SpeakableSpecification | string>;
  wordCount?: number | Array<number>;
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

export const BackgroundNewsArticleSchema: z.ZodType<BackgroundNewsArticle> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BackgroundNewsArticle'), z.array(z.literal('BackgroundNewsArticle'))]).optional(),
  '@id': z.string().optional(),
  dateline: z.union([z.string(), z.array(z.string())]).optional(),
  printColumn: z.union([z.string(), z.array(z.string())]).optional(),
  printEdition: z.union([z.string(), z.array(z.string())]).optional(),
  printPage: z.union([z.string(), z.array(z.string())]).optional(),
  printSection: z.union([z.string(), z.array(z.string())]).optional(),
  articleBody: z.union([z.string(), z.array(z.string())]).optional(),
  articleSection: z.union([z.string(), z.array(z.string())]).optional(),
  backstory: z.union([z.union([s.CreativeWorkSchema, z.string()]), z.array(z.union([s.CreativeWorkSchema, z.string()]))]).optional(),
  pageEnd: z.union([z.union([z.number().int(), z.string()]), z.array(z.union([z.number().int(), z.string()]))]).optional(),
  pageStart: z.union([z.union([z.number().int(), z.string()]), z.array(z.union([z.number().int(), z.string()]))]).optional(),
  pagination: z.union([z.string(), z.array(z.string())]).optional(),
  speakable: z.union([z.union([s.SpeakableSpecificationSchema, z.string().url()]), z.array(z.union([s.SpeakableSpecificationSchema, z.string().url()]))]).optional(),
  wordCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
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

export interface Bakery {
  '@context'?: s.Context;
  '@type'?: 'Bakery' | Array<'Bakery'>;
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

export const BakerySchema: z.ZodType<Bakery> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('Bakery'), z.array(z.literal('Bakery'))]).optional(),
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

export interface BankAccount {
  '@context'?: s.Context;
  '@type'?: 'BankAccount' | 'DepositAccount' | Array<'BankAccount' | 'DepositAccount'>;
  '@id'?: string;
  accountMinimumInflow?: s.MonetaryAmount | Array<s.MonetaryAmount>;
  accountOverdraftLimit?: s.MonetaryAmount | Array<s.MonetaryAmount>;
  bankAccountType?: string | Array<string>;
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

export const BankAccountSchema: z.ZodType<BankAccount> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.union([z.literal('BankAccount'), z.literal('DepositAccount')]), z.array(z.union([z.literal('BankAccount'), z.literal('DepositAccount')]))]).optional(),
  '@id': z.string().optional(),
  accountMinimumInflow: z.union([s.MonetaryAmountSchema, z.array(s.MonetaryAmountSchema)]).optional(),
  accountOverdraftLimit: z.union([s.MonetaryAmountSchema, z.array(s.MonetaryAmountSchema)]).optional(),
  bankAccountType: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
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

export interface BankOrCreditUnion {
  '@context'?: s.Context;
  '@type'?: 'BankOrCreditUnion' | Array<'BankOrCreditUnion'>;
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

export const BankOrCreditUnionSchema: z.ZodType<BankOrCreditUnion> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BankOrCreditUnion'), z.array(z.literal('BankOrCreditUnion'))]).optional(),
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

export interface BarOrPub {
  '@context'?: s.Context;
  '@type'?: 'BarOrPub' | Array<'BarOrPub'>;
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

export const BarOrPubSchema: z.ZodType<BarOrPub> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BarOrPub'), z.array(z.literal('BarOrPub'))]).optional(),
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

export interface Barcode {
  '@context'?: s.Context;
  '@type'?: 'Barcode' | Array<'Barcode'>;
  '@id'?: string;
  caption?: s.MediaObject | string | Array<s.MediaObject | string>;
  embeddedTextCaption?: string | Array<string>;
  exifData?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  representativeOfPage?: boolean | Array<boolean>;
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

export const BarcodeSchema: z.ZodType<Barcode> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('Barcode'), z.array(z.literal('Barcode'))]).optional(),
  '@id': z.string().optional(),
  caption: z.union([z.union([s.MediaObjectSchema, z.string()]), z.array(z.union([s.MediaObjectSchema, z.string()]))]).optional(),
  embeddedTextCaption: z.union([z.string(), z.array(z.string())]).optional(),
  exifData: z.union([z.union([s.PropertyValueSchema, z.string()]), z.array(z.union([s.PropertyValueSchema, z.string()]))]).optional(),
  representativeOfPage: z.union([z.boolean(), z.array(z.boolean())]).optional(),
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

export interface Beach {
  '@context'?: s.Context;
  '@type'?: 'Beach' | Array<'Beach'>;
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

export const BeachSchema: z.ZodType<Beach> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('Beach'), z.array(z.literal('Beach'))]).optional(),
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

export interface BeautySalon {
  '@context'?: s.Context;
  '@type'?: 'BeautySalon' | Array<'BeautySalon'>;
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

export const BeautySalonSchema: z.ZodType<BeautySalon> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BeautySalon'), z.array(z.literal('BeautySalon'))]).optional(),
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

export interface BedAndBreakfast {
  '@context'?: s.Context;
  '@type'?: 'BedAndBreakfast' | Array<'BedAndBreakfast'>;
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

export const BedAndBreakfastSchema: z.ZodType<BedAndBreakfast> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BedAndBreakfast'), z.array(z.literal('BedAndBreakfast'))]).optional(),
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

export interface BedDetails {
  '@context'?: s.Context;
  '@type'?: 'BedDetails' | Array<'BedDetails'>;
  '@id'?: string;
  numberOfBeds?: number | Array<number>;
  typeOfBed?: s.BedType | string | Array<s.BedType | string>;
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

export const BedDetailsSchema: z.ZodType<BedDetails> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BedDetails'), z.array(z.literal('BedDetails'))]).optional(),
  '@id': z.string().optional(),
  numberOfBeds: z.union([z.number(), z.array(z.number())]).optional(),
  typeOfBed: z.union([z.union([s.BedTypeSchema, z.string()]), z.array(z.union([s.BedTypeSchema, z.string()]))]).optional(),
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

export interface BedType {
  '@context'?: s.Context;
  '@type'?: 'BedType' | Array<'BedType'>;
  '@id'?: string;
  additionalProperty?: s.PropertyValue | Array<s.PropertyValue>;
  equal?: s.QualitativeValue | Array<s.QualitativeValue>;
  greater?: s.QualitativeValue | Array<s.QualitativeValue>;
  greaterOrEqual?: s.QualitativeValue | Array<s.QualitativeValue>;
  lesser?: s.QualitativeValue | Array<s.QualitativeValue>;
  lesserOrEqual?: s.QualitativeValue | Array<s.QualitativeValue>;
  nonEqual?: s.QualitativeValue | Array<s.QualitativeValue>;
  valueReference?: s.DefinedTerm | s.Enumeration | s.MeasurementTypeEnumeration | s.PropertyValue | s.QualitativeValue | s.QuantitativeValue | s.StructuredValue | string | Array<s.DefinedTerm | s.Enumeration | s.MeasurementTypeEnumeration | s.PropertyValue | s.QualitativeValue | s.QuantitativeValue | s.StructuredValue | string>;
  supersededBy?: s.Class | s.Enumeration | s.Property | Array<s.Class | s.Enumeration | s.Property>;
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

export const BedTypeSchema: z.ZodType<BedType> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BedType'), z.array(z.literal('BedType'))]).optional(),
  '@id': z.string().optional(),
  additionalProperty: z.union([s.PropertyValueSchema, z.array(s.PropertyValueSchema)]).optional(),
  equal: z.union([s.QualitativeValueSchema, z.array(s.QualitativeValueSchema)]).optional(),
  greater: z.union([s.QualitativeValueSchema, z.array(s.QualitativeValueSchema)]).optional(),
  greaterOrEqual: z.union([s.QualitativeValueSchema, z.array(s.QualitativeValueSchema)]).optional(),
  lesser: z.union([s.QualitativeValueSchema, z.array(s.QualitativeValueSchema)]).optional(),
  lesserOrEqual: z.union([s.QualitativeValueSchema, z.array(s.QualitativeValueSchema)]).optional(),
  nonEqual: z.union([s.QualitativeValueSchema, z.array(s.QualitativeValueSchema)]).optional(),
  valueReference: z.union([z.union([s.DefinedTermSchema, s.EnumerationSchema, s.MeasurementTypeEnumerationSchema, s.PropertyValueSchema, s.QualitativeValueSchema, s.QuantitativeValueSchema, s.StructuredValueSchema, z.string()]), z.array(z.union([s.DefinedTermSchema, s.EnumerationSchema, s.MeasurementTypeEnumerationSchema, s.PropertyValueSchema, s.QualitativeValueSchema, s.QuantitativeValueSchema, s.StructuredValueSchema, z.string()]))]).optional(),
  supersededBy: z.union([z.union([s.ClassSchema, s.EnumerationSchema, s.PropertySchema]), z.array(z.union([s.ClassSchema, s.EnumerationSchema, s.PropertySchema]))]).optional(),
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

export interface BefriendAction {
  '@context'?: s.Context;
  '@type'?: 'BefriendAction' | Array<'BefriendAction'>;
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

export const BefriendActionSchema: z.ZodType<BefriendAction> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BefriendAction'), z.array(z.literal('BefriendAction'))]).optional(),
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

export interface BikeStore {
  '@context'?: s.Context;
  '@type'?: 'BikeStore' | Array<'BikeStore'>;
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

export const BikeStoreSchema: z.ZodType<BikeStore> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BikeStore'), z.array(z.literal('BikeStore'))]).optional(),
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

export interface BioChemEntity {
  '@context'?: s.Context;
  '@type'?: 'BioChemEntity' | 'ChemicalSubstance' | 'Gene' | 'MolecularEntity' | 'Protein' | Array<'BioChemEntity' | 'ChemicalSubstance' | 'Gene' | 'MolecularEntity' | 'Protein'>;
  '@id'?: string;
  associatedDisease?: s.MedicalCondition | s.PropertyValue | string | Array<s.MedicalCondition | s.PropertyValue | string>;
  bioChemInteraction?: s.BioChemEntity | Array<s.BioChemEntity>;
  bioChemSimilarity?: s.BioChemEntity | Array<s.BioChemEntity>;
  biologicalRole?: s.DefinedTerm | Array<s.DefinedTerm>;
  funding?: s.Grant | Array<s.Grant>;
  hasBioChemEntityPart?: s.BioChemEntity | Array<s.BioChemEntity>;
  hasMolecularFunction?: s.DefinedTerm | s.PropertyValue | string | Array<s.DefinedTerm | s.PropertyValue | string>;
  hasRepresentation?: s.PropertyValue | string | Array<s.PropertyValue | string>;
  isEncodedByBioChemEntity?: s.Gene | Array<s.Gene>;
  isInvolvedInBiologicalProcess?: s.DefinedTerm | s.PropertyValue | string | Array<s.DefinedTerm | s.PropertyValue | string>;
  isLocatedInSubcellularLocation?: s.DefinedTerm | s.PropertyValue | string | Array<s.DefinedTerm | s.PropertyValue | string>;
  isPartOfBioChemEntity?: s.BioChemEntity | Array<s.BioChemEntity>;
  taxonomicRange?: s.DefinedTerm | s.Taxon | string | Array<s.DefinedTerm | s.Taxon | string>;
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

export const BioChemEntitySchema: z.ZodType<BioChemEntity> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.union([z.literal('BioChemEntity'), z.literal('ChemicalSubstance'), z.literal('Gene'), z.literal('MolecularEntity'), z.literal('Protein')]), z.array(z.union([z.literal('BioChemEntity'), z.literal('ChemicalSubstance'), z.literal('Gene'), z.literal('MolecularEntity'), z.literal('Protein')]))]).optional(),
  '@id': z.string().optional(),
  associatedDisease: z.union([z.union([s.MedicalConditionSchema, s.PropertyValueSchema, z.string().url()]), z.array(z.union([s.MedicalConditionSchema, s.PropertyValueSchema, z.string().url()]))]).optional(),
  bioChemInteraction: z.union([s.BioChemEntitySchema, z.array(s.BioChemEntitySchema)]).optional(),
  bioChemSimilarity: z.union([s.BioChemEntitySchema, z.array(s.BioChemEntitySchema)]).optional(),
  biologicalRole: z.union([s.DefinedTermSchema, z.array(s.DefinedTermSchema)]).optional(),
  funding: z.union([s.GrantSchema, z.array(s.GrantSchema)]).optional(),
  hasBioChemEntityPart: z.union([s.BioChemEntitySchema, z.array(s.BioChemEntitySchema)]).optional(),
  hasMolecularFunction: z.union([z.union([s.DefinedTermSchema, s.PropertyValueSchema, z.string().url()]), z.array(z.union([s.DefinedTermSchema, s.PropertyValueSchema, z.string().url()]))]).optional(),
  hasRepresentation: z.union([z.union([s.PropertyValueSchema, z.string(), z.string().url()]), z.array(z.union([s.PropertyValueSchema, z.string(), z.string().url()]))]).optional(),
  isEncodedByBioChemEntity: z.union([s.GeneSchema, z.array(s.GeneSchema)]).optional(),
  isInvolvedInBiologicalProcess: z.union([z.union([s.DefinedTermSchema, s.PropertyValueSchema, z.string().url()]), z.array(z.union([s.DefinedTermSchema, s.PropertyValueSchema, z.string().url()]))]).optional(),
  isLocatedInSubcellularLocation: z.union([z.union([s.DefinedTermSchema, s.PropertyValueSchema, z.string().url()]), z.array(z.union([s.DefinedTermSchema, s.PropertyValueSchema, z.string().url()]))]).optional(),
  isPartOfBioChemEntity: z.union([s.BioChemEntitySchema, z.array(s.BioChemEntitySchema)]).optional(),
  taxonomicRange: z.union([z.union([s.DefinedTermSchema, s.TaxonSchema, z.string(), z.string().url()]), z.array(z.union([s.DefinedTermSchema, s.TaxonSchema, z.string(), z.string().url()]))]).optional(),
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

export interface Blog {
  '@context'?: s.Context;
  '@type'?: 'Blog' | Array<'Blog'>;
  '@id'?: string;
  blogPost?: s.BlogPosting | Array<s.BlogPosting>;
  blogPosts?: s.BlogPosting | Array<s.BlogPosting>;
  issn?: string | Array<string>;
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

export const BlogSchema: z.ZodType<Blog> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('Blog'), z.array(z.literal('Blog'))]).optional(),
  '@id': z.string().optional(),
  blogPost: z.union([s.BlogPostingSchema, z.array(s.BlogPostingSchema)]).optional(),
  blogPosts: z.union([s.BlogPostingSchema, z.array(s.BlogPostingSchema)]).optional(),
  issn: z.union([z.string(), z.array(z.string())]).optional(),
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

export interface BlogPosting {
  '@context'?: s.Context;
  '@type'?: 'BlogPosting' | 'LiveBlogPosting' | Array<'BlogPosting' | 'LiveBlogPosting'>;
  '@id'?: string;
  sharedContent?: s.CreativeWork | Array<s.CreativeWork>;
  articleBody?: string | Array<string>;
  articleSection?: string | Array<string>;
  backstory?: s.CreativeWork | string | Array<s.CreativeWork | string>;
  pageEnd?: number | string | Array<number | string>;
  pageStart?: number | string | Array<number | string>;
  pagination?: string | Array<string>;
  speakable?: s.SpeakableSpecification | string | Array<s.SpeakableSpecification | string>;
  wordCount?: number | Array<number>;
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

export const BlogPostingSchema: z.ZodType<BlogPosting> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.union([z.literal('BlogPosting'), z.literal('LiveBlogPosting')]), z.array(z.union([z.literal('BlogPosting'), z.literal('LiveBlogPosting')]))]).optional(),
  '@id': z.string().optional(),
  sharedContent: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  articleBody: z.union([z.string(), z.array(z.string())]).optional(),
  articleSection: z.union([z.string(), z.array(z.string())]).optional(),
  backstory: z.union([z.union([s.CreativeWorkSchema, z.string()]), z.array(z.union([s.CreativeWorkSchema, z.string()]))]).optional(),
  pageEnd: z.union([z.union([z.number().int(), z.string()]), z.array(z.union([z.number().int(), z.string()]))]).optional(),
  pageStart: z.union([z.union([z.number().int(), z.string()]), z.array(z.union([z.number().int(), z.string()]))]).optional(),
  pagination: z.union([z.string(), z.array(z.string())]).optional(),
  speakable: z.union([z.union([s.SpeakableSpecificationSchema, z.string().url()]), z.array(z.union([s.SpeakableSpecificationSchema, z.string().url()]))]).optional(),
  wordCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
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

export interface BloodTest {
  '@context'?: s.Context;
  '@type'?: 'BloodTest' | Array<'BloodTest'>;
  '@id'?: string;
  affectedBy?: s.Drug | Array<s.Drug>;
  normalRange?: s.MedicalEnumeration | string | Array<s.MedicalEnumeration | string>;
  signDetected?: s.MedicalSign | Array<s.MedicalSign>;
  usedToDiagnose?: s.MedicalCondition | Array<s.MedicalCondition>;
  usesDevice?: s.MedicalDevice | Array<s.MedicalDevice>;
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

export const BloodTestSchema: z.ZodType<BloodTest> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BloodTest'), z.array(z.literal('BloodTest'))]).optional(),
  '@id': z.string().optional(),
  affectedBy: z.union([s.DrugSchema, z.array(s.DrugSchema)]).optional(),
  normalRange: z.union([z.union([s.MedicalEnumerationSchema, z.string()]), z.array(z.union([s.MedicalEnumerationSchema, z.string()]))]).optional(),
  signDetected: z.union([s.MedicalSignSchema, z.array(s.MedicalSignSchema)]).optional(),
  usedToDiagnose: z.union([s.MedicalConditionSchema, z.array(s.MedicalConditionSchema)]).optional(),
  usesDevice: z.union([s.MedicalDeviceSchema, z.array(s.MedicalDeviceSchema)]).optional(),
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

export type BoardingPolicyType = 'schema:GroupBoardingPolicy' | 'schema:ZoneBoardingPolicy';
export const BoardingPolicyTypeSchema = z.union([z.literal('schema:GroupBoardingPolicy'), z.literal('schema:ZoneBoardingPolicy')]);

export interface BoatReservation {
  '@context'?: s.Context;
  '@type'?: 'BoatReservation' | Array<'BoatReservation'>;
  '@id'?: string;
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

export const BoatReservationSchema: z.ZodType<BoatReservation> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BoatReservation'), z.array(z.literal('BoatReservation'))]).optional(),
  '@id': z.string().optional(),
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

export interface BoatTerminal {
  '@context'?: s.Context;
  '@type'?: 'BoatTerminal' | Array<'BoatTerminal'>;
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

export const BoatTerminalSchema: z.ZodType<BoatTerminal> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BoatTerminal'), z.array(z.literal('BoatTerminal'))]).optional(),
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

export interface BoatTrip {
  '@context'?: s.Context;
  '@type'?: 'BoatTrip' | Array<'BoatTrip'>;
  '@id'?: string;
  arrivalBoatTerminal?: s.BoatTerminal | Array<s.BoatTerminal>;
  departureBoatTerminal?: s.BoatTerminal | Array<s.BoatTerminal>;
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

export const BoatTripSchema: z.ZodType<BoatTrip> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BoatTrip'), z.array(z.literal('BoatTrip'))]).optional(),
  '@id': z.string().optional(),
  arrivalBoatTerminal: z.union([s.BoatTerminalSchema, z.array(s.BoatTerminalSchema)]).optional(),
  departureBoatTerminal: z.union([s.BoatTerminalSchema, z.array(s.BoatTerminalSchema)]).optional(),
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

export type BodyMeasurementTypeEnumeration = 'schema:BodyMeasurementArm' | 'schema:BodyMeasurementBust' | 'schema:BodyMeasurementChest' | 'schema:BodyMeasurementFoot' | 'schema:BodyMeasurementHand' | 'schema:BodyMeasurementHead' | 'schema:BodyMeasurementHeight' | 'schema:BodyMeasurementHips' | 'schema:BodyMeasurementInsideLeg' | 'schema:BodyMeasurementNeck' | 'schema:BodyMeasurementUnderbust' | 'schema:BodyMeasurementWaist' | 'schema:BodyMeasurementWeight';
export const BodyMeasurementTypeEnumerationSchema = z.union([z.literal('schema:BodyMeasurementArm'), z.literal('schema:BodyMeasurementBust'), z.literal('schema:BodyMeasurementChest'), z.literal('schema:BodyMeasurementFoot'), z.literal('schema:BodyMeasurementHand'), z.literal('schema:BodyMeasurementHead'), z.literal('schema:BodyMeasurementHeight'), z.literal('schema:BodyMeasurementHips'), z.literal('schema:BodyMeasurementInsideLeg'), z.literal('schema:BodyMeasurementNeck'), z.literal('schema:BodyMeasurementUnderbust'), z.literal('schema:BodyMeasurementWaist'), z.literal('schema:BodyMeasurementWeight')]);

export interface BodyOfWater {
  '@context'?: s.Context;
  '@type'?: 'BodyOfWater' | 'Canal' | 'LakeBodyOfWater' | 'OceanBodyOfWater' | 'Pond' | 'Reservoir' | 'RiverBodyOfWater' | 'SeaBodyOfWater' | 'Waterfall' | Array<'BodyOfWater' | 'Canal' | 'LakeBodyOfWater' | 'OceanBodyOfWater' | 'Pond' | 'Reservoir' | 'RiverBodyOfWater' | 'SeaBodyOfWater' | 'Waterfall'>;
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

export const BodyOfWaterSchema: z.ZodType<BodyOfWater> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.union([z.literal('BodyOfWater'), z.literal('Canal'), z.literal('LakeBodyOfWater'), z.literal('OceanBodyOfWater'), z.literal('Pond'), z.literal('Reservoir'), z.literal('RiverBodyOfWater'), z.literal('SeaBodyOfWater'), z.literal('Waterfall')]), z.array(z.union([z.literal('BodyOfWater'), z.literal('Canal'), z.literal('LakeBodyOfWater'), z.literal('OceanBodyOfWater'), z.literal('Pond'), z.literal('Reservoir'), z.literal('RiverBodyOfWater'), z.literal('SeaBodyOfWater'), z.literal('Waterfall')]))]).optional(),
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

export interface Bone {
  '@context'?: s.Context;
  '@type'?: 'Bone' | Array<'Bone'>;
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

export const BoneSchema: z.ZodType<Bone> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('Bone'), z.array(z.literal('Bone'))]).optional(),
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

export interface Book {
  '@context'?: s.Context;
  '@type'?: 'Book' | 'Audiobook' | 'SequentialArt' | Array<'Book' | 'Audiobook' | 'SequentialArt'>;
  '@id'?: string;
  abridged?: boolean | Array<boolean>;
  bookEdition?: string | Array<string>;
  bookFormat?: s.BookFormatType | Array<s.BookFormatType>;
  illustrator?: s.Person | Array<s.Person>;
  isbn?: string | Array<string>;
  numberOfPages?: number | Array<number>;
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

export const BookSchema: z.ZodType<Book> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.union([z.literal('Book'), z.literal('Audiobook'), z.literal('SequentialArt')]), z.array(z.union([z.literal('Book'), z.literal('Audiobook'), z.literal('SequentialArt')]))]).optional(),
  '@id': z.string().optional(),
  abridged: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  bookEdition: z.union([z.string(), z.array(z.string())]).optional(),
  bookFormat: z.union([s.BookFormatTypeSchema, z.array(s.BookFormatTypeSchema)]).optional(),
  illustrator: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  isbn: z.union([z.string(), z.array(z.string())]).optional(),
  numberOfPages: z.union([z.number().int(), z.array(z.number().int())]).optional(),
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

export type BookFormatType = 'schema:AudiobookFormat' | 'schema:EBook' | 'schema:GraphicNovel' | 'schema:Hardcover' | 'schema:Pamphlet' | 'schema:Paperback';
export const BookFormatTypeSchema = z.union([z.literal('schema:AudiobookFormat'), z.literal('schema:EBook'), z.literal('schema:GraphicNovel'), z.literal('schema:Hardcover'), z.literal('schema:Pamphlet'), z.literal('schema:Paperback')]);

export interface BookSeries {
  '@context'?: s.Context;
  '@type'?: 'BookSeries' | Array<'BookSeries'>;
  '@id'?: string;
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

export const BookSeriesSchema: z.ZodType<BookSeries> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BookSeries'), z.array(z.literal('BookSeries'))]).optional(),
  '@id': z.string().optional(),
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

export interface BookStore {
  '@context'?: s.Context;
  '@type'?: 'BookStore' | Array<'BookStore'>;
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

export const BookStoreSchema: z.ZodType<BookStore> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BookStore'), z.array(z.literal('BookStore'))]).optional(),
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

export interface BookmarkAction {
  '@context'?: s.Context;
  '@type'?: 'BookmarkAction' | Array<'BookmarkAction'>;
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

export const BookmarkActionSchema: z.ZodType<BookmarkAction> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BookmarkAction'), z.array(z.literal('BookmarkAction'))]).optional(),
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

export interface BorrowAction {
  '@context'?: s.Context;
  '@type'?: 'BorrowAction' | Array<'BorrowAction'>;
  '@id'?: string;
  lender?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  fromLocation?: s.Place | Array<s.Place>;
  toLocation?: s.Place | Array<s.Place>;
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

export const BorrowActionSchema: z.ZodType<BorrowAction> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BorrowAction'), z.array(z.literal('BorrowAction'))]).optional(),
  '@id': z.string().optional(),
  lender: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  fromLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  toLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
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

export interface BowlingAlley {
  '@context'?: s.Context;
  '@type'?: 'BowlingAlley' | Array<'BowlingAlley'>;
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

export const BowlingAlleySchema: z.ZodType<BowlingAlley> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BowlingAlley'), z.array(z.literal('BowlingAlley'))]).optional(),
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

export interface BrainStructure {
  '@context'?: s.Context;
  '@type'?: 'BrainStructure' | Array<'BrainStructure'>;
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

export const BrainStructureSchema: z.ZodType<BrainStructure> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BrainStructure'), z.array(z.literal('BrainStructure'))]).optional(),
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

export interface Brand {
  '@context'?: s.Context;
  '@type'?: 'Brand' | Array<'Brand'>;
  '@id'?: string;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  logo?: s.ImageObject | string | Array<s.ImageObject | string>;
  review?: s.Review | Array<s.Review>;
  slogan?: string | Array<string>;
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

export const BrandSchema: z.ZodType<Brand> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('Brand'), z.array(z.literal('Brand'))]).optional(),
  '@id': z.string().optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  logo: z.union([z.union([s.ImageObjectSchema, z.string().url()]), z.array(z.union([s.ImageObjectSchema, z.string().url()]))]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  slogan: z.union([z.string(), z.array(z.string())]).optional(),
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

export interface BreadcrumbList {
  '@context'?: s.Context;
  '@type'?: 'BreadcrumbList' | Array<'BreadcrumbList'>;
  '@id'?: string;
  aggregateElement?: s.Thing | Array<s.Thing>;
  itemListElement?: s.ListItem | string | s.Thing | Array<s.ListItem | string | s.Thing>;
  itemListOrder?: s.ItemListOrderType | string | Array<s.ItemListOrderType | string>;
  numberOfItems?: number | Array<number>;
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

export const BreadcrumbListSchema: z.ZodType<BreadcrumbList> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BreadcrumbList'), z.array(z.literal('BreadcrumbList'))]).optional(),
  '@id': z.string().optional(),
  aggregateElement: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  itemListElement: z.union([z.union([s.ListItemSchema, z.string(), s.ThingSchema]), z.array(z.union([s.ListItemSchema, z.string(), s.ThingSchema]))]).optional(),
  itemListOrder: z.union([z.union([s.ItemListOrderTypeSchema, z.string()]), z.array(z.union([s.ItemListOrderTypeSchema, z.string()]))]).optional(),
  numberOfItems: z.union([z.number().int(), z.array(z.number().int())]).optional(),
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

export interface Brewery {
  '@context'?: s.Context;
  '@type'?: 'Brewery' | Array<'Brewery'>;
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

export const BrewerySchema: z.ZodType<Brewery> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('Brewery'), z.array(z.literal('Brewery'))]).optional(),
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

export interface Bridge {
  '@context'?: s.Context;
  '@type'?: 'Bridge' | Array<'Bridge'>;
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

export const BridgeSchema: z.ZodType<Bridge> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('Bridge'), z.array(z.literal('Bridge'))]).optional(),
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

export interface BroadcastChannel {
  '@context'?: s.Context;
  '@type'?: 'BroadcastChannel' | 'RadioChannel' | 'AMRadioChannel' | 'FMRadioChannel' | 'TelevisionChannel' | Array<'BroadcastChannel' | 'RadioChannel' | 'AMRadioChannel' | 'FMRadioChannel' | 'TelevisionChannel'>;
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

export const BroadcastChannelSchema: z.ZodType<BroadcastChannel> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.union([z.literal('BroadcastChannel'), z.literal('RadioChannel'), z.literal('AMRadioChannel'), z.literal('FMRadioChannel'), z.literal('TelevisionChannel')]), z.array(z.union([z.literal('BroadcastChannel'), z.literal('RadioChannel'), z.literal('AMRadioChannel'), z.literal('FMRadioChannel'), z.literal('TelevisionChannel')]))]).optional(),
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

export interface BroadcastEvent {
  '@context'?: s.Context;
  '@type'?: 'BroadcastEvent' | Array<'BroadcastEvent'>;
  '@id'?: string;
  broadcastOfEvent?: s.Event | Array<s.Event>;
  isLiveBroadcast?: boolean | Array<boolean>;
  subtitleLanguage?: s.Language | string | Array<s.Language | string>;
  videoFormat?: string | Array<string>;
  free?: boolean | Array<boolean>;
  publishedBy?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  publishedOn?: s.BroadcastService | Array<s.BroadcastService>;
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

export const BroadcastEventSchema: z.ZodType<BroadcastEvent> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BroadcastEvent'), z.array(z.literal('BroadcastEvent'))]).optional(),
  '@id': z.string().optional(),
  broadcastOfEvent: z.union([s.EventSchema, z.array(s.EventSchema)]).optional(),
  isLiveBroadcast: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  subtitleLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  videoFormat: z.union([z.string(), z.array(z.string())]).optional(),
  free: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  publishedBy: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  publishedOn: z.union([s.BroadcastServiceSchema, z.array(s.BroadcastServiceSchema)]).optional(),
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

export interface BroadcastFrequencySpecification {
  '@context'?: s.Context;
  '@type'?: 'BroadcastFrequencySpecification' | Array<'BroadcastFrequencySpecification'>;
  '@id'?: string;
  broadcastFrequencyValue?: number | s.QuantitativeValue | Array<number | s.QuantitativeValue>;
  broadcastSignalModulation?: s.QualitativeValue | string | Array<s.QualitativeValue | string>;
  broadcastSubChannel?: string | Array<string>;
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

export const BroadcastFrequencySpecificationSchema: z.ZodType<BroadcastFrequencySpecification> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BroadcastFrequencySpecification'), z.array(z.literal('BroadcastFrequencySpecification'))]).optional(),
  '@id': z.string().optional(),
  broadcastFrequencyValue: z.union([z.union([z.number(), s.QuantitativeValueSchema]), z.array(z.union([z.number(), s.QuantitativeValueSchema]))]).optional(),
  broadcastSignalModulation: z.union([z.union([s.QualitativeValueSchema, z.string()]), z.array(z.union([s.QualitativeValueSchema, z.string()]))]).optional(),
  broadcastSubChannel: z.union([z.string(), z.array(z.string())]).optional(),
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

export interface BroadcastService {
  '@context'?: s.Context;
  '@type'?: 'BroadcastService' | 'RadioBroadcastService' | Array<'BroadcastService' | 'RadioBroadcastService'>;
  '@id'?: string;
  area?: s.Place | Array<s.Place>;
  broadcastAffiliateOf?: s.Organization | Array<s.Organization>;
  broadcastDisplayName?: string | Array<string>;
  broadcastFrequency?: s.BroadcastFrequencySpecification | string | Array<s.BroadcastFrequencySpecification | string>;
  broadcastTimezone?: string | Array<string>;
  broadcaster?: s.Organization | Array<s.Organization>;
  callSign?: string | Array<string>;
  hasBroadcastChannel?: s.BroadcastChannel | Array<s.BroadcastChannel>;
  inLanguage?: s.Language | string | Array<s.Language | string>;
  parentService?: s.BroadcastService | Array<s.BroadcastService>;
  videoFormat?: string | Array<string>;
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

export const BroadcastServiceSchema: z.ZodType<BroadcastService> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.union([z.literal('BroadcastService'), z.literal('RadioBroadcastService')]), z.array(z.union([z.literal('BroadcastService'), z.literal('RadioBroadcastService')]))]).optional(),
  '@id': z.string().optional(),
  area: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  broadcastAffiliateOf: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  broadcastDisplayName: z.union([z.string(), z.array(z.string())]).optional(),
  broadcastFrequency: z.union([z.union([s.BroadcastFrequencySpecificationSchema, z.string()]), z.array(z.union([s.BroadcastFrequencySpecificationSchema, z.string()]))]).optional(),
  broadcastTimezone: z.union([z.string(), z.array(z.string())]).optional(),
  broadcaster: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  callSign: z.union([z.string(), z.array(z.string())]).optional(),
  hasBroadcastChannel: z.union([s.BroadcastChannelSchema, z.array(s.BroadcastChannelSchema)]).optional(),
  inLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  parentService: z.union([s.BroadcastServiceSchema, z.array(s.BroadcastServiceSchema)]).optional(),
  videoFormat: z.union([z.string(), z.array(z.string())]).optional(),
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

export interface BrokerageAccount {
  '@context'?: s.Context;
  '@type'?: 'BrokerageAccount' | Array<'BrokerageAccount'>;
  '@id'?: string;
  amount?: s.MonetaryAmount | number | Array<s.MonetaryAmount | number>;
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

export const BrokerageAccountSchema: z.ZodType<BrokerageAccount> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BrokerageAccount'), z.array(z.literal('BrokerageAccount'))]).optional(),
  '@id': z.string().optional(),
  amount: z.union([z.union([s.MonetaryAmountSchema, z.number()]), z.array(z.union([s.MonetaryAmountSchema, z.number()]))]).optional(),
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

export interface BuddhistTemple {
  '@context'?: s.Context;
  '@type'?: 'BuddhistTemple' | Array<'BuddhistTemple'>;
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

export const BuddhistTempleSchema: z.ZodType<BuddhistTemple> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BuddhistTemple'), z.array(z.literal('BuddhistTemple'))]).optional(),
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

export interface BusOrCoach {
  '@context'?: s.Context;
  '@type'?: 'BusOrCoach' | Array<'BusOrCoach'>;
  '@id'?: string;
  acrissCode?: string | Array<string>;
  roofLoad?: s.QuantitativeValue | Array<s.QuantitativeValue>;
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

export const BusOrCoachSchema: z.ZodType<BusOrCoach> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BusOrCoach'), z.array(z.literal('BusOrCoach'))]).optional(),
  '@id': z.string().optional(),
  acrissCode: z.union([z.string(), z.array(z.string())]).optional(),
  roofLoad: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
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

export interface BusReservation {
  '@context'?: s.Context;
  '@type'?: 'BusReservation' | Array<'BusReservation'>;
  '@id'?: string;
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

export const BusReservationSchema: z.ZodType<BusReservation> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BusReservation'), z.array(z.literal('BusReservation'))]).optional(),
  '@id': z.string().optional(),
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

export interface BusStation {
  '@context'?: s.Context;
  '@type'?: 'BusStation' | Array<'BusStation'>;
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

export const BusStationSchema: z.ZodType<BusStation> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BusStation'), z.array(z.literal('BusStation'))]).optional(),
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

export interface BusStop {
  '@context'?: s.Context;
  '@type'?: 'BusStop' | Array<'BusStop'>;
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

export const BusStopSchema: z.ZodType<BusStop> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BusStop'), z.array(z.literal('BusStop'))]).optional(),
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

export interface BusTrip {
  '@context'?: s.Context;
  '@type'?: 'BusTrip' | Array<'BusTrip'>;
  '@id'?: string;
  arrivalBusStop?: s.BusStation | s.BusStop | Array<s.BusStation | s.BusStop>;
  busName?: string | Array<string>;
  busNumber?: string | Array<string>;
  departureBusStop?: s.BusStation | s.BusStop | Array<s.BusStation | s.BusStop>;
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

export const BusTripSchema: z.ZodType<BusTrip> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BusTrip'), z.array(z.literal('BusTrip'))]).optional(),
  '@id': z.string().optional(),
  arrivalBusStop: z.union([z.union([s.BusStationSchema, s.BusStopSchema]), z.array(z.union([s.BusStationSchema, s.BusStopSchema]))]).optional(),
  busName: z.union([z.string(), z.array(z.string())]).optional(),
  busNumber: z.union([z.string(), z.array(z.string())]).optional(),
  departureBusStop: z.union([z.union([s.BusStationSchema, s.BusStopSchema]), z.array(z.union([s.BusStationSchema, s.BusStopSchema]))]).optional(),
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

export interface BusinessAudience {
  '@context'?: s.Context;
  '@type'?: 'BusinessAudience' | Array<'BusinessAudience'>;
  '@id'?: string;
  numberOfEmployees?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  yearlyRevenue?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  yearsInOperation?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  audienceType?: string | Array<string>;
  geographicArea?: s.AdministrativeArea | Array<s.AdministrativeArea>;
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

export const BusinessAudienceSchema: z.ZodType<BusinessAudience> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BusinessAudience'), z.array(z.literal('BusinessAudience'))]).optional(),
  '@id': z.string().optional(),
  numberOfEmployees: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  yearlyRevenue: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  yearsInOperation: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  audienceType: z.union([z.string(), z.array(z.string())]).optional(),
  geographicArea: z.union([s.AdministrativeAreaSchema, z.array(s.AdministrativeAreaSchema)]).optional(),
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

export interface BusinessEntityType {
  '@context'?: s.Context;
  '@type'?: 'BusinessEntityType' | Array<'BusinessEntityType'>;
  '@id'?: string;
  supersededBy?: s.Class | s.Enumeration | s.Property | Array<s.Class | s.Enumeration | s.Property>;
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

export const BusinessEntityTypeSchema: z.ZodType<BusinessEntityType> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BusinessEntityType'), z.array(z.literal('BusinessEntityType'))]).optional(),
  '@id': z.string().optional(),
  supersededBy: z.union([z.union([s.ClassSchema, s.EnumerationSchema, s.PropertySchema]), z.array(z.union([s.ClassSchema, s.EnumerationSchema, s.PropertySchema]))]).optional(),
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

export interface BusinessEvent {
  '@context'?: s.Context;
  '@type'?: 'BusinessEvent' | Array<'BusinessEvent'>;
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

export const BusinessEventSchema: z.ZodType<BusinessEvent> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BusinessEvent'), z.array(z.literal('BusinessEvent'))]).optional(),
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

export interface BusinessFunction {
  '@context'?: s.Context;
  '@type'?: 'BusinessFunction' | Array<'BusinessFunction'>;
  '@id'?: string;
  supersededBy?: s.Class | s.Enumeration | s.Property | Array<s.Class | s.Enumeration | s.Property>;
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

export const BusinessFunctionSchema: z.ZodType<BusinessFunction> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BusinessFunction'), z.array(z.literal('BusinessFunction'))]).optional(),
  '@id': z.string().optional(),
  supersededBy: z.union([z.union([s.ClassSchema, s.EnumerationSchema, s.PropertySchema]), z.array(z.union([s.ClassSchema, s.EnumerationSchema, s.PropertySchema]))]).optional(),
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

export interface BuyAction {
  '@context'?: s.Context;
  '@type'?: 'BuyAction' | Array<'BuyAction'>;
  '@id'?: string;
  seller?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  vendor?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  warrantyPromise?: s.WarrantyPromise | Array<s.WarrantyPromise>;
  price?: number | string | Array<number | string>;
  priceCurrency?: string | Array<string>;
  priceSpecification?: s.PriceSpecification | Array<s.PriceSpecification>;
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

export const BuyActionSchema: z.ZodType<BuyAction> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.literal('BuyAction'), z.array(z.literal('BuyAction'))]).optional(),
  '@id': z.string().optional(),
  seller: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  vendor: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  warrantyPromise: z.union([s.WarrantyPromiseSchema, z.array(s.WarrantyPromiseSchema)]).optional(),
  price: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  priceCurrency: z.union([z.string(), z.array(z.string())]).optional(),
  priceSpecification: z.union([s.PriceSpecificationSchema, z.array(s.PriceSpecificationSchema)]).optional(),
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
