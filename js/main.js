// MILESTONE 5
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
// Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

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
    // array di contatti filtrati, inizialmente vuoto
    filteredContacts: [],
    // utente selezionato, inizialmente vuoto
    selectedUser: {},
    // l'index di seguito verrà utilizzato per attribuire la classe active al contatto selezionato, inizializzato a zero (primo contatto)
    activeIndex: 0,
    // il testo inserito nell'input del chat footer viene salvato in questa variabile
    newMessageText: "",
    // il nome del contatto che si vuole cercare, digitato nel #contacts main #search viene salvato in questa variabile
    inputContact: "",

  },
  // le funzioni created vengono chiamate immediatamente all'avvio dell'app
  // nell'html il v-for cerca i contatti nell'array dei contatti filtrati, che inizialmente è vuoto: non mostrerebbe nulla se nel created non lo rendessi uguale a tutto l'array di contatti, per mostrarli tutti all'inizio
  created: function() {
    this.filteredContacts = this.contacts;
  },
  methods: {
    // prende il nome dell'avatar dal data, utilizzata nella ul del contact main
    getAvatar: function(contact) {
      return `img/${contact.avatar}.png`;
    },
    // prende l'utente corretto dall'array di contatti sfruttando l'indice, per mostrare i messaggi corretti nella chat
    getUser: function(indexUser) {
      this.selectedUser = this.contacts[indexUser];
      console.log(this.selectedUser);
    },
    // attribuisce la classe active alla chat cliccata per farle cambiare aspetto assieme al ternario
    activeContact: function(index) {
      this.activeIndex = index;
    },
    // aggiunge il nuovo oggetto messaggio dell'array, lo stampa in chat e stampa anche la risposta automatica dopo 3 secondi
    addNewMessage: function() {
      // creo l'oggetto
      var newUserMessage = {
        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        // ovviamente prendo il testo inserito dalla variabile in data
        text: this.newMessageText,
        status: "sent",
      };
      console.log(newUserMessage);
      // pusho nell'array di messaggi cosicchè venga sincronizzato e stampato
      if (this.newMessageText != "") {
        this.contacts[this.activeIndex].messages.push(newUserMessage);
        // svuoto il campo
        this.newMessageText = "";
      };
      // risposta automatica del bot
      setTimeout(function() {
        var newBotMessage = {
          date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
          text: "Ok, va bene.",
          status: "received",
        };
        // pusho tra i messaggi anche quello del bot per stamparla
        app.contacts[app.activeIndex].messages.push(newBotMessage);
      }, 3000);
    },
    // effettua una ricerca tra i contatti (sezione sinistra)
    searchContact: function() {
      // Prendo il valore dall'input, scorro i miei contatti con le funzioni filter ed includes e trovo tutti i contatti che hanno lettere/parole inserite nell'input
          // Devo confrotare nome di ogni contatto con inputContact
      // Stampo i contatti filtrati in automatico grazie alla sincronizzazione del v-for con l'array di contatti filtrati inserita in precedenza
      console.log(this.inputContact);
      if (this.inputContact != "") {
        this.filteredContacts = this.contacts.filter((contact) => {
          return contact.name.toLowerCase().includes(this.inputContact.toLowerCase());
        });
      } else {
        // se l'input è vuoto, ritorna tutti i contatti presenti
        this.filteredContacts = this.contacts;
      }
    }

  }
});
