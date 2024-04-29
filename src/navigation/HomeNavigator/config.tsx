import {ImageDetail} from '@/screens';
import {PostDetail} from '@/screens';
import {Post} from '@/type';
import CommentScreen from '@/screens/comment';
import EditPostScreen from '@/screens/edit_post';
import UserProfileDetail from '@/screens/searchScreen/UserProfileDetail';

export enum HomeStackNames {
  ImageDetail = 'ImageDetail',
  PostDetail = 'PostDetail',
  CommentScreen = 'CommentScreen',
  EditPostScreen = 'EditPostScreen',
  UserProfileDetail = 'UserProfileDetail',
}
export type HomeStackParamList = {
  [HomeStackNames.UserProfileDetail]: {userId: string, userName: string};
  [HomeStackNames.ImageDetail]: undefined;
  [HomeStackNames.PostDetail]: {post: Post};
  [HomeStackNames.CommentScreen]: {post: Post};
  [HomeStackNames.EditPostScreen]: {post: Post};
};
interface StackProps {
  name: HomeStackNames;
  component: () => React.JSX.Element;
  options?: any;
}
export const HomeStacks: StackProps[] = [
  {
    name: HomeStackNames.ImageDetail,
    component: ImageDetail,
    options: {},
  },
  {
    name: HomeStackNames.PostDetail,
    component: PostDetail,
    options: {},
  },
  {
    name: HomeStackNames.CommentScreen,
    component: CommentScreen,
    options: {},
  },
  {
    name: HomeStackNames.EditPostScreen,
    component: EditPostScreen,
    options: {},
  },
  {
    name: HomeStackNames.UserProfileDetail,
    component: UserProfileDetail,
    options: {},
  },
];
