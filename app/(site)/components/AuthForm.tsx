'use client';

import { useCallback, useState } from "react";

type Variant = 'LOGIN' | "REGISTER" ;

const AuthFrom = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(()=>{
        if(variant === 'LOGIN'){
          setVariant('REGISTER');
        }else{
          setVariant('LOGIN');
        }
  }, [variant]);
    return (
        <div>Auth From!</div>
      );
}
 
export default AuthFrom;