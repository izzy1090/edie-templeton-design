import useNavigation from "../hooks/use-navigation.js";

function Route ( { path, children } ) {

    const { currentPath } = useNavigation();

    if (currentPath === path){
        console.log(currentPath);
        return children;
    } else return null;
};

export default Route;
