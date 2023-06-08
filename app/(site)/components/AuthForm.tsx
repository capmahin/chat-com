'use client';

import { useCallback, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

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


  const {
    register,
    handleSubmit,
    formState:{
      errors
    }
  } = useForm<FieldValues>({
    defaultValues:{
      name:'',
      email:'',
      password:''
    }
  });
    return (
        <div>Auth From!</div>
      );
}
 
export default AuthFrom;