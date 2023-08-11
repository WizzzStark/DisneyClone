import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectRecommended, selectNewDisney, selectSoon } from '../features/movie/movieSlice'

const MovieSections = ({title, type, bigSection}) => {


    let movies;

    if (type === 'new') {
        movies = useSelector(selectNewDisney);
    } else if (type === 'recommended'){
        movies = useSelector(selectRecommended);
    } else{
        movies = useSelector(selectSoon);
    }

    return (
        <section className="pb-[26px]">
            <h3 className='text-[20px] font-semibold pt-3 pb-3 pl-1 select-none'>{title}</h3>
            <div className="grid gap-[25px] grid-cols-5">
                {movies && movies.map((movie, key) => (
                    <div key={key} className={`${bigSection ? 'pt-[130%]' : 'pt-[56%]'} rounded-[10px] shadow-lg cursor-pointer overflow-hidden relative transition-all duration-[250] border-[3px] border-gray-700 hover:border-white hover:transition-transform hover:scale-[105%]`}>
                        <Link to={'/detail/' + movie.id}>
                            <img src={movie.cardImg} alt={movie.title} className=' inset-0 block h-full w-full z-10 top-0 object-cover opacity-100 absolute transition-opacity duration-500'/>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MovieSections