import style from '../../styles/Project.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	return {
		props: { pro: data }
	}
}

const Pro = ({pro}) => {
    return (
        <div>
            <h2>All Name</h2>
            {pro.map(pro=>(
            	<Link href={'/pro/' + pro.id} key={pro.id}>
            		<a className={style.single}>
            			<h3>{pro.name}</h3>
            		</a>
            	</Link>
            	))}
        </div>
    );
}
 
export default Pro;