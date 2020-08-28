import React from "react";

import streamThumbnail from "../../images/stream_thumbnail.jpg";

import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from "./styles";

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>rodz_oficial</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end con Net.js, Chakra UI e GraphQL
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Science & Technology
          </StreamCategory>
        </StreamRow>
        <TagRow>
          <TagView>
            <TagText>Portugués</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
