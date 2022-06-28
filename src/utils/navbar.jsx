import Home from "../components/Home"
import Generic from "../pages/generic"


export const navbar=[
    {
        id:1,
        title:"Home",
        path:"/home",
        Element:<Home/>,
        search:'?',
        hidden:'false',
        private:'false'
    },
    {
        id:2,
        title:"Properties",
        path:"/properties",
        Element:<Generic/>,
        search:'?',
        hidden:'false',
        private:'false'
    },
    {
        id:1,
        title:"Contacs",
        path:"/contacs",
        Element:<Generic/>,
        search:'?',
        hidden:'false',
        private:'false'
    },
]