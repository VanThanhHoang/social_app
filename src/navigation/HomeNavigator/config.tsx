import { ImageDetail } from "@/screens";
import { PostDetail } from "@/screens";
import { HomeScreen } from "@/screens";

export enum HomeStackNames {
    ImageDetail = "ImageDetail",
    PostDetail = "PostDetail",
    HomeScreen = "HomeScreen"
}
export type HomeStackParamList = {
    [HomeStackNames.ImageDetail]: undefined;
    [HomeStackNames.PostDetail]: { itemData: any}
    [HomeStackNames.HomeScreen]: undefined;
};   
interface StackProps {
    name: HomeStackNames;
    component: () => React.JSX.Element;
    options?: any;
}
export const HomeStacks: StackProps[] = [
    {
        name: HomeStackNames.HomeScreen,
        component: HomeScreen,
        options: {}
    },
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