import Link from 'next/link'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

const NotFound = () => {
    const router = useRouter();

    useEffect(()=>{
    setTimeout(()=>{
        // router.go(1)
        router.push('/');
    }, 3000)
    }, []) 
    return (
        <div className="not-found">
        <h1>Oooops...</h1>
        <h2>Halaman ini tidak ditemukan</h2>
        <p>Silahkan kembali ke <Link href="/"><a>Beranda</a></Link> </p>
        </div>

    );
}
 
export default NotFound;