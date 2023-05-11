window.onload = () => {
    const crearBtn = document.querySelector("button#botonAgregar");

    const form = document.querySelector("form.formulario.card");

    crearBtn.addEventListener('click', async (e) => {
        e.preventDefault()

        const body = {
            title: form.title.value,
            awards: form.awards.value,
            rating: form.rating.value,
            release_date: form.release_date.value,
            length: form.length.value,
            genre_id: 1
        }

        const response = await fetch("http://localhost:3031/api/movies/create", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json()) 
            
            window.location.href("/home.html")
    })

}