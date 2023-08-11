import { useEffect } from "react"
import { useDispatch } from "react-redux"
import db from "../firebase"
import { collection, getDocs } from "firebase/firestore"

import { setMovies } from "../features/movie/movieSlice"

import ImageSlider from "./ImageSlider"
import CardViewers from "./CardViewers"
import MovieSections from "./MovieSections"

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "movies"));
        const newRecommends = [];
        const newNewDisneys = [];
        const newSoon = [];
  
        querySnapshot.forEach((doc) => {
          switch (doc.data().type) {
            case "recommended":
              newRecommends.push({ id: doc.id, ...doc.data() });
              break;
            case "new":
              newNewDisneys.push({ id: doc.id, ...doc.data() });
              break;
            case "soon":
              newSoon.push({ id: doc.id, ...doc.data() });
              break;
          }
        });
  
        dispatch(
          setMovies({
            recommended: newRecommends,
            newDisney: newNewDisneys,
            soon: newSoon,
          })
        );
      } catch (error) {
        console.log(error.message);
      }
    };
  
    fetchData();
  }, []);

  return (
    <main className="homepage">
      <ImageSlider />
      <CardViewers />
      <MovieSections title={"Recomendadas para ti"} type={"recommended"}/>
      <MovieSections title={"Nuevo en Disney+"} type={"new"}/>
      <MovieSections title={"Nuevo en Disney+"} type={"soon"} bigSection={true}/>
    </main>
  )
}

export default Home