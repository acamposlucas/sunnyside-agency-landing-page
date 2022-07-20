import React from "react";
import { GalleryContainer } from "./styles";

export const Gallery = () => {
  return (
    <GalleryContainer>
      <picture>
        <source
          srcSet="src/assets/images/desktop/image-gallery-milkbottles.jpg"
          media="(min-width: 800px)"
        />
        <img src="src/assets/images/mobile/image-gallery-milkbottles.jpg" />
      </picture>
      <picture>
        <source
          srcSet="src/assets/images/desktop/image-gallery-orange.jpg"
          media="(min-width: 800px)"
        />
        <img src="src/assets/images/mobile/image-gallery-orange.jpg" />
      </picture>
      <picture>
        <source
          srcSet="src/assets/images/desktop/image-gallery-cone.jpg"
          media="(min-width: 800px)"
        />
        <img src="src/assets/images/mobile/image-gallery-cone.jpg" />
      </picture>
      <picture>
        <source
          srcSet="src/assets/images/desktop/image-gallery-sugar-cubes.jpg"
          media="(min-width: 800px)"
        />
        <img src="src/assets/images/mobile/image-gallery-sugar-cubes.jpg" />
      </picture>
    </GalleryContainer>
  );
};
