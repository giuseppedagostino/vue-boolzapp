// MILESTONE 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato

var app = new Vue({
  el: "#root",
  data: {
    contacts: [

      // primo avatar
      {
        name: "Gianluca",
        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Ciao Giuseppe, hai studiato la teoria di Vue?",
            status: "received"
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Come procede con l'esercizio?",
            status: "received"
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Si Gianluca ho studiato e per ora con l'esercizio tutto apposto... trattandosi solo di layout!",
            status: "sent"
          },
          {
            date: "12/12/2020 17:13:30",
            text: "Come non detto, la seconda milestone è un vero disastro...",
            status: "sent"
          }
        ]
      },

      // secondo avatar
      {
        name: "Chiara",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent"
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received"
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent"
          },
        ]
      },

      // terzo avatar
      {
        name: "Michele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received"
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent"
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received"
          },
        ]
      },

      // quarto avatar
      {
        name: "Luisa",
        avatar: "_4",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent"
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received"
          }
        ]
      },

    ],

    messageClass: "sent_message",
    activeItem: "active",

  },
  computed: {
    // lastItem: function() {
    //   return this.contacts.slice(-1)[0];
    // }
  },
  methods: {
    // prende il nome dell'avatar dal data
    getAvatar: function(contact) {
      return `img/${contact.avatar}.png`;
    }
  }
});
