export const typeHierarchy: Record<string, string[]> = {
  "bibo:Issue": [
    "bibo:Issue"
  ],
  "bibo:Periodical": [
    "bibo:Periodical"
  ],
  "cmns-cls:Classifier": [
    "cmns-cls:Classifier",
    "Brand",
    "ProductGroup"
  ],
  "cmns-col:Collection": [
    "cmns-col:Collection",
    "ProductGroup"
  ],
  "cmns-dt:Date": [
    "cmns-dt:Date"
  ],
  "cmns-dt:DateTime": [
    "cmns-dt:DateTime"
  ],
  "cmns-dt:Duration": [
    "cmns-dt:Duration"
  ],
  "cmns-ge:GeopoliticalEntity": [
    "cmns-ge:GeopoliticalEntity",
    "Country"
  ],
  "cmns-ge:Subdivision": [
    "cmns-ge:Subdivision"
  ],
  "cmns-loc:Address": [
    "cmns-loc:Address"
  ],
  "cmns-loc:GeographicCoordinate": [
    "cmns-loc:GeographicCoordinate"
  ],
  "cmns-loc:Location": [
    "cmns-loc:Location"
  ],
  "dcat:Catalog": [
    "dcat:Catalog"
  ],
  "dcat:Dataset": [
    "dcat:Dataset"
  ],
  "dcat:Distribution": [
    "dcat:Distribution"
  ],
  "dctype:Dataset": [
    "dctype:Dataset"
  ],
  "dctype:Event": [
    "dctype:Event"
  ],
  "dctype:Image": [
    "dctype:Image"
  ],
  "dctype:Text": [
    "dctype:Text"
  ],
  "fibo-be-corp-corp:Corporation": [
    "fibo-be-corp-corp:Corporation"
  ],
  "fibo-be-le-cb:CooperativeSociety": [
    "fibo-be-le-cb:CooperativeSociety"
  ],
  "fibo-be-nfp-nfp:NonGovernmentalOrganization": [
    "fibo-be-nfp-nfp:NonGovernmentalOrganization"
  ],
  "fibo-fbc-pas-fpas:BankAccount": [
    "fibo-fbc-pas-fpas:BankAccount"
  ],
  "fibo-fbc-pas-fpas:PaymentMechanism": [
    "fibo-fbc-pas-fpas:PaymentMechanism"
  ],
  "fibo-fnd-agr-ctr:MutualContractualAgreement": [
    "fibo-fnd-agr-ctr:MutualContractualAgreement",
    "WarrantyPromise"
  ],
  "fibo-fnd-arr-doc:Certificate": [
    "fibo-fnd-arr-doc:Certificate",
    "Certification"
  ],
  "fibo-fnd-arr-doc:Document": [
    "fibo-fnd-arr-doc:Document",
    "DigitalDocument",
    "NoteDigitalDocument",
    "PresentationDigitalDocument",
    "SpreadsheetDigitalDocument",
    "TextDigitalDocument"
  ],
  "fibo-fnd-arr-doc:LegalDocument": [
    "fibo-fnd-arr-doc:LegalDocument",
    "Invoice",
    "Order"
  ],
  "fibo-fnd-dt-oc:Occurrence": [
    "fibo-fnd-dt-oc:Occurrence"
  ],
  "fibo-fnd-org-org:ContactPoint": [
    "fibo-fnd-org-org:ContactPoint"
  ],
  "fibo-fnd-org-org:Organization": [
    "fibo-fnd-org-org:Organization"
  ],
  "fibo-fnd-pas-pas:Offer": [
    "fibo-fnd-pas-pas:Offer"
  ],
  "fibo-fnd-pas-pas:Price": [
    "fibo-fnd-pas-pas:Price"
  ],
  "fibo-fnd-pas-pas:Product": [
    "fibo-fnd-pas-pas:Product"
  ],
  "fibo-fnd-plc-adr:PostalAddress": [
    "fibo-fnd-plc-adr:PostalAddress"
  ],
  "fibo-fnd-plc-loc:Municipality": [
    "fibo-fnd-plc-loc:Municipality"
  ],
  "fibo-pay-ps-ps:PaymentService": [
    "fibo-pay-ps-ps:PaymentService"
  ],
  "foaf:Person": [
    "foaf:Person"
  ],
  "gs1:CertificationDetails": [
    "gs1:CertificationDetails"
  ],
  "gs1:ContactPoint": [
    "gs1:ContactPoint"
  ],
  "gs1:Country": [
    "gs1:Country"
  ],
  "gs1:Organization": [
    "gs1:Organization"
  ],
  "gs1:PostalAddress": [
    "gs1:PostalAddress"
  ],
  "hydra:Error": [
    "hydra:Error"
  ],
  "lcc-cr:Continent": [
    "lcc-cr:Continent"
  ],
  "lcc-cr:Country": [
    "lcc-cr:Country"
  ],
  "lrmoo:F31_Performance": [
    "lrmoo:F31_Performance"
  ],
  "prov:InstantaneousEvent": [
    "prov:InstantaneousEvent"
  ],
  "prov:atTime": [
    "prov:atTime"
  ],
  "sarif:Result": [
    "sarif:Result",
    "Error"
  ],
  "3DModel": [
    "3DModel"
  ],
  "AMRadioChannel": [
    "AMRadioChannel"
  ],
  "APIReference": [
    "APIReference"
  ],
  "AboutPage": [
    "AboutPage"
  ],
  "AcceptAction": [
    "AcceptAction"
  ],
  "Accommodation": [
    "Accommodation",
    "Apartment",
    "CampingPitch",
    "House",
    "Room",
    "Suite",
    "SingleFamilyResidence",
    "HotelRoom",
    "MeetingRoom"
  ],
  "AccountingService": [
    "AccountingService"
  ],
  "AchieveAction": [
    "AchieveAction",
    "LoseAction",
    "TieAction",
    "WinAction"
  ],
  "Action": [
    "Action",
    "AchieveAction",
    "AssessAction",
    "ConsumeAction",
    "ControlAction",
    "CreateAction",
    "FindAction",
    "InteractAction",
    "MoveAction",
    "OrganizeAction",
    "PlayAction",
    "SearchAction",
    "SeekToAction",
    "SolveMathAction",
    "TradeAction",
    "TransferAction",
    "UpdateAction",
    "LoseAction",
    "TieAction",
    "WinAction",
    "ChooseAction",
    "IgnoreAction",
    "ReactAction",
    "ReviewAction",
    "VoteAction",
    "AgreeAction",
    "DisagreeAction",
    "DislikeAction",
    "EndorseAction",
    "LikeAction",
    "WantAction",
    "DrinkAction",
    "EatAction",
    "InstallAction",
    "ListenAction",
    "PlayGameAction",
    "ReadAction",
    "UseAction",
    "ViewAction",
    "WatchAction",
    "WearAction",
    "ActivateAction",
    "AuthenticateAction",
    "DeactivateAction",
    "LoginAction",
    "ResetPasswordAction",
    "ResumeAction",
    "SuspendAction",
    "CookAction",
    "DrawAction",
    "FilmAction",
    "PaintAction",
    "PhotographAction",
    "WriteAction",
    "CheckAction",
    "DiscoverAction",
    "TrackAction",
    "BefriendAction",
    "CommunicateAction",
    "FollowAction",
    "JoinAction",
    "LeaveAction",
    "MarryAction",
    "RegisterAction",
    "SubscribeAction",
    "UnRegisterAction",
    "AskAction",
    "CheckInAction",
    "CheckOutAction",
    "CommentAction",
    "InformAction",
    "InviteAction",
    "ReplyAction",
    "ShareAction",
    "ConfirmAction",
    "RsvpAction",
    "ArriveAction",
    "DepartAction",
    "TravelAction",
    "AllocateAction",
    "ApplyAction",
    "BookmarkAction",
    "PlanAction",
    "AcceptAction",
    "AssignAction",
    "AuthorizeAction",
    "RejectAction",
    "CancelAction",
    "ReserveAction",
    "ScheduleAction",
    "ExerciseAction",
    "PerformAction",
    "BuyAction",
    "OrderAction",
    "PayAction",
    "PreOrderAction",
    "QuoteAction",
    "RentAction",
    "SellAction",
    "TipAction",
    "BorrowAction",
    "DonateAction",
    "DownloadAction",
    "GiveAction",
    "LendAction",
    "MoneyTransfer",
    "ReceiveAction",
    "ReturnAction",
    "SendAction",
    "TakeAction",
    "AddAction",
    "DeleteAction",
    "ReplaceAction",
    "InsertAction",
    "AppendAction",
    "PrependAction"
  ],
  "ActionAccessSpecification": [
    "ActionAccessSpecification"
  ],
  "ActionStatusType": [
    "ActionStatusType"
  ],
  "ActivateAction": [
    "ActivateAction"
  ],
  "AddAction": [
    "AddAction",
    "InsertAction",
    "AppendAction",
    "PrependAction"
  ],
  "AdministrativeArea": [
    "AdministrativeArea",
    "City",
    "Country",
    "SchoolDistrict",
    "State"
  ],
  "AdultEntertainment": [
    "AdultEntertainment"
  ],
  "AdultOrientedEnumeration": [
    "AdultOrientedEnumeration"
  ],
  "AdvertiserContentArticle": [
    "AdvertiserContentArticle"
  ],
  "AggregateOffer": [
    "AggregateOffer"
  ],
  "AggregateRating": [
    "AggregateRating",
    "EmployerAggregateRating"
  ],
  "AgreeAction": [
    "AgreeAction"
  ],
  "Airline": [
    "Airline"
  ],
  "Airport": [
    "Airport"
  ],
  "AlignmentObject": [
    "AlignmentObject"
  ],
  "AllocateAction": [
    "AllocateAction",
    "AcceptAction",
    "AssignAction",
    "AuthorizeAction",
    "RejectAction"
  ],
  "AmpStory": [
    "AmpStory"
  ],
  "AmusementPark": [
    "AmusementPark"
  ],
  "AnalysisNewsArticle": [
    "AnalysisNewsArticle"
  ],
  "AnatomicalStructure": [
    "AnatomicalStructure",
    "Bone",
    "BrainStructure",
    "Joint",
    "Ligament",
    "Muscle",
    "Nerve",
    "Vessel",
    "Artery",
    "LymphaticVessel",
    "Vein"
  ],
  "AnatomicalSystem": [
    "AnatomicalSystem"
  ],
  "AnimalShelter": [
    "AnimalShelter"
  ],
  "Answer": [
    "Answer"
  ],
  "Apartment": [
    "Apartment"
  ],
  "ApartmentComplex": [
    "ApartmentComplex"
  ],
  "AppendAction": [
    "AppendAction"
  ],
  "ApplyAction": [
    "ApplyAction"
  ],
  "ApprovedIndication": [
    "ApprovedIndication"
  ],
  "Aquarium": [
    "Aquarium"
  ],
  "ArchiveComponent": [
    "ArchiveComponent"
  ],
  "ArchiveOrganization": [
    "ArchiveOrganization"
  ],
  "ArriveAction": [
    "ArriveAction"
  ],
  "ArtGallery": [
    "ArtGallery"
  ],
  "Artery": [
    "Artery"
  ],
  "Article": [
    "Article",
    "AdvertiserContentArticle",
    "NewsArticle",
    "Report",
    "SatiricalArticle",
    "ScholarlyArticle",
    "SocialMediaPosting",
    "TechArticle",
    "AnalysisNewsArticle",
    "AskPublicNewsArticle",
    "BackgroundNewsArticle",
    "OpinionNewsArticle",
    "ReportageNewsArticle",
    "ReviewNewsArticle",
    "MedicalScholarlyArticle",
    "BlogPosting",
    "DiscussionForumPosting",
    "LiveBlogPosting",
    "APIReference"
  ],
  "AskAction": [
    "AskAction"
  ],
  "AskPublicNewsArticle": [
    "AskPublicNewsArticle"
  ],
  "AssessAction": [
    "AssessAction",
    "ChooseAction",
    "IgnoreAction",
    "ReactAction",
    "ReviewAction",
    "VoteAction",
    "AgreeAction",
    "DisagreeAction",
    "DislikeAction",
    "EndorseAction",
    "LikeAction",
    "WantAction"
  ],
  "AssignAction": [
    "AssignAction"
  ],
  "Atlas": [
    "Atlas"
  ],
  "Attorney": [
    "Attorney"
  ],
  "Audience": [
    "Audience",
    "BusinessAudience",
    "EducationalAudience",
    "MedicalAudience",
    "PeopleAudience",
    "Researcher",
    "Patient",
    "ParentAudience"
  ],
  "AudioObject": [
    "AudioObject",
    "AudioObjectSnapshot",
    "Audiobook"
  ],
  "AudioObjectSnapshot": [
    "AudioObjectSnapshot"
  ],
  "Audiobook": [
    "Audiobook"
  ],
  "AuthenticateAction": [
    "AuthenticateAction"
  ],
  "AuthorizeAction": [
    "AuthorizeAction"
  ],
  "AutoBodyShop": [
    "AutoBodyShop"
  ],
  "AutoDealer": [
    "AutoDealer"
  ],
  "AutoPartsStore": [
    "AutoPartsStore"
  ],
  "AutoRental": [
    "AutoRental"
  ],
  "AutoRepair": [
    "AutoRepair"
  ],
  "AutoWash": [
    "AutoWash"
  ],
  "AutomatedTeller": [
    "AutomatedTeller"
  ],
  "AutomotiveBusiness": [
    "AutomotiveBusiness",
    "AutoBodyShop",
    "AutoDealer",
    "AutoPartsStore",
    "AutoRental",
    "AutoRepair",
    "AutoWash",
    "GasStation",
    "MotorcycleDealer",
    "MotorcycleRepair"
  ],
  "BackgroundNewsArticle": [
    "BackgroundNewsArticle"
  ],
  "Bakery": [
    "Bakery"
  ],
  "BankAccount": [
    "BankAccount",
    "DepositAccount"
  ],
  "BankOrCreditUnion": [
    "BankOrCreditUnion"
  ],
  "BarOrPub": [
    "BarOrPub"
  ],
  "Barcode": [
    "Barcode"
  ],
  "Beach": [
    "Beach"
  ],
  "BeautySalon": [
    "BeautySalon"
  ],
  "BedAndBreakfast": [
    "BedAndBreakfast"
  ],
  "BedDetails": [
    "BedDetails"
  ],
  "BedType": [
    "BedType"
  ],
  "BefriendAction": [
    "BefriendAction"
  ],
  "BikeStore": [
    "BikeStore"
  ],
  "BioChemEntity": [
    "BioChemEntity",
    "ChemicalSubstance",
    "Gene",
    "MolecularEntity",
    "Protein"
  ],
  "Blog": [
    "Blog"
  ],
  "BlogPosting": [
    "BlogPosting",
    "LiveBlogPosting"
  ],
  "BloodTest": [
    "BloodTest"
  ],
  "BoardingPolicyType": [
    "BoardingPolicyType"
  ],
  "BoatReservation": [
    "BoatReservation"
  ],
  "BoatTerminal": [
    "BoatTerminal"
  ],
  "BoatTrip": [
    "BoatTrip"
  ],
  "BodyMeasurementTypeEnumeration": [
    "BodyMeasurementTypeEnumeration"
  ],
  "BodyOfWater": [
    "BodyOfWater",
    "Canal",
    "LakeBodyOfWater",
    "OceanBodyOfWater",
    "Pond",
    "Reservoir",
    "RiverBodyOfWater",
    "SeaBodyOfWater",
    "Waterfall"
  ],
  "Bone": [
    "Bone"
  ],
  "Book": [
    "Book",
    "Audiobook",
    "SequentialArt"
  ],
  "BookFormatType": [
    "BookFormatType"
  ],
  "BookSeries": [
    "BookSeries"
  ],
  "BookStore": [
    "BookStore"
  ],
  "BookmarkAction": [
    "BookmarkAction"
  ],
  "Boolean": [
    "Boolean"
  ],
  "BorrowAction": [
    "BorrowAction"
  ],
  "BowlingAlley": [
    "BowlingAlley"
  ],
  "BrainStructure": [
    "BrainStructure"
  ],
  "Brand": [
    "Brand"
  ],
  "BreadcrumbList": [
    "BreadcrumbList"
  ],
  "Brewery": [
    "Brewery"
  ],
  "Bridge": [
    "Bridge"
  ],
  "BroadcastChannel": [
    "BroadcastChannel",
    "RadioChannel",
    "TelevisionChannel",
    "AMRadioChannel",
    "FMRadioChannel"
  ],
  "BroadcastEvent": [
    "BroadcastEvent"
  ],
  "BroadcastFrequencySpecification": [
    "BroadcastFrequencySpecification"
  ],
  "BroadcastService": [
    "BroadcastService",
    "RadioBroadcastService"
  ],
  "BrokerageAccount": [
    "BrokerageAccount"
  ],
  "BuddhistTemple": [
    "BuddhistTemple"
  ],
  "BusOrCoach": [
    "BusOrCoach"
  ],
  "BusReservation": [
    "BusReservation"
  ],
  "BusStation": [
    "BusStation"
  ],
  "BusStop": [
    "BusStop"
  ],
  "BusTrip": [
    "BusTrip"
  ],
  "BusinessAudience": [
    "BusinessAudience"
  ],
  "BusinessEntityType": [
    "BusinessEntityType"
  ],
  "BusinessEvent": [
    "BusinessEvent"
  ],
  "BusinessFunction": [
    "BusinessFunction"
  ],
  "BuyAction": [
    "BuyAction"
  ],
  "CDCPMDRecord": [
    "CDCPMDRecord"
  ],
  "CableOrSatelliteService": [
    "CableOrSatelliteService"
  ],
  "CafeOrCoffeeShop": [
    "CafeOrCoffeeShop"
  ],
  "Campground": [
    "Campground"
  ],
  "CampingPitch": [
    "CampingPitch"
  ],
  "Canal": [
    "Canal"
  ],
  "CancelAction": [
    "CancelAction"
  ],
  "Car": [
    "Car"
  ],
  "CarUsageType": [
    "CarUsageType"
  ],
  "Casino": [
    "Casino"
  ],
  "CategoryCode": [
    "CategoryCode",
    "MedicalCode"
  ],
  "CategoryCodeSet": [
    "CategoryCodeSet"
  ],
  "CatholicChurch": [
    "CatholicChurch"
  ],
  "Cemetery": [
    "Cemetery"
  ],
  "Certification": [
    "Certification"
  ],
  "CertificationStatusEnumeration": [
    "CertificationStatusEnumeration"
  ],
  "Chapter": [
    "Chapter"
  ],
  "CheckAction": [
    "CheckAction"
  ],
  "CheckInAction": [
    "CheckInAction"
  ],
  "CheckOutAction": [
    "CheckOutAction"
  ],
  "CheckoutPage": [
    "CheckoutPage"
  ],
  "ChemicalSubstance": [
    "ChemicalSubstance"
  ],
  "ChildCare": [
    "ChildCare"
  ],
  "ChildrensEvent": [
    "ChildrensEvent"
  ],
  "ChooseAction": [
    "ChooseAction",
    "VoteAction"
  ],
  "Church": [
    "Church",
    "CatholicChurch"
  ],
  "City": [
    "City"
  ],
  "CityHall": [
    "CityHall"
  ],
  "CivicStructure": [
    "CivicStructure",
    "Airport",
    "Aquarium",
    "Beach",
    "BoatTerminal",
    "Bridge",
    "BusStation",
    "BusStop",
    "Campground",
    "Cemetery",
    "Crematorium",
    "EducationalOrganization",
    "EventVenue",
    "FireStation",
    "GovernmentBuilding",
    "Hospital",
    "MovieTheater",
    "Museum",
    "MusicVenue",
    "Park",
    "ParkingFacility",
    "PerformingArtsTheater",
    "PlaceOfWorship",
    "Playground",
    "PoliceStation",
    "PublicToilet",
    "RVPark",
    "StadiumOrArena",
    "SubwayStation",
    "TaxiStand",
    "TrainStation",
    "Zoo",
    "CollegeOrUniversity",
    "ElementarySchool",
    "HighSchool",
    "MiddleSchool",
    "Preschool",
    "School",
    "CityHall",
    "Courthouse",
    "DefenceEstablishment",
    "Embassy",
    "LegislativeBuilding",
    "BuddhistTemple",
    "Church",
    "HinduTemple",
    "Mosque",
    "Synagogue",
    "CatholicChurch"
  ],
  "Claim": [
    "Claim"
  ],
  "ClaimReview": [
    "ClaimReview"
  ],
  "Class": [
    "Class"
  ],
  "Clip": [
    "Clip",
    "MovieClip",
    "RadioClip",
    "TVClip",
    "VideoGameClip"
  ],
  "ClothingStore": [
    "ClothingStore"
  ],
  "Code": [
    "Code"
  ],
  "Collection": [
    "Collection",
    "ProductCollection"
  ],
  "CollectionPage": [
    "CollectionPage",
    "MediaGallery",
    "ImageGallery",
    "VideoGallery"
  ],
  "CollegeOrUniversity": [
    "CollegeOrUniversity"
  ],
  "ComedyClub": [
    "ComedyClub"
  ],
  "ComedyEvent": [
    "ComedyEvent"
  ],
  "ComicCoverArt": [
    "ComicCoverArt"
  ],
  "ComicIssue": [
    "ComicIssue"
  ],
  "ComicSeries": [
    "ComicSeries"
  ],
  "ComicStory": [
    "ComicStory",
    "ComicCoverArt"
  ],
  "Comment": [
    "Comment",
    "Answer",
    "CorrectionComment",
    "Question"
  ],
  "CommentAction": [
    "CommentAction"
  ],
  "CommunicateAction": [
    "CommunicateAction",
    "AskAction",
    "CheckInAction",
    "CheckOutAction",
    "CommentAction",
    "InformAction",
    "InviteAction",
    "ReplyAction",
    "ShareAction",
    "ConfirmAction",
    "RsvpAction"
  ],
  "CompleteDataFeed": [
    "CompleteDataFeed"
  ],
  "CompoundPriceSpecification": [
    "CompoundPriceSpecification"
  ],
  "ComputerLanguage": [
    "ComputerLanguage"
  ],
  "ComputerStore": [
    "ComputerStore"
  ],
  "ConferenceEvent": [
    "ConferenceEvent"
  ],
  "ConfirmAction": [
    "ConfirmAction"
  ],
  "Consortium": [
    "Consortium"
  ],
  "ConstraintNode": [
    "ConstraintNode",
    "StatisticalVariable"
  ],
  "ConsumeAction": [
    "ConsumeAction",
    "DrinkAction",
    "EatAction",
    "InstallAction",
    "ListenAction",
    "PlayGameAction",
    "ReadAction",
    "UseAction",
    "ViewAction",
    "WatchAction",
    "WearAction"
  ],
  "ContactPage": [
    "ContactPage"
  ],
  "ContactPoint": [
    "ContactPoint",
    "PostalAddress"
  ],
  "ContactPointOption": [
    "ContactPointOption"
  ],
  "Continent": [
    "Continent"
  ],
  "ControlAction": [
    "ControlAction",
    "ActivateAction",
    "AuthenticateAction",
    "DeactivateAction",
    "LoginAction",
    "ResetPasswordAction",
    "ResumeAction",
    "SuspendAction"
  ],
  "ConvenienceStore": [
    "ConvenienceStore"
  ],
  "Conversation": [
    "Conversation"
  ],
  "CookAction": [
    "CookAction"
  ],
  "Cooperative": [
    "Cooperative"
  ],
  "Corporation": [
    "Corporation"
  ],
  "CorrectionComment": [
    "CorrectionComment"
  ],
  "Country": [
    "Country"
  ],
  "Course": [
    "Course"
  ],
  "CourseInstance": [
    "CourseInstance"
  ],
  "Courthouse": [
    "Courthouse"
  ],
  "CoverArt": [
    "CoverArt",
    "ComicCoverArt"
  ],
  "CovidTestingFacility": [
    "CovidTestingFacility"
  ],
  "CreateAction": [
    "CreateAction",
    "CookAction",
    "DrawAction",
    "FilmAction",
    "PaintAction",
    "PhotographAction",
    "WriteAction"
  ],
  "CreativeWork": [
    "CreativeWork",
    "AmpStory",
    "ArchiveComponent",
    "Article",
    "Atlas",
    "Blog",
    "Book",
    "Certification",
    "Chapter",
    "Claim",
    "Clip",
    "Code",
    "Collection",
    "ComicStory",
    "Comment",
    "Conversation",
    "Course",
    "CreativeWorkSeason",
    "CreativeWorkSeries",
    "Credential",
    "DataCatalog",
    "Dataset",
    "DefinedTermSet",
    "Diet",
    "DigitalDocument",
    "Drawing",
    "Episode",
    "ExercisePlan",
    "Game",
    "Guide",
    "HowTo",
    "HowToDirection",
    "HowToSection",
    "HowToStep",
    "HowToTip",
    "HyperToc",
    "HyperTocEntry",
    "LearningResource",
    "Legislation",
    "Manuscript",
    "Map",
    "MathSolver",
    "MediaObject",
    "MediaReviewItem",
    "Menu",
    "MenuSection",
    "Message",
    "Movie",
    "MusicComposition",
    "MusicPlaylist",
    "MusicRecording",
    "Painting",
    "Photograph",
    "Play",
    "Poster",
    "PublicationIssue",
    "PublicationVolume",
    "Quotation",
    "Review",
    "Sculpture",
    "Season",
    "SheetMusic",
    "ShortStory",
    "SoftwareApplication",
    "SoftwareSourceCode",
    "SpecialAnnouncement",
    "Statement",
    "TVSeason",
    "TVSeries",
    "Thesis",
    "VisualArtwork",
    "WebContent",
    "WebPage",
    "WebPageElement",
    "WebSite",
    "AdvertiserContentArticle",
    "NewsArticle",
    "Report",
    "SatiricalArticle",
    "ScholarlyArticle",
    "SocialMediaPosting",
    "TechArticle",
    "AnalysisNewsArticle",
    "AskPublicNewsArticle",
    "BackgroundNewsArticle",
    "OpinionNewsArticle",
    "ReportageNewsArticle",
    "ReviewNewsArticle",
    "MedicalScholarlyArticle",
    "BlogPosting",
    "DiscussionForumPosting",
    "LiveBlogPosting",
    "APIReference",
    "Audiobook",
    "SequentialArt",
    "MovieClip",
    "RadioClip",
    "TVClip",
    "VideoGameClip",
    "ProductCollection",
    "ComicCoverArt",
    "Answer",
    "CorrectionComment",
    "Question",
    "PodcastSeason",
    "RadioSeason",
    "BookSeries",
    "MovieSeries",
    "Periodical",
    "PodcastSeries",
    "RadioSeries",
    "VideoGameSeries",
    "ComicSeries",
    "Newspaper",
    "EducationalOccupationalCredential",
    "DataFeed",
    "CompleteDataFeed",
    "CategoryCodeSet",
    "NoteDigitalDocument",
    "PresentationDigitalDocument",
    "SpreadsheetDigitalDocument",
    "TextDigitalDocument",
    "PodcastEpisode",
    "RadioEpisode",
    "TVEpisode",
    "VideoGame",
    "Recipe",
    "Quiz",
    "Syllabus",
    "LegislationObject",
    "3DModel",
    "AudioObject",
    "DataDownload",
    "ImageObject",
    "MusicVideoObject",
    "TextObject",
    "VideoObject",
    "AudioObjectSnapshot",
    "Barcode",
    "ImageObjectSnapshot",
    "VideoObjectSnapshot",
    "EmailMessage",
    "MusicAlbum",
    "MusicRelease",
    "ComicIssue",
    "ClaimReview",
    "CriticReview",
    "EmployerReview",
    "MediaReview",
    "Recommendation",
    "UserReview",
    "MobileApplication",
    "OperatingSystem",
    "RuntimePlatform",
    "WebApplication",
    "CoverArt",
    "HealthTopicContent",
    "AboutPage",
    "CheckoutPage",
    "CollectionPage",
    "ContactPage",
    "FAQPage",
    "ItemPage",
    "MedicalWebPage",
    "ProfilePage",
    "QAPage",
    "RealEstateListing",
    "SearchResultsPage",
    "MediaGallery",
    "ImageGallery",
    "VideoGallery",
    "SiteNavigationElement",
    "Table",
    "WPAdBlock",
    "WPFooter",
    "WPHeader",
    "WPSideBar"
  ],
  "CreativeWorkSeason": [
    "CreativeWorkSeason",
    "PodcastSeason",
    "RadioSeason",
    "TVSeason"
  ],
  "CreativeWorkSeries": [
    "CreativeWorkSeries",
    "BookSeries",
    "MovieSeries",
    "Periodical",
    "PodcastSeries",
    "RadioSeries",
    "TVSeries",
    "VideoGameSeries",
    "ComicSeries",
    "Newspaper"
  ],
  "Credential": [
    "Credential",
    "EducationalOccupationalCredential"
  ],
  "CreditCard": [
    "CreditCard"
  ],
  "Crematorium": [
    "Crematorium"
  ],
  "CriticReview": [
    "CriticReview",
    "ReviewNewsArticle"
  ],
  "CssSelectorType": [
    "CssSelectorType"
  ],
  "CurrencyConversionService": [
    "CurrencyConversionService"
  ],
  "DDxElement": [
    "DDxElement"
  ],
  "DENonprofitType": [
    "DENonprofitType"
  ],
  "DanceEvent": [
    "DanceEvent"
  ],
  "DanceGroup": [
    "DanceGroup"
  ],
  "DataCatalog": [
    "DataCatalog"
  ],
  "DataDownload": [
    "DataDownload"
  ],
  "DataFeed": [
    "DataFeed",
    "CompleteDataFeed"
  ],
  "DataFeedItem": [
    "DataFeedItem"
  ],
  "DataType": [
    "DataType"
  ],
  "Dataset": [
    "Dataset",
    "DataFeed",
    "CompleteDataFeed"
  ],
  "Date": [
    "Date"
  ],
  "DateTime": [
    "DateTime"
  ],
  "DatedMoneySpecification": [
    "DatedMoneySpecification"
  ],
  "DayOfWeek": [
    "DayOfWeek"
  ],
  "DaySpa": [
    "DaySpa"
  ],
  "DeactivateAction": [
    "DeactivateAction"
  ],
  "DefenceEstablishment": [
    "DefenceEstablishment"
  ],
  "DefinedRegion": [
    "DefinedRegion"
  ],
  "DefinedTerm": [
    "DefinedTerm",
    "CategoryCode",
    "MedicalCode"
  ],
  "DefinedTermSet": [
    "DefinedTermSet",
    "CategoryCodeSet"
  ],
  "DeleteAction": [
    "DeleteAction"
  ],
  "DeliveryChargeSpecification": [
    "DeliveryChargeSpecification"
  ],
  "DeliveryEvent": [
    "DeliveryEvent"
  ],
  "DeliveryMethod": [
    "DeliveryMethod"
  ],
  "Demand": [
    "Demand"
  ],
  "Dentist": [
    "Dentist"
  ],
  "DepartAction": [
    "DepartAction"
  ],
  "DepartmentStore": [
    "DepartmentStore"
  ],
  "DepositAccount": [
    "DepositAccount"
  ],
  "DiagnosticLab": [
    "DiagnosticLab"
  ],
  "DiagnosticProcedure": [
    "DiagnosticProcedure"
  ],
  "Diet": [
    "Diet"
  ],
  "DietarySupplement": [
    "DietarySupplement"
  ],
  "DigitalDocument": [
    "DigitalDocument",
    "NoteDigitalDocument",
    "PresentationDigitalDocument",
    "SpreadsheetDigitalDocument",
    "TextDigitalDocument"
  ],
  "DigitalDocumentPermission": [
    "DigitalDocumentPermission"
  ],
  "DigitalDocumentPermissionType": [
    "DigitalDocumentPermissionType"
  ],
  "DigitalPlatformEnumeration": [
    "DigitalPlatformEnumeration"
  ],
  "DisagreeAction": [
    "DisagreeAction"
  ],
  "DiscoverAction": [
    "DiscoverAction"
  ],
  "DiscussionForumPosting": [
    "DiscussionForumPosting"
  ],
  "DislikeAction": [
    "DislikeAction"
  ],
  "Distance": [
    "Distance"
  ],
  "Distillery": [
    "Distillery"
  ],
  "DonateAction": [
    "DonateAction"
  ],
  "DoseSchedule": [
    "DoseSchedule",
    "MaximumDoseSchedule",
    "RecommendedDoseSchedule",
    "ReportedDoseSchedule"
  ],
  "DownloadAction": [
    "DownloadAction"
  ],
  "DrawAction": [
    "DrawAction"
  ],
  "Drawing": [
    "Drawing"
  ],
  "DrinkAction": [
    "DrinkAction"
  ],
  "DriveWheelConfigurationValue": [
    "DriveWheelConfigurationValue"
  ],
  "Drug": [
    "Drug"
  ],
  "DrugClass": [
    "DrugClass"
  ],
  "DrugCost": [
    "DrugCost"
  ],
  "DrugCostCategory": [
    "DrugCostCategory"
  ],
  "DrugLegalStatus": [
    "DrugLegalStatus"
  ],
  "DrugPregnancyCategory": [
    "DrugPregnancyCategory"
  ],
  "DrugPrescriptionStatus": [
    "DrugPrescriptionStatus"
  ],
  "DrugStrength": [
    "DrugStrength"
  ],
  "DryCleaningOrLaundry": [
    "DryCleaningOrLaundry"
  ],
  "Duration": [
    "Duration"
  ],
  "EUEnergyEfficiencyEnumeration": [
    "EUEnergyEfficiencyEnumeration"
  ],
  "EatAction": [
    "EatAction"
  ],
  "EducationEvent": [
    "EducationEvent"
  ],
  "EducationalAudience": [
    "EducationalAudience"
  ],
  "EducationalOccupationalCredential": [
    "EducationalOccupationalCredential"
  ],
  "EducationalOccupationalProgram": [
    "EducationalOccupationalProgram",
    "WorkBasedProgram"
  ],
  "EducationalOrganization": [
    "EducationalOrganization",
    "CollegeOrUniversity",
    "ElementarySchool",
    "HighSchool",
    "MiddleSchool",
    "Preschool",
    "School"
  ],
  "Electrician": [
    "Electrician"
  ],
  "ElectronicsStore": [
    "ElectronicsStore"
  ],
  "ElementarySchool": [
    "ElementarySchool"
  ],
  "EmailMessage": [
    "EmailMessage"
  ],
  "Embassy": [
    "Embassy"
  ],
  "EmergencyService": [
    "EmergencyService",
    "FireStation",
    "Hospital",
    "PoliceStation"
  ],
  "EmployeeRole": [
    "EmployeeRole"
  ],
  "EmployerAggregateRating": [
    "EmployerAggregateRating"
  ],
  "EmployerReview": [
    "EmployerReview"
  ],
  "EmploymentAgency": [
    "EmploymentAgency"
  ],
  "EndorseAction": [
    "EndorseAction"
  ],
  "EndorsementRating": [
    "EndorsementRating"
  ],
  "Energy": [
    "Energy"
  ],
  "EnergyConsumptionDetails": [
    "EnergyConsumptionDetails"
  ],
  "EnergyEfficiencyEnumeration": [
    "EnergyEfficiencyEnumeration",
    "EUEnergyEfficiencyEnumeration",
    "EnergyStarEnergyEfficiencyEnumeration"
  ],
  "EnergyStarEnergyEfficiencyEnumeration": [
    "EnergyStarEnergyEfficiencyEnumeration"
  ],
  "EngineSpecification": [
    "EngineSpecification"
  ],
  "EntertainmentBusiness": [
    "EntertainmentBusiness",
    "AdultEntertainment",
    "AmusementPark",
    "ArtGallery",
    "Casino",
    "ComedyClub",
    "MovieTheater",
    "NightClub"
  ],
  "EntryPoint": [
    "EntryPoint"
  ],
  "Enumeration": [
    "Enumeration",
    "AdultOrientedEnumeration",
    "BoardingPolicyType",
    "BookFormatType",
    "BusinessEntityType",
    "BusinessFunction",
    "CarUsageType",
    "CertificationStatusEnumeration",
    "ContactPointOption",
    "DayOfWeek",
    "DeliveryMethod",
    "DigitalDocumentPermissionType",
    "DigitalPlatformEnumeration",
    "EnergyEfficiencyEnumeration",
    "EventAttendanceModeEnumeration",
    "FulfillmentTypeEnumeration",
    "GameAvailabilityEnumeration",
    "GamePlayMode",
    "GenderType",
    "GovernmentBenefitsType",
    "HealthAspectEnumeration",
    "IncentiveQualifiedExpenseType",
    "IncentiveStatus",
    "IncentiveType",
    "ItemAvailability",
    "ItemListOrderType",
    "LegalValueLevel",
    "MapCategoryType",
    "MeasurementMethodEnum",
    "MeasurementTypeEnumeration",
    "MediaEnumeration",
    "MediaManipulationRatingEnumeration",
    "MedicalEnumeration",
    "MerchantReturnEnumeration",
    "MusicAlbumProductionType",
    "MusicAlbumReleaseType",
    "MusicReleaseFormatType",
    "NonprofitType",
    "OfferItemCondition",
    "PaymentMethodType",
    "PhysicalActivityCategory",
    "PriceComponentTypeEnumeration",
    "PriceTypeEnumeration",
    "PurchaseType",
    "QualitativeValue",
    "RefundTypeEnumeration",
    "RestrictedDiet",
    "ReturnFeesEnumeration",
    "ReturnLabelSourceEnumeration",
    "ReturnMethodEnumeration",
    "RsvpResponseType",
    "SizeGroupEnumeration",
    "SizeSystemEnumeration",
    "Specialty",
    "StatusEnumeration",
    "TierBenefitEnumeration",
    "WarrantyScope",
    "EUEnergyEfficiencyEnumeration",
    "EnergyStarEnergyEfficiencyEnumeration",
    "BodyMeasurementTypeEnumeration",
    "WearableMeasurementTypeEnumeration",
    "IPTCDigitalSourceEnumeration",
    "DrugCostCategory",
    "DrugPregnancyCategory",
    "DrugPrescriptionStatus",
    "InfectiousAgentClass",
    "MedicalAudienceType",
    "MedicalDevicePurpose",
    "MedicalEvidenceLevel",
    "MedicalImagingTechnique",
    "MedicalObservationalStudyDesign",
    "MedicalProcedureType",
    "MedicalSpecialty",
    "MedicalStudyStatus",
    "MedicalTrialDesign",
    "MedicineSystem",
    "PhysicalExam",
    "DENonprofitType",
    "ITNonprofitType",
    "NLNonprofitType",
    "UKNonprofitType",
    "USNonprofitType",
    "BedType",
    "DriveWheelConfigurationValue",
    "SizeSpecification",
    "SteeringPositionValue",
    "WearableSizeGroupEnumeration",
    "WearableSizeSystemEnumeration",
    "ActionStatusType",
    "EventStatusType",
    "GameServerStatus",
    "LegalForceStatus",
    "OrderStatus",
    "PaymentStatusType",
    "ReservationStatusType"
  ],
  "Episode": [
    "Episode",
    "PodcastEpisode",
    "RadioEpisode",
    "TVEpisode"
  ],
  "Error": [
    "Error"
  ],
  "Event": [
    "Event",
    "BusinessEvent",
    "ChildrensEvent",
    "ComedyEvent",
    "ConferenceEvent",
    "CourseInstance",
    "DanceEvent",
    "DeliveryEvent",
    "EducationEvent",
    "EventSeries",
    "ExhibitionEvent",
    "Festival",
    "FoodEvent",
    "Hackathon",
    "LiteraryEvent",
    "MusicEvent",
    "PerformingArtsEvent",
    "PublicationEvent",
    "SaleEvent",
    "ScreeningEvent",
    "SocialEvent",
    "SportsEvent",
    "TheaterEvent",
    "UserInteraction",
    "VisualArtsEvent",
    "BroadcastEvent",
    "OnDemandEvent",
    "UserBlocks",
    "UserCheckins",
    "UserComments",
    "UserDownloads",
    "UserLikes",
    "UserPageVisits",
    "UserPlays",
    "UserPlusOnes",
    "UserTweets"
  ],
  "EventAttendanceModeEnumeration": [
    "EventAttendanceModeEnumeration"
  ],
  "EventReservation": [
    "EventReservation"
  ],
  "EventSeries": [
    "EventSeries"
  ],
  "EventStatusType": [
    "EventStatusType"
  ],
  "EventVenue": [
    "EventVenue"
  ],
  "ExchangeRateSpecification": [
    "ExchangeRateSpecification"
  ],
  "ExerciseAction": [
    "ExerciseAction"
  ],
  "ExerciseGym": [
    "ExerciseGym"
  ],
  "ExercisePlan": [
    "ExercisePlan"
  ],
  "ExhibitionEvent": [
    "ExhibitionEvent"
  ],
  "FAQPage": [
    "FAQPage"
  ],
  "FMRadioChannel": [
    "FMRadioChannel"
  ],
  "FastFoodRestaurant": [
    "FastFoodRestaurant"
  ],
  "Festival": [
    "Festival"
  ],
  "FilmAction": [
    "FilmAction"
  ],
  "FinancialIncentive": [
    "FinancialIncentive"
  ],
  "FinancialProduct": [
    "FinancialProduct",
    "BankAccount",
    "CurrencyConversionService",
    "InvestmentOrDeposit",
    "LoanOrCredit",
    "PaymentCard",
    "PaymentService",
    "DepositAccount",
    "BrokerageAccount",
    "InvestmentFund",
    "CreditCard",
    "MortgageLoan"
  ],
  "FinancialService": [
    "FinancialService",
    "AccountingService",
    "AutomatedTeller",
    "BankOrCreditUnion",
    "InsuranceAgency"
  ],
  "FindAction": [
    "FindAction",
    "CheckAction",
    "DiscoverAction",
    "TrackAction"
  ],
  "FireStation": [
    "FireStation"
  ],
  "Flight": [
    "Flight"
  ],
  "FlightReservation": [
    "FlightReservation"
  ],
  "Float": [
    "Float"
  ],
  "FloorPlan": [
    "FloorPlan"
  ],
  "Florist": [
    "Florist"
  ],
  "FollowAction": [
    "FollowAction"
  ],
  "FoodEstablishment": [
    "FoodEstablishment",
    "Bakery",
    "BarOrPub",
    "Brewery",
    "CafeOrCoffeeShop",
    "Distillery",
    "FastFoodRestaurant",
    "IceCreamShop",
    "Restaurant",
    "Winery"
  ],
  "FoodEstablishmentReservation": [
    "FoodEstablishmentReservation"
  ],
  "FoodEvent": [
    "FoodEvent"
  ],
  "FoodService": [
    "FoodService"
  ],
  "FulfillmentTypeEnumeration": [
    "FulfillmentTypeEnumeration"
  ],
  "FundingAgency": [
    "FundingAgency"
  ],
  "FundingScheme": [
    "FundingScheme"
  ],
  "FurnitureStore": [
    "FurnitureStore"
  ],
  "Game": [
    "Game",
    "VideoGame"
  ],
  "GameAvailabilityEnumeration": [
    "GameAvailabilityEnumeration"
  ],
  "GamePlayMode": [
    "GamePlayMode"
  ],
  "GameServer": [
    "GameServer"
  ],
  "GameServerStatus": [
    "GameServerStatus"
  ],
  "GardenStore": [
    "GardenStore"
  ],
  "GasStation": [
    "GasStation"
  ],
  "GatedResidenceCommunity": [
    "GatedResidenceCommunity"
  ],
  "GenderType": [
    "GenderType"
  ],
  "Gene": [
    "Gene"
  ],
  "GeneralContractor": [
    "GeneralContractor"
  ],
  "GeoCircle": [
    "GeoCircle"
  ],
  "GeoCoordinates": [
    "GeoCoordinates"
  ],
  "GeoShape": [
    "GeoShape",
    "GeoCircle"
  ],
  "GeospatialGeometry": [
    "GeospatialGeometry"
  ],
  "GiveAction": [
    "GiveAction"
  ],
  "GolfCourse": [
    "GolfCourse"
  ],
  "GovernmentBenefitsType": [
    "GovernmentBenefitsType"
  ],
  "GovernmentBuilding": [
    "GovernmentBuilding",
    "CityHall",
    "Courthouse",
    "DefenceEstablishment",
    "Embassy",
    "LegislativeBuilding"
  ],
  "GovernmentOffice": [
    "GovernmentOffice",
    "PostOffice"
  ],
  "GovernmentOrganization": [
    "GovernmentOrganization"
  ],
  "GovernmentPermit": [
    "GovernmentPermit"
  ],
  "GovernmentService": [
    "GovernmentService"
  ],
  "Grant": [
    "Grant",
    "MonetaryGrant"
  ],
  "GroceryStore": [
    "GroceryStore"
  ],
  "Guide": [
    "Guide"
  ],
  "HVACBusiness": [
    "HVACBusiness"
  ],
  "Hackathon": [
    "Hackathon"
  ],
  "HairSalon": [
    "HairSalon"
  ],
  "HardwareStore": [
    "HardwareStore"
  ],
  "HealthAndBeautyBusiness": [
    "HealthAndBeautyBusiness",
    "BeautySalon",
    "DaySpa",
    "HairSalon",
    "HealthClub",
    "NailSalon",
    "TattooParlor"
  ],
  "HealthAspectEnumeration": [
    "HealthAspectEnumeration"
  ],
  "HealthClub": [
    "HealthClub"
  ],
  "HealthInsurancePlan": [
    "HealthInsurancePlan"
  ],
  "HealthPlanCostSharingSpecification": [
    "HealthPlanCostSharingSpecification"
  ],
  "HealthPlanFormulary": [
    "HealthPlanFormulary"
  ],
  "HealthPlanNetwork": [
    "HealthPlanNetwork"
  ],
  "HealthTopicContent": [
    "HealthTopicContent"
  ],
  "HighSchool": [
    "HighSchool"
  ],
  "HinduTemple": [
    "HinduTemple"
  ],
  "HobbyShop": [
    "HobbyShop"
  ],
  "HomeAndConstructionBusiness": [
    "HomeAndConstructionBusiness",
    "Electrician",
    "GeneralContractor",
    "HVACBusiness",
    "HousePainter",
    "Locksmith",
    "MovingCompany",
    "Plumber",
    "RoofingContractor"
  ],
  "HomeGoodsStore": [
    "HomeGoodsStore"
  ],
  "Hospital": [
    "Hospital"
  ],
  "Hostel": [
    "Hostel"
  ],
  "Hotel": [
    "Hotel"
  ],
  "HotelRoom": [
    "HotelRoom"
  ],
  "House": [
    "House",
    "SingleFamilyResidence"
  ],
  "HousePainter": [
    "HousePainter"
  ],
  "HowTo": [
    "HowTo",
    "Recipe"
  ],
  "HowToDirection": [
    "HowToDirection"
  ],
  "HowToItem": [
    "HowToItem",
    "HowToSupply",
    "HowToTool"
  ],
  "HowToSection": [
    "HowToSection"
  ],
  "HowToStep": [
    "HowToStep"
  ],
  "HowToSupply": [
    "HowToSupply"
  ],
  "HowToTip": [
    "HowToTip"
  ],
  "HowToTool": [
    "HowToTool"
  ],
  "HyperToc": [
    "HyperToc"
  ],
  "HyperTocEntry": [
    "HyperTocEntry"
  ],
  "IPTCDigitalSourceEnumeration": [
    "IPTCDigitalSourceEnumeration"
  ],
  "ITNonprofitType": [
    "ITNonprofitType"
  ],
  "IceCreamShop": [
    "IceCreamShop"
  ],
  "IgnoreAction": [
    "IgnoreAction"
  ],
  "ImageGallery": [
    "ImageGallery"
  ],
  "ImageObject": [
    "ImageObject",
    "Barcode",
    "ImageObjectSnapshot"
  ],
  "ImageObjectSnapshot": [
    "ImageObjectSnapshot"
  ],
  "ImagingTest": [
    "ImagingTest"
  ],
  "IncentiveQualifiedExpenseType": [
    "IncentiveQualifiedExpenseType"
  ],
  "IncentiveStatus": [
    "IncentiveStatus"
  ],
  "IncentiveType": [
    "IncentiveType"
  ],
  "IndividualPhysician": [
    "IndividualPhysician"
  ],
  "IndividualProduct": [
    "IndividualProduct"
  ],
  "InfectiousAgentClass": [
    "InfectiousAgentClass"
  ],
  "InfectiousDisease": [
    "InfectiousDisease"
  ],
  "InformAction": [
    "InformAction",
    "ConfirmAction",
    "RsvpAction"
  ],
  "InsertAction": [
    "InsertAction",
    "AppendAction",
    "PrependAction"
  ],
  "InstallAction": [
    "InstallAction"
  ],
  "InstantaneousEvent": [
    "InstantaneousEvent",
    "Error"
  ],
  "InsuranceAgency": [
    "InsuranceAgency"
  ],
  "Intangible": [
    "Intangible",
    "ActionAccessSpecification",
    "AlignmentObject",
    "Audience",
    "BedDetails",
    "Brand",
    "BroadcastChannel",
    "BroadcastFrequencySpecification",
    "Class",
    "ComputerLanguage",
    "ConstraintNode",
    "DataFeedItem",
    "DefinedTerm",
    "Demand",
    "DigitalDocumentPermission",
    "EducationalOccupationalProgram",
    "EnergyConsumptionDetails",
    "EntryPoint",
    "Enumeration",
    "FinancialIncentive",
    "FloorPlan",
    "GameServer",
    "GeospatialGeometry",
    "Grant",
    "HealthInsurancePlan",
    "HealthPlanCostSharingSpecification",
    "HealthPlanFormulary",
    "HealthPlanNetwork",
    "Invoice",
    "ItemList",
    "JobPosting",
    "Language",
    "ListItem",
    "MediaSubscription",
    "MemberProgram",
    "MemberProgramTier",
    "MenuItem",
    "MerchantReturnPolicy",
    "MerchantReturnPolicySeasonalOverride",
    "Observation",
    "Occupation",
    "OccupationalExperienceRequirements",
    "Offer",
    "Order",
    "ParcelDelivery",
    "PaymentMethod",
    "Permit",
    "ProgramMembership",
    "Property",
    "PropertyValueSpecification",
    "Rating",
    "Reservation",
    "Role",
    "Schedule",
    "Seat",
    "Series",
    "Service",
    "ServiceChannel",
    "SpeakableSpecification",
    "StatisticalPopulation",
    "StructuredValue",
    "Ticket",
    "Trip",
    "VirtualLocation",
    "BusinessAudience",
    "EducationalAudience",
    "MedicalAudience",
    "PeopleAudience",
    "Researcher",
    "Patient",
    "ParentAudience",
    "RadioChannel",
    "TelevisionChannel",
    "AMRadioChannel",
    "FMRadioChannel",
    "StatisticalVariable",
    "CategoryCode",
    "MedicalCode",
    "WorkBasedProgram",
    "AdultOrientedEnumeration",
    "BoardingPolicyType",
    "BookFormatType",
    "BusinessEntityType",
    "BusinessFunction",
    "CarUsageType",
    "CertificationStatusEnumeration",
    "ContactPointOption",
    "DayOfWeek",
    "DeliveryMethod",
    "DigitalDocumentPermissionType",
    "DigitalPlatformEnumeration",
    "EnergyEfficiencyEnumeration",
    "EventAttendanceModeEnumeration",
    "FulfillmentTypeEnumeration",
    "GameAvailabilityEnumeration",
    "GamePlayMode",
    "GenderType",
    "GovernmentBenefitsType",
    "HealthAspectEnumeration",
    "IncentiveQualifiedExpenseType",
    "IncentiveStatus",
    "IncentiveType",
    "ItemAvailability",
    "ItemListOrderType",
    "LegalValueLevel",
    "MapCategoryType",
    "MeasurementMethodEnum",
    "MeasurementTypeEnumeration",
    "MediaEnumeration",
    "MediaManipulationRatingEnumeration",
    "MedicalEnumeration",
    "MerchantReturnEnumeration",
    "MusicAlbumProductionType",
    "MusicAlbumReleaseType",
    "MusicReleaseFormatType",
    "NonprofitType",
    "OfferItemCondition",
    "PaymentMethodType",
    "PhysicalActivityCategory",
    "PriceComponentTypeEnumeration",
    "PriceTypeEnumeration",
    "PurchaseType",
    "QualitativeValue",
    "RefundTypeEnumeration",
    "RestrictedDiet",
    "ReturnFeesEnumeration",
    "ReturnLabelSourceEnumeration",
    "ReturnMethodEnumeration",
    "RsvpResponseType",
    "SizeGroupEnumeration",
    "SizeSystemEnumeration",
    "Specialty",
    "StatusEnumeration",
    "TierBenefitEnumeration",
    "WarrantyScope",
    "EUEnergyEfficiencyEnumeration",
    "EnergyStarEnergyEfficiencyEnumeration",
    "BodyMeasurementTypeEnumeration",
    "WearableMeasurementTypeEnumeration",
    "IPTCDigitalSourceEnumeration",
    "DrugCostCategory",
    "DrugPregnancyCategory",
    "DrugPrescriptionStatus",
    "InfectiousAgentClass",
    "MedicalAudienceType",
    "MedicalDevicePurpose",
    "MedicalEvidenceLevel",
    "MedicalImagingTechnique",
    "MedicalObservationalStudyDesign",
    "MedicalProcedureType",
    "MedicalSpecialty",
    "MedicalStudyStatus",
    "MedicalTrialDesign",
    "MedicineSystem",
    "PhysicalExam",
    "DENonprofitType",
    "ITNonprofitType",
    "NLNonprofitType",
    "UKNonprofitType",
    "USNonprofitType",
    "BedType",
    "DriveWheelConfigurationValue",
    "SizeSpecification",
    "SteeringPositionValue",
    "WearableSizeGroupEnumeration",
    "WearableSizeSystemEnumeration",
    "ActionStatusType",
    "EventStatusType",
    "GameServerStatus",
    "LegalForceStatus",
    "OrderStatus",
    "PaymentStatusType",
    "ReservationStatusType",
    "MonetaryGrant",
    "BreadcrumbList",
    "HowToSection",
    "HowToStep",
    "OfferCatalog",
    "HowToDirection",
    "HowToItem",
    "HowToTip",
    "HowToSupply",
    "HowToTool",
    "AggregateOffer",
    "OfferForLease",
    "OfferForPurchase",
    "PaymentCard",
    "PaymentService",
    "CreditCard",
    "GovernmentPermit",
    "AggregateRating",
    "EndorsementRating",
    "EmployerAggregateRating",
    "BoatReservation",
    "BusReservation",
    "EventReservation",
    "FlightReservation",
    "FoodEstablishmentReservation",
    "LodgingReservation",
    "RentalCarReservation",
    "ReservationPackage",
    "TaxiReservation",
    "TrainReservation",
    "LinkRole",
    "OrganizationRole",
    "PerformanceRole",
    "EmployeeRole",
    "CreativeWorkSeries",
    "EventSeries",
    "BookSeries",
    "MovieSeries",
    "Periodical",
    "PodcastSeries",
    "RadioSeries",
    "TVSeries",
    "VideoGameSeries",
    "ComicSeries",
    "Newspaper",
    "BroadcastService",
    "CableOrSatelliteService",
    "FinancialProduct",
    "FoodService",
    "GovernmentService",
    "Taxi",
    "TaxiService",
    "WebAPI",
    "RadioBroadcastService",
    "BankAccount",
    "CurrencyConversionService",
    "InvestmentOrDeposit",
    "LoanOrCredit",
    "DepositAccount",
    "BrokerageAccount",
    "InvestmentFund",
    "MortgageLoan",
    "CDCPMDRecord",
    "ContactPoint",
    "DatedMoneySpecification",
    "DefinedRegion",
    "EngineSpecification",
    "ExchangeRateSpecification",
    "GeoCoordinates",
    "GeoShape",
    "InstantaneousEvent",
    "InteractionCounter",
    "MonetaryAmount",
    "NutritionInformation",
    "OfferShippingDetails",
    "OpeningHoursSpecification",
    "OrderItem",
    "OwnershipInfo",
    "PostalCodeRangeSpecification",
    "PriceSpecification",
    "PropertyValue",
    "QuantitativeValue",
    "QuantitativeValueDistribution",
    "RepaymentSpecification",
    "ServicePeriod",
    "ShippingConditions",
    "ShippingDeliveryTime",
    "ShippingRateSettings",
    "ShippingService",
    "TypeAndQuantityNode",
    "WarrantyPromise",
    "PostalAddress",
    "GeoCircle",
    "Error",
    "CompoundPriceSpecification",
    "DeliveryChargeSpecification",
    "PaymentChargeSpecification",
    "UnitPriceSpecification",
    "LocationFeatureSpecification",
    "MonetaryAmountDistribution",
    "BoatTrip",
    "BusTrip",
    "Flight",
    "TouristTrip",
    "TrainTrip"
  ],
  "Integer": [
    "Integer"
  ],
  "InteractAction": [
    "InteractAction",
    "BefriendAction",
    "CommunicateAction",
    "FollowAction",
    "JoinAction",
    "LeaveAction",
    "MarryAction",
    "RegisterAction",
    "SubscribeAction",
    "UnRegisterAction",
    "AskAction",
    "CheckInAction",
    "CheckOutAction",
    "CommentAction",
    "InformAction",
    "InviteAction",
    "ReplyAction",
    "ShareAction",
    "ConfirmAction",
    "RsvpAction"
  ],
  "InteractionCounter": [
    "InteractionCounter"
  ],
  "InternetCafe": [
    "InternetCafe"
  ],
  "InvestmentFund": [
    "InvestmentFund"
  ],
  "InvestmentOrDeposit": [
    "InvestmentOrDeposit",
    "BrokerageAccount",
    "DepositAccount",
    "InvestmentFund"
  ],
  "InviteAction": [
    "InviteAction"
  ],
  "Invoice": [
    "Invoice"
  ],
  "ItemAvailability": [
    "ItemAvailability"
  ],
  "ItemList": [
    "ItemList",
    "BreadcrumbList",
    "HowToSection",
    "HowToStep",
    "OfferCatalog"
  ],
  "ItemListOrderType": [
    "ItemListOrderType"
  ],
  "ItemPage": [
    "ItemPage"
  ],
  "JewelryStore": [
    "JewelryStore"
  ],
  "JobPosting": [
    "JobPosting"
  ],
  "JoinAction": [
    "JoinAction"
  ],
  "Joint": [
    "Joint"
  ],
  "LakeBodyOfWater": [
    "LakeBodyOfWater"
  ],
  "Landform": [
    "Landform",
    "BodyOfWater",
    "Continent",
    "Mountain",
    "Volcano",
    "Canal",
    "LakeBodyOfWater",
    "OceanBodyOfWater",
    "Pond",
    "Reservoir",
    "RiverBodyOfWater",
    "SeaBodyOfWater",
    "Waterfall"
  ],
  "LandmarksOrHistoricalBuildings": [
    "LandmarksOrHistoricalBuildings"
  ],
  "Language": [
    "Language"
  ],
  "LearningResource": [
    "LearningResource",
    "Course",
    "Quiz",
    "Syllabus"
  ],
  "LeaveAction": [
    "LeaveAction"
  ],
  "LegalForceStatus": [
    "LegalForceStatus"
  ],
  "LegalService": [
    "LegalService",
    "Attorney",
    "Notary"
  ],
  "LegalValueLevel": [
    "LegalValueLevel"
  ],
  "Legislation": [
    "Legislation",
    "LegislationObject"
  ],
  "LegislationObject": [
    "LegislationObject"
  ],
  "LegislativeBuilding": [
    "LegislativeBuilding"
  ],
  "LendAction": [
    "LendAction"
  ],
  "Library": [
    "Library"
  ],
  "LibrarySystem": [
    "LibrarySystem"
  ],
  "LifestyleModification": [
    "LifestyleModification",
    "Diet",
    "PhysicalActivity",
    "ExercisePlan"
  ],
  "Ligament": [
    "Ligament"
  ],
  "LikeAction": [
    "LikeAction"
  ],
  "LinkRole": [
    "LinkRole"
  ],
  "LiquorStore": [
    "LiquorStore"
  ],
  "ListItem": [
    "ListItem",
    "HowToDirection",
    "HowToItem",
    "HowToSection",
    "HowToStep",
    "HowToTip",
    "HowToSupply",
    "HowToTool"
  ],
  "ListenAction": [
    "ListenAction"
  ],
  "LiteraryEvent": [
    "LiteraryEvent"
  ],
  "LiveBlogPosting": [
    "LiveBlogPosting"
  ],
  "LoanOrCredit": [
    "LoanOrCredit",
    "CreditCard",
    "MortgageLoan"
  ],
  "LocalBusiness": [
    "LocalBusiness",
    "AnimalShelter",
    "ArchiveOrganization",
    "AutomotiveBusiness",
    "ChildCare",
    "Dentist",
    "DryCleaningOrLaundry",
    "EmergencyService",
    "EmploymentAgency",
    "EntertainmentBusiness",
    "FinancialService",
    "FoodEstablishment",
    "GovernmentOffice",
    "HealthAndBeautyBusiness",
    "HomeAndConstructionBusiness",
    "InternetCafe",
    "LegalService",
    "Library",
    "LodgingBusiness",
    "MedicalBusiness",
    "ProfessionalService",
    "RadioStation",
    "RealEstateAgent",
    "RecyclingCenter",
    "SelfStorage",
    "ShoppingCenter",
    "SportsActivityLocation",
    "Store",
    "TelevisionStation",
    "TouristInformationCenter",
    "TravelAgency",
    "AutoBodyShop",
    "AutoDealer",
    "AutoPartsStore",
    "AutoRental",
    "AutoRepair",
    "AutoWash",
    "GasStation",
    "MotorcycleDealer",
    "MotorcycleRepair",
    "FireStation",
    "Hospital",
    "PoliceStation",
    "AdultEntertainment",
    "AmusementPark",
    "ArtGallery",
    "Casino",
    "ComedyClub",
    "MovieTheater",
    "NightClub",
    "AccountingService",
    "AutomatedTeller",
    "BankOrCreditUnion",
    "InsuranceAgency",
    "Bakery",
    "BarOrPub",
    "Brewery",
    "CafeOrCoffeeShop",
    "Distillery",
    "FastFoodRestaurant",
    "IceCreamShop",
    "Restaurant",
    "Winery",
    "PostOffice",
    "BeautySalon",
    "DaySpa",
    "HairSalon",
    "HealthClub",
    "NailSalon",
    "TattooParlor",
    "Electrician",
    "GeneralContractor",
    "HVACBusiness",
    "HousePainter",
    "Locksmith",
    "MovingCompany",
    "Plumber",
    "RoofingContractor",
    "Attorney",
    "Notary",
    "BedAndBreakfast",
    "Campground",
    "Hostel",
    "Hotel",
    "Motel",
    "Resort",
    "VacationRental",
    "SkiResort",
    "MedicalClinic",
    "Optician",
    "Pharmacy",
    "Physician",
    "CovidTestingFacility",
    "IndividualPhysician",
    "PhysiciansOffice",
    "BowlingAlley",
    "ExerciseGym",
    "GolfCourse",
    "PublicSwimmingPool",
    "SportsClub",
    "StadiumOrArena",
    "TennisComplex",
    "BikeStore",
    "BookStore",
    "ClothingStore",
    "ComputerStore",
    "ConvenienceStore",
    "DepartmentStore",
    "ElectronicsStore",
    "Florist",
    "FurnitureStore",
    "GardenStore",
    "GroceryStore",
    "HardwareStore",
    "HobbyShop",
    "HomeGoodsStore",
    "JewelryStore",
    "LiquorStore",
    "MensClothingStore",
    "MobilePhoneStore",
    "MovieRentalStore",
    "MusicStore",
    "OfficeEquipmentStore",
    "OutletStore",
    "PawnShop",
    "PetStore",
    "ShoeStore",
    "SportingGoodsStore",
    "TireShop",
    "ToyStore",
    "WholesaleStore"
  ],
  "LocationFeatureSpecification": [
    "LocationFeatureSpecification"
  ],
  "Locksmith": [
    "Locksmith"
  ],
  "LodgingBusiness": [
    "LodgingBusiness",
    "BedAndBreakfast",
    "Campground",
    "Hostel",
    "Hotel",
    "Motel",
    "Resort",
    "VacationRental",
    "SkiResort"
  ],
  "LodgingReservation": [
    "LodgingReservation"
  ],
  "LoginAction": [
    "LoginAction"
  ],
  "LoseAction": [
    "LoseAction"
  ],
  "LymphaticVessel": [
    "LymphaticVessel"
  ],
  "Manuscript": [
    "Manuscript"
  ],
  "Map": [
    "Map"
  ],
  "MapCategoryType": [
    "MapCategoryType"
  ],
  "MarryAction": [
    "MarryAction"
  ],
  "Mass": [
    "Mass"
  ],
  "MathSolver": [
    "MathSolver"
  ],
  "MaximumDoseSchedule": [
    "MaximumDoseSchedule"
  ],
  "MeasurementMethodEnum": [
    "MeasurementMethodEnum"
  ],
  "MeasurementTypeEnumeration": [
    "MeasurementTypeEnumeration",
    "BodyMeasurementTypeEnumeration",
    "WearableMeasurementTypeEnumeration"
  ],
  "MediaEnumeration": [
    "MediaEnumeration",
    "IPTCDigitalSourceEnumeration"
  ],
  "MediaGallery": [
    "MediaGallery",
    "ImageGallery",
    "VideoGallery"
  ],
  "MediaManipulationRatingEnumeration": [
    "MediaManipulationRatingEnumeration"
  ],
  "MediaObject": [
    "MediaObject",
    "3DModel",
    "AmpStory",
    "AudioObject",
    "DataDownload",
    "ImageObject",
    "LegislationObject",
    "MusicVideoObject",
    "TextObject",
    "VideoObject",
    "AudioObjectSnapshot",
    "Audiobook",
    "Barcode",
    "ImageObjectSnapshot",
    "VideoObjectSnapshot"
  ],
  "MediaReview": [
    "MediaReview"
  ],
  "MediaReviewItem": [
    "MediaReviewItem"
  ],
  "MediaSubscription": [
    "MediaSubscription"
  ],
  "MedicalAudience": [
    "MedicalAudience",
    "Patient"
  ],
  "MedicalAudienceType": [
    "MedicalAudienceType"
  ],
  "MedicalBusiness": [
    "MedicalBusiness",
    "Dentist",
    "MedicalClinic",
    "Optician",
    "Pharmacy",
    "Physician",
    "CovidTestingFacility",
    "IndividualPhysician",
    "PhysiciansOffice"
  ],
  "MedicalCause": [
    "MedicalCause"
  ],
  "MedicalClinic": [
    "MedicalClinic",
    "CovidTestingFacility"
  ],
  "MedicalCode": [
    "MedicalCode"
  ],
  "MedicalCondition": [
    "MedicalCondition",
    "InfectiousDisease",
    "MedicalSignOrSymptom",
    "MedicalSign",
    "MedicalSymptom",
    "VitalSign"
  ],
  "MedicalConditionStage": [
    "MedicalConditionStage"
  ],
  "MedicalContraindication": [
    "MedicalContraindication"
  ],
  "MedicalDevice": [
    "MedicalDevice"
  ],
  "MedicalDevicePurpose": [
    "MedicalDevicePurpose"
  ],
  "MedicalEntity": [
    "MedicalEntity",
    "AnatomicalStructure",
    "AnatomicalSystem",
    "DrugClass",
    "DrugCost",
    "LifestyleModification",
    "MedicalCause",
    "MedicalCondition",
    "MedicalContraindication",
    "MedicalDevice",
    "MedicalGuideline",
    "MedicalIndication",
    "MedicalIntangible",
    "MedicalProcedure",
    "MedicalRiskEstimator",
    "MedicalRiskFactor",
    "MedicalStudy",
    "MedicalTest",
    "Substance",
    "SuperficialAnatomy",
    "Bone",
    "BrainStructure",
    "Joint",
    "Ligament",
    "Muscle",
    "Nerve",
    "Vessel",
    "Artery",
    "LymphaticVessel",
    "Vein",
    "Diet",
    "PhysicalActivity",
    "ExercisePlan",
    "InfectiousDisease",
    "MedicalSignOrSymptom",
    "MedicalSign",
    "MedicalSymptom",
    "VitalSign",
    "MedicalGuidelineContraindication",
    "MedicalGuidelineRecommendation",
    "ApprovedIndication",
    "PreventionIndication",
    "TreatmentIndication",
    "DDxElement",
    "DoseSchedule",
    "DrugLegalStatus",
    "DrugStrength",
    "MedicalCode",
    "MedicalConditionStage",
    "MaximumDoseSchedule",
    "RecommendedDoseSchedule",
    "ReportedDoseSchedule",
    "DiagnosticProcedure",
    "PalliativeProcedure",
    "PhysicalExam",
    "SurgicalProcedure",
    "TherapeuticProcedure",
    "MedicalTherapy",
    "PsychologicalTreatment",
    "OccupationalTherapy",
    "PhysicalTherapy",
    "RadiationTherapy",
    "MedicalRiskCalculator",
    "MedicalRiskScore",
    "MedicalObservationalStudy",
    "MedicalTrial",
    "BloodTest",
    "ImagingTest",
    "MedicalTestPanel",
    "PathologyTest",
    "DietarySupplement",
    "Drug"
  ],
  "MedicalEnumeration": [
    "MedicalEnumeration",
    "DrugCostCategory",
    "DrugPregnancyCategory",
    "DrugPrescriptionStatus",
    "InfectiousAgentClass",
    "MedicalAudienceType",
    "MedicalDevicePurpose",
    "MedicalEvidenceLevel",
    "MedicalImagingTechnique",
    "MedicalObservationalStudyDesign",
    "MedicalProcedureType",
    "MedicalSpecialty",
    "MedicalStudyStatus",
    "MedicalTrialDesign",
    "MedicineSystem",
    "PhysicalExam"
  ],
  "MedicalEvidenceLevel": [
    "MedicalEvidenceLevel"
  ],
  "MedicalGuideline": [
    "MedicalGuideline",
    "MedicalGuidelineContraindication",
    "MedicalGuidelineRecommendation"
  ],
  "MedicalGuidelineContraindication": [
    "MedicalGuidelineContraindication"
  ],
  "MedicalGuidelineRecommendation": [
    "MedicalGuidelineRecommendation"
  ],
  "MedicalImagingTechnique": [
    "MedicalImagingTechnique"
  ],
  "MedicalIndication": [
    "MedicalIndication",
    "ApprovedIndication",
    "PreventionIndication",
    "TreatmentIndication"
  ],
  "MedicalIntangible": [
    "MedicalIntangible",
    "DDxElement",
    "DoseSchedule",
    "DrugLegalStatus",
    "DrugStrength",
    "MedicalCode",
    "MedicalConditionStage",
    "MaximumDoseSchedule",
    "RecommendedDoseSchedule",
    "ReportedDoseSchedule"
  ],
  "MedicalObservationalStudy": [
    "MedicalObservationalStudy"
  ],
  "MedicalObservationalStudyDesign": [
    "MedicalObservationalStudyDesign"
  ],
  "MedicalOrganization": [
    "MedicalOrganization",
    "Dentist",
    "DiagnosticLab",
    "Hospital",
    "MedicalClinic",
    "Pharmacy",
    "Physician",
    "VeterinaryCare",
    "CovidTestingFacility",
    "IndividualPhysician",
    "PhysiciansOffice"
  ],
  "MedicalProcedure": [
    "MedicalProcedure",
    "DiagnosticProcedure",
    "PalliativeProcedure",
    "PhysicalExam",
    "SurgicalProcedure",
    "TherapeuticProcedure",
    "MedicalTherapy",
    "PsychologicalTreatment",
    "OccupationalTherapy",
    "PhysicalTherapy",
    "RadiationTherapy"
  ],
  "MedicalProcedureType": [
    "MedicalProcedureType"
  ],
  "MedicalRiskCalculator": [
    "MedicalRiskCalculator"
  ],
  "MedicalRiskEstimator": [
    "MedicalRiskEstimator",
    "MedicalRiskCalculator",
    "MedicalRiskScore"
  ],
  "MedicalRiskFactor": [
    "MedicalRiskFactor"
  ],
  "MedicalRiskScore": [
    "MedicalRiskScore"
  ],
  "MedicalScholarlyArticle": [
    "MedicalScholarlyArticle"
  ],
  "MedicalSign": [
    "MedicalSign",
    "VitalSign"
  ],
  "MedicalSignOrSymptom": [
    "MedicalSignOrSymptom",
    "MedicalSign",
    "MedicalSymptom",
    "VitalSign"
  ],
  "MedicalSpecialty": [
    "MedicalSpecialty"
  ],
  "MedicalStudy": [
    "MedicalStudy",
    "MedicalObservationalStudy",
    "MedicalTrial"
  ],
  "MedicalStudyStatus": [
    "MedicalStudyStatus"
  ],
  "MedicalSymptom": [
    "MedicalSymptom"
  ],
  "MedicalTest": [
    "MedicalTest",
    "BloodTest",
    "ImagingTest",
    "MedicalTestPanel",
    "PathologyTest"
  ],
  "MedicalTestPanel": [
    "MedicalTestPanel"
  ],
  "MedicalTherapy": [
    "MedicalTherapy",
    "OccupationalTherapy",
    "PalliativeProcedure",
    "PhysicalTherapy",
    "RadiationTherapy"
  ],
  "MedicalTrial": [
    "MedicalTrial"
  ],
  "MedicalTrialDesign": [
    "MedicalTrialDesign"
  ],
  "MedicalWebPage": [
    "MedicalWebPage"
  ],
  "MedicineSystem": [
    "MedicineSystem"
  ],
  "MeetingRoom": [
    "MeetingRoom"
  ],
  "MemberProgram": [
    "MemberProgram"
  ],
  "MemberProgramTier": [
    "MemberProgramTier"
  ],
  "MensClothingStore": [
    "MensClothingStore"
  ],
  "Menu": [
    "Menu"
  ],
  "MenuItem": [
    "MenuItem"
  ],
  "MenuSection": [
    "MenuSection"
  ],
  "MerchantReturnEnumeration": [
    "MerchantReturnEnumeration"
  ],
  "MerchantReturnPolicy": [
    "MerchantReturnPolicy"
  ],
  "MerchantReturnPolicySeasonalOverride": [
    "MerchantReturnPolicySeasonalOverride"
  ],
  "Message": [
    "Message",
    "EmailMessage"
  ],
  "MiddleSchool": [
    "MiddleSchool"
  ],
  "MobileApplication": [
    "MobileApplication"
  ],
  "MobilePhoneStore": [
    "MobilePhoneStore"
  ],
  "MolecularEntity": [
    "MolecularEntity"
  ],
  "MonetaryAmount": [
    "MonetaryAmount"
  ],
  "MonetaryAmountDistribution": [
    "MonetaryAmountDistribution"
  ],
  "MonetaryGrant": [
    "MonetaryGrant"
  ],
  "MoneyTransfer": [
    "MoneyTransfer"
  ],
  "MortgageLoan": [
    "MortgageLoan"
  ],
  "Mosque": [
    "Mosque"
  ],
  "Motel": [
    "Motel"
  ],
  "Motorcycle": [
    "Motorcycle"
  ],
  "MotorcycleDealer": [
    "MotorcycleDealer"
  ],
  "MotorcycleRepair": [
    "MotorcycleRepair"
  ],
  "MotorizedBicycle": [
    "MotorizedBicycle"
  ],
  "Mountain": [
    "Mountain"
  ],
  "MoveAction": [
    "MoveAction",
    "ArriveAction",
    "DepartAction",
    "TravelAction"
  ],
  "Movie": [
    "Movie"
  ],
  "MovieClip": [
    "MovieClip"
  ],
  "MovieRentalStore": [
    "MovieRentalStore"
  ],
  "MovieSeries": [
    "MovieSeries"
  ],
  "MovieTheater": [
    "MovieTheater"
  ],
  "MovingCompany": [
    "MovingCompany"
  ],
  "Muscle": [
    "Muscle"
  ],
  "Museum": [
    "Museum"
  ],
  "MusicAlbum": [
    "MusicAlbum"
  ],
  "MusicAlbumProductionType": [
    "MusicAlbumProductionType"
  ],
  "MusicAlbumReleaseType": [
    "MusicAlbumReleaseType"
  ],
  "MusicComposition": [
    "MusicComposition"
  ],
  "MusicEvent": [
    "MusicEvent"
  ],
  "MusicGroup": [
    "MusicGroup"
  ],
  "MusicPlaylist": [
    "MusicPlaylist",
    "MusicAlbum",
    "MusicRelease"
  ],
  "MusicRecording": [
    "MusicRecording"
  ],
  "MusicRelease": [
    "MusicRelease"
  ],
  "MusicReleaseFormatType": [
    "MusicReleaseFormatType"
  ],
  "MusicStore": [
    "MusicStore"
  ],
  "MusicVenue": [
    "MusicVenue"
  ],
  "MusicVideoObject": [
    "MusicVideoObject"
  ],
  "NGO": [
    "NGO"
  ],
  "NLNonprofitType": [
    "NLNonprofitType"
  ],
  "NailSalon": [
    "NailSalon"
  ],
  "Nerve": [
    "Nerve"
  ],
  "NewsArticle": [
    "NewsArticle",
    "AnalysisNewsArticle",
    "AskPublicNewsArticle",
    "BackgroundNewsArticle",
    "OpinionNewsArticle",
    "ReportageNewsArticle",
    "ReviewNewsArticle"
  ],
  "NewsMediaOrganization": [
    "NewsMediaOrganization"
  ],
  "Newspaper": [
    "Newspaper"
  ],
  "NightClub": [
    "NightClub"
  ],
  "NonprofitType": [
    "NonprofitType",
    "DENonprofitType",
    "ITNonprofitType",
    "NLNonprofitType",
    "UKNonprofitType",
    "USNonprofitType"
  ],
  "Notary": [
    "Notary"
  ],
  "NoteDigitalDocument": [
    "NoteDigitalDocument"
  ],
  "Number": [
    "Number",
    "Float",
    "Integer"
  ],
  "NutritionInformation": [
    "NutritionInformation"
  ],
  "Observation": [
    "Observation"
  ],
  "Occupation": [
    "Occupation"
  ],
  "OccupationalExperienceRequirements": [
    "OccupationalExperienceRequirements"
  ],
  "OccupationalTherapy": [
    "OccupationalTherapy"
  ],
  "OceanBodyOfWater": [
    "OceanBodyOfWater"
  ],
  "Offer": [
    "Offer",
    "AggregateOffer",
    "OfferForLease",
    "OfferForPurchase"
  ],
  "OfferCatalog": [
    "OfferCatalog"
  ],
  "OfferForLease": [
    "OfferForLease"
  ],
  "OfferForPurchase": [
    "OfferForPurchase"
  ],
  "OfferItemCondition": [
    "OfferItemCondition"
  ],
  "OfferShippingDetails": [
    "OfferShippingDetails"
  ],
  "OfficeEquipmentStore": [
    "OfficeEquipmentStore"
  ],
  "OnDemandEvent": [
    "OnDemandEvent"
  ],
  "OnlineBusiness": [
    "OnlineBusiness",
    "OnlineStore",
    "OnlineMarketplace"
  ],
  "OnlineMarketplace": [
    "OnlineMarketplace"
  ],
  "OnlineStore": [
    "OnlineStore",
    "OnlineMarketplace"
  ],
  "OpeningHoursSpecification": [
    "OpeningHoursSpecification"
  ],
  "OperatingSystem": [
    "OperatingSystem"
  ],
  "OpinionNewsArticle": [
    "OpinionNewsArticle"
  ],
  "Optician": [
    "Optician"
  ],
  "Order": [
    "Order"
  ],
  "OrderAction": [
    "OrderAction"
  ],
  "OrderItem": [
    "OrderItem"
  ],
  "OrderStatus": [
    "OrderStatus"
  ],
  "Organization": [
    "Organization",
    "Airline",
    "Consortium",
    "Cooperative",
    "Corporation",
    "EducationalOrganization",
    "FundingScheme",
    "GovernmentOrganization",
    "LibrarySystem",
    "LocalBusiness",
    "MedicalOrganization",
    "NGO",
    "NewsMediaOrganization",
    "OnlineBusiness",
    "PerformingGroup",
    "PoliticalParty",
    "Project",
    "ResearchOrganization",
    "SearchRescueOrganization",
    "SportsOrganization",
    "WorkersUnion",
    "CollegeOrUniversity",
    "ElementarySchool",
    "HighSchool",
    "MiddleSchool",
    "Preschool",
    "School",
    "AnimalShelter",
    "ArchiveOrganization",
    "AutomotiveBusiness",
    "ChildCare",
    "Dentist",
    "DryCleaningOrLaundry",
    "EmergencyService",
    "EmploymentAgency",
    "EntertainmentBusiness",
    "FinancialService",
    "FoodEstablishment",
    "GovernmentOffice",
    "HealthAndBeautyBusiness",
    "HomeAndConstructionBusiness",
    "InternetCafe",
    "LegalService",
    "Library",
    "LodgingBusiness",
    "MedicalBusiness",
    "ProfessionalService",
    "RadioStation",
    "RealEstateAgent",
    "RecyclingCenter",
    "SelfStorage",
    "ShoppingCenter",
    "SportsActivityLocation",
    "Store",
    "TelevisionStation",
    "TouristInformationCenter",
    "TravelAgency",
    "AutoBodyShop",
    "AutoDealer",
    "AutoPartsStore",
    "AutoRental",
    "AutoRepair",
    "AutoWash",
    "GasStation",
    "MotorcycleDealer",
    "MotorcycleRepair",
    "FireStation",
    "Hospital",
    "PoliceStation",
    "AdultEntertainment",
    "AmusementPark",
    "ArtGallery",
    "Casino",
    "ComedyClub",
    "MovieTheater",
    "NightClub",
    "AccountingService",
    "AutomatedTeller",
    "BankOrCreditUnion",
    "InsuranceAgency",
    "Bakery",
    "BarOrPub",
    "Brewery",
    "CafeOrCoffeeShop",
    "Distillery",
    "FastFoodRestaurant",
    "IceCreamShop",
    "Restaurant",
    "Winery",
    "PostOffice",
    "BeautySalon",
    "DaySpa",
    "HairSalon",
    "HealthClub",
    "NailSalon",
    "TattooParlor",
    "Electrician",
    "GeneralContractor",
    "HVACBusiness",
    "HousePainter",
    "Locksmith",
    "MovingCompany",
    "Plumber",
    "RoofingContractor",
    "Attorney",
    "Notary",
    "BedAndBreakfast",
    "Campground",
    "Hostel",
    "Hotel",
    "Motel",
    "Resort",
    "VacationRental",
    "SkiResort",
    "MedicalClinic",
    "Optician",
    "Pharmacy",
    "Physician",
    "CovidTestingFacility",
    "IndividualPhysician",
    "PhysiciansOffice",
    "BowlingAlley",
    "ExerciseGym",
    "GolfCourse",
    "PublicSwimmingPool",
    "SportsClub",
    "StadiumOrArena",
    "TennisComplex",
    "BikeStore",
    "BookStore",
    "ClothingStore",
    "ComputerStore",
    "ConvenienceStore",
    "DepartmentStore",
    "ElectronicsStore",
    "Florist",
    "FurnitureStore",
    "GardenStore",
    "GroceryStore",
    "HardwareStore",
    "HobbyShop",
    "HomeGoodsStore",
    "JewelryStore",
    "LiquorStore",
    "MensClothingStore",
    "MobilePhoneStore",
    "MovieRentalStore",
    "MusicStore",
    "OfficeEquipmentStore",
    "OutletStore",
    "PawnShop",
    "PetStore",
    "ShoeStore",
    "SportingGoodsStore",
    "TireShop",
    "ToyStore",
    "WholesaleStore",
    "DiagnosticLab",
    "VeterinaryCare",
    "OnlineStore",
    "OnlineMarketplace",
    "DanceGroup",
    "MusicGroup",
    "TheaterGroup",
    "FundingAgency",
    "ResearchProject",
    "SportsTeam"
  ],
  "OrganizationRole": [
    "OrganizationRole",
    "EmployeeRole"
  ],
  "OrganizeAction": [
    "OrganizeAction",
    "AllocateAction",
    "ApplyAction",
    "BookmarkAction",
    "PlanAction",
    "AcceptAction",
    "AssignAction",
    "AuthorizeAction",
    "RejectAction",
    "CancelAction",
    "ReserveAction",
    "ScheduleAction"
  ],
  "OutletStore": [
    "OutletStore"
  ],
  "OwnershipInfo": [
    "OwnershipInfo"
  ],
  "PaintAction": [
    "PaintAction"
  ],
  "Painting": [
    "Painting"
  ],
  "PalliativeProcedure": [
    "PalliativeProcedure"
  ],
  "ParcelDelivery": [
    "ParcelDelivery"
  ],
  "ParentAudience": [
    "ParentAudience"
  ],
  "Park": [
    "Park"
  ],
  "ParkingFacility": [
    "ParkingFacility"
  ],
  "PathologyTest": [
    "PathologyTest"
  ],
  "Patient": [
    "Patient"
  ],
  "PawnShop": [
    "PawnShop"
  ],
  "PayAction": [
    "PayAction"
  ],
  "PaymentCard": [
    "PaymentCard",
    "CreditCard"
  ],
  "PaymentChargeSpecification": [
    "PaymentChargeSpecification"
  ],
  "PaymentMethod": [
    "PaymentMethod",
    "PaymentCard",
    "PaymentService",
    "CreditCard"
  ],
  "PaymentMethodType": [
    "PaymentMethodType"
  ],
  "PaymentService": [
    "PaymentService"
  ],
  "PaymentStatusType": [
    "PaymentStatusType"
  ],
  "PeopleAudience": [
    "PeopleAudience",
    "MedicalAudience",
    "ParentAudience",
    "Patient"
  ],
  "PerformAction": [
    "PerformAction"
  ],
  "PerformanceRole": [
    "PerformanceRole"
  ],
  "PerformingArtsEvent": [
    "PerformingArtsEvent"
  ],
  "PerformingArtsTheater": [
    "PerformingArtsTheater"
  ],
  "PerformingGroup": [
    "PerformingGroup",
    "DanceGroup",
    "MusicGroup",
    "TheaterGroup"
  ],
  "Periodical": [
    "Periodical",
    "ComicSeries",
    "Newspaper"
  ],
  "Permit": [
    "Permit",
    "GovernmentPermit"
  ],
  "Person": [
    "Person",
    "Patient"
  ],
  "PetStore": [
    "PetStore"
  ],
  "Pharmacy": [
    "Pharmacy"
  ],
  "Photograph": [
    "Photograph"
  ],
  "PhotographAction": [
    "PhotographAction"
  ],
  "PhysicalActivity": [
    "PhysicalActivity",
    "ExercisePlan"
  ],
  "PhysicalActivityCategory": [
    "PhysicalActivityCategory"
  ],
  "PhysicalExam": [
    "PhysicalExam"
  ],
  "PhysicalTherapy": [
    "PhysicalTherapy"
  ],
  "Physician": [
    "Physician",
    "IndividualPhysician",
    "PhysiciansOffice"
  ],
  "PhysiciansOffice": [
    "PhysiciansOffice"
  ],
  "Place": [
    "Place",
    "Accommodation",
    "AdministrativeArea",
    "CivicStructure",
    "DefinedRegion",
    "Landform",
    "LandmarksOrHistoricalBuildings",
    "LocalBusiness",
    "Residence",
    "TouristAttraction",
    "TouristDestination",
    "Apartment",
    "CampingPitch",
    "House",
    "Room",
    "Suite",
    "SingleFamilyResidence",
    "HotelRoom",
    "MeetingRoom",
    "City",
    "Country",
    "SchoolDistrict",
    "State",
    "Airport",
    "Aquarium",
    "Beach",
    "BoatTerminal",
    "Bridge",
    "BusStation",
    "BusStop",
    "Campground",
    "Cemetery",
    "Crematorium",
    "EducationalOrganization",
    "EventVenue",
    "FireStation",
    "GovernmentBuilding",
    "Hospital",
    "MovieTheater",
    "Museum",
    "MusicVenue",
    "Park",
    "ParkingFacility",
    "PerformingArtsTheater",
    "PlaceOfWorship",
    "Playground",
    "PoliceStation",
    "PublicToilet",
    "RVPark",
    "StadiumOrArena",
    "SubwayStation",
    "TaxiStand",
    "TrainStation",
    "Zoo",
    "CollegeOrUniversity",
    "ElementarySchool",
    "HighSchool",
    "MiddleSchool",
    "Preschool",
    "School",
    "CityHall",
    "Courthouse",
    "DefenceEstablishment",
    "Embassy",
    "LegislativeBuilding",
    "BuddhistTemple",
    "Church",
    "HinduTemple",
    "Mosque",
    "Synagogue",
    "CatholicChurch",
    "BodyOfWater",
    "Continent",
    "Mountain",
    "Volcano",
    "Canal",
    "LakeBodyOfWater",
    "OceanBodyOfWater",
    "Pond",
    "Reservoir",
    "RiverBodyOfWater",
    "SeaBodyOfWater",
    "Waterfall",
    "AnimalShelter",
    "ArchiveOrganization",
    "AutomotiveBusiness",
    "ChildCare",
    "Dentist",
    "DryCleaningOrLaundry",
    "EmergencyService",
    "EmploymentAgency",
    "EntertainmentBusiness",
    "FinancialService",
    "FoodEstablishment",
    "GovernmentOffice",
    "HealthAndBeautyBusiness",
    "HomeAndConstructionBusiness",
    "InternetCafe",
    "LegalService",
    "Library",
    "LodgingBusiness",
    "MedicalBusiness",
    "ProfessionalService",
    "RadioStation",
    "RealEstateAgent",
    "RecyclingCenter",
    "SelfStorage",
    "ShoppingCenter",
    "SportsActivityLocation",
    "Store",
    "TelevisionStation",
    "TouristInformationCenter",
    "TravelAgency",
    "AutoBodyShop",
    "AutoDealer",
    "AutoPartsStore",
    "AutoRental",
    "AutoRepair",
    "AutoWash",
    "GasStation",
    "MotorcycleDealer",
    "MotorcycleRepair",
    "AdultEntertainment",
    "AmusementPark",
    "ArtGallery",
    "Casino",
    "ComedyClub",
    "NightClub",
    "AccountingService",
    "AutomatedTeller",
    "BankOrCreditUnion",
    "InsuranceAgency",
    "Bakery",
    "BarOrPub",
    "Brewery",
    "CafeOrCoffeeShop",
    "Distillery",
    "FastFoodRestaurant",
    "IceCreamShop",
    "Restaurant",
    "Winery",
    "PostOffice",
    "BeautySalon",
    "DaySpa",
    "HairSalon",
    "HealthClub",
    "NailSalon",
    "TattooParlor",
    "Electrician",
    "GeneralContractor",
    "HVACBusiness",
    "HousePainter",
    "Locksmith",
    "MovingCompany",
    "Plumber",
    "RoofingContractor",
    "Attorney",
    "Notary",
    "BedAndBreakfast",
    "Hostel",
    "Hotel",
    "Motel",
    "Resort",
    "VacationRental",
    "SkiResort",
    "MedicalClinic",
    "Optician",
    "Pharmacy",
    "Physician",
    "CovidTestingFacility",
    "IndividualPhysician",
    "PhysiciansOffice",
    "BowlingAlley",
    "ExerciseGym",
    "GolfCourse",
    "PublicSwimmingPool",
    "SportsClub",
    "TennisComplex",
    "BikeStore",
    "BookStore",
    "ClothingStore",
    "ComputerStore",
    "ConvenienceStore",
    "DepartmentStore",
    "ElectronicsStore",
    "Florist",
    "FurnitureStore",
    "GardenStore",
    "GroceryStore",
    "HardwareStore",
    "HobbyShop",
    "HomeGoodsStore",
    "JewelryStore",
    "LiquorStore",
    "MensClothingStore",
    "MobilePhoneStore",
    "MovieRentalStore",
    "MusicStore",
    "OfficeEquipmentStore",
    "OutletStore",
    "PawnShop",
    "PetStore",
    "ShoeStore",
    "SportingGoodsStore",
    "TireShop",
    "ToyStore",
    "WholesaleStore",
    "ApartmentComplex",
    "GatedResidenceCommunity"
  ],
  "PlaceOfWorship": [
    "PlaceOfWorship",
    "BuddhistTemple",
    "Church",
    "HinduTemple",
    "Mosque",
    "Synagogue",
    "CatholicChurch"
  ],
  "PlanAction": [
    "PlanAction",
    "CancelAction",
    "ReserveAction",
    "ScheduleAction"
  ],
  "Play": [
    "Play"
  ],
  "PlayAction": [
    "PlayAction",
    "ExerciseAction",
    "PerformAction"
  ],
  "PlayGameAction": [
    "PlayGameAction"
  ],
  "Playground": [
    "Playground"
  ],
  "Plumber": [
    "Plumber"
  ],
  "PodcastEpisode": [
    "PodcastEpisode"
  ],
  "PodcastSeason": [
    "PodcastSeason"
  ],
  "PodcastSeries": [
    "PodcastSeries"
  ],
  "PoliceStation": [
    "PoliceStation"
  ],
  "PoliticalParty": [
    "PoliticalParty"
  ],
  "Pond": [
    "Pond"
  ],
  "PostOffice": [
    "PostOffice"
  ],
  "PostalAddress": [
    "PostalAddress"
  ],
  "PostalCodeRangeSpecification": [
    "PostalCodeRangeSpecification"
  ],
  "Poster": [
    "Poster"
  ],
  "PreOrderAction": [
    "PreOrderAction"
  ],
  "PrependAction": [
    "PrependAction"
  ],
  "Preschool": [
    "Preschool"
  ],
  "PresentationDigitalDocument": [
    "PresentationDigitalDocument"
  ],
  "PreventionIndication": [
    "PreventionIndication"
  ],
  "PriceComponentTypeEnumeration": [
    "PriceComponentTypeEnumeration"
  ],
  "PriceSpecification": [
    "PriceSpecification",
    "CompoundPriceSpecification",
    "DeliveryChargeSpecification",
    "PaymentChargeSpecification",
    "UnitPriceSpecification"
  ],
  "PriceTypeEnumeration": [
    "PriceTypeEnumeration"
  ],
  "Product": [
    "Product",
    "DietarySupplement",
    "Drug",
    "IndividualProduct",
    "ProductCollection",
    "ProductGroup",
    "ProductModel",
    "SomeProducts",
    "Vehicle",
    "BusOrCoach",
    "Car",
    "Motorcycle",
    "MotorizedBicycle"
  ],
  "ProductCollection": [
    "ProductCollection"
  ],
  "ProductGroup": [
    "ProductGroup"
  ],
  "ProductModel": [
    "ProductModel"
  ],
  "ProfessionalService": [
    "ProfessionalService"
  ],
  "ProfilePage": [
    "ProfilePage"
  ],
  "ProgramMembership": [
    "ProgramMembership"
  ],
  "Project": [
    "Project",
    "FundingAgency",
    "ResearchProject"
  ],
  "PronounceableText": [
    "PronounceableText"
  ],
  "Property": [
    "Property"
  ],
  "PropertyValue": [
    "PropertyValue",
    "LocationFeatureSpecification"
  ],
  "PropertyValueSpecification": [
    "PropertyValueSpecification"
  ],
  "Protein": [
    "Protein"
  ],
  "PsychologicalTreatment": [
    "PsychologicalTreatment"
  ],
  "PublicSwimmingPool": [
    "PublicSwimmingPool"
  ],
  "PublicToilet": [
    "PublicToilet"
  ],
  "PublicationEvent": [
    "PublicationEvent",
    "BroadcastEvent",
    "OnDemandEvent"
  ],
  "PublicationIssue": [
    "PublicationIssue",
    "ComicIssue"
  ],
  "PublicationVolume": [
    "PublicationVolume"
  ],
  "PurchaseType": [
    "PurchaseType"
  ],
  "QAPage": [
    "QAPage"
  ],
  "QualitativeValue": [
    "QualitativeValue",
    "BedType",
    "DriveWheelConfigurationValue",
    "SizeSpecification",
    "SteeringPositionValue"
  ],
  "QuantitativeValue": [
    "QuantitativeValue",
    "Observation"
  ],
  "QuantitativeValueDistribution": [
    "QuantitativeValueDistribution",
    "MonetaryAmountDistribution"
  ],
  "Quantity": [
    "Quantity",
    "Distance",
    "Duration",
    "Energy",
    "Mass"
  ],
  "Question": [
    "Question"
  ],
  "Quiz": [
    "Quiz"
  ],
  "Quotation": [
    "Quotation"
  ],
  "QuoteAction": [
    "QuoteAction"
  ],
  "RVPark": [
    "RVPark"
  ],
  "RadiationTherapy": [
    "RadiationTherapy"
  ],
  "RadioBroadcastService": [
    "RadioBroadcastService"
  ],
  "RadioChannel": [
    "RadioChannel",
    "AMRadioChannel",
    "FMRadioChannel"
  ],
  "RadioClip": [
    "RadioClip"
  ],
  "RadioEpisode": [
    "RadioEpisode"
  ],
  "RadioSeason": [
    "RadioSeason"
  ],
  "RadioSeries": [
    "RadioSeries"
  ],
  "RadioStation": [
    "RadioStation"
  ],
  "Rating": [
    "Rating",
    "AggregateRating",
    "EndorsementRating",
    "EmployerAggregateRating"
  ],
  "ReactAction": [
    "ReactAction",
    "AgreeAction",
    "DisagreeAction",
    "DislikeAction",
    "EndorseAction",
    "LikeAction",
    "WantAction"
  ],
  "ReadAction": [
    "ReadAction"
  ],
  "RealEstateAgent": [
    "RealEstateAgent"
  ],
  "RealEstateListing": [
    "RealEstateListing"
  ],
  "ReceiveAction": [
    "ReceiveAction"
  ],
  "Recipe": [
    "Recipe"
  ],
  "Recommendation": [
    "Recommendation"
  ],
  "RecommendedDoseSchedule": [
    "RecommendedDoseSchedule"
  ],
  "RecyclingCenter": [
    "RecyclingCenter"
  ],
  "RefundTypeEnumeration": [
    "RefundTypeEnumeration"
  ],
  "RegisterAction": [
    "RegisterAction"
  ],
  "RejectAction": [
    "RejectAction"
  ],
  "RentAction": [
    "RentAction"
  ],
  "RentalCarReservation": [
    "RentalCarReservation"
  ],
  "RepaymentSpecification": [
    "RepaymentSpecification"
  ],
  "ReplaceAction": [
    "ReplaceAction"
  ],
  "ReplyAction": [
    "ReplyAction"
  ],
  "Report": [
    "Report"
  ],
  "ReportageNewsArticle": [
    "ReportageNewsArticle"
  ],
  "ReportedDoseSchedule": [
    "ReportedDoseSchedule"
  ],
  "ResearchOrganization": [
    "ResearchOrganization"
  ],
  "ResearchProject": [
    "ResearchProject"
  ],
  "Researcher": [
    "Researcher"
  ],
  "Reservation": [
    "Reservation",
    "BoatReservation",
    "BusReservation",
    "EventReservation",
    "FlightReservation",
    "FoodEstablishmentReservation",
    "LodgingReservation",
    "RentalCarReservation",
    "ReservationPackage",
    "TaxiReservation",
    "TrainReservation"
  ],
  "ReservationPackage": [
    "ReservationPackage"
  ],
  "ReservationStatusType": [
    "ReservationStatusType"
  ],
  "ReserveAction": [
    "ReserveAction"
  ],
  "Reservoir": [
    "Reservoir"
  ],
  "ResetPasswordAction": [
    "ResetPasswordAction"
  ],
  "Residence": [
    "Residence",
    "ApartmentComplex",
    "GatedResidenceCommunity"
  ],
  "Resort": [
    "Resort",
    "SkiResort"
  ],
  "Restaurant": [
    "Restaurant"
  ],
  "RestrictedDiet": [
    "RestrictedDiet"
  ],
  "ResumeAction": [
    "ResumeAction"
  ],
  "ReturnAction": [
    "ReturnAction"
  ],
  "ReturnFeesEnumeration": [
    "ReturnFeesEnumeration"
  ],
  "ReturnLabelSourceEnumeration": [
    "ReturnLabelSourceEnumeration"
  ],
  "ReturnMethodEnumeration": [
    "ReturnMethodEnumeration"
  ],
  "Review": [
    "Review",
    "ClaimReview",
    "CriticReview",
    "EmployerReview",
    "MediaReview",
    "Recommendation",
    "UserReview",
    "ReviewNewsArticle"
  ],
  "ReviewAction": [
    "ReviewAction"
  ],
  "ReviewNewsArticle": [
    "ReviewNewsArticle"
  ],
  "RiverBodyOfWater": [
    "RiverBodyOfWater"
  ],
  "Role": [
    "Role",
    "LinkRole",
    "OrganizationRole",
    "PerformanceRole",
    "EmployeeRole"
  ],
  "RoofingContractor": [
    "RoofingContractor"
  ],
  "Room": [
    "Room",
    "HotelRoom",
    "MeetingRoom"
  ],
  "RsvpAction": [
    "RsvpAction"
  ],
  "RsvpResponseType": [
    "RsvpResponseType"
  ],
  "RuntimePlatform": [
    "RuntimePlatform"
  ],
  "SaleEvent": [
    "SaleEvent"
  ],
  "SatiricalArticle": [
    "SatiricalArticle"
  ],
  "Schedule": [
    "Schedule"
  ],
  "ScheduleAction": [
    "ScheduleAction"
  ],
  "ScholarlyArticle": [
    "ScholarlyArticle",
    "MedicalScholarlyArticle"
  ],
  "School": [
    "School"
  ],
  "SchoolDistrict": [
    "SchoolDistrict"
  ],
  "ScreeningEvent": [
    "ScreeningEvent"
  ],
  "Sculpture": [
    "Sculpture"
  ],
  "SeaBodyOfWater": [
    "SeaBodyOfWater"
  ],
  "SearchAction": [
    "SearchAction"
  ],
  "SearchRescueOrganization": [
    "SearchRescueOrganization"
  ],
  "SearchResultsPage": [
    "SearchResultsPage"
  ],
  "Season": [
    "Season"
  ],
  "Seat": [
    "Seat"
  ],
  "SeekToAction": [
    "SeekToAction"
  ],
  "SelfStorage": [
    "SelfStorage"
  ],
  "SellAction": [
    "SellAction"
  ],
  "SendAction": [
    "SendAction"
  ],
  "SequentialArt": [
    "SequentialArt"
  ],
  "Series": [
    "Series",
    "CreativeWorkSeries",
    "EventSeries",
    "BookSeries",
    "MovieSeries",
    "Periodical",
    "PodcastSeries",
    "RadioSeries",
    "TVSeries",
    "VideoGameSeries",
    "ComicSeries",
    "Newspaper"
  ],
  "Service": [
    "Service",
    "BroadcastService",
    "CableOrSatelliteService",
    "FinancialProduct",
    "FoodService",
    "GovernmentService",
    "Taxi",
    "TaxiService",
    "WebAPI",
    "RadioBroadcastService",
    "BankAccount",
    "CurrencyConversionService",
    "InvestmentOrDeposit",
    "LoanOrCredit",
    "PaymentCard",
    "PaymentService",
    "DepositAccount",
    "BrokerageAccount",
    "InvestmentFund",
    "CreditCard",
    "MortgageLoan"
  ],
  "ServiceChannel": [
    "ServiceChannel"
  ],
  "ServicePeriod": [
    "ServicePeriod"
  ],
  "ShareAction": [
    "ShareAction"
  ],
  "SheetMusic": [
    "SheetMusic"
  ],
  "ShippingConditions": [
    "ShippingConditions"
  ],
  "ShippingDeliveryTime": [
    "ShippingDeliveryTime"
  ],
  "ShippingRateSettings": [
    "ShippingRateSettings"
  ],
  "ShippingService": [
    "ShippingService"
  ],
  "ShoeStore": [
    "ShoeStore"
  ],
  "ShoppingCenter": [
    "ShoppingCenter"
  ],
  "ShortStory": [
    "ShortStory"
  ],
  "SingleFamilyResidence": [
    "SingleFamilyResidence"
  ],
  "SiteNavigationElement": [
    "SiteNavigationElement"
  ],
  "SizeGroupEnumeration": [
    "SizeGroupEnumeration",
    "WearableSizeGroupEnumeration"
  ],
  "SizeSpecification": [
    "SizeSpecification"
  ],
  "SizeSystemEnumeration": [
    "SizeSystemEnumeration",
    "WearableSizeSystemEnumeration"
  ],
  "SkiResort": [
    "SkiResort"
  ],
  "SocialEvent": [
    "SocialEvent"
  ],
  "SocialMediaPosting": [
    "SocialMediaPosting",
    "BlogPosting",
    "DiscussionForumPosting",
    "LiveBlogPosting"
  ],
  "SoftwareApplication": [
    "SoftwareApplication",
    "MobileApplication",
    "OperatingSystem",
    "RuntimePlatform",
    "VideoGame",
    "WebApplication"
  ],
  "SoftwareSourceCode": [
    "SoftwareSourceCode"
  ],
  "SolveMathAction": [
    "SolveMathAction"
  ],
  "SomeProducts": [
    "SomeProducts"
  ],
  "SpeakableSpecification": [
    "SpeakableSpecification"
  ],
  "SpecialAnnouncement": [
    "SpecialAnnouncement"
  ],
  "Specialty": [
    "Specialty",
    "MedicalSpecialty"
  ],
  "SportingGoodsStore": [
    "SportingGoodsStore"
  ],
  "SportsActivityLocation": [
    "SportsActivityLocation",
    "BowlingAlley",
    "ExerciseGym",
    "GolfCourse",
    "HealthClub",
    "PublicSwimmingPool",
    "SkiResort",
    "SportsClub",
    "StadiumOrArena",
    "TennisComplex"
  ],
  "SportsClub": [
    "SportsClub"
  ],
  "SportsEvent": [
    "SportsEvent"
  ],
  "SportsOrganization": [
    "SportsOrganization",
    "SportsTeam"
  ],
  "SportsTeam": [
    "SportsTeam"
  ],
  "SpreadsheetDigitalDocument": [
    "SpreadsheetDigitalDocument"
  ],
  "StadiumOrArena": [
    "StadiumOrArena"
  ],
  "State": [
    "State"
  ],
  "Statement": [
    "Statement"
  ],
  "StatisticalPopulation": [
    "StatisticalPopulation"
  ],
  "StatisticalVariable": [
    "StatisticalVariable"
  ],
  "StatusEnumeration": [
    "StatusEnumeration",
    "ActionStatusType",
    "EventStatusType",
    "GameServerStatus",
    "LegalForceStatus",
    "OrderStatus",
    "PaymentStatusType",
    "ReservationStatusType"
  ],
  "SteeringPositionValue": [
    "SteeringPositionValue"
  ],
  "Store": [
    "Store",
    "AutoPartsStore",
    "BikeStore",
    "BookStore",
    "ClothingStore",
    "ComputerStore",
    "ConvenienceStore",
    "DepartmentStore",
    "ElectronicsStore",
    "Florist",
    "FurnitureStore",
    "GardenStore",
    "GroceryStore",
    "HardwareStore",
    "HobbyShop",
    "HomeGoodsStore",
    "JewelryStore",
    "LiquorStore",
    "MensClothingStore",
    "MobilePhoneStore",
    "MovieRentalStore",
    "MusicStore",
    "OfficeEquipmentStore",
    "OutletStore",
    "PawnShop",
    "PetStore",
    "ShoeStore",
    "SportingGoodsStore",
    "TireShop",
    "ToyStore",
    "WholesaleStore"
  ],
  "StructuredValue": [
    "StructuredValue",
    "CDCPMDRecord",
    "ContactPoint",
    "DatedMoneySpecification",
    "DefinedRegion",
    "EngineSpecification",
    "ExchangeRateSpecification",
    "GeoCoordinates",
    "GeoShape",
    "InstantaneousEvent",
    "InteractionCounter",
    "MonetaryAmount",
    "NutritionInformation",
    "OfferShippingDetails",
    "OpeningHoursSpecification",
    "OrderItem",
    "OwnershipInfo",
    "PostalCodeRangeSpecification",
    "PriceSpecification",
    "PropertyValue",
    "QuantitativeValue",
    "QuantitativeValueDistribution",
    "RepaymentSpecification",
    "ServicePeriod",
    "ShippingConditions",
    "ShippingDeliveryTime",
    "ShippingRateSettings",
    "ShippingService",
    "TypeAndQuantityNode",
    "WarrantyPromise",
    "PostalAddress",
    "GeoCircle",
    "Error",
    "CompoundPriceSpecification",
    "DeliveryChargeSpecification",
    "PaymentChargeSpecification",
    "UnitPriceSpecification",
    "LocationFeatureSpecification",
    "Observation",
    "MonetaryAmountDistribution"
  ],
  "SubscribeAction": [
    "SubscribeAction"
  ],
  "Substance": [
    "Substance",
    "DietarySupplement",
    "Drug"
  ],
  "SubwayStation": [
    "SubwayStation"
  ],
  "Suite": [
    "Suite"
  ],
  "SuperficialAnatomy": [
    "SuperficialAnatomy"
  ],
  "SurgicalProcedure": [
    "SurgicalProcedure"
  ],
  "SuspendAction": [
    "SuspendAction"
  ],
  "Syllabus": [
    "Syllabus"
  ],
  "Synagogue": [
    "Synagogue"
  ],
  "TVClip": [
    "TVClip"
  ],
  "TVEpisode": [
    "TVEpisode"
  ],
  "TVSeason": [
    "TVSeason"
  ],
  "TVSeries": [
    "TVSeries"
  ],
  "Table": [
    "Table"
  ],
  "TakeAction": [
    "TakeAction"
  ],
  "TattooParlor": [
    "TattooParlor"
  ],
  "Taxi": [
    "Taxi"
  ],
  "TaxiReservation": [
    "TaxiReservation"
  ],
  "TaxiService": [
    "TaxiService"
  ],
  "TaxiStand": [
    "TaxiStand"
  ],
  "Taxon": [
    "Taxon"
  ],
  "TechArticle": [
    "TechArticle",
    "APIReference"
  ],
  "TelevisionChannel": [
    "TelevisionChannel"
  ],
  "TelevisionStation": [
    "TelevisionStation"
  ],
  "TennisComplex": [
    "TennisComplex"
  ],
  "Text": [
    "Text",
    "CssSelectorType",
    "PronounceableText",
    "URL",
    "XPathType"
  ],
  "TextDigitalDocument": [
    "TextDigitalDocument"
  ],
  "TextObject": [
    "TextObject"
  ],
  "TheaterEvent": [
    "TheaterEvent"
  ],
  "TheaterGroup": [
    "TheaterGroup"
  ],
  "TherapeuticProcedure": [
    "TherapeuticProcedure",
    "MedicalTherapy",
    "PsychologicalTreatment",
    "OccupationalTherapy",
    "PalliativeProcedure",
    "PhysicalTherapy",
    "RadiationTherapy"
  ],
  "Thesis": [
    "Thesis"
  ],
  "Thing": [
    "Thing",
    "Action",
    "BioChemEntity",
    "CreativeWork",
    "Event",
    "Intangible",
    "MedicalEntity",
    "Organization",
    "Person",
    "Place",
    "Product",
    "Taxon",
    "AchieveAction",
    "AssessAction",
    "ConsumeAction",
    "ControlAction",
    "CreateAction",
    "FindAction",
    "InteractAction",
    "MoveAction",
    "OrganizeAction",
    "PlayAction",
    "SearchAction",
    "SeekToAction",
    "SolveMathAction",
    "TradeAction",
    "TransferAction",
    "UpdateAction",
    "LoseAction",
    "TieAction",
    "WinAction",
    "ChooseAction",
    "IgnoreAction",
    "ReactAction",
    "ReviewAction",
    "VoteAction",
    "AgreeAction",
    "DisagreeAction",
    "DislikeAction",
    "EndorseAction",
    "LikeAction",
    "WantAction",
    "DrinkAction",
    "EatAction",
    "InstallAction",
    "ListenAction",
    "PlayGameAction",
    "ReadAction",
    "UseAction",
    "ViewAction",
    "WatchAction",
    "WearAction",
    "ActivateAction",
    "AuthenticateAction",
    "DeactivateAction",
    "LoginAction",
    "ResetPasswordAction",
    "ResumeAction",
    "SuspendAction",
    "CookAction",
    "DrawAction",
    "FilmAction",
    "PaintAction",
    "PhotographAction",
    "WriteAction",
    "CheckAction",
    "DiscoverAction",
    "TrackAction",
    "BefriendAction",
    "CommunicateAction",
    "FollowAction",
    "JoinAction",
    "LeaveAction",
    "MarryAction",
    "RegisterAction",
    "SubscribeAction",
    "UnRegisterAction",
    "AskAction",
    "CheckInAction",
    "CheckOutAction",
    "CommentAction",
    "InformAction",
    "InviteAction",
    "ReplyAction",
    "ShareAction",
    "ConfirmAction",
    "RsvpAction",
    "ArriveAction",
    "DepartAction",
    "TravelAction",
    "AllocateAction",
    "ApplyAction",
    "BookmarkAction",
    "PlanAction",
    "AcceptAction",
    "AssignAction",
    "AuthorizeAction",
    "RejectAction",
    "CancelAction",
    "ReserveAction",
    "ScheduleAction",
    "ExerciseAction",
    "PerformAction",
    "BuyAction",
    "OrderAction",
    "PayAction",
    "PreOrderAction",
    "QuoteAction",
    "RentAction",
    "SellAction",
    "TipAction",
    "BorrowAction",
    "DonateAction",
    "DownloadAction",
    "GiveAction",
    "LendAction",
    "MoneyTransfer",
    "ReceiveAction",
    "ReturnAction",
    "SendAction",
    "TakeAction",
    "AddAction",
    "DeleteAction",
    "ReplaceAction",
    "InsertAction",
    "AppendAction",
    "PrependAction",
    "ChemicalSubstance",
    "Gene",
    "MolecularEntity",
    "Protein",
    "AmpStory",
    "ArchiveComponent",
    "Article",
    "Atlas",
    "Blog",
    "Book",
    "Certification",
    "Chapter",
    "Claim",
    "Clip",
    "Code",
    "Collection",
    "ComicStory",
    "Comment",
    "Conversation",
    "Course",
    "CreativeWorkSeason",
    "CreativeWorkSeries",
    "Credential",
    "DataCatalog",
    "Dataset",
    "DefinedTermSet",
    "Diet",
    "DigitalDocument",
    "Drawing",
    "Episode",
    "ExercisePlan",
    "Game",
    "Guide",
    "HowTo",
    "HowToDirection",
    "HowToSection",
    "HowToStep",
    "HowToTip",
    "HyperToc",
    "HyperTocEntry",
    "LearningResource",
    "Legislation",
    "Manuscript",
    "Map",
    "MathSolver",
    "MediaObject",
    "MediaReviewItem",
    "Menu",
    "MenuSection",
    "Message",
    "Movie",
    "MusicComposition",
    "MusicPlaylist",
    "MusicRecording",
    "Painting",
    "Photograph",
    "Play",
    "Poster",
    "PublicationIssue",
    "PublicationVolume",
    "Quotation",
    "Review",
    "Sculpture",
    "Season",
    "SheetMusic",
    "ShortStory",
    "SoftwareApplication",
    "SoftwareSourceCode",
    "SpecialAnnouncement",
    "Statement",
    "TVSeason",
    "TVSeries",
    "Thesis",
    "VisualArtwork",
    "WebContent",
    "WebPage",
    "WebPageElement",
    "WebSite",
    "AdvertiserContentArticle",
    "NewsArticle",
    "Report",
    "SatiricalArticle",
    "ScholarlyArticle",
    "SocialMediaPosting",
    "TechArticle",
    "AnalysisNewsArticle",
    "AskPublicNewsArticle",
    "BackgroundNewsArticle",
    "OpinionNewsArticle",
    "ReportageNewsArticle",
    "ReviewNewsArticle",
    "MedicalScholarlyArticle",
    "BlogPosting",
    "DiscussionForumPosting",
    "LiveBlogPosting",
    "APIReference",
    "Audiobook",
    "SequentialArt",
    "MovieClip",
    "RadioClip",
    "TVClip",
    "VideoGameClip",
    "ProductCollection",
    "ComicCoverArt",
    "Answer",
    "CorrectionComment",
    "Question",
    "PodcastSeason",
    "RadioSeason",
    "BookSeries",
    "MovieSeries",
    "Periodical",
    "PodcastSeries",
    "RadioSeries",
    "VideoGameSeries",
    "ComicSeries",
    "Newspaper",
    "EducationalOccupationalCredential",
    "DataFeed",
    "CompleteDataFeed",
    "CategoryCodeSet",
    "NoteDigitalDocument",
    "PresentationDigitalDocument",
    "SpreadsheetDigitalDocument",
    "TextDigitalDocument",
    "PodcastEpisode",
    "RadioEpisode",
    "TVEpisode",
    "VideoGame",
    "Recipe",
    "Quiz",
    "Syllabus",
    "LegislationObject",
    "3DModel",
    "AudioObject",
    "DataDownload",
    "ImageObject",
    "MusicVideoObject",
    "TextObject",
    "VideoObject",
    "AudioObjectSnapshot",
    "Barcode",
    "ImageObjectSnapshot",
    "VideoObjectSnapshot",
    "EmailMessage",
    "MusicAlbum",
    "MusicRelease",
    "ComicIssue",
    "ClaimReview",
    "CriticReview",
    "EmployerReview",
    "MediaReview",
    "Recommendation",
    "UserReview",
    "MobileApplication",
    "OperatingSystem",
    "RuntimePlatform",
    "WebApplication",
    "CoverArt",
    "HealthTopicContent",
    "AboutPage",
    "CheckoutPage",
    "CollectionPage",
    "ContactPage",
    "FAQPage",
    "ItemPage",
    "MedicalWebPage",
    "ProfilePage",
    "QAPage",
    "RealEstateListing",
    "SearchResultsPage",
    "MediaGallery",
    "ImageGallery",
    "VideoGallery",
    "SiteNavigationElement",
    "Table",
    "WPAdBlock",
    "WPFooter",
    "WPHeader",
    "WPSideBar",
    "BusinessEvent",
    "ChildrensEvent",
    "ComedyEvent",
    "ConferenceEvent",
    "CourseInstance",
    "DanceEvent",
    "DeliveryEvent",
    "EducationEvent",
    "EventSeries",
    "ExhibitionEvent",
    "Festival",
    "FoodEvent",
    "Hackathon",
    "LiteraryEvent",
    "MusicEvent",
    "PerformingArtsEvent",
    "PublicationEvent",
    "SaleEvent",
    "ScreeningEvent",
    "SocialEvent",
    "SportsEvent",
    "TheaterEvent",
    "UserInteraction",
    "VisualArtsEvent",
    "BroadcastEvent",
    "OnDemandEvent",
    "UserBlocks",
    "UserCheckins",
    "UserComments",
    "UserDownloads",
    "UserLikes",
    "UserPageVisits",
    "UserPlays",
    "UserPlusOnes",
    "UserTweets",
    "ActionAccessSpecification",
    "AlignmentObject",
    "Audience",
    "BedDetails",
    "Brand",
    "BroadcastChannel",
    "BroadcastFrequencySpecification",
    "Class",
    "ComputerLanguage",
    "ConstraintNode",
    "DataFeedItem",
    "DefinedTerm",
    "Demand",
    "DigitalDocumentPermission",
    "EducationalOccupationalProgram",
    "EnergyConsumptionDetails",
    "EntryPoint",
    "Enumeration",
    "FinancialIncentive",
    "FloorPlan",
    "GameServer",
    "GeospatialGeometry",
    "Grant",
    "HealthInsurancePlan",
    "HealthPlanCostSharingSpecification",
    "HealthPlanFormulary",
    "HealthPlanNetwork",
    "Invoice",
    "ItemList",
    "JobPosting",
    "Language",
    "ListItem",
    "MediaSubscription",
    "MemberProgram",
    "MemberProgramTier",
    "MenuItem",
    "MerchantReturnPolicy",
    "MerchantReturnPolicySeasonalOverride",
    "Observation",
    "Occupation",
    "OccupationalExperienceRequirements",
    "Offer",
    "Order",
    "ParcelDelivery",
    "PaymentMethod",
    "Permit",
    "ProgramMembership",
    "Property",
    "PropertyValueSpecification",
    "Rating",
    "Reservation",
    "Role",
    "Schedule",
    "Seat",
    "Series",
    "Service",
    "ServiceChannel",
    "SpeakableSpecification",
    "StatisticalPopulation",
    "StructuredValue",
    "Ticket",
    "Trip",
    "VirtualLocation",
    "BusinessAudience",
    "EducationalAudience",
    "MedicalAudience",
    "PeopleAudience",
    "Researcher",
    "Patient",
    "ParentAudience",
    "RadioChannel",
    "TelevisionChannel",
    "AMRadioChannel",
    "FMRadioChannel",
    "StatisticalVariable",
    "CategoryCode",
    "MedicalCode",
    "WorkBasedProgram",
    "AdultOrientedEnumeration",
    "BoardingPolicyType",
    "BookFormatType",
    "BusinessEntityType",
    "BusinessFunction",
    "CarUsageType",
    "CertificationStatusEnumeration",
    "ContactPointOption",
    "DayOfWeek",
    "DeliveryMethod",
    "DigitalDocumentPermissionType",
    "DigitalPlatformEnumeration",
    "EnergyEfficiencyEnumeration",
    "EventAttendanceModeEnumeration",
    "FulfillmentTypeEnumeration",
    "GameAvailabilityEnumeration",
    "GamePlayMode",
    "GenderType",
    "GovernmentBenefitsType",
    "HealthAspectEnumeration",
    "IncentiveQualifiedExpenseType",
    "IncentiveStatus",
    "IncentiveType",
    "ItemAvailability",
    "ItemListOrderType",
    "LegalValueLevel",
    "MapCategoryType",
    "MeasurementMethodEnum",
    "MeasurementTypeEnumeration",
    "MediaEnumeration",
    "MediaManipulationRatingEnumeration",
    "MedicalEnumeration",
    "MerchantReturnEnumeration",
    "MusicAlbumProductionType",
    "MusicAlbumReleaseType",
    "MusicReleaseFormatType",
    "NonprofitType",
    "OfferItemCondition",
    "PaymentMethodType",
    "PhysicalActivityCategory",
    "PriceComponentTypeEnumeration",
    "PriceTypeEnumeration",
    "PurchaseType",
    "QualitativeValue",
    "RefundTypeEnumeration",
    "RestrictedDiet",
    "ReturnFeesEnumeration",
    "ReturnLabelSourceEnumeration",
    "ReturnMethodEnumeration",
    "RsvpResponseType",
    "SizeGroupEnumeration",
    "SizeSystemEnumeration",
    "Specialty",
    "StatusEnumeration",
    "TierBenefitEnumeration",
    "WarrantyScope",
    "EUEnergyEfficiencyEnumeration",
    "EnergyStarEnergyEfficiencyEnumeration",
    "BodyMeasurementTypeEnumeration",
    "WearableMeasurementTypeEnumeration",
    "IPTCDigitalSourceEnumeration",
    "DrugCostCategory",
    "DrugPregnancyCategory",
    "DrugPrescriptionStatus",
    "InfectiousAgentClass",
    "MedicalAudienceType",
    "MedicalDevicePurpose",
    "MedicalEvidenceLevel",
    "MedicalImagingTechnique",
    "MedicalObservationalStudyDesign",
    "MedicalProcedureType",
    "MedicalSpecialty",
    "MedicalStudyStatus",
    "MedicalTrialDesign",
    "MedicineSystem",
    "PhysicalExam",
    "DENonprofitType",
    "ITNonprofitType",
    "NLNonprofitType",
    "UKNonprofitType",
    "USNonprofitType",
    "BedType",
    "DriveWheelConfigurationValue",
    "SizeSpecification",
    "SteeringPositionValue",
    "WearableSizeGroupEnumeration",
    "WearableSizeSystemEnumeration",
    "ActionStatusType",
    "EventStatusType",
    "GameServerStatus",
    "LegalForceStatus",
    "OrderStatus",
    "PaymentStatusType",
    "ReservationStatusType",
    "MonetaryGrant",
    "BreadcrumbList",
    "OfferCatalog",
    "HowToItem",
    "HowToSupply",
    "HowToTool",
    "AggregateOffer",
    "OfferForLease",
    "OfferForPurchase",
    "PaymentCard",
    "PaymentService",
    "CreditCard",
    "GovernmentPermit",
    "AggregateRating",
    "EndorsementRating",
    "EmployerAggregateRating",
    "BoatReservation",
    "BusReservation",
    "EventReservation",
    "FlightReservation",
    "FoodEstablishmentReservation",
    "LodgingReservation",
    "RentalCarReservation",
    "ReservationPackage",
    "TaxiReservation",
    "TrainReservation",
    "LinkRole",
    "OrganizationRole",
    "PerformanceRole",
    "EmployeeRole",
    "BroadcastService",
    "CableOrSatelliteService",
    "FinancialProduct",
    "FoodService",
    "GovernmentService",
    "Taxi",
    "TaxiService",
    "WebAPI",
    "RadioBroadcastService",
    "BankAccount",
    "CurrencyConversionService",
    "InvestmentOrDeposit",
    "LoanOrCredit",
    "DepositAccount",
    "BrokerageAccount",
    "InvestmentFund",
    "MortgageLoan",
    "CDCPMDRecord",
    "ContactPoint",
    "DatedMoneySpecification",
    "DefinedRegion",
    "EngineSpecification",
    "ExchangeRateSpecification",
    "GeoCoordinates",
    "GeoShape",
    "InstantaneousEvent",
    "InteractionCounter",
    "MonetaryAmount",
    "NutritionInformation",
    "OfferShippingDetails",
    "OpeningHoursSpecification",
    "OrderItem",
    "OwnershipInfo",
    "PostalCodeRangeSpecification",
    "PriceSpecification",
    "PropertyValue",
    "QuantitativeValue",
    "QuantitativeValueDistribution",
    "RepaymentSpecification",
    "ServicePeriod",
    "ShippingConditions",
    "ShippingDeliveryTime",
    "ShippingRateSettings",
    "ShippingService",
    "TypeAndQuantityNode",
    "WarrantyPromise",
    "PostalAddress",
    "GeoCircle",
    "Error",
    "CompoundPriceSpecification",
    "DeliveryChargeSpecification",
    "PaymentChargeSpecification",
    "UnitPriceSpecification",
    "LocationFeatureSpecification",
    "MonetaryAmountDistribution",
    "BoatTrip",
    "BusTrip",
    "Flight",
    "TouristTrip",
    "TrainTrip",
    "AnatomicalStructure",
    "AnatomicalSystem",
    "DrugClass",
    "DrugCost",
    "LifestyleModification",
    "MedicalCause",
    "MedicalCondition",
    "MedicalContraindication",
    "MedicalDevice",
    "MedicalGuideline",
    "MedicalIndication",
    "MedicalIntangible",
    "MedicalProcedure",
    "MedicalRiskEstimator",
    "MedicalRiskFactor",
    "MedicalStudy",
    "MedicalTest",
    "Substance",
    "SuperficialAnatomy",
    "Bone",
    "BrainStructure",
    "Joint",
    "Ligament",
    "Muscle",
    "Nerve",
    "Vessel",
    "Artery",
    "LymphaticVessel",
    "Vein",
    "PhysicalActivity",
    "InfectiousDisease",
    "MedicalSignOrSymptom",
    "MedicalSign",
    "MedicalSymptom",
    "VitalSign",
    "MedicalGuidelineContraindication",
    "MedicalGuidelineRecommendation",
    "ApprovedIndication",
    "PreventionIndication",
    "TreatmentIndication",
    "DDxElement",
    "DoseSchedule",
    "DrugLegalStatus",
    "DrugStrength",
    "MedicalConditionStage",
    "MaximumDoseSchedule",
    "RecommendedDoseSchedule",
    "ReportedDoseSchedule",
    "DiagnosticProcedure",
    "PalliativeProcedure",
    "SurgicalProcedure",
    "TherapeuticProcedure",
    "MedicalTherapy",
    "PsychologicalTreatment",
    "OccupationalTherapy",
    "PhysicalTherapy",
    "RadiationTherapy",
    "MedicalRiskCalculator",
    "MedicalRiskScore",
    "MedicalObservationalStudy",
    "MedicalTrial",
    "BloodTest",
    "ImagingTest",
    "MedicalTestPanel",
    "PathologyTest",
    "DietarySupplement",
    "Drug",
    "Airline",
    "Consortium",
    "Cooperative",
    "Corporation",
    "EducationalOrganization",
    "FundingScheme",
    "GovernmentOrganization",
    "LibrarySystem",
    "LocalBusiness",
    "MedicalOrganization",
    "NGO",
    "NewsMediaOrganization",
    "OnlineBusiness",
    "PerformingGroup",
    "PoliticalParty",
    "Project",
    "ResearchOrganization",
    "SearchRescueOrganization",
    "SportsOrganization",
    "WorkersUnion",
    "CollegeOrUniversity",
    "ElementarySchool",
    "HighSchool",
    "MiddleSchool",
    "Preschool",
    "School",
    "AnimalShelter",
    "ArchiveOrganization",
    "AutomotiveBusiness",
    "ChildCare",
    "Dentist",
    "DryCleaningOrLaundry",
    "EmergencyService",
    "EmploymentAgency",
    "EntertainmentBusiness",
    "FinancialService",
    "FoodEstablishment",
    "GovernmentOffice",
    "HealthAndBeautyBusiness",
    "HomeAndConstructionBusiness",
    "InternetCafe",
    "LegalService",
    "Library",
    "LodgingBusiness",
    "MedicalBusiness",
    "ProfessionalService",
    "RadioStation",
    "RealEstateAgent",
    "RecyclingCenter",
    "SelfStorage",
    "ShoppingCenter",
    "SportsActivityLocation",
    "Store",
    "TelevisionStation",
    "TouristInformationCenter",
    "TravelAgency",
    "AutoBodyShop",
    "AutoDealer",
    "AutoPartsStore",
    "AutoRental",
    "AutoRepair",
    "AutoWash",
    "GasStation",
    "MotorcycleDealer",
    "MotorcycleRepair",
    "FireStation",
    "Hospital",
    "PoliceStation",
    "AdultEntertainment",
    "AmusementPark",
    "ArtGallery",
    "Casino",
    "ComedyClub",
    "MovieTheater",
    "NightClub",
    "AccountingService",
    "AutomatedTeller",
    "BankOrCreditUnion",
    "InsuranceAgency",
    "Bakery",
    "BarOrPub",
    "Brewery",
    "CafeOrCoffeeShop",
    "Distillery",
    "FastFoodRestaurant",
    "IceCreamShop",
    "Restaurant",
    "Winery",
    "PostOffice",
    "BeautySalon",
    "DaySpa",
    "HairSalon",
    "HealthClub",
    "NailSalon",
    "TattooParlor",
    "Electrician",
    "GeneralContractor",
    "HVACBusiness",
    "HousePainter",
    "Locksmith",
    "MovingCompany",
    "Plumber",
    "RoofingContractor",
    "Attorney",
    "Notary",
    "BedAndBreakfast",
    "Campground",
    "Hostel",
    "Hotel",
    "Motel",
    "Resort",
    "VacationRental",
    "SkiResort",
    "MedicalClinic",
    "Optician",
    "Pharmacy",
    "Physician",
    "CovidTestingFacility",
    "IndividualPhysician",
    "PhysiciansOffice",
    "BowlingAlley",
    "ExerciseGym",
    "GolfCourse",
    "PublicSwimmingPool",
    "SportsClub",
    "StadiumOrArena",
    "TennisComplex",
    "BikeStore",
    "BookStore",
    "ClothingStore",
    "ComputerStore",
    "ConvenienceStore",
    "DepartmentStore",
    "ElectronicsStore",
    "Florist",
    "FurnitureStore",
    "GardenStore",
    "GroceryStore",
    "HardwareStore",
    "HobbyShop",
    "HomeGoodsStore",
    "JewelryStore",
    "LiquorStore",
    "MensClothingStore",
    "MobilePhoneStore",
    "MovieRentalStore",
    "MusicStore",
    "OfficeEquipmentStore",
    "OutletStore",
    "PawnShop",
    "PetStore",
    "ShoeStore",
    "SportingGoodsStore",
    "TireShop",
    "ToyStore",
    "WholesaleStore",
    "DiagnosticLab",
    "VeterinaryCare",
    "OnlineStore",
    "OnlineMarketplace",
    "DanceGroup",
    "MusicGroup",
    "TheaterGroup",
    "FundingAgency",
    "ResearchProject",
    "SportsTeam",
    "Accommodation",
    "AdministrativeArea",
    "CivicStructure",
    "Landform",
    "LandmarksOrHistoricalBuildings",
    "Residence",
    "TouristAttraction",
    "TouristDestination",
    "Apartment",
    "CampingPitch",
    "House",
    "Room",
    "Suite",
    "SingleFamilyResidence",
    "HotelRoom",
    "MeetingRoom",
    "City",
    "Country",
    "SchoolDistrict",
    "State",
    "Airport",
    "Aquarium",
    "Beach",
    "BoatTerminal",
    "Bridge",
    "BusStation",
    "BusStop",
    "Cemetery",
    "Crematorium",
    "EventVenue",
    "GovernmentBuilding",
    "Museum",
    "MusicVenue",
    "Park",
    "ParkingFacility",
    "PerformingArtsTheater",
    "PlaceOfWorship",
    "Playground",
    "PublicToilet",
    "RVPark",
    "SubwayStation",
    "TaxiStand",
    "TrainStation",
    "Zoo",
    "CityHall",
    "Courthouse",
    "DefenceEstablishment",
    "Embassy",
    "LegislativeBuilding",
    "BuddhistTemple",
    "Church",
    "HinduTemple",
    "Mosque",
    "Synagogue",
    "CatholicChurch",
    "BodyOfWater",
    "Continent",
    "Mountain",
    "Volcano",
    "Canal",
    "LakeBodyOfWater",
    "OceanBodyOfWater",
    "Pond",
    "Reservoir",
    "RiverBodyOfWater",
    "SeaBodyOfWater",
    "Waterfall",
    "ApartmentComplex",
    "GatedResidenceCommunity",
    "IndividualProduct",
    "ProductGroup",
    "ProductModel",
    "SomeProducts",
    "Vehicle",
    "BusOrCoach",
    "Car",
    "Motorcycle",
    "MotorizedBicycle"
  ],
  "Ticket": [
    "Ticket"
  ],
  "TieAction": [
    "TieAction"
  ],
  "TierBenefitEnumeration": [
    "TierBenefitEnumeration"
  ],
  "Time": [
    "Time"
  ],
  "TipAction": [
    "TipAction"
  ],
  "TireShop": [
    "TireShop"
  ],
  "TouristAttraction": [
    "TouristAttraction"
  ],
  "TouristDestination": [
    "TouristDestination"
  ],
  "TouristInformationCenter": [
    "TouristInformationCenter"
  ],
  "TouristTrip": [
    "TouristTrip"
  ],
  "ToyStore": [
    "ToyStore"
  ],
  "TrackAction": [
    "TrackAction"
  ],
  "TradeAction": [
    "TradeAction",
    "BuyAction",
    "OrderAction",
    "PayAction",
    "PreOrderAction",
    "QuoteAction",
    "RentAction",
    "SellAction",
    "TipAction"
  ],
  "TrainReservation": [
    "TrainReservation"
  ],
  "TrainStation": [
    "TrainStation"
  ],
  "TrainTrip": [
    "TrainTrip"
  ],
  "TransferAction": [
    "TransferAction",
    "BorrowAction",
    "DonateAction",
    "DownloadAction",
    "GiveAction",
    "LendAction",
    "MoneyTransfer",
    "ReceiveAction",
    "ReturnAction",
    "SendAction",
    "TakeAction"
  ],
  "TravelAction": [
    "TravelAction"
  ],
  "TravelAgency": [
    "TravelAgency"
  ],
  "TreatmentIndication": [
    "TreatmentIndication"
  ],
  "Trip": [
    "Trip",
    "BoatTrip",
    "BusTrip",
    "Flight",
    "TouristTrip",
    "TrainTrip"
  ],
  "TypeAndQuantityNode": [
    "TypeAndQuantityNode"
  ],
  "UKNonprofitType": [
    "UKNonprofitType"
  ],
  "URL": [
    "URL"
  ],
  "USNonprofitType": [
    "USNonprofitType"
  ],
  "UnRegisterAction": [
    "UnRegisterAction"
  ],
  "UnitPriceSpecification": [
    "UnitPriceSpecification"
  ],
  "UpdateAction": [
    "UpdateAction",
    "AddAction",
    "DeleteAction",
    "ReplaceAction",
    "InsertAction",
    "AppendAction",
    "PrependAction"
  ],
  "UseAction": [
    "UseAction",
    "WearAction"
  ],
  "UserBlocks": [
    "UserBlocks"
  ],
  "UserCheckins": [
    "UserCheckins"
  ],
  "UserComments": [
    "UserComments"
  ],
  "UserDownloads": [
    "UserDownloads"
  ],
  "UserInteraction": [
    "UserInteraction",
    "UserBlocks",
    "UserCheckins",
    "UserComments",
    "UserDownloads",
    "UserLikes",
    "UserPageVisits",
    "UserPlays",
    "UserPlusOnes",
    "UserTweets"
  ],
  "UserLikes": [
    "UserLikes"
  ],
  "UserPageVisits": [
    "UserPageVisits"
  ],
  "UserPlays": [
    "UserPlays"
  ],
  "UserPlusOnes": [
    "UserPlusOnes"
  ],
  "UserReview": [
    "UserReview"
  ],
  "UserTweets": [
    "UserTweets"
  ],
  "VacationRental": [
    "VacationRental"
  ],
  "Vehicle": [
    "Vehicle",
    "BusOrCoach",
    "Car",
    "Motorcycle",
    "MotorizedBicycle"
  ],
  "Vein": [
    "Vein"
  ],
  "Vessel": [
    "Vessel",
    "Artery",
    "LymphaticVessel",
    "Vein"
  ],
  "VeterinaryCare": [
    "VeterinaryCare"
  ],
  "VideoGallery": [
    "VideoGallery"
  ],
  "VideoGame": [
    "VideoGame"
  ],
  "VideoGameClip": [
    "VideoGameClip"
  ],
  "VideoGameSeries": [
    "VideoGameSeries"
  ],
  "VideoObject": [
    "VideoObject",
    "VideoObjectSnapshot"
  ],
  "VideoObjectSnapshot": [
    "VideoObjectSnapshot"
  ],
  "ViewAction": [
    "ViewAction"
  ],
  "VirtualLocation": [
    "VirtualLocation"
  ],
  "VisualArtsEvent": [
    "VisualArtsEvent"
  ],
  "VisualArtwork": [
    "VisualArtwork",
    "CoverArt",
    "SequentialArt",
    "ComicCoverArt"
  ],
  "VitalSign": [
    "VitalSign"
  ],
  "Volcano": [
    "Volcano"
  ],
  "VoteAction": [
    "VoteAction"
  ],
  "WPAdBlock": [
    "WPAdBlock"
  ],
  "WPFooter": [
    "WPFooter"
  ],
  "WPHeader": [
    "WPHeader"
  ],
  "WPSideBar": [
    "WPSideBar"
  ],
  "WantAction": [
    "WantAction"
  ],
  "WarrantyPromise": [
    "WarrantyPromise"
  ],
  "WarrantyScope": [
    "WarrantyScope"
  ],
  "WatchAction": [
    "WatchAction"
  ],
  "Waterfall": [
    "Waterfall"
  ],
  "WearAction": [
    "WearAction"
  ],
  "WearableMeasurementTypeEnumeration": [
    "WearableMeasurementTypeEnumeration"
  ],
  "WearableSizeGroupEnumeration": [
    "WearableSizeGroupEnumeration"
  ],
  "WearableSizeSystemEnumeration": [
    "WearableSizeSystemEnumeration"
  ],
  "WebAPI": [
    "WebAPI"
  ],
  "WebApplication": [
    "WebApplication"
  ],
  "WebContent": [
    "WebContent",
    "HealthTopicContent"
  ],
  "WebPage": [
    "WebPage",
    "AboutPage",
    "CheckoutPage",
    "CollectionPage",
    "ContactPage",
    "FAQPage",
    "ItemPage",
    "MedicalWebPage",
    "ProfilePage",
    "QAPage",
    "RealEstateListing",
    "SearchResultsPage",
    "MediaGallery",
    "ImageGallery",
    "VideoGallery"
  ],
  "WebPageElement": [
    "WebPageElement",
    "SiteNavigationElement",
    "Table",
    "WPAdBlock",
    "WPFooter",
    "WPHeader",
    "WPSideBar"
  ],
  "WebSite": [
    "WebSite"
  ],
  "WholesaleStore": [
    "WholesaleStore"
  ],
  "WinAction": [
    "WinAction"
  ],
  "Winery": [
    "Winery"
  ],
  "WorkBasedProgram": [
    "WorkBasedProgram"
  ],
  "WorkersUnion": [
    "WorkersUnion"
  ],
  "WriteAction": [
    "WriteAction"
  ],
  "XPathType": [
    "XPathType"
  ],
  "Zoo": [
    "Zoo"
  ],
  "snomed:105590001": [
    "snomed:105590001"
  ],
  "snomed:116154003": [
    "snomed:116154003"
  ],
  "snomed:277132007": [
    "snomed:277132007"
  ],
  "snomed:387713003": [
    "snomed:387713003"
  ],
  "snomed:410942007": [
    "snomed:410942007"
  ],
  "snomed:50731006": [
    "snomed:50731006"
  ],
  "snomed:51114001": [
    "snomed:51114001"
  ],
  "snomed:63653004": [
    "snomed:63653004"
  ],
  "unece:AmountType": [
    "unece:AmountType"
  ],
  "unece:BrandName": [
    "unece:BrandName"
  ],
  "unece:Country": [
    "unece:Country"
  ],
  "unece:ElectronicDocument": [
    "unece:ElectronicDocument"
  ],
  "unece:FinancialCard": [
    "unece:FinancialCard"
  ],
  "unece:GeographicalCoordinate": [
    "unece:GeographicalCoordinate"
  ],
  "unece:Invoice": [
    "unece:Invoice"
  ],
  "unece:LineTradeAgreement": [
    "unece:LineTradeAgreement"
  ],
  "unece:Offer": [
    "unece:Offer"
  ],
  "unece:Order": [
    "unece:Order"
  ],
  "unece:PaymentMeans": [
    "unece:PaymentMeans"
  ],
  "unece:RequestForQuotation": [
    "unece:RequestForQuotation"
  ],
  "unece:SpecifiedCertificate": [
    "unece:SpecifiedCertificate"
  ],
  "unece:SpecifiedTradeProduct": [
    "unece:SpecifiedTradeProduct"
  ],
  "unece:TradeAddress": [
    "unece:TradeAddress"
  ],
  "unece:TradeProduct": [
    "unece:TradeProduct"
  ],
  "unece:TransportMethod": [
    "unece:TransportMethod"
  ],
  "vcard:VCard": [
    "vcard:VCard"
  ],
  "void:Dataset": [
    "void:Dataset"
  ]
};
