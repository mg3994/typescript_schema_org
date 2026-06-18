import { z } from 'zod';
import * as s from './index';

export interface AMRadioChannel {
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

export const AMRadioChannelSchema: z.ZodType<AMRadioChannel> = z.lazy(() => z.object({
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

export interface APIReference {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  assembly?: string | Array<string>;
  assemblyVersion?: string | Array<string>;
  executableLibraryName?: string | Array<string>;
  programmingModel?: string | Array<string>;
  targetPlatform?: string | Array<string>;
  dependencies?: string | Array<string>;
  proficiencyLevel?: string | Array<string>;
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

export const APIReferenceSchema: z.ZodType<APIReference> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  assembly: z.union([z.string(), z.array(z.string())]).optional(),
  assemblyVersion: z.union([z.string(), z.array(z.string())]).optional(),
  executableLibraryName: z.union([z.string(), z.array(z.string())]).optional(),
  programmingModel: z.union([z.string(), z.array(z.string())]).optional(),
  targetPlatform: z.union([z.string(), z.array(z.string())]).optional(),
  dependencies: z.union([z.string(), z.array(z.string())]).optional(),
  proficiencyLevel: z.union([z.string(), z.array(z.string())]).optional(),
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

export interface AboutPage {
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

export const AboutPageSchema: z.ZodType<AboutPage> = z.lazy(() => z.object({
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

export interface AcceptAction {
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

export const AcceptActionSchema: z.ZodType<AcceptAction> = z.lazy(() => z.object({
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

export interface Accommodation {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
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
  numberOfRooms?: number | s.QuantitativeValue | Array<number | s.QuantitativeValue>;
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

export const AccommodationSchema: z.ZodType<Accommodation> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
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
  numberOfRooms: z.union([z.union([z.number(), s.QuantitativeValueSchema]), z.array(z.union([z.number(), s.QuantitativeValueSchema]))]).optional(),
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

export interface AccountingService {
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

export const AccountingServiceSchema: z.ZodType<AccountingService> = z.lazy(() => z.object({
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

export interface AchieveAction {
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

export const AchieveActionSchema: z.ZodType<AchieveAction> = z.lazy(() => z.object({
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

export interface Action {
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

export const ActionSchema: z.ZodType<Action> = z.lazy(() => z.object({
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

export interface ActionAccessSpecification {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  availabilityEnds?: string | Array<string>;
  availabilityStarts?: string | Array<string>;
  category?: s.CategoryCode | s.PhysicalActivityCategory | string | s.Thing | Array<s.CategoryCode | s.PhysicalActivityCategory | string | s.Thing>;
  eligibleRegion?: s.GeoShape | s.Place | string | Array<s.GeoShape | s.Place | string>;
  expectsAcceptanceOf?: s.Offer | Array<s.Offer>;
  ineligibleRegion?: s.GeoShape | s.Place | string | Array<s.GeoShape | s.Place | string>;
  requiresSubscription?: boolean | s.MediaSubscription | Array<boolean | s.MediaSubscription>;
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

export const ActionAccessSpecificationSchema: z.ZodType<ActionAccessSpecification> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  availabilityEnds: z.union([z.string(), z.array(z.string())]).optional(),
  availabilityStarts: z.union([z.string(), z.array(z.string())]).optional(),
  category: z.union([z.union([s.CategoryCodeSchema, s.PhysicalActivityCategorySchema, z.string(), s.ThingSchema, z.string().url()]), z.array(z.union([s.CategoryCodeSchema, s.PhysicalActivityCategorySchema, z.string(), s.ThingSchema, z.string().url()]))]).optional(),
  eligibleRegion: z.union([z.union([s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  expectsAcceptanceOf: z.union([s.OfferSchema, z.array(s.OfferSchema)]).optional(),
  ineligibleRegion: z.union([z.union([s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  requiresSubscription: z.union([z.union([z.boolean(), s.MediaSubscriptionSchema]), z.array(z.union([z.boolean(), s.MediaSubscriptionSchema]))]).optional(),
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

export type ActionStatusType = 'schema:ActiveActionStatus' | 'schema:CompletedActionStatus' | 'schema:FailedActionStatus' | 'schema:PotentialActionStatus';
export const ActionStatusTypeSchema = z.union([z.literal('schema:ActiveActionStatus'), z.literal('schema:CompletedActionStatus'), z.literal('schema:FailedActionStatus'), z.literal('schema:PotentialActionStatus')]);

export interface ActivateAction {
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

export const ActivateActionSchema: z.ZodType<ActivateAction> = z.lazy(() => z.object({
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

export interface AddAction {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  collection?: s.Thing | Array<s.Thing>;
  targetCollection?: s.Thing | Array<s.Thing>;
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

export const AddActionSchema: z.ZodType<AddAction> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  collection: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  targetCollection: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
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

export interface AdministrativeArea {
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

export const AdministrativeAreaSchema: z.ZodType<AdministrativeArea> = z.lazy(() => z.object({
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

export interface AdultEntertainment {
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

export const AdultEntertainmentSchema: z.ZodType<AdultEntertainment> = z.lazy(() => z.object({
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

export type AdultOrientedEnumeration = 'schema:AlcoholConsideration' | 'schema:DangerousGoodConsideration' | 'schema:HealthcareConsideration' | 'schema:NarcoticConsideration' | 'schema:ReducedRelevanceForChildrenConsideration' | 'schema:SexualContentConsideration' | 'schema:TobaccoNicotineConsideration' | 'schema:UnclassifiedAdultConsideration' | 'schema:ViolenceConsideration' | 'schema:WeaponConsideration';
export const AdultOrientedEnumerationSchema = z.union([z.literal('schema:AlcoholConsideration'), z.literal('schema:DangerousGoodConsideration'), z.literal('schema:HealthcareConsideration'), z.literal('schema:NarcoticConsideration'), z.literal('schema:ReducedRelevanceForChildrenConsideration'), z.literal('schema:SexualContentConsideration'), z.literal('schema:TobaccoNicotineConsideration'), z.literal('schema:UnclassifiedAdultConsideration'), z.literal('schema:ViolenceConsideration'), z.literal('schema:WeaponConsideration')]);

export interface AdvertiserContentArticle {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
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

export const AdvertiserContentArticleSchema: z.ZodType<AdvertiserContentArticle> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
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

export interface AggregateOffer {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  highPrice?: number | string | Array<number | string>;
  lowPrice?: number | string | Array<number | string>;
  offerCount?: number | Array<number>;
  offers?: s.Demand | s.Offer | Array<s.Demand | s.Offer>;
  acceptedPaymentMethod?: s.LoanOrCredit | s.PaymentMethod | string | Array<s.LoanOrCredit | s.PaymentMethod | string>;
  addOn?: s.Offer | Array<s.Offer>;
  additionalProperty?: s.PropertyValue | Array<s.PropertyValue>;
  advanceBookingRequirement?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  aggregateRating?: s.AggregateRating | Array<s.AggregateRating>;
  areaServed?: s.AdministrativeArea | s.GeoShape | s.Place | string | Array<s.AdministrativeArea | s.GeoShape | s.Place | string>;
  asin?: string | Array<string>;
  availability?: s.ItemAvailability | Array<s.ItemAvailability>;
  availabilityEnds?: string | Array<string>;
  availabilityStarts?: string | Array<string>;
  availableAtOrFrom?: s.Place | Array<s.Place>;
  availableDeliveryMethod?: s.DeliveryMethod | Array<s.DeliveryMethod>;
  businessFunction?: s.BusinessFunction | Array<s.BusinessFunction>;
  category?: s.CategoryCode | s.PhysicalActivityCategory | string | s.Thing | Array<s.CategoryCode | s.PhysicalActivityCategory | string | s.Thing>;
  checkoutPageURLTemplate?: string | Array<string>;
  deliveryLeadTime?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  eligibleCustomerType?: s.BusinessEntityType | Array<s.BusinessEntityType>;
  eligibleDuration?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  eligibleQuantity?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  eligibleRegion?: s.GeoShape | s.Place | string | Array<s.GeoShape | s.Place | string>;
  eligibleTransactionVolume?: s.PriceSpecification | Array<s.PriceSpecification>;
  gtin?: string | Array<string>;
  gtin12?: string | Array<string>;
  gtin13?: string | Array<string>;
  gtin14?: string | Array<string>;
  gtin8?: string | Array<string>;
  hasAdultConsideration?: s.AdultOrientedEnumeration | Array<s.AdultOrientedEnumeration>;
  hasGS1DigitalLink?: string | Array<string>;
  hasMeasurement?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  hasMerchantReturnPolicy?: s.MerchantReturnPolicy | Array<s.MerchantReturnPolicy>;
  includesObject?: s.TypeAndQuantityNode | Array<s.TypeAndQuantityNode>;
  ineligibleRegion?: s.GeoShape | s.Place | string | Array<s.GeoShape | s.Place | string>;
  inventoryLevel?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  isFamilyFriendly?: boolean | Array<boolean>;
  itemCondition?: s.OfferItemCondition | Array<s.OfferItemCondition>;
  itemOffered?: s.AggregateOffer | s.CreativeWork | s.Event | s.MenuItem | s.Product | s.Service | s.Trip | Array<s.AggregateOffer | s.CreativeWork | s.Event | s.MenuItem | s.Product | s.Service | s.Trip>;
  leaseLength?: s.Duration | s.QuantitativeValue | Array<s.Duration | s.QuantitativeValue>;
  mobileUrl?: string | Array<string>;
  mpn?: string | Array<string>;
  offeredBy?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  price?: number | string | Array<number | string>;
  priceCurrency?: string | Array<string>;
  priceSpecification?: s.PriceSpecification | Array<s.PriceSpecification>;
  priceValidUntil?: string | Array<string>;
  review?: s.Review | Array<s.Review>;
  reviews?: s.Review | Array<s.Review>;
  seller?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  serialNumber?: string | Array<string>;
  shippingDetails?: s.OfferShippingDetails | Array<s.OfferShippingDetails>;
  sku?: string | Array<string>;
  validForMemberTier?: s.MemberProgramTier | Array<s.MemberProgramTier>;
  validFrom?: string | Array<string>;
  validThrough?: string | Array<string>;
  warranty?: s.WarrantyPromise | Array<s.WarrantyPromise>;
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

export const AggregateOfferSchema: z.ZodType<AggregateOffer> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  highPrice: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  lowPrice: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  offerCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  offers: z.union([z.union([s.DemandSchema, s.OfferSchema]), z.array(z.union([s.DemandSchema, s.OfferSchema]))]).optional(),
  acceptedPaymentMethod: z.union([z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]), z.array(z.union([s.LoanOrCreditSchema, s.PaymentMethodSchema, z.string()]))]).optional(),
  addOn: z.union([s.OfferSchema, z.array(s.OfferSchema)]).optional(),
  additionalProperty: z.union([s.PropertyValueSchema, z.array(s.PropertyValueSchema)]).optional(),
  advanceBookingRequirement: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  aggregateRating: z.union([s.AggregateRatingSchema, z.array(s.AggregateRatingSchema)]).optional(),
  areaServed: z.union([z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.AdministrativeAreaSchema, s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  asin: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  availability: z.union([s.ItemAvailabilitySchema, z.array(s.ItemAvailabilitySchema)]).optional(),
  availabilityEnds: z.union([z.string(), z.array(z.string())]).optional(),
  availabilityStarts: z.union([z.string(), z.array(z.string())]).optional(),
  availableAtOrFrom: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  availableDeliveryMethod: z.union([s.DeliveryMethodSchema, z.array(s.DeliveryMethodSchema)]).optional(),
  businessFunction: z.union([s.BusinessFunctionSchema, z.array(s.BusinessFunctionSchema)]).optional(),
  category: z.union([z.union([s.CategoryCodeSchema, s.PhysicalActivityCategorySchema, z.string(), s.ThingSchema, z.string().url()]), z.array(z.union([s.CategoryCodeSchema, s.PhysicalActivityCategorySchema, z.string(), s.ThingSchema, z.string().url()]))]).optional(),
  checkoutPageURLTemplate: z.union([z.string(), z.array(z.string())]).optional(),
  deliveryLeadTime: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  eligibleCustomerType: z.union([s.BusinessEntityTypeSchema, z.array(s.BusinessEntityTypeSchema)]).optional(),
  eligibleDuration: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  eligibleQuantity: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  eligibleRegion: z.union([z.union([s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  eligibleTransactionVolume: z.union([s.PriceSpecificationSchema, z.array(s.PriceSpecificationSchema)]).optional(),
  gtin: z.union([z.union([z.string(), z.string().url()]), z.array(z.union([z.string(), z.string().url()]))]).optional(),
  gtin12: z.union([z.string(), z.array(z.string())]).optional(),
  gtin13: z.union([z.string(), z.array(z.string())]).optional(),
  gtin14: z.union([z.string(), z.array(z.string())]).optional(),
  gtin8: z.union([z.string(), z.array(z.string())]).optional(),
  hasAdultConsideration: z.union([s.AdultOrientedEnumerationSchema, z.array(s.AdultOrientedEnumerationSchema)]).optional(),
  hasGS1DigitalLink: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  hasMeasurement: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  hasMerchantReturnPolicy: z.union([s.MerchantReturnPolicySchema, z.array(s.MerchantReturnPolicySchema)]).optional(),
  includesObject: z.union([s.TypeAndQuantityNodeSchema, z.array(s.TypeAndQuantityNodeSchema)]).optional(),
  ineligibleRegion: z.union([z.union([s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  inventoryLevel: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  isFamilyFriendly: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  itemCondition: z.union([s.OfferItemConditionSchema, z.array(s.OfferItemConditionSchema)]).optional(),
  itemOffered: z.union([z.union([s.AggregateOfferSchema, s.CreativeWorkSchema, s.EventSchema, s.MenuItemSchema, s.ProductSchema, s.ServiceSchema, s.TripSchema]), z.array(z.union([s.AggregateOfferSchema, s.CreativeWorkSchema, s.EventSchema, s.MenuItemSchema, s.ProductSchema, s.ServiceSchema, s.TripSchema]))]).optional(),
  leaseLength: z.union([z.union([s.DurationSchema, s.QuantitativeValueSchema]), z.array(z.union([s.DurationSchema, s.QuantitativeValueSchema]))]).optional(),
  mobileUrl: z.union([z.string(), z.array(z.string())]).optional(),
  mpn: z.union([z.string(), z.array(z.string())]).optional(),
  offeredBy: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  price: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  priceCurrency: z.union([z.string(), z.array(z.string())]).optional(),
  priceSpecification: z.union([s.PriceSpecificationSchema, z.array(s.PriceSpecificationSchema)]).optional(),
  priceValidUntil: z.union([z.string(), z.array(z.string())]).optional(),
  review: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  reviews: z.union([s.ReviewSchema, z.array(s.ReviewSchema)]).optional(),
  seller: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  serialNumber: z.union([z.string(), z.array(z.string())]).optional(),
  shippingDetails: z.union([s.OfferShippingDetailsSchema, z.array(s.OfferShippingDetailsSchema)]).optional(),
  sku: z.union([z.string(), z.array(z.string())]).optional(),
  validForMemberTier: z.union([s.MemberProgramTierSchema, z.array(s.MemberProgramTierSchema)]).optional(),
  validFrom: z.union([z.string(), z.array(z.string())]).optional(),
  validThrough: z.union([z.string(), z.array(z.string())]).optional(),
  warranty: z.union([s.WarrantyPromiseSchema, z.array(s.WarrantyPromiseSchema)]).optional(),
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

export interface AggregateRating {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  itemReviewed?: s.Thing | Array<s.Thing>;
  ratingCount?: number | Array<number>;
  reviewCount?: number | Array<number>;
  author?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  bestRating?: number | string | Array<number | string>;
  ratingExplanation?: string | Array<string>;
  ratingValue?: number | string | Array<number | string>;
  reviewAspect?: s.StructuredValue | string | Array<s.StructuredValue | string>;
  worstRating?: number | string | Array<number | string>;
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

export const AggregateRatingSchema: z.ZodType<AggregateRating> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  itemReviewed: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  ratingCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  reviewCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  author: z.union([z.union([s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.OrganizationSchema, s.PersonSchema]))]).optional(),
  bestRating: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  ratingExplanation: z.union([z.string(), z.array(z.string())]).optional(),
  ratingValue: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
  reviewAspect: z.union([z.union([s.StructuredValueSchema, z.string()]), z.array(z.union([s.StructuredValueSchema, z.string()]))]).optional(),
  worstRating: z.union([z.union([z.number(), z.string()]), z.array(z.union([z.number(), z.string()]))]).optional(),
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

export interface AgreeAction {
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

export const AgreeActionSchema: z.ZodType<AgreeAction> = z.lazy(() => z.object({
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

export interface Airline {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  boardingPolicy?: s.BoardingPolicyType | Array<s.BoardingPolicyType>;
  iataCode?: string | Array<string>;
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

export const AirlineSchema: z.ZodType<Airline> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  boardingPolicy: z.union([s.BoardingPolicyTypeSchema, z.array(s.BoardingPolicyTypeSchema)]).optional(),
  iataCode: z.union([z.string(), z.array(z.string())]).optional(),
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

export interface Airport {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  iataCode?: string | Array<string>;
  icaoCode?: string | Array<string>;
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

export const AirportSchema: z.ZodType<Airport> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  iataCode: z.union([z.string(), z.array(z.string())]).optional(),
  icaoCode: z.union([z.string(), z.array(z.string())]).optional(),
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

export interface AlignmentObject {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  alignmentType?: string | Array<string>;
  educationalFramework?: string | Array<string>;
  targetDescription?: string | Array<string>;
  targetName?: string | Array<string>;
  targetUrl?: string | Array<string>;
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

export const AlignmentObjectSchema: z.ZodType<AlignmentObject> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  alignmentType: z.union([z.string(), z.array(z.string())]).optional(),
  educationalFramework: z.union([z.string(), z.array(z.string())]).optional(),
  targetDescription: z.union([z.string(), z.array(z.string())]).optional(),
  targetName: z.union([z.string(), z.array(z.string())]).optional(),
  targetUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
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

export interface AllocateAction {
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

export const AllocateActionSchema: z.ZodType<AllocateAction> = z.lazy(() => z.object({
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

export interface AmpStory {
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
  associatedArticle?: s.NewsArticle | Array<s.NewsArticle>;
  bitrate?: string | Array<string>;
  contentSize?: string | Array<string>;
  contentUrl?: string | Array<string>;
  duration?: s.Duration | s.QuantitativeValue | Array<s.Duration | s.QuantitativeValue>;
  embedUrl?: string | Array<string>;
  encodesCreativeWork?: s.CreativeWork | Array<s.CreativeWork>;
  endTime?: string | Array<string>;
  height?: s.Distance | s.QuantitativeValue | Array<s.Distance | s.QuantitativeValue>;
  ineligibleRegion?: s.GeoShape | s.Place | string | Array<s.GeoShape | s.Place | string>;
  playerType?: string | Array<string>;
  productionCompany?: s.Organization | Array<s.Organization>;
  regionsAllowed?: s.Place | Array<s.Place>;
  requiresSubscription?: boolean | s.MediaSubscription | Array<boolean | s.MediaSubscription>;
  sha256?: string | Array<string>;
  startTime?: string | Array<string>;
  uploadDate?: string | Array<string>;
  width?: s.Distance | s.QuantitativeValue | Array<s.Distance | s.QuantitativeValue>;
}

export const AmpStorySchema: z.ZodType<AmpStory> = z.lazy(() => z.object({
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
  associatedArticle: z.union([s.NewsArticleSchema, z.array(s.NewsArticleSchema)]).optional(),
  bitrate: z.union([z.string(), z.array(z.string())]).optional(),
  contentSize: z.union([z.string(), z.array(z.string())]).optional(),
  contentUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  duration: z.union([z.union([s.DurationSchema, s.QuantitativeValueSchema]), z.array(z.union([s.DurationSchema, s.QuantitativeValueSchema]))]).optional(),
  embedUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  encodesCreativeWork: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  endTime: z.union([z.string(), z.array(z.string())]).optional(),
  height: z.union([z.union([s.DistanceSchema, s.QuantitativeValueSchema]), z.array(z.union([s.DistanceSchema, s.QuantitativeValueSchema]))]).optional(),
  ineligibleRegion: z.union([z.union([s.GeoShapeSchema, s.PlaceSchema, z.string()]), z.array(z.union([s.GeoShapeSchema, s.PlaceSchema, z.string()]))]).optional(),
  playerType: z.union([z.string(), z.array(z.string())]).optional(),
  productionCompany: z.union([s.OrganizationSchema, z.array(s.OrganizationSchema)]).optional(),
  regionsAllowed: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  requiresSubscription: z.union([z.union([z.boolean(), s.MediaSubscriptionSchema]), z.array(z.union([z.boolean(), s.MediaSubscriptionSchema]))]).optional(),
  sha256: z.union([z.string(), z.array(z.string())]).optional(),
  startTime: z.union([z.string(), z.array(z.string())]).optional(),
  uploadDate: z.union([z.string(), z.array(z.string())]).optional(),
  width: z.union([z.union([s.DistanceSchema, s.QuantitativeValueSchema]), z.array(z.union([s.DistanceSchema, s.QuantitativeValueSchema]))]).optional(),
}));

export interface AmusementPark {
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

export const AmusementParkSchema: z.ZodType<AmusementPark> = z.lazy(() => z.object({
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

export interface AnalysisNewsArticle {
  '@context'?: s.Context;
  '@type'?: string | string[];
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

export const AnalysisNewsArticleSchema: z.ZodType<AnalysisNewsArticle> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
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

export interface AnatomicalStructure {
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

export const AnatomicalStructureSchema: z.ZodType<AnatomicalStructure> = z.lazy(() => z.object({
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

export interface AnatomicalSystem {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  associatedPathophysiology?: string | Array<string>;
  comprisedOf?: s.AnatomicalStructure | s.AnatomicalSystem | Array<s.AnatomicalStructure | s.AnatomicalSystem>;
  relatedCondition?: s.MedicalCondition | Array<s.MedicalCondition>;
  relatedStructure?: s.AnatomicalStructure | Array<s.AnatomicalStructure>;
  relatedTherapy?: s.MedicalTherapy | Array<s.MedicalTherapy>;
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

export const AnatomicalSystemSchema: z.ZodType<AnatomicalSystem> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  associatedPathophysiology: z.union([z.string(), z.array(z.string())]).optional(),
  comprisedOf: z.union([z.union([s.AnatomicalStructureSchema, s.AnatomicalSystemSchema]), z.array(z.union([s.AnatomicalStructureSchema, s.AnatomicalSystemSchema]))]).optional(),
  relatedCondition: z.union([s.MedicalConditionSchema, z.array(s.MedicalConditionSchema)]).optional(),
  relatedStructure: z.union([s.AnatomicalStructureSchema, z.array(s.AnatomicalStructureSchema)]).optional(),
  relatedTherapy: z.union([s.MedicalTherapySchema, z.array(s.MedicalTherapySchema)]).optional(),
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

export interface AnimalShelter {
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

export const AnimalShelterSchema: z.ZodType<AnimalShelter> = z.lazy(() => z.object({
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

export interface Answer {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  answerExplanation?: s.Comment | s.WebContent | Array<s.Comment | s.WebContent>;
  parentItem?: s.Comment | s.CreativeWork | Array<s.Comment | s.CreativeWork>;
  downvoteCount?: number | Array<number>;
  sharedContent?: s.CreativeWork | Array<s.CreativeWork>;
  upvoteCount?: number | Array<number>;
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

export const AnswerSchema: z.ZodType<Answer> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  answerExplanation: z.union([z.union([s.CommentSchema, s.WebContentSchema]), z.array(z.union([s.CommentSchema, s.WebContentSchema]))]).optional(),
  parentItem: z.union([z.union([s.CommentSchema, s.CreativeWorkSchema]), z.array(z.union([s.CommentSchema, s.CreativeWorkSchema]))]).optional(),
  downvoteCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
  sharedContent: z.union([s.CreativeWorkSchema, z.array(s.CreativeWorkSchema)]).optional(),
  upvoteCount: z.union([z.number().int(), z.array(z.number().int())]).optional(),
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

export interface Apartment {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  numberOfRooms?: number | s.QuantitativeValue | Array<number | s.QuantitativeValue>;
  occupancy?: s.QuantitativeValue | Array<s.QuantitativeValue>;
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

export const ApartmentSchema: z.ZodType<Apartment> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  numberOfRooms: z.union([z.union([z.number(), s.QuantitativeValueSchema]), z.array(z.union([z.number(), s.QuantitativeValueSchema]))]).optional(),
  occupancy: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
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

export interface ApartmentComplex {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  numberOfAccommodationUnits?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  numberOfAvailableAccommodationUnits?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  numberOfBedrooms?: number | s.QuantitativeValue | Array<number | s.QuantitativeValue>;
  petsAllowed?: boolean | string | Array<boolean | string>;
  tourBookingPage?: string | Array<string>;
  accommodationFloorPlan?: s.FloorPlan | Array<s.FloorPlan>;
  floorLevel?: string | Array<string>;
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

export const ApartmentComplexSchema: z.ZodType<ApartmentComplex> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  numberOfAccommodationUnits: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  numberOfAvailableAccommodationUnits: z.union([s.QuantitativeValueSchema, z.array(s.QuantitativeValueSchema)]).optional(),
  numberOfBedrooms: z.union([z.union([z.number(), s.QuantitativeValueSchema]), z.array(z.union([z.number(), s.QuantitativeValueSchema]))]).optional(),
  petsAllowed: z.union([z.union([z.boolean(), z.string()]), z.array(z.union([z.boolean(), z.string()]))]).optional(),
  tourBookingPage: z.union([z.string().url(), z.array(z.string().url())]).optional(),
  accommodationFloorPlan: z.union([s.FloorPlanSchema, z.array(s.FloorPlanSchema)]).optional(),
  floorLevel: z.union([z.string(), z.array(z.string())]).optional(),
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

export interface AppendAction {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  toLocation?: s.Place | Array<s.Place>;
  collection?: s.Thing | Array<s.Thing>;
  targetCollection?: s.Thing | Array<s.Thing>;
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

export const AppendActionSchema: z.ZodType<AppendAction> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  toLocation: z.union([s.PlaceSchema, z.array(s.PlaceSchema)]).optional(),
  collection: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  targetCollection: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
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

export interface ApplyAction {
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

export const ApplyActionSchema: z.ZodType<ApplyAction> = z.lazy(() => z.object({
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

export interface ApprovedIndication {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
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

export const ApprovedIndicationSchema: z.ZodType<ApprovedIndication> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
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

export interface Aquarium {
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

export const AquariumSchema: z.ZodType<Aquarium> = z.lazy(() => z.object({
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

export interface ArchiveComponent {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  holdingArchive?: s.ArchiveOrganization | Array<s.ArchiveOrganization>;
  itemLocation?: s.Place | s.PostalAddress | string | Array<s.Place | s.PostalAddress | string>;
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

export const ArchiveComponentSchema: z.ZodType<ArchiveComponent> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  holdingArchive: z.union([s.ArchiveOrganizationSchema, z.array(s.ArchiveOrganizationSchema)]).optional(),
  itemLocation: z.union([z.union([s.PlaceSchema, s.PostalAddressSchema, z.string()]), z.array(z.union([s.PlaceSchema, s.PostalAddressSchema, z.string()]))]).optional(),
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

export interface ArchiveOrganization {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  archiveHeld?: s.ArchiveComponent | Array<s.ArchiveComponent>;
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

export const ArchiveOrganizationSchema: z.ZodType<ArchiveOrganization> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  archiveHeld: z.union([s.ArchiveComponentSchema, z.array(s.ArchiveComponentSchema)]).optional(),
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

export interface ArriveAction {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
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

export const ArriveActionSchema: z.ZodType<ArriveAction> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
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

export interface ArtGallery {
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

export const ArtGallerySchema: z.ZodType<ArtGallery> = z.lazy(() => z.object({
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

export interface Artery {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  arterialBranch?: s.AnatomicalStructure | Array<s.AnatomicalStructure>;
  supplyTo?: s.AnatomicalStructure | Array<s.AnatomicalStructure>;
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

export const ArterySchema: z.ZodType<Artery> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  arterialBranch: z.union([s.AnatomicalStructureSchema, z.array(s.AnatomicalStructureSchema)]).optional(),
  supplyTo: z.union([s.AnatomicalStructureSchema, z.array(s.AnatomicalStructureSchema)]).optional(),
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

export interface Article {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
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

export const ArticleSchema: z.ZodType<Article> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
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

export interface AskAction {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  question?: s.Question | Array<s.Question>;
  about?: s.Thing | Array<s.Thing>;
  inLanguage?: s.Language | string | Array<s.Language | string>;
  language?: s.Language | Array<s.Language>;
  recipient?: s.Audience | s.ContactPoint | s.Organization | s.Person | Array<s.Audience | s.ContactPoint | s.Organization | s.Person>;
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

export const AskActionSchema: z.ZodType<AskAction> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  question: z.union([s.QuestionSchema, z.array(s.QuestionSchema)]).optional(),
  about: z.union([s.ThingSchema, z.array(s.ThingSchema)]).optional(),
  inLanguage: z.union([z.union([s.LanguageSchema, z.string()]), z.array(z.union([s.LanguageSchema, z.string()]))]).optional(),
  language: z.union([s.LanguageSchema, z.array(s.LanguageSchema)]).optional(),
  recipient: z.union([z.union([s.AudienceSchema, s.ContactPointSchema, s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.AudienceSchema, s.ContactPointSchema, s.OrganizationSchema, s.PersonSchema]))]).optional(),
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

export interface AskPublicNewsArticle {
  '@context'?: s.Context;
  '@type'?: string | string[];
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

export const AskPublicNewsArticleSchema: z.ZodType<AskPublicNewsArticle> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
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

export interface AssessAction {
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

export const AssessActionSchema: z.ZodType<AssessAction> = z.lazy(() => z.object({
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

export interface AssignAction {
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

export const AssignActionSchema: z.ZodType<AssignAction> = z.lazy(() => z.object({
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

export interface Atlas {
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
}

export const AtlasSchema: z.ZodType<Atlas> = z.lazy(() => z.object({
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
}));

export interface Attorney {
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

export const AttorneySchema: z.ZodType<Attorney> = z.lazy(() => z.object({
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

export interface Audience {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
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

export const AudienceSchema: z.ZodType<Audience> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
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

export interface AudioObject {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  caption?: s.MediaObject | string | Array<s.MediaObject | string>;
  embeddedTextCaption?: string | Array<string>;
  transcript?: string | Array<string>;
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

export const AudioObjectSchema: z.ZodType<AudioObject> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  caption: z.union([z.union([s.MediaObjectSchema, z.string()]), z.array(z.union([s.MediaObjectSchema, z.string()]))]).optional(),
  embeddedTextCaption: z.union([z.string(), z.array(z.string())]).optional(),
  transcript: z.union([z.string(), z.array(z.string())]).optional(),
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

export interface AudioObjectSnapshot {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  caption?: s.MediaObject | string | Array<s.MediaObject | string>;
  embeddedTextCaption?: string | Array<string>;
  transcript?: string | Array<string>;
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

export const AudioObjectSnapshotSchema: z.ZodType<AudioObjectSnapshot> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  caption: z.union([z.union([s.MediaObjectSchema, z.string()]), z.array(z.union([s.MediaObjectSchema, z.string()]))]).optional(),
  embeddedTextCaption: z.union([z.string(), z.array(z.string())]).optional(),
  transcript: z.union([z.string(), z.array(z.string())]).optional(),
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

export interface Audiobook {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  duration?: s.Duration | s.QuantitativeValue | Array<s.Duration | s.QuantitativeValue>;
  readBy?: s.Person | Array<s.Person>;
  caption?: s.MediaObject | string | Array<s.MediaObject | string>;
  embeddedTextCaption?: string | Array<string>;
  transcript?: string | Array<string>;
  associatedArticle?: s.NewsArticle | Array<s.NewsArticle>;
  bitrate?: string | Array<string>;
  contentSize?: string | Array<string>;
  contentUrl?: string | Array<string>;
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
  abridged?: boolean | Array<boolean>;
  bookEdition?: string | Array<string>;
  bookFormat?: s.BookFormatType | Array<s.BookFormatType>;
  illustrator?: s.Person | Array<s.Person>;
  isbn?: string | Array<string>;
  numberOfPages?: number | Array<number>;
}

export const AudiobookSchema: z.ZodType<Audiobook> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  duration: z.union([z.union([s.DurationSchema, s.QuantitativeValueSchema]), z.array(z.union([s.DurationSchema, s.QuantitativeValueSchema]))]).optional(),
  readBy: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  caption: z.union([z.union([s.MediaObjectSchema, z.string()]), z.array(z.union([s.MediaObjectSchema, z.string()]))]).optional(),
  embeddedTextCaption: z.union([z.string(), z.array(z.string())]).optional(),
  transcript: z.union([z.string(), z.array(z.string())]).optional(),
  associatedArticle: z.union([s.NewsArticleSchema, z.array(s.NewsArticleSchema)]).optional(),
  bitrate: z.union([z.string(), z.array(z.string())]).optional(),
  contentSize: z.union([z.string(), z.array(z.string())]).optional(),
  contentUrl: z.union([z.string().url(), z.array(z.string().url())]).optional(),
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
  abridged: z.union([z.boolean(), z.array(z.boolean())]).optional(),
  bookEdition: z.union([z.string(), z.array(z.string())]).optional(),
  bookFormat: z.union([s.BookFormatTypeSchema, z.array(s.BookFormatTypeSchema)]).optional(),
  illustrator: z.union([s.PersonSchema, z.array(s.PersonSchema)]).optional(),
  isbn: z.union([z.string(), z.array(z.string())]).optional(),
  numberOfPages: z.union([z.number().int(), z.array(z.number().int())]).optional(),
}));

export interface AuthenticateAction {
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

export const AuthenticateActionSchema: z.ZodType<AuthenticateAction> = z.lazy(() => z.object({
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

export interface AuthorizeAction {
  '@context'?: s.Context;
  '@type'?: string | string[];
  '@id'?: string;
  recipient?: s.Audience | s.ContactPoint | s.Organization | s.Person | Array<s.Audience | s.ContactPoint | s.Organization | s.Person>;
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

export const AuthorizeActionSchema: z.ZodType<AuthorizeAction> = z.lazy(() => z.object({
  '@context': s.ContextSchema.optional(),
  '@type': z.union([z.string(), z.array(z.string())]).optional(),
  '@id': z.string().optional(),
  recipient: z.union([z.union([s.AudienceSchema, s.ContactPointSchema, s.OrganizationSchema, s.PersonSchema]), z.array(z.union([s.AudienceSchema, s.ContactPointSchema, s.OrganizationSchema, s.PersonSchema]))]).optional(),
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

export interface AutoBodyShop {
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

export const AutoBodyShopSchema: z.ZodType<AutoBodyShop> = z.lazy(() => z.object({
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

export interface AutoDealer {
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

export const AutoDealerSchema: z.ZodType<AutoDealer> = z.lazy(() => z.object({
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

export interface AutoPartsStore {
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

export const AutoPartsStoreSchema: z.ZodType<AutoPartsStore> = z.lazy(() => z.object({
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

export interface AutoRental {
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

export const AutoRentalSchema: z.ZodType<AutoRental> = z.lazy(() => z.object({
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

export interface AutoRepair {
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

export const AutoRepairSchema: z.ZodType<AutoRepair> = z.lazy(() => z.object({
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

export interface AutoWash {
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

export const AutoWashSchema: z.ZodType<AutoWash> = z.lazy(() => z.object({
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

export interface AutomatedTeller {
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

export const AutomatedTellerSchema: z.ZodType<AutomatedTeller> = z.lazy(() => z.object({
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

export interface AutomotiveBusiness {
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

export const AutomotiveBusinessSchema: z.ZodType<AutomotiveBusiness> = z.lazy(() => z.object({
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
