import { Style } from "util"
import type { AppProps } from "next/app"
import { useEffect } from "react"
import { useRouter } from "next/router";

export default function MyApp({Component, pageProps}: AppProps){

    const router = useRouter();
    useEffect(() => {
        console.log(router.pathname);
        const username = localStorage.getItem("username");
        if(router.pathname != "./App"){
            if(username?.length == 0){
            }else{
                return
            }
        }else if(router.pathname === "./App" && username != null){
            router.push("/home")
        }
    },[])
    return <Component {...pageProps} />
}