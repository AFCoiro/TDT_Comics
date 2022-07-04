import { Skeleton } from "@mui/material";
import { useState } from "react";

const MySkeleton =({children})=>{
    const [loading, setLoading] = useState(true);
    let iMap = [0,1,2,3];
     return(
         <>{loading ?(
             iMap.map(()=>{
             return(
             <Skeleton
             key={iMap}
             variant="rectangular"
             animation="wave"
             width='23%'
             sx={{marginTop:'5%'}}
             height={350}/>)})
         ):(
             <div setLoading={setLoading}>{children}</div>
     )} </>
         )    
 }
 export default MySkeleton;