'use client';

import { useState } from "react";

type Variant = 'LOGIN' | "REGISTER" ;

const AuthFrom = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);
    return (
        <div>Auth From!</div>
      );
}
 
export default AuthFrom;