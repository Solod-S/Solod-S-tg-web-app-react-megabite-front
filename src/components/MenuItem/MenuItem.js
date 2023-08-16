import {
  Item,
  Link,
  Wrapper,
  Poster,
  Overflow,
  PosterOverFlow,
  TextWraper,
  Title,
  Text,
} from "./MenuItem.styled";

function MenuItem({ itemProps, location }) {
  switch (true) {
    case location === "mainMenu":
      return (
        <Item>
          <Link to={itemProps.filter}>
            <Wrapper>
              <Poster src={itemProps.img} alt={itemProps.title} width="370" />

              <Overflow>
                <PosterOverFlow>{itemProps.description}</PosterOverFlow>
              </Overflow>
            </Wrapper>
            <TextWraper>
              <Title>{itemProps.title}</Title>
              {/* <Text>{category}</Text> */}
            </TextWraper>
          </Link>
        </Item>
      );
    case location === "own-brand":
      return (
        <Item>
          <Link to={itemProps.id}>
            <Wrapper>
              <Poster
                src={itemProps.imgs[0]}
                alt={itemProps.title}
                width="370"
              />

              <Overflow>
                <PosterOverFlow>{itemProps.title}</PosterOverFlow>
                {/* <PosterOverFlow
                  dangerouslySetInnerHTML={{ __html: itemProps.advantages }}
                /> */}
              </Overflow>
            </Wrapper>
            <TextWraper>
              <Title>{itemProps.title}</Title>
              <Text>{itemProps.category}</Text>
            </TextWraper>
          </Link>
        </Item>
      );
    case location === "discount":
      return (
        <Item>
          <Link
            to={itemProps.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Wrapper>
              <Poster
                src={itemProps.img}
                alt={itemProps.description}
                width="370"
              />

              <Overflow>
                <PosterOverFlow>{itemProps.description}</PosterOverFlow>
              </Overflow>
            </Wrapper>
            <TextWraper>
              {/* <Title>{itemProps.title}</Title> */}
              <Text>{itemProps.description}</Text>
            </TextWraper>
          </Link>
        </Item>
      );

    default:
      break;
  }
}
export default MenuItem;
