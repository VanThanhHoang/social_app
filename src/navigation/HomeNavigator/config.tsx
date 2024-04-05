import { ImageDetail } from "@/screens";
import { PostDetail } from "@/screens";

export enum HomeStackNames {
    ImageDetail = "ImageDetail",
    PostDetail = "PostDetail",
}
export type HomeStackParamList = {
    [HomeStackNames.ImageDetail]: undefined;
    [HomeStackNames.PostDetail]: { itemData: any}
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
        options: {}
    },
    {
        name: HomeStackNames.PostDetail,
        component: PostDetail,
        options: {}
    }
    ,
    
];