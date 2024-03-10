import Image from "next/image";

export const Logo = () => {
    return ( 

        <Image 
            className="max-w-[100%] max-h-[100%] object-cover"
            height={400}
            width={400}
            alt="logo"
            src="/logo.svg"
        />

     );
}
 
export default Logo;