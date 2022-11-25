
import React, { FC } from "react";
import preloader from "../preloader/preloader.gif";
import { PreloaderWrapper } from "../style";

const Preloader: FC = (props:any) => {
   return <PreloaderWrapper><img src={preloader} /></PreloaderWrapper>
};
export default Preloader;