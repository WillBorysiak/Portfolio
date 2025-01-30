import { EntrySkeletonType, FieldsType } from "contentful";

export interface Skeleton<T extends FieldsType> extends EntrySkeletonType {
  fields: T;
}
