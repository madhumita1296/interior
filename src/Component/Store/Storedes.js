import React from 'react';
import { useParams } from "react-router-dom";
import StoreJSON from "../Store.json";

const Storedes = () => {

    let { store_i, store_o,store_d } = useParams();
    console.log("Recived from url in subitem", store_o);

    let subo = StoreJSON.Store.find((data) => data.Store_id === store_i);
    console.log("sub store:", subo);
  
    let subs = subo.sub_store.find((data) => data.sub_id === store_o);
    console.log("sub store:", subs);

    let sdes = subs.pro_store.find((data) => data.pro_id === store_d);
    console.log("Par Product:", sdes);
  return (
    <>
    <div>
        <img src={sdes.pro_img}/>
        <h1>{sdes.pro_name}</h1>
      </div>
    </>
  )
}

export default Storedes