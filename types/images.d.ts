declare module "*.png" {
  import type { StaticImageData } from "next/image";

  const image: StaticImageData;
  export default image;
}

declare module "*.jpeg" {
  import type { StaticImageData } from "next/image";

  const image: StaticImageData;
  export default image;
}
