import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return (
        <nav>
        <div className="logo">
           <Image src="/gmb.png" width={77} height={77}/> 
           </div>
           
           <Link href="/"><a>HOME</a></Link>
           <Link href="/pro"><a>LIST NAME</a></Link>
           <Link href="/about"><a>ABOUT</a></Link> 
                    
            
        </nav>
    );
}
 
export default Navbar;