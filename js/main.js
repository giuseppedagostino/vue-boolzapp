// MILESTONE 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

var app = new Vue({
  el: "#root",
  data: {
    contacts: [

      // primo contatto
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
          },
          {
            date: "14/12/2020 18:50:00",
            text: "Va meglio dopo il recap di Adriano?",
            status: "received"
          },
          {
            date: "14/12/2020 22:06:00",
            text: "Senti sì, va meglio, sono finalmente riuscito a gestire la classe dei messaggi e la comparsa dei messaggi della chat selezionata, ma sto ancora cercando di capire come gestire l'active!",
            status: "sent"
          }
        ]
      },

      // secondo contatto
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

      // terzo contatto
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

      // quarto contatto
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
    filteredContacts: [],
    // questo è l'utente selezionato, inizialmente vuoto
    selectedUser: {},
    // l'index di seguito verrà utilizzato per attribuire la classe active al contatto selezionato, l'ho inizializzato l'indice a zero perchè sennò crashava tutto rilevando l'indice null per comporre l'header della chat
    activeIndex: 0,
    // definisco l'oggetto nuovo messaggio
    newMessageText: "",
    inputContact: "",

  },
  created: function() {
    this.filteredContacts = this.contacts;
  },
  methods: {
    // prende il nome dell'avatar dal data
    getAvatar: function(contact) {
      return `img/${contact.avatar}.png`;
    },
    // prende l'utente corretto
    getUser: function(indexUser) {
      this.selectedUser = this.contacts[indexUser];
      console.log(this.selectedUser);
    },
    // attribuisce la classe active alla chat cliccata
    activeContact: function(index) {
      this.activeIndex = index;
    },

    addNewMessage: function() {
      var newUserMessage = {
        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        text: this.newMessageText,
        status: "sent",
      };
      console.log(newUserMessage);
      // pusho nell'array di messaggi cosicchè venga sincronizzato e stampato
      if (this.newMessageText != "") {
        this.contacts[this.activeIndex].messages.push(newUserMessage);
        this.newMessageText = "";
      };
      // risposta automatica del bot
      setTimeout(function() {
        var newBotMessage = {
          date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
          text: "Ok, va bene.",
          status: "received",
        };
        // pusho tra i messaggi anche quello del bot
        app.contacts[app.activeIndex].messages.push(newBotMessage);
      }, 3000);
    },

    searchContact: function() {
      // Prendo il valore dall'input
      // Scorro tutti i miei contatti (quale usare? map, filter, forEach) => filter
      // Trovo tutti i contatti che hanno come nome quello che ho scritto nell'input
          // Devoconfrotare nome di ogni contatto con inputContact
      // Stampo i contatti filtrati
      console.log(this.inputContact);
      if (this.inputContact != "") {
        this.filteredContacts = this.contacts.filter((contact) => {
          return contact.name.toLowerCase().includes(this.inputContact.toLowerCase());
        });
      } else {
        this.filteredContacts = this.contacts;
      }
    }
  }
});
