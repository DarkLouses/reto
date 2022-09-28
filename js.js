// FUNCIONES QUE AHORRA LINEAS DE CODIGO //

function id (id) {

    return document.getElementById(id);

}

id('cantantes_1').addEventListener("click", sacar => {

    id('slider').classList.remove('transition');
    id('slider').classList.add('transition');

    id('slider').innerHTML = /*html*/`
        <div id="slide1">
            <ul class="slider1">
                <li><img src="imgCantantes/Aitana.jpg" alt=""></br>
                    <h2>Aitana</h2>
                    <p>1 proximos festivales</p>
                </li>
                <li><img src="imgCantantes/Alejandro Sanz.jpg" alt=""></br>
                    <h2>Alejandro Sanz</h2>
                    <p>1 proximos festivales</p>
                </li>
                <li><img src="imgCantantes/ana mena.jpg" alt=""></br>
                    <h2>Ana Mena</h2>
                    <p>1 proximos festivales</p>
                </li>
                <li><img src="imgCantantes/C. Tangana.jpg" alt=""></br>
                    <h2>C. Tangana</h2>
                    <p>1 proximos festivales</p>
                </li>
                <li><img src="imgCantantes/Damon Albarn.jpg" alt=""></br>
                    <h2>Damon Albarn</h2>
                    <p>1 proximos festivales</p>
                </li>
                <li><img src="imgCantantes/Sidecars.jpg""></br>
                <h2>Sidecars</h2>
                <p>1 proximos festivales</p>
                </li>
            </ul>
    </div>`;

});

id('cantantes_2').addEventListener("click", sacar => {

    id('slider').classList.add('transition');

    id('slider').innerHTML = /*html*/`
        <div id="slide2">
            <ul class="slider2">
                <li><img src="imgCantantes/David Bisbal.jpg" alt=""></br>
                    <h2>David Bisbal</h2>
                    <p>1 proximos festivales</p>
                </li>
                <li><img src="imgCantantes/ed_sheeran.webp" alt=""></br>
                    <h2>Ed Sheeran</h2>
                    <p>10 proximos festivales</p>
                </li>
                <li><img src="imgCantantes/Joaquín Sabina.jpg" alt=""></br>
                    <h2>Joaquín Sabina</h2>
                    <p>1 proximos festivales</p>
                </li>
                <li><img src="imgCantantes/Lola Indigo.jpg" alt=""></br>
                    <h2>Lola Indigo</h2>
                    <p>1 proximos festivales</p>
                </li>
                <li><img src="imgCantantes/Malú.jpg" alt=""></br>
                    <h2>Malú</h2>
                    <p>1 proximos festivales</p>
                </li>
                <li><img src="imgCantantes/Arnau Griso.jpg"></br>
                <h2>Arnau Griso</h2>
                <p>1 proximos festivales</p>
            </li>
            </ul>
        </div>`;
});

id('cantantes_3').addEventListener("click", sacar => {

    id('slider').classList.add('transition');

    id('slider').innerHTML = /*html*/`
    <div id="slide3">
    <ul class="slider3">
        <li><img src="imgCantantes/María José Llergo.jpg" alt=""></br>
            <h2>María José Llergo</h2>
            <p>1 proximos festivales</p>
        </li>
        <li><img src="imgCantantes/Morad.jpg" alt=""></br>
            <h2>Morad</h2>
            <p>1 proximos festivales</p>
        </li>
        <li><img src="imgCantantes/Nil Moliner.jpg" alt=""></br>
            <h2>Nil Moliner</h2>
            <p>1 proximos festivales</p>
        </li>
        <li><img src="imgCantantes/Rosalía.jpg" alt=""></br>
            <h2>Rosalía</h2>
            <p>1 proximos festivales</p>
        </li>
        <li><img src="imgCantantes/Rvfv.jpg" alt=""></br>
            <h2>Rvfv</h2>
            <p>1 proximos festivales</p>
        </li>
        <li><img src="imgCantantes/Marta Sánchez.jpg" alt=""></br>
          <h2>Marta Sánchez</h2>
          <p>1 proximos festivales</p>
      </li>
    </ul>
</div>
</div>`;
});