export type StrapiResponse<Data, Meta = Record<string, never>> = {
  data: Data;
  meta: Meta;
};
