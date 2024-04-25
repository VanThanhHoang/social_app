import {ImageDetail} from '@/screens';
import {PostDetail} from '@/screens';
import { Post } from '@/type';

export enum HomeStackNames {
  ImageDetail = 'ImageDetail',
  PostDetail = 'PostDetail',
}
export type HomeStackParamList = {
  [HomeStackNames.ImageDetail]: undefined;
  [HomeStackNames.PostDetail]: {post: Post};
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
];
