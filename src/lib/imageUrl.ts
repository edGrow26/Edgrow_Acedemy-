import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";
import { SanityImage } from "./sanity.types";

const builder = imageUrlBuilder(client);

export function urlForImage(source: any): string {
  if (!source) return "";
  if (typeof source === "string") return source;
  if (source.asset || source._ref) {
    try {
      return builder.image(source).url();
    } catch (e) {
      console.error("Error building Sanity image URL:", e);
      return "";
    }
  }
  return "";
}
