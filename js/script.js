/*
Partendo dal markup allegato, rifare lo slider ma questa volta usando Vue.
Bonus:
1- al click su uno dei pallini mostrare l’immagine in posizione corrispondente
2- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
Consigli del giorno:
Leggete sempre la documentazione, partite dalle cose basilari per poi aggiungere complessità.
Ricordiamo sempre che è necessario capire bene prima che dati dobbiamo andare a manipolare.
*/


const app = new Vue({
    el: '#app',
    data: {
        //creare un array contenente le immagini
        images: [
            "./images/image1.jpg",
            "./images/image2.jpg",
            "./images/image3.jpg",
            "./images/image4.jpg"
        ],
    },
    methods:{
        // creare una funzione che al click aggiunge +1 alla foto


        // creare una funzione che al click sottrae -1 alla foto
    }

  })