import React from 'react';
import { useFetch } from "../hooks";
import styled from 'styled-components';

const ContentContainer = styled.section`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
`;

const Image = styled.img`
  width: 100%;
`;

const url = "https://jsonplaceholder.typicode.com/photos";

const Content = () => {
  const [data, loading] = useFetch(url);
  return (
    <ContentContainer>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <p>Hi there! I love to learn by getting hands dirty with code as soon as I read a new concept, that's why I like to build useless things, just to have fun!</p>
          <p>Is with those "useless things", which I call them experiments, that I learn the most. I sit with a tea and music, I have no pressure and let my creativity go...</p>
          <p>In this project I am playing around with React, Hooks, Styled Components, CSS Grid and Responsive mobile-first in order to fetch some very colorful placeholder thumbnails.</p>
          <p>The UI can switch between Dark and Light Theme thanks to styled components theme provider.</p>
          {data.slice(0, 10).map(({id, title, thumbnailUrl}) => (
            <article className="photo-article" key={`photo-${id}`}>
              <Image alt={title} src={thumbnailUrl} />
            </article>
          ))}
        </>
      )}
    </ContentContainer>
  );
};

export default Content;
