import type {
  AlignVariant,
  BorderThickness,
  ColorVariant,
  ComponentSizing,
  RadiusVariant,
} from "../../types";
import { RADIUS_SIZE } from "../../constants";
import { getWidth, getHeight } from "../../utils";
export type ImageProps = {
  src: string;
  alt?: string;
  radius?: RadiusVariant;
  objectFit?: "cover" | "contain";
  objectPosition?: AlignVariant | "top" | "bottom";
  aspectRatio?: { width: number; height: number };
  border?: BorderThickness;
  borderColor?: ColorVariant;
  onLoad?: () => void;
  onError?: (e?: React.SyntheticEvent<HTMLImageElement, Event>) => void;
} & ComponentSizing;

export const Image = ({
  src,
  alt,
  radius = "none",
  objectFit = "cover",
  objectPosition = "center",
  aspectRatio,
  width,
  maxWidth,
  height,
  border,
  borderColor,
  onLoad,
  onError,
}: ImageProps) => {
  const handleLoad = () => {
    onLoad?.();
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    onError?.(e);
  };

  return (
    <img
      className={border}
      style={{
        width: getWidth(width || "100%"),
        maxWidth: getWidth(maxWidth || "100%"),
        height: getHeight(height || "100%"),
        borderRadius: RADIUS_SIZE[radius],
        objectPosition: objectPosition,
        objectFit: objectFit,
        ...(aspectRatio && {
          aspectRatio: `${aspectRatio.width}/${aspectRatio.height}`,
        }),
        ...(borderColor && { borderColor: `var(--${borderColor})` }),
      }}
      onLoad={handleLoad}
      onError={handleError}
      src={src}
      alt={alt}
    />
  );
};
