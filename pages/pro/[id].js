export const getStaticPaths = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(pro =>{
        return{
            params: {id: pro.id.toString()}
        }
    })

    return {
       paths,
       fallback: false
    }

}

export const getStaticProps = async (context)=>{
const id = context.params.id;
const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
const data = await (await res).json();

return {
    props:{pro: data}
}
}


const Details = ({pro}) => {
    return (
        <div>
            <h1>{pro.name}</h1>
            <p>{pro.email}</p>
            <p>{pro.website}</p>
            <p>{pro.address.city}</p>
        </div>
    );
}
 
export default Details;