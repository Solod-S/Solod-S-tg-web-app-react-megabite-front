import { useLocation } from "react-router-dom";
import {
  Item,
  Link,
  Wrapper,
  Poster,
  Overflow,
  PosterOverFlow,
  PosterImgOverFlow,
  TextWraper,
  Title,
  Text,
} from "./MenuItem.styled";

import { scrollToTop } from "../../utils";

function MenuItem({ itemProps, location, backLinkHref }) {
  const currentLocation = useLocation();
  switch (true) {
    case location === "mainMenu":
      return (
        <Item>
          <Link to={itemProps.filter} onClick={scrollToTop}>
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
          <Link
            to={itemProps.id}
            onClick={scrollToTop}
            state={{ from: currentLocation }}
          >
            <Wrapper>
              <Poster
                src={itemProps.imgs[0]}
                alt={itemProps.title}
                width="370"
              />

              <Overflow>
                <PosterImgOverFlow
                  src={
                    itemProps.imgs[1] ? itemProps.imgs[1] : itemProps.imgs[0]
                  }
                />
              </Overflow>
            </Wrapper>
            <TextWraper>
              <Title>{itemProps.title}</Title>
              <Text>{itemProps.category}</Text>
            </TextWraper>
          </Link>
        </Item>
      );
    case location === "own-brand-similar-list":
      return (
        <Item>
          <Link
            to={`/own-brand/${itemProps.id}`}
            onClick={scrollToTop}
            state={{ from: backLinkHref }}
          >
            <Wrapper>
              <Poster
                src={itemProps.imgs[0]}
                alt={itemProps.title}
                width="370"
              />

              <Overflow>
                {/* <PosterOverFlow>{itemProps.title}</PosterOverFlow> */}
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
            onClick={scrollToTop}
          >
            <Wrapper>
              <Poster
                src={itemProps.img}
                alt={itemProps.description}
                width="370"
                height="250px"
              />

              <Overflow>
                <PosterOverFlow>
                  {`Акція діє до ` + itemProps.date}
                </PosterOverFlow>
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
