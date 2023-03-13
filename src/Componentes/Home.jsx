import '../css/home.css';
/* Importamos los datos tipo JSON */
import data from '../datos/data';


const Home = () => {
    return (
        <div className="fondo m-5">
            <h1 className="m-5">
                Home Page
            </h1>
            <div>
                {data.map((data) =>{
                    return(
                        <article key={data.id}>
                            <h3>
                                {data.name}
                            </h3>
                            <img src={data.image} alt={data.name} />
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;