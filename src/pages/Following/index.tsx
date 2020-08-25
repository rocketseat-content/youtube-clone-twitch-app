import React from 'react';
import { View, FlatList } from 'react-native';

import Header from '../../components/Header';

import { Wrapper, Container, Main } from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <View />,
      },

      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <View />,
        isTitle: true,
      },
      { key: 'C1', render: () => <View /> },

      {
        key: 'LIVE_CHANNELS',
        render: () => <View />,
        isTitle: true,
      },
      { key: 'C2', render: () => <View /> },

      {
        key: 'CONTINUE_WATCHING',
        render: () => <View />,
        isTitle: true,
      },
      { key: 'C3', render: () => <View /> },

      {
        key: 'OFFLINE_CHANNELS',
        render: () => <View />,
        isTitle: true,
      },
      { key: 'C4', render: () => <View /> },
    ];

    const indices: number[] = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices,
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />

        <Main>
          <View />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
