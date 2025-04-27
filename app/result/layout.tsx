import ResultWrapper from "@/components/ResultWrapper";
import React from "react";

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <ResultWrapper>
        {children}
    </ResultWrapper>
  )
}

export default Layout;
