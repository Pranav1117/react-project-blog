import HeaderCompo from "../../Component/HeaderCompo/header";
import {ContextApi} from "../../Utilities/ContextApi/contextApi";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Home=()=>{
const [data]=useContext(ContextApi);

const item1=[];
const item2=[];

for(var i=0;i<data.length;i++){
    var keys=data[i].id;

    switch(keys){
        case 1:
            item1.push(data[i]);
            break;
            case 2:
                item2.push(data[i]);
                break;

                default:

    }
}

return(
    <div>
        <HeaderCompo/>
        <div className="main-pictures">
            <div>
               <div>
                {item1.map((value)=>{
                    return(
                        <img key={value.id} src={value.image} alt="" />
                    )
                })}
              
               
               
               </div>

               <div className="mountain-small-wrapper">
          {item2.map((value) => (
            
            <>
             
              <img
                key={value.id + 1}
                src={value.image}
                className="mountain-small"
                alt=""
              />
            </>
          ))}
        </div>

               <div>
                {data.filter((item)=>item.title ==='Mountain').map((dataItem)=>{
                return(
                    <>
                    <div>{dataItem.image}</div>
                    
                    </>
                )
               }
              
               
               )}
               </div>
               <br/>
<br/>
<br/>


               <div>
                <h3>Latest Bollywood stories</h3>
                <div className="flex">
                {
    data.filter((item)=> item.category === 'Bollywood').map((dataItem)=>{
        return(
            <div>
            <div key={dataItem.id}  >
            <div className="home-bolly-wrapper">
            <div className="avatardiv2">
                <Link to={`/article/${dataItem.id}`}>
                    <img className="right-avatar" src={dataItem.image} alt=''/>
                </Link></div>

                <div className="movie-info">
                    <p className="movie-name">
                        Name:{dataItem.name}
                    </p>

                    <p className="movie-rating">
                        IMdb:{dataItem.IMDb}
                    </p>
                    

                    <p className="movie-desc">
                        {dataItem.desc}
                    </p>

                    <p className="movie-release">
                        Release:{dataItem.release}
                    </p>
                </div>
                </div>
                

                </div>
                <div className="home-underline"></div>
                </div>
        )
    })
 }
                </div>
               </div>

               <br/>
<br/>
<br/>
<br/>
<br/>
<br/>

               <div>
                <h3>Latest Hollywood stories</h3>
                <div className="flex">
                {
    data.filter((item)=> item.category === 'Hollywood').map((dataItem)=>{
        return(
            <div>
            <div key={dataItem.id}  >
            <div className="home-bolly-wrapper">
            <div className="avatardiv2">
                <Link to={`/article/${dataItem.id}`}>
                    <img className="right-avatar" src={dataItem.image} alt=''/>
                </Link></div>

                <div className="movie-info">
                    <p className="movie-name">
                        Name:{dataItem.name}
                    </p>

                    <p className="movie-rating">
                        IMdb:{dataItem.IMDb}
                    </p>
                    

                    <p className="movie-desc">
                        {dataItem.desc}
                    </p>

                    <p className="movie-release">
                        Release:{dataItem.release}
                    </p>
                </div>
                </div>
                

                </div>
                <div className="home-underline"></div>
                </div>
        )
    })
 }
                </div>
               </div>



<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
               <div>
                <h3>Latest Technology stories</h3>
                <div className="flex">
                {
    data.filter((item)=> item.category === 'Technology').map((dataItem)=>{
        return(
            <div>
            <div key={dataItem.id}  >
            <div className="home-bolly-wrapper">
            <div className="avatardiv2">
                <Link to={`/article/${dataItem.id}`}>
                    <img className="right-avatar" src={dataItem.image} alt=''/>
                </Link></div>

                <div className="movie-info">
                    <p className="movie-name">
                        Name:{dataItem.name}
                    </p>

                    

                    <p className="movie-desc">
                        {dataItem.desc}
                    </p>

                </div>
                </div>
                

                </div>
                <div className="home-underline"></div>
                </div>
        )
    })
 }
                </div>
               </div>
            </div>
        </div>
        
    </div>
    )
}

export default Home;