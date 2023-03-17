import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Bollywood from "../../pages/Bollywood/bollywod";
import Hollywood from "../../pages/Hollywood/hollywood";
import Home from "../../pages/Home/Home";
import Fitness from "../../pages/Fitness/fitness";
import Technology from "../../pages/Technology/technology";
import Gaming from "../../pages/Gaming/Gaming";
import Article from "../../pages/article/article";
const RouterComponent=()=>{
return(
<Router>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/bollywood' element={<Bollywood/>}/>
    <Route path="/hollywood" element={<Hollywood/>}/>
    <Route path='fitness' element={<Fitness/>}/>
    <Route path='/gaming' element={<Gaming/>}/>
    <Route path='/technology' element={<Technology/>}/>
    <Route path="/article/:Id" element={<Article/>} />
</Routes>
</Router>

)
    
}

export default RouterComponent;