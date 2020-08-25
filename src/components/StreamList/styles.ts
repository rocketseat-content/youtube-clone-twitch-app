import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const List = styled.View`
  padding: 8px 0 24px;
`;

export const StreamContainer = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;

  margin-bottom: 24px;
  margin-right: 24px;
`;

export const StreamRow = styled.View`
  margin-left: 11px;
  flex: 1;
`;

export const StreamThumbnail = styled.Image`
  width: 119px;
  height: 66px;
`;

export const StreamColumn = styled.View`
  height: 66px;
  justify-content: space-between;
`;

export const StreamHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StreamAvatar = styled.View`
  background: ${colors.tag};
  width: 20px;
  height: 20px;
  border-radius: 10px;
`;

export const StreamUsername = styled.Text`
  color: ${colors.black};
  margin-left: 5px;
  font-family: roboto_700;
`;

export const StreamDescription = styled.Text`
  color: ${colors.black};
`;

export const StreamCategory = styled.Text`
  color: ${colors.gray};
  font-family: roboto_500;
`;

export const TagRow = styled.View`
  margin-top: 8px;
  flex-direction: row;
`;

export const TagView = styled.View`
  background: ${colors.tag};
  padding: 2px 8px;
  margin-right: 5px;
  border-radius: 10px;
`;

export const TagText = styled.Text`
  color: ${colors.black};
  font-family: roboto_500;
  font-size: 13px;
`;
