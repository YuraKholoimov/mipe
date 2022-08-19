export type RootType = RootTypeChild[]
export type RootTypeChildWhatWillYouLearn = {
  _id: string
  string: string
  __v: number
  id: string
}
export type RootTypeChildSpecializedSubjects = {
  _id: string
  string: string
  __v: number
  id: string
}
export type RootTypeChildBaseSubjects = {
  _id: string
  string: string
  __v: number
  id: string
}
export type RootTypeChildProgramModulesCounters = {
  leftCounter: string
  rightCounter: string
  _id: string
  __v: number
  id: string
}
export type RootTypeChildSpecializedSubjectsAddons = {
  _id: string
  Practice: boolean
  __v: number
  id: string
}
export type RootTypeChildCategoryLocalizationsId = {
  type: string
  data: number[]
}
export type RootTypeChildCategoryLocalizations = {
  _id: string
  id: RootTypeChildCategoryLocalizationsId
}
export type RootTypeChildCategoryLabelCases = {
  _id: string
  singular: string
  plural: string
  __v: number
  id: string
}
export type RootTypeChildCategory = {
  copyToKk: boolean
  localizations: RootTypeChildCategoryLocalizations[]
  _id: string
  slug: string
  type: string
  description: string
  locale: string
  published_at: string
  labelCases: RootTypeChildCategoryLabelCases
  createdAt: string
  updatedAt: string
  __v: number
  id: string
}
export type RootTypeChildPictureProvider_metadata = {
  public_id: string
  resource_type: string
}
export type RootTypeChildPictureFormatsThumbnailProvider_metadata = {
  public_id: string
  resource_type: string
}
export type RootTypeChildPictureFormatsThumbnail = {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  path?: any
  url: string
  provider_metadata: RootTypeChildPictureFormatsThumbnailProvider_metadata
}
export type RootTypeChildPictureFormatsLargeProvider_metadata = {
  public_id: string
  resource_type: string
}
export type RootTypeChildPictureFormatsLarge = {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  path?: any
  url: string
  provider_metadata: RootTypeChildPictureFormatsLargeProvider_metadata
}
export type RootTypeChildPictureFormatsMediumProvider_metadata = {
  public_id: string
  resource_type: string
}
export type RootTypeChildPictureFormatsMedium = {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  path?: any
  url: string
  provider_metadata: RootTypeChildPictureFormatsMediumProvider_metadata
}
export type RootTypeChildPictureFormatsSmallProvider_metadata = {
  public_id: string
  resource_type: string
}
export type RootTypeChildPictureFormatsSmall = {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  path?: any
  url: string
  provider_metadata: RootTypeChildPictureFormatsSmallProvider_metadata
}
export type RootTypeChildPictureFormats = {
  thumbnail: RootTypeChildPictureFormatsThumbnail
  large: RootTypeChildPictureFormatsLarge
  medium: RootTypeChildPictureFormatsMedium
  small: RootTypeChildPictureFormatsSmall
}
export type RootTypeChildPicture = {
  _id: string
  name: string
  alternativeText: string
  caption: string
  hash: string
  ext: string
  mime: string
  size: number
  width: number
  height: number
  url: string
  provider_metadata: RootTypeChildPictureProvider_metadata
  formats: RootTypeChildPictureFormats
  provider: string
  related: string[]
  createdAt: string
  updatedAt: string
  __v: number
  id: string
}
export type RootTypeChildTeachersLocalizationsId = {
  type: string
  data: number[]
}
export type RootTypeChildTeachersLocalizations = {
  _id: string
  id: RootTypeChildTeachersLocalizationsId
}
export type RootTypeChildTeachersPortraitProvider_metadata = {
  public_id: string
  resource_type: string
}
export type RootTypeChildTeachersPortraitFormatsThumbnailProvider_metadata = {
  public_id: string
  resource_type: string
}
export type RootTypeChildTeachersPortraitFormatsThumbnail = {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  path?: any
  url: string
  provider_metadata: RootTypeChildTeachersPortraitFormatsThumbnailProvider_metadata
}
export type RootTypeChildTeachersPortraitFormatsSmallProvider_metadata = {
  public_id: string
  resource_type: string
}
export type RootTypeChildTeachersPortraitFormatsSmall = {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  path?: any
  url: string
  provider_metadata: RootTypeChildTeachersPortraitFormatsSmallProvider_metadata
}
export type RootTypeChildTeachersPortraitFormats = {
  thumbnail: RootTypeChildTeachersPortraitFormatsThumbnail
  small: RootTypeChildTeachersPortraitFormatsSmall
}
export type RootTypeChildTeachersPortrait = {
  _id: string
  name: string
  alternativeText: string
  caption: string
  hash: string
  ext: string
  mime: string
  size: number
  width: number
  height: number
  url: string
  provider_metadata: RootTypeChildTeachersPortraitProvider_metadata
  formats: RootTypeChildTeachersPortraitFormats
  provider: string
  related: string[]
  createdAt: string
  updatedAt: string
  __v: number
  id: string
}
export type RootTypeChildTeachersDescriptionItems = {
  _id: string
  item: string
  __v: number
  id: string
}
export type RootTypeChildTeachers = {
  copyToKk: boolean
  programs: string[]
  localizations: RootTypeChildTeachersLocalizations[]
  _id: string
  name: string
  description: string
  locale: string
  published_at: string
  slug: string
  createdAt: string
  updatedAt: string
  __v: number
  portrait: RootTypeChildTeachersPortrait
  descriptionItems: RootTypeChildTeachersDescriptionItems[]
  id: string
}
export type RootTypeChild = {
  studyFormat: string
  subjectsStickerType: string
  questions: any[]
  reviews: any[]
  localizations: any[]
  _id: string
  published_at: string
  locale: string
  goal: string
  slug: string
  title: string
  whatWillYouLearn: RootTypeChildWhatWillYouLearn[]
  specializedSubjects: RootTypeChildSpecializedSubjects[]
  duration?: any
  baseSubjects: RootTypeChildBaseSubjects[]
  programModulesCounters: RootTypeChildProgramModulesCounters
  diplomas: any[]
  whoIsFor: any[]
  specializedSubjectsAddons: RootTypeChildSpecializedSubjectsAddons
  createdAt: string
  updatedAt: string
  __v: number
  category: RootTypeChildCategory
  picture: RootTypeChildPicture
  teachers: RootTypeChildTeachers[]
  id: string
}
