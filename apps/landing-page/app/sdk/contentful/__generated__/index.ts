import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  awardsCollection?: Maybe<AwardsCollection>;
  entryCollection?: Maybe<EntryCollection>;
  galleryCollection?: Maybe<GalleryCollection>;
  heroCollection?: Maybe<HeroCollection>;
  informationCollection?: Maybe<InformationCollection>;
  reviewsCollection?: Maybe<ReviewsCollection>;
  routesCollection?: Maybe<RoutesCollection>;
  sliderCollection?: Maybe<SliderCollection>;
  sponsorsCollection?: Maybe<SponsorsCollection>;
};


export type AssetLinkingCollectionsAwardsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsInformationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsReviewsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsRoutesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsSliderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsSponsorsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/awards) */
export type Awards = Entry & {
  __typename?: 'Awards';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<AwardsLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/awards) */
export type AwardsDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/awards) */
export type AwardsImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/awards) */
export type AwardsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/awards) */
export type AwardsTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AwardsCollection = {
  __typename?: 'AwardsCollection';
  items: Array<Maybe<Awards>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AwardsFilter = {
  AND?: InputMaybe<Array<InputMaybe<AwardsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AwardsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AwardsLinkingCollections = {
  __typename?: 'AwardsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AwardsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AwardsOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/gallery) */
export type Gallery = Entry & {
  __typename?: 'Gallery';
  alt?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<GalleryLinkingCollections>;
  src?: Maybe<Asset>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/gallery) */
export type GalleryAltArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/gallery) */
export type GalleryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/gallery) */
export type GallerySrcArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type GalleryCollection = {
  __typename?: 'GalleryCollection';
  items: Array<Maybe<Gallery>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type GalleryFilter = {
  AND?: InputMaybe<Array<InputMaybe<GalleryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GalleryFilter>>>;
  alt?: InputMaybe<Scalars['String']>;
  alt_contains?: InputMaybe<Scalars['String']>;
  alt_exists?: InputMaybe<Scalars['Boolean']>;
  alt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  alt_not?: InputMaybe<Scalars['String']>;
  alt_not_contains?: InputMaybe<Scalars['String']>;
  alt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  src_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type GalleryLinkingCollections = {
  __typename?: 'GalleryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type GalleryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum GalleryOrder {
  AltAsc = 'alt_ASC',
  AltDesc = 'alt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Place where the main hero content goes (main section images) [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/hero) */
export type Hero = Entry & {
  __typename?: 'Hero';
  alt?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<HeroLinkingCollections>;
  sys: Sys;
  url?: Maybe<Asset>;
};


/** Place where the main hero content goes (main section images) [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/hero) */
export type HeroAltArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Place where the main hero content goes (main section images) [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/hero) */
export type HeroLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Place where the main hero content goes (main section images) [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/hero) */
export type HeroUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type HeroCollection = {
  __typename?: 'HeroCollection';
  items: Array<Maybe<Hero>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type HeroFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroFilter>>>;
  alt?: InputMaybe<Scalars['String']>;
  alt_contains?: InputMaybe<Scalars['String']>;
  alt_exists?: InputMaybe<Scalars['Boolean']>;
  alt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  alt_not?: InputMaybe<Scalars['String']>;
  alt_not_contains?: InputMaybe<Scalars['String']>;
  alt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
};

export type HeroLinkingCollections = {
  __typename?: 'HeroLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HeroLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum HeroOrder {
  AltAsc = 'alt_ASC',
  AltDesc = 'alt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/information) */
export type Information = Entry & {
  __typename?: 'Information';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<InformationDescription>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<InformationLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/information) */
export type InformationDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/information) */
export type InformationImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/information) */
export type InformationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/information) */
export type InformationTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type InformationCollection = {
  __typename?: 'InformationCollection';
  items: Array<Maybe<Information>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type InformationDescription = {
  __typename?: 'InformationDescription';
  json: Scalars['JSON'];
  links: InformationDescriptionLinks;
};

export type InformationDescriptionAssets = {
  __typename?: 'InformationDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type InformationDescriptionEntries = {
  __typename?: 'InformationDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type InformationDescriptionLinks = {
  __typename?: 'InformationDescriptionLinks';
  assets: InformationDescriptionAssets;
  entries: InformationDescriptionEntries;
};

export type InformationFilter = {
  AND?: InputMaybe<Array<InputMaybe<InformationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InformationFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type InformationLinkingCollections = {
  __typename?: 'InformationLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type InformationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum InformationOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/prices) */
export type Prices = Entry & {
  __typename?: 'Prices';
  contentfulMetadata: ContentfulMetadata;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PricesLinkingCollections>;
  price?: Maybe<Scalars['Float']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/prices) */
export type PricesCurrencyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/prices) */
export type PricesDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/prices) */
export type PricesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/prices) */
export type PricesPriceArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PricesCollection = {
  __typename?: 'PricesCollection';
  items: Array<Maybe<Prices>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PricesFilter = {
  AND?: InputMaybe<Array<InputMaybe<PricesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PricesFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  currency?: InputMaybe<Scalars['String']>;
  currency_contains?: InputMaybe<Scalars['String']>;
  currency_exists?: InputMaybe<Scalars['Boolean']>;
  currency_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  currency_not?: InputMaybe<Scalars['String']>;
  currency_not_contains?: InputMaybe<Scalars['String']>;
  currency_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price?: InputMaybe<Scalars['Float']>;
  price_exists?: InputMaybe<Scalars['Boolean']>;
  price_gt?: InputMaybe<Scalars['Float']>;
  price_gte?: InputMaybe<Scalars['Float']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  price_lt?: InputMaybe<Scalars['Float']>;
  price_lte?: InputMaybe<Scalars['Float']>;
  price_not?: InputMaybe<Scalars['Float']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PricesLinkingCollections = {
  __typename?: 'PricesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PricesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PricesOrder {
  CurrencyAsc = 'currency_ASC',
  CurrencyDesc = 'currency_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  awards?: Maybe<Awards>;
  awardsCollection?: Maybe<AwardsCollection>;
  entryCollection?: Maybe<EntryCollection>;
  gallery?: Maybe<Gallery>;
  galleryCollection?: Maybe<GalleryCollection>;
  hero?: Maybe<Hero>;
  heroCollection?: Maybe<HeroCollection>;
  information?: Maybe<Information>;
  informationCollection?: Maybe<InformationCollection>;
  prices?: Maybe<Prices>;
  pricesCollection?: Maybe<PricesCollection>;
  reviews?: Maybe<Reviews>;
  reviewsCollection?: Maybe<ReviewsCollection>;
  routes?: Maybe<Routes>;
  routesCollection?: Maybe<RoutesCollection>;
  slider?: Maybe<Slider>;
  sliderCollection?: Maybe<SliderCollection>;
  sponsors?: Maybe<Sponsors>;
  sponsorsCollection?: Maybe<SponsorsCollection>;
  video?: Maybe<Video>;
  videoCollection?: Maybe<VideoCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryAwardsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAwardsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AwardsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AwardsFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryGalleryArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<GalleryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GalleryFilter>;
};


export type QueryHeroArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<HeroOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HeroFilter>;
};


export type QueryInformationArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryInformationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<InformationOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InformationFilter>;
};


export type QueryPricesArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPricesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PricesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PricesFilter>;
};


export type QueryReviewsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryReviewsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ReviewsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReviewsFilter>;
};


export type QueryRoutesArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryRoutesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<RoutesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoutesFilter>;
};


export type QuerySliderArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySliderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SliderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SliderFilter>;
};


export type QuerySponsorsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySponsorsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SponsorsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SponsorsFilter>;
};


export type QueryVideoArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryVideoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<VideoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<VideoFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/reviews) */
export type Reviews = Entry & {
  __typename?: 'Reviews';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<ReviewsLinkingCollections>;
  rating?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/reviews) */
export type ReviewsDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/reviews) */
export type ReviewsImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/reviews) */
export type ReviewsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/reviews) */
export type ReviewsRatingArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/reviews) */
export type ReviewsTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ReviewsCollection = {
  __typename?: 'ReviewsCollection';
  items: Array<Maybe<Reviews>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ReviewsFilter = {
  AND?: InputMaybe<Array<InputMaybe<ReviewsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ReviewsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  rating?: InputMaybe<Scalars['Int']>;
  rating_exists?: InputMaybe<Scalars['Boolean']>;
  rating_gt?: InputMaybe<Scalars['Int']>;
  rating_gte?: InputMaybe<Scalars['Int']>;
  rating_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  rating_lt?: InputMaybe<Scalars['Int']>;
  rating_lte?: InputMaybe<Scalars['Int']>;
  rating_not?: InputMaybe<Scalars['Int']>;
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ReviewsLinkingCollections = {
  __typename?: 'ReviewsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ReviewsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ReviewsOrder {
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/routes) */
export type Routes = Entry & {
  __typename?: 'Routes';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<RoutesDescription>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<RoutesLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/routes) */
export type RoutesDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/routes) */
export type RoutesImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/routes) */
export type RoutesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/routes) */
export type RoutesTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type RoutesCollection = {
  __typename?: 'RoutesCollection';
  items: Array<Maybe<Routes>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type RoutesDescription = {
  __typename?: 'RoutesDescription';
  json: Scalars['JSON'];
  links: RoutesDescriptionLinks;
};

export type RoutesDescriptionAssets = {
  __typename?: 'RoutesDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type RoutesDescriptionEntries = {
  __typename?: 'RoutesDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type RoutesDescriptionLinks = {
  __typename?: 'RoutesDescriptionLinks';
  assets: RoutesDescriptionAssets;
  entries: RoutesDescriptionEntries;
};

export type RoutesFilter = {
  AND?: InputMaybe<Array<InputMaybe<RoutesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RoutesFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RoutesLinkingCollections = {
  __typename?: 'RoutesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type RoutesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum RoutesOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/slider) */
export type Slider = Entry & {
  __typename?: 'Slider';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SliderLinkingCollections>;
  sys: Sys;
  url?: Maybe<Asset>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/slider) */
export type SliderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/slider) */
export type SliderUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type SliderCollection = {
  __typename?: 'SliderCollection';
  items: Array<Maybe<Slider>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SliderFilter = {
  AND?: InputMaybe<Array<InputMaybe<SliderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SliderFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
};

export type SliderLinkingCollections = {
  __typename?: 'SliderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SliderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SliderOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** List of sponsors [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/sponsors) */
export type Sponsors = Entry & {
  __typename?: 'Sponsors';
  alt?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  link?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<SponsorsLinkingCollections>;
  sys: Sys;
};


/** List of sponsors [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/sponsors) */
export type SponsorsAltArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** List of sponsors [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/sponsors) */
export type SponsorsImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** List of sponsors [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/sponsors) */
export type SponsorsLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** List of sponsors [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/sponsors) */
export type SponsorsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SponsorsCollection = {
  __typename?: 'SponsorsCollection';
  items: Array<Maybe<Sponsors>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SponsorsFilter = {
  AND?: InputMaybe<Array<InputMaybe<SponsorsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SponsorsFilter>>>;
  alt?: InputMaybe<Scalars['String']>;
  alt_contains?: InputMaybe<Scalars['String']>;
  alt_exists?: InputMaybe<Scalars['Boolean']>;
  alt_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  alt_not?: InputMaybe<Scalars['String']>;
  alt_not_contains?: InputMaybe<Scalars['String']>;
  alt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<Scalars['String']>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_exists?: InputMaybe<Scalars['Boolean']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  link_not?: InputMaybe<Scalars['String']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type SponsorsLinkingCollections = {
  __typename?: 'SponsorsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SponsorsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SponsorsOrder {
  AltAsc = 'alt_ASC',
  AltDesc = 'alt_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/video) */
export type Video = Entry & {
  __typename?: 'Video';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<VideoLinkingCollections>;
  sys: Sys;
  url?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/video) */
export type VideoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/c65fbpf953uf/content_types/video) */
export type VideoUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type VideoCollection = {
  __typename?: 'VideoCollection';
  items: Array<Maybe<Video>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type VideoFilter = {
  AND?: InputMaybe<Array<InputMaybe<VideoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VideoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VideoLinkingCollections = {
  __typename?: 'VideoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type VideoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum VideoOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type GalleryQueryVariables = Exact<{ [key: string]: never; }>;


export type GalleryQuery = { __typename?: 'Query', galleryCollection?: { __typename?: 'GalleryCollection', items: Array<{ __typename?: 'Gallery', alt?: string | null, src?: { __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, height?: number | null } | null } | null> } | null };

export type PricesQueryVariables = Exact<{ [key: string]: never; }>;


export type PricesQuery = { __typename?: 'Query', pricesCollection?: { __typename?: 'PricesCollection', items: Array<{ __typename?: 'Prices', price?: number | null, currency?: string | null } | null> } | null };


export const GalleryDocument = gql`
    query Gallery {
  galleryCollection {
    items {
      alt
      src {
        url
        title
        width
        height
      }
    }
  }
}
    `;
export const PricesDocument = gql`
    query Prices {
  pricesCollection {
    items {
      price
      currency
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Gallery(variables?: GalleryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GalleryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GalleryQuery>(GalleryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Gallery', 'query');
    },
    Prices(variables?: PricesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PricesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PricesQuery>(PricesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Prices', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;