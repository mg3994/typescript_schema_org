import * as s from './index';

export interface WPAdBlock {
  '@context'?: any;
  '@type'?: 'WPAdBlock' | Array<'WPAdBlock'>;
  '@id'?: string;
  cssSelector?: string | Array<string>;
  xpath?: s.XPathType | Array<s.XPathType>;
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

export const WPAdBlock = {
  validate: (data: any): data is WPAdBlock => s.validate(data, 'WPAdBlock'),
  deserialize: (json: string): WPAdBlock => s.deserialize(json, 'WPAdBlock'),
  serialize: (data: WPAdBlock): string => s.serialize(data),
};


export interface WPFooter {
  '@context'?: any;
  '@type'?: 'WPFooter' | Array<'WPFooter'>;
  '@id'?: string;
  cssSelector?: string | Array<string>;
  xpath?: s.XPathType | Array<s.XPathType>;
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

export const WPFooter = {
  validate: (data: any): data is WPFooter => s.validate(data, 'WPFooter'),
  deserialize: (json: string): WPFooter => s.deserialize(json, 'WPFooter'),
  serialize: (data: WPFooter): string => s.serialize(data),
};


export interface WPHeader {
  '@context'?: any;
  '@type'?: 'WPHeader' | Array<'WPHeader'>;
  '@id'?: string;
  cssSelector?: string | Array<string>;
  xpath?: s.XPathType | Array<s.XPathType>;
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

export const WPHeader = {
  validate: (data: any): data is WPHeader => s.validate(data, 'WPHeader'),
  deserialize: (json: string): WPHeader => s.deserialize(json, 'WPHeader'),
  serialize: (data: WPHeader): string => s.serialize(data),
};


export interface WPSideBar {
  '@context'?: any;
  '@type'?: 'WPSideBar' | Array<'WPSideBar'>;
  '@id'?: string;
  cssSelector?: string | Array<string>;
  xpath?: s.XPathType | Array<s.XPathType>;
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

export const WPSideBar = {
  validate: (data: any): data is WPSideBar => s.validate(data, 'WPSideBar'),
  deserialize: (json: string): WPSideBar => s.deserialize(json, 'WPSideBar'),
  serialize: (data: WPSideBar): string => s.serialize(data),
};


export interface WantAction {
  '@context'?: any;
  '@type'?: 'WantAction' | Array<'WantAction'>;
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

export const WantAction = {
  validate: (data: any): data is WantAction => s.validate(data, 'WantAction'),
  deserialize: (json: string): WantAction => s.deserialize(json, 'WantAction'),
  serialize: (data: WantAction): string => s.serialize(data),
};


export interface WarrantyPromise {
  '@context'?: any;
  '@type'?: 'WarrantyPromise' | Array<'WarrantyPromise'>;
  '@id'?: string;
  durationOfWarranty?: s.QuantitativeValue | Array<s.QuantitativeValue>;
  warrantyScope?: s.WarrantyScope | Array<s.WarrantyScope>;
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

export const WarrantyPromise = {
  validate: (data: any): data is WarrantyPromise => s.validate(data, 'WarrantyPromise'),
  deserialize: (json: string): WarrantyPromise => s.deserialize(json, 'WarrantyPromise'),
  serialize: (data: WarrantyPromise): string => s.serialize(data),
};


export interface WarrantyScope {
  '@context'?: any;
  '@type'?: 'WarrantyScope' | Array<'WarrantyScope'>;
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

export const WarrantyScope = {
  validate: (data: any): data is WarrantyScope => s.validate(data, 'WarrantyScope'),
  deserialize: (json: string): WarrantyScope => s.deserialize(json, 'WarrantyScope'),
  serialize: (data: WarrantyScope): string => s.serialize(data),
};


export interface WatchAction {
  '@context'?: any;
  '@type'?: 'WatchAction' | Array<'WatchAction'>;
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

export const WatchAction = {
  validate: (data: any): data is WatchAction => s.validate(data, 'WatchAction'),
  deserialize: (json: string): WatchAction => s.deserialize(json, 'WatchAction'),
  serialize: (data: WatchAction): string => s.serialize(data),
};


export interface Waterfall {
  '@context'?: any;
  '@type'?: 'Waterfall' | Array<'Waterfall'>;
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

export const Waterfall = {
  validate: (data: any): data is Waterfall => s.validate(data, 'Waterfall'),
  deserialize: (json: string): Waterfall => s.deserialize(json, 'Waterfall'),
  serialize: (data: Waterfall): string => s.serialize(data),
};


export interface WearAction {
  '@context'?: any;
  '@type'?: 'WearAction' | Array<'WearAction'>;
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

export const WearAction = {
  validate: (data: any): data is WearAction => s.validate(data, 'WearAction'),
  deserialize: (json: string): WearAction => s.deserialize(json, 'WearAction'),
  serialize: (data: WearAction): string => s.serialize(data),
};


export interface WearableMeasurementTypeEnumeration {
  '@context'?: any;
  '@type'?: 'WearableMeasurementTypeEnumeration' | Array<'WearableMeasurementTypeEnumeration'>;
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

export const WearableMeasurementTypeEnumeration = {
  validate: (data: any): data is WearableMeasurementTypeEnumeration => s.validate(data, 'WearableMeasurementTypeEnumeration'),
  deserialize: (json: string): WearableMeasurementTypeEnumeration => s.deserialize(json, 'WearableMeasurementTypeEnumeration'),
  serialize: (data: WearableMeasurementTypeEnumeration): string => s.serialize(data),
};


export interface WearableSizeGroupEnumeration {
  '@context'?: any;
  '@type'?: 'WearableSizeGroupEnumeration' | Array<'WearableSizeGroupEnumeration'>;
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

export const WearableSizeGroupEnumeration = {
  validate: (data: any): data is WearableSizeGroupEnumeration => s.validate(data, 'WearableSizeGroupEnumeration'),
  deserialize: (json: string): WearableSizeGroupEnumeration => s.deserialize(json, 'WearableSizeGroupEnumeration'),
  serialize: (data: WearableSizeGroupEnumeration): string => s.serialize(data),
};


export interface WearableSizeSystemEnumeration {
  '@context'?: any;
  '@type'?: 'WearableSizeSystemEnumeration' | Array<'WearableSizeSystemEnumeration'>;
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

export const WearableSizeSystemEnumeration = {
  validate: (data: any): data is WearableSizeSystemEnumeration => s.validate(data, 'WearableSizeSystemEnumeration'),
  deserialize: (json: string): WearableSizeSystemEnumeration => s.deserialize(json, 'WearableSizeSystemEnumeration'),
  serialize: (data: WearableSizeSystemEnumeration): string => s.serialize(data),
};


export interface WebAPI {
  '@context'?: any;
  '@type'?: 'WebAPI' | Array<'WebAPI'>;
  '@id'?: string;
  documentation?: s.CreativeWork | string | Array<s.CreativeWork | string>;
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

export const WebAPI = {
  validate: (data: any): data is WebAPI => s.validate(data, 'WebAPI'),
  deserialize: (json: string): WebAPI => s.deserialize(json, 'WebAPI'),
  serialize: (data: WebAPI): string => s.serialize(data),
};


export interface WebApplication {
  '@context'?: any;
  '@type'?: 'WebApplication' | Array<'WebApplication'>;
  '@id'?: string;
  browserRequirements?: string | Array<string>;
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

export const WebApplication = {
  validate: (data: any): data is WebApplication => s.validate(data, 'WebApplication'),
  deserialize: (json: string): WebApplication => s.deserialize(json, 'WebApplication'),
  serialize: (data: WebApplication): string => s.serialize(data),
};


export interface WebContent {
  '@context'?: any;
  '@type'?: 'WebContent' | 'HealthTopicContent' | Array<'WebContent' | 'HealthTopicContent'>;
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

export const WebContent = {
  validate: (data: any): data is WebContent => s.validate(data, 'WebContent'),
  deserialize: (json: string): WebContent => s.deserialize(json, 'WebContent'),
  serialize: (data: WebContent): string => s.serialize(data),
};


export interface WebPage {
  '@context'?: any;
  '@type'?: 'WebPage' | 'AboutPage' | 'CheckoutPage' | 'CollectionPage' | 'ContactPage' | 'FAQPage' | 'ItemPage' | 'MedicalWebPage' | 'ProfilePage' | 'QAPage' | 'RealEstateListing' | 'SearchResultsPage' | 'MediaGallery' | 'ImageGallery' | 'VideoGallery' | Array<'WebPage' | 'AboutPage' | 'CheckoutPage' | 'CollectionPage' | 'ContactPage' | 'FAQPage' | 'ItemPage' | 'MedicalWebPage' | 'ProfilePage' | 'QAPage' | 'RealEstateListing' | 'SearchResultsPage' | 'MediaGallery' | 'ImageGallery' | 'VideoGallery'>;
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

export const WebPage = {
  validate: (data: any): data is WebPage => s.validate(data, 'WebPage'),
  deserialize: (json: string): WebPage => s.deserialize(json, 'WebPage'),
  serialize: (data: WebPage): string => s.serialize(data),
};


export interface WebPageElement {
  '@context'?: any;
  '@type'?: 'WebPageElement' | 'SiteNavigationElement' | 'Table' | 'WPAdBlock' | 'WPFooter' | 'WPHeader' | 'WPSideBar' | Array<'WebPageElement' | 'SiteNavigationElement' | 'Table' | 'WPAdBlock' | 'WPFooter' | 'WPHeader' | 'WPSideBar'>;
  '@id'?: string;
  cssSelector?: string | Array<string>;
  xpath?: s.XPathType | Array<s.XPathType>;
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

export const WebPageElement = {
  validate: (data: any): data is WebPageElement => s.validate(data, 'WebPageElement'),
  deserialize: (json: string): WebPageElement => s.deserialize(json, 'WebPageElement'),
  serialize: (data: WebPageElement): string => s.serialize(data),
};


export interface WebSite {
  '@context'?: any;
  '@type'?: 'WebSite' | Array<'WebSite'>;
  '@id'?: string;
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

export const WebSite = {
  validate: (data: any): data is WebSite => s.validate(data, 'WebSite'),
  deserialize: (json: string): WebSite => s.deserialize(json, 'WebSite'),
  serialize: (data: WebSite): string => s.serialize(data),
};


export interface WholesaleStore {
  '@context'?: any;
  '@type'?: 'WholesaleStore' | Array<'WholesaleStore'>;
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

export const WholesaleStore = {
  validate: (data: any): data is WholesaleStore => s.validate(data, 'WholesaleStore'),
  deserialize: (json: string): WholesaleStore => s.deserialize(json, 'WholesaleStore'),
  serialize: (data: WholesaleStore): string => s.serialize(data),
};


export interface WinAction {
  '@context'?: any;
  '@type'?: 'WinAction' | Array<'WinAction'>;
  '@id'?: string;
  loser?: s.Person | Array<s.Person>;
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

export const WinAction = {
  validate: (data: any): data is WinAction => s.validate(data, 'WinAction'),
  deserialize: (json: string): WinAction => s.deserialize(json, 'WinAction'),
  serialize: (data: WinAction): string => s.serialize(data),
};


export interface Winery {
  '@context'?: any;
  '@type'?: 'Winery' | Array<'Winery'>;
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

export const Winery = {
  validate: (data: any): data is Winery => s.validate(data, 'Winery'),
  deserialize: (json: string): Winery => s.deserialize(json, 'Winery'),
  serialize: (data: Winery): string => s.serialize(data),
};


export interface WorkBasedProgram {
  '@context'?: any;
  '@type'?: 'WorkBasedProgram' | Array<'WorkBasedProgram'>;
  '@id'?: string;
  occupationalCategory?: s.CategoryCode | string | Array<s.CategoryCode | string>;
  trainingSalary?: s.MonetaryAmountDistribution | Array<s.MonetaryAmountDistribution>;
  applicationDeadline?: string | Array<string>;
  applicationStartDate?: string | Array<string>;
  dayOfWeek?: s.DayOfWeek | Array<s.DayOfWeek>;
  educationalCredentialAwarded?: s.EducationalOccupationalCredential | string | Array<s.EducationalOccupationalCredential | string>;
  educationalProgramMode?: string | Array<string>;
  endDate?: string | Array<string>;
  financialAidEligible?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  hasCourse?: s.Course | Array<s.Course>;
  maximumEnrollment?: number | Array<number>;
  numberOfCredits?: number | s.StructuredValue | Array<number | s.StructuredValue>;
  occupationalCredentialAwarded?: s.EducationalOccupationalCredential | string | Array<s.EducationalOccupationalCredential | string>;
  offers?: s.Demand | s.Offer | Array<s.Demand | s.Offer>;
  programPrerequisites?: s.AlignmentObject | s.Course | s.EducationalOccupationalCredential | string | Array<s.AlignmentObject | s.Course | s.EducationalOccupationalCredential | string>;
  programType?: s.DefinedTerm | string | Array<s.DefinedTerm | string>;
  provider?: s.Organization | s.Person | Array<s.Organization | s.Person>;
  salaryUponCompletion?: s.MonetaryAmountDistribution | Array<s.MonetaryAmountDistribution>;
  startDate?: string | Array<string>;
  termDuration?: s.Duration | Array<s.Duration>;
  termsPerYear?: number | Array<number>;
  timeOfDay?: string | Array<string>;
  timeToComplete?: s.Duration | Array<s.Duration>;
  typicalCreditsPerTerm?: number | s.StructuredValue | Array<number | s.StructuredValue>;
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

export const WorkBasedProgram = {
  validate: (data: any): data is WorkBasedProgram => s.validate(data, 'WorkBasedProgram'),
  deserialize: (json: string): WorkBasedProgram => s.deserialize(json, 'WorkBasedProgram'),
  serialize: (data: WorkBasedProgram): string => s.serialize(data),
};


export interface WorkersUnion {
  '@context'?: any;
  '@type'?: 'WorkersUnion' | Array<'WorkersUnion'>;
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

export const WorkersUnion = {
  validate: (data: any): data is WorkersUnion => s.validate(data, 'WorkersUnion'),
  deserialize: (json: string): WorkersUnion => s.deserialize(json, 'WorkersUnion'),
  serialize: (data: WorkersUnion): string => s.serialize(data),
};


export interface WriteAction {
  '@context'?: any;
  '@type'?: 'WriteAction' | Array<'WriteAction'>;
  '@id'?: string;
  inLanguage?: s.Language | string | Array<s.Language | string>;
  language?: s.Language | Array<s.Language>;
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

export const WriteAction = {
  validate: (data: any): data is WriteAction => s.validate(data, 'WriteAction'),
  deserialize: (json: string): WriteAction => s.deserialize(json, 'WriteAction'),
  serialize: (data: WriteAction): string => s.serialize(data),
};
