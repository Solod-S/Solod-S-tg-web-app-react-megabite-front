import { List, Item, MainTitle, DescriptionWrapper } from "./Features.styled";

import FeaturesItem from "../FeaturesItem/FeaturesItem";

function Features({ features, text }) {
  return (
    <>
      <DescriptionWrapper
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
      <MainTitle>Чому обирають інтернет-магазин «Megabite»</MainTitle>
      <List>
        {features.length > 0 &&
          features.map(({ id, image, title, description }) => (
            <Item key={id}>
              <FeaturesItem
                image={image}
                title={title}
                description={description}
              />
            </Item>
          ))}
      </List>
    </>
  );
}

export default Features;
