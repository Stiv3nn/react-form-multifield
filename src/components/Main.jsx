import {useState} from 'react';

const materieScolastiche = [
    {
        id: 1,
        titolo: "storia",
        autore: "autore 1",
        contenuto: "per non dimenticare",
        categoria: "II guerra mondiale"
    },

    {
        id: 2,
        titolo: "letteratura",
        autore: "autore 2",
        contenuto: "scritti",
        categoria: "dell'900" 
    },

    {
        id: 3,
        titolo: "filosofia",
        autore: "autore 3",
        contenuto: "il valore della vita",
        categoria: "chi siamo?"
    },

    {
        id: 4,
        titolo: "matematica",
        autore: "autore 4",
        contenuto: "problemi",
        categoria: "probabilità"
    },

    {
        id: 5,
        titolo: "fisica",
        autore: "autore 5",
        contenuto: "vettori",
        categoria: "esercizi"
    },

    {
        id: 6,
        titolo: "geografia",
        autore: "autore 6",
        contenuto: "clima",
        categoria: ""
    },

    {
        id: 7,
        titolo: "psicologia",
        autore: "autore 7",
        contenuto: "psiche umana",
        categoria: "traumi"
    },

    {
        id: 8,
        titolo: "chimica",
        autore: "autore 8",
        contenuto: "nomenclatura",
        categoria: "formule"
    }
];

const initialFormData = {
    titolo: "",
    autore: "",
    contenuto: "",
    categoria: ""
}

export default function subjectsList() {

    // State dei post
    const [bookPosts, setBookPosts] = useState(materieScolastiche);

    // State del form
    const [formData, setFormData] = useState(initialFormData);

    // Funzione del contenuto del form
    function handleFormData(e) {

        setFormData((currentFormData) => ({
            ...currentFormData,
            [e.target.name]: e.target.value
        }))
    }

    // Funzione dell'invio, submit
    function handleSunbmit(e) {
        e.preventDefault();
        setBookPosts((currentBookPosts) => [...currentBookPosts,
            {
                id:
                currentBookPosts.length === 0 ? 1 : currentBookPosts[currentBookPosts.length - 1].id + 1,
                ...formData
            }
        ])
        setFormData(initialFormData);
    }

    // Funzione del comando eliminazione post
    function removeBook(id) {
        const updateBook = bookPosts.filter((book) => {
            return book.id !== id;
        });
        setBookPosts(updateBook);
    }

    return(

    <>

        {/* FORM */}
        <h4>Form</h4>
        <form class="books-form" onSubmit="handleSubmit">

            {/* Nome libro */}
            <input

                type="text"
                name="titolo"
                onChange={handleFormData}
                value={formData.titolo}
                placeholder='Nome del libro'
        
            />

            {/* Autore */}
            <input

                type="text"
                name="autore"
                onChange={handleFormData}
                value={formData.autore}
                placeholder='Nome Autore'

            />

          {/* Contenuto */}
          <textarea

                type="text"
                name="contenuto"
                onChange={handleFormData}
                value={formData.contenuto}
                placeholder='Contenuto del libro'

            />  

            {/* Categoria */}
            <input

                type="text"
                name="categoria"
                onChange={handleFormData}
                value={formData.categoria}
                placeholder='Categoria del post'

            />

            {/* Bottone del form  */}
            <button>Aggiungi</button>

        </form>

        {/* Lista dei libri */}

        <ul class="book-posts">
            {
                bookPosts.map((book) => (
                    <li key ={book.id}>
                        <h2>{book.titolo}</h2>
                        <h3>{book.autore}</h3>
                        <p>{book.contenuto}</p>
                        <span>{book.categoria}</span>

                        {/* Bottone di rimozione del libro */}

                        <button class="remove-button" onClick={() => removePost(book.id)}>
                            Elimina Post
                        </button>
                    </li>
                ))
            }

        </ul>
    </>
  
  )
}
