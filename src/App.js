import "./App.css";
import MovieList from "./Components/MovieList";
//import Rate from "./Components/Rate";
import Filter from "./Components/Filter";
import { useState } from "react";
import AddMovie from "./Components/AddMovie";
import Footer from "./Components/Footer";
const movies = [
  {
    id: "1",
    title: "Thor: Love and Thunder",
    language: "en",
    description:
      "Alors que Thor est en pleine introspection et en quête de sérénité, sa retraite est interrompue par un tueur galactique connu sous le nom de Gorr, qui s’est donné pour mission d’exterminer tous les dieux. Pour affronter cette menace, Thor demande l’aide de Valkyrie, de Korg et de son ex-petite amie Jane Foster, qui, à sa grande surprise, manie inexplicablement son puissant marteau, le Mjolnir. Ensemble, ils se lancent dans une dangereuse aventure cosmique pour comprendre les motivations qui poussent Gorr à la vengeance et l’arrêter avant qu’il ne soit trop tard.. ",
    posterURL:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/kSMarEm3ESOOr11dzsep2RZ1ClD.jpg",
    rating: "5",
    release_date: "2022-07-06",
  },
  {
    id: "2",
    title: "Beast (2022)",
    language: "en",
    description:
      "Le Dr. Nate Daniels, revient en Afrique du Sud, où il a autrefois rencontré sa femme aujourd’hui décédée, pour y passer des vacances prévues de longue date avec ses deux filles dans une réserve naturelle, tenue par Martin Battles, un vieil ami de la famille, biologiste spécialiste de la vie sauvage. Mais ce repos salvateur va se transformer en épreuve de survie quand un lion assoiffé de vengeance, unique rescapé de la traque sanguinaire d’ignobles braconniers, se met à dévorer tout humain sur sa route et prend en chasse le docteur et sa famille. ",
    posterURL:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/kmWpbWYu4gT7wIV4amP0gMDjNHj.jpg",
    rating: "5",
    release_date: "2022-08-19",
  },

  {
    id: "3",
    title: "Pinocchio (2022)",
    language: "en",
    description:
      "La célèbre histoire de ce pantin de bois, Pinocchio, bien décidé à vivre la plus palpitante des aventures pour devenir un vrai petit garçon. ",
    posterURL:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/nch8NTH45TBH4JyPuugttPzoxau.jpg",
    rating: "4",
    release_date: "2022-08-08",
  },
  {
    id: "4",
    title: "Krypto et les Super-Animaux (2022)",
    language: "en",
    description:
      "Krypto, le super-chien de Superman, se trouve face à un défi immense : sauver son maître, enlevé par Lex Luthor et son maléfique cochon d’inde Lulu. Pour cela, il devra faire équipe avec une bande d’animaux au grand cœur mais plutôt maladroits. ",
    posterURL:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9Nf7UH8uExdV2Ta4UupmnYjCkYc.jpg",
    rating: "3",
    release_date: "2022-07-29",
  },
  {
    id: "5",
    title: "Wanted : Choisis ton destin (2008)",
    language: "en",
    description:
      "Wesley Gibson a toutes les raisons du monde d'être malheureux. Tyrannisé par son patron, trompé et humilié par sa petite amie, ce jeune loser, victime d'angoisses récurrentes, ne survit qu'à coup de tranquillisants et de plateaux repas macrobiotiques. C'est alors qu'une fille de rêve fait irruption dans sa triste vie. Fox est une tueuse d'élite, affiliée à une société secrète : la Fraternité, dont les membres se sont érigés en instruments du Destin. L'heure est venue pour Wes de prendre la suite de son père et de découvrir en lui-même des ressources, une soif de violence, des réflexes et des aptitudes insoupçonnés. Sous la tutelle de Sloan et de Fox, Wes commence un entraînement rigoureux qui va faire de lui le meilleur assassin de la Fraternité... ",
    posterURL:
      "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/j0YQlXsfcYm5WQJS7i1XZWI5amk.jpg",
    rating: "2",
    release_date: "2008-07-06",
  },
];

function App() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  //const filtrage = (text) => {};

  const add = (newMovie) => {
    movies.push(newMovie);

    console.log(movies);
    console.log(newMovie);
  };

  return (
    <>
      <div className="header">
        <Filter
          text={text}
          setText={setText}
          rating={rating}
          setRating={setRating}
        />
        <nav>
          <ul></ul>
          <hr />
        </nav>
      </div>
      <div className="container">
        <MovieList
          movies={movies.filter(
            (movie, i) =>
              movie.title.toLowerCase().includes(text.toLowerCase()) &&
              movie.rating == rating
          )}
        />
        <AddMovie add={add} />
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
