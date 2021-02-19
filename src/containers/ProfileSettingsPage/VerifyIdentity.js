import React from "react";
import { usePassbase } from "./usePassbase";
import { Button } from "../../components";

export default function VerifyIdentity() {
  
   /* const handlePassbaseResult = (err, authKey) => {
      if (!err) {
        console.log(authKey);
      }
    }; */
  
    const { ref: passbaseRef, invokePassabe } = usePassbase({
      onFinished: handlePassbaseResult,
    });
  
    return (
        
      
             <div ref={passbaseRef} />
    )
  }