import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import Head from 'next/head'

const About = () => {
    return (
        <>
        <Head>
            <title>Deni Saputra | About</title>  
            <meta name="keywords" content="deni"/>
        </Head>

        <div>
            
            <h1>About</h1>
            <p> NAME    : DENI SAPUTA</p>
            <p> EMAIL   : deni97.saputra@gmail.com</p>
            <p> AGE     : 23</p>
            <p> RELIGION: MUSLIM</p>
            <p> ADDRESS : JL. GARUDA VI BLOK B11 NO. 21</p>
        </div>
        </>
    );
}
 
export default About;