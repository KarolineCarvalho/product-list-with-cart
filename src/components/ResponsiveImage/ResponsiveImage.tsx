export interface ResponsiveImageProps {
  image: { mobile: string; tablet: string; desktop: string };
  altText: string;
}

function ResponsiveImage({ image, altText }: ResponsiveImageProps) {
  return (
    <img
      src={image.desktop}
      srcSet={`${image.mobile} 654w, ${image.tablet} 427w, ${image.desktop} 502w`}
      sizes={"(max-width: 475px) 327px, (max-width: 768px) 475px, 600px"}
      alt={altText}
    />
  );
}

export default ResponsiveImage;
