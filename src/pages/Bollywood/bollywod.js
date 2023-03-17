import { ContextApi } from "../../Utilities/ContextApi/contextApi";
import { useContext } from "react";
import HeaderCompo from "../../Component/HeaderCompo/header";
import React from "react";
import { Link } from "react-router-dom";
import '../style.css'
const Bollywood=()=>
{
const [data]=useContext(ContextApi);

    return(
    <div>
    <HeaderCompo/>
    <div className="left-section">
    <h2 >Movies</h2>
 {
    data.filter((item)=> item.category === 'Bollywood').map((dataItem)=>{
        return(
            <div>
                
                    
            <div key={dataItem.id}>
            <div className="wrapper">
            <div className="avatardiv">
                <Link to={`/article/${dataItem.id}`}>
                    <img className="avatar" src={dataItem.image} alt=''/>
                </Link>
                </div>
                 

                 <div className="infodiv">
                
                    <p className="movie-name">
                       <span className="labels"> Name:</span>{dataItem.name}
                    </p>

                    <p className="movie-rating">
                    <span className="labels"> IMdb:</span>{dataItem.IMDb}
                    </p>
                    

                    <p className="movie-desc">
                        {dataItem.desc}
                    </p>

                    <p className="movie-release">
                    <span className="labels"> Release Date:</span>{dataItem.release}
                    </p>
                    
                    </div>
                    
                </div>
                <hr className="underline-left-section"/>
               
                </div>
                </div>
        )
    })
 }
    
</div>


<div className="right-section">
    <h2 >Top Post</h2>
 {
    data.filter((item)=> item.category === 'Bollywood').map((dataItem)=>{
        return(
            <div>
            <div key={dataItem.id}>
            <div className="wrapper2">
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
                <hr/>

                </div>
                </div>
        )
    })
 }
    
</div>
</div>
    )
    }

export default Bollywood;