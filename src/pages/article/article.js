import React from "react";
import { useContext } from "react";
import { ContextApi } from "../../Utilities/ContextApi/contextApi";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Article =()=>{
    const [data]=useContext(ContextApi);
    var {path}=useParams();
    path=+path;
    var categor;

    for(var i=0;i<data.length;i++){
        if(data[i].id===path){
            categor =data[i].categor;
            break;
        }
    }

    
    return(
     

        <div>
          
           
            {data.filter((item)=>item.id===path).map((dataItem,index)=>{
              return(
              <div key={index}>
                <div className="article-content-wrapper">
                    <h2>{dataItem.name}</h2>
                    <img src={dataItem.image} alt="" className="article-image"/>
                    <p>{dataItem.details}</p>
                    <hr/>
                    {

                    }
                </div>
                </div>
                )
                
            }
            )}


<div>
        <h2>More From The Siren</h2>
      </div>
      <div
        className="underline"
        style={{ margin: "auto", marginTop: "0.5rem" }}
      ></div>

    <div>
        {data.filter((item)=>item.id !==path && item.category===categor).map((dataItem)=>(
            <div key={dataItem.id}>
            <Link to={`/article/${dataItem.id}`}>
                <img src={dataItem.image} alt='' />

            </Link>

            <h3>{dataItem.desc}</h3>
            <p>{dataItem.name}</p>

            <span
                style={{
                  fontSize: "0.8rem",
                  color: "black",
                  top: "0.5rem",
                  position: "relative",
                }}
              >
                Date:
              </span>

              <span
                style={{
                  color: "grey",
                  fontSize: "0.6rem",
                  marginLeft: "10px",
                  top: "0.5rem",
                  position: "relative",
                }}
              >
                TODAY
              </span>


            </div>
        ))}
    </div>

        </div>
    )
}
export default Article;