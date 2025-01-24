module.exports = {
    footer: "Sviluppato da dep",
    ping: {
      description: "Controlla la latenza del bot",
      response: "Ping in corso...",
      embed: {
        title: "Latenza del Bot",
        responseTime: "- Tempo di risposta del bot: **{latency}ms**",
        websocketPing: "- Ping WebSocket: **{ping}ms**",
        uptime: "- Uptime: **{uptime}**",
        footer: "Sviluppato da dep"
      }
    },
    addsong: {
      embed: {
          playlistNotFound: "Playlist non trovata",
          playlistNotFoundDescription: "- Playlist non trovata.",
          accessDenied: "Accesso negato",
          accessDeniedDescription: "- Non hai permesso di aggiungere canzoni a questa playlist.",
          songAdded: "Canzone aggiunta",
          songAddedDescription: "- La canzone **{songInput}** è stata aggiunta alla playlist **{playlistName}**.",
          error: "Errore",
          errorDescription: "- Si è verificato un errore durante l'aggiunta della canzone."
      }
  },
  allplaylists: {
    embed: {
        noPlaylistsFound: "Nessuna Playlist Trovata",
        noPlaylistsFoundDescription: "- Nessuna playlist pubblica disponibile al momento.",
        createdBy: "Creata da: {userId}",
        serverName: "Server: {serverName}",
        songs: "Canzoni: **{songCount}**",
        publicPlaylistsTitle: "Playlist Pubbliche (Pagina {currentPage}/{totalPages})",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante il recupero delle playlist."
    }
  },
  autoplay: {
    embed: {
        autoplayUpdated: "Autoplay aggiornato",
        autoplayStatus: "- Autoplay è stato **{status}** per questo server.",
        enabled: "attivato",
        disabled: "disattivato",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante l'aggiornamento di autoplay."
    },
    commandDescription: "Abilita o disabilita autoplay"
  },
  createplaylist: {
    embed: {
        playlistExists: "Playlist Esistente",
        playlistExistsDescription: "- Esiste già una playlist con questo nome.",
        playlistCreated: "Playlist Creata",
        playlistCreatedDescription: "- La playlist **{playlistName}** è stata creata.\n- Visibilità: **{visibility}**.",
        private: "Privata",
        public: "Pubblica",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante la creazione della playlist."
    },
    commandDescriptionName: "Inserisci il nome della playlist",
    commandDescriptionPrivate: "Imposta la playlist come privata (visibile solo a te)"
  },
  deleteplaylist: {
    embed: {
        playlistNotFound: "Playlist non trovata",
        playlistNotFoundDescription: "- Playlist non trovata.",
        accessDenied: "Accesso negato",
        accessDeniedDescription: "- Non hai permesso di eliminare questa playlist.",
        playlistDeleted: "Playlist eliminata",
        playlistDeletedDescription: "- La playlist **{playlistName}** è stata eliminata.",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante l'eliminazione della playlist."
    },
    commandDescriptionName: "Inserisci il nome della playlist"
  },
  deletesong: {
    embed: {
        playlistNotFound: "Playlist non trovata",
        playlistNotFoundDescription: "- Playlist non trovata.",
        songDeleted: "Canzone eliminata",
        songDeletedDescription: "- La canzone **{songName}** è stata eliminata dalla playlist **{playlistName}**.",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante l'eliminazione della canzone."
    },
    commandDescriptionPlaylist: "Inserisci il nome della playlist",
    commandDescriptionSong: "Inserisci il nome della canzone"
  },
  filters: {
    embed: {
        error: "Errore",
        noPlayer: "- Nessun player attivo trovato. Per favore, riproduci una canzone prima.",
        wrongChannel: "- Devi essere nello stesso canale vocale del bot per usare questo comando.",
        filtersCleared: "Tutti i filtri sono stati rimossi.",
        invalidFilter: "Filtro selezionato non valido.",
        filterApplied: "Filtro **{filter}** è stato applicato.",
        errorProcessing: "- Si è verificato un errore durante l'elaborazione della tua richiesta."
    },
    commandDescription: "Seleziona un filtro da applicare"
  },
  help: {
    embed: {
        title: "📜 Menu di Aiuto {botName}",
        author: "Aiuto",
        description: `
        **Benvenuto su {botName}!**

        > Il tuo compagno musicale definitivo su Discord.
        > Di seguito trovi informazioni dettagliate sul bot:
                
        **📂 Comandi:** {totalCommands}
        **🌐 Server:** {totalServers}
        **👥 Utenti:** {totalUsers}
        **⏳ Uptime:** {uptimeString}
        **📡 Ping:** {ping}ms
        `,
        availableCommands: "Comandi Disponibili",
        noDescription: "Nessuna descrizione disponibile.",
        noCommands: "Nessun comando trovato.",
        error: "❌ Si è verificato un errore durante il recupero del menu di aiuto."
    },
    commandDescription: "Ottieni informazioni sul bot"
  },
  myplaylists: {
    embed: {
        noPlaylistsFound: "Nessuna Playlist Trovata",
        noPlaylistsFoundDescription: "- Non hai creato alcuna playlist.",
        yourPlaylistsTitle: "Le tue Playlist (Pagina {currentPage}/{totalPages})",
        visibility: "Visibilità",
        private: "Privata",
        public: "Pubblica",
        server: "Server",
        songs: "Canzoni",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante il recupero delle tue playlist."
    }
  },
  nowPlaying: {
    embed: {
        error: "Errore",
        noSong: "- Non c'è nessuna canzone in riproduzione.",
        nowPlaying: "Ora in Riproduzione!",
        errorDescription: "- Si è verificato un errore durante l'elaborazione della tua richiesta."
    }
  },
  pause: {
    embed: {
        error: "Errore",
        noActivePlayer: "- Nessun player attivo trovato.",
        paused: "In Pausa!",
        pausedDescription: "**- La riproduzione è stata messa in pausa!**",
        errorDescription: "- Si è verificato un errore durante l'elaborazione della tua richiesta."
    }
  },
  play: {
    embed: {
        error: "Errore",
        noVoiceChannel: "- Devi essere in un canale vocale per usare questo comando.",
        noLavalinkNodes: "- Nessun nodo Lavalink disponibile per elaborare la richiesta.",
        noResults: "- Nessun risultato trovato.",
        requestUpdated: "Richiesta Aggiornata!",
        successProcessed: "- La tua richiesta è stata elaborata con successo.\n- Usa i pulsanti per controllare la riproduzione",
        errorProcessing: "- Si è verificato un errore durante l'elaborazione della tua richiesta."
    },
    commandDescription: "Inserisci il nome della canzone / link o playlist"
  },
  playCustomPlaylist: {
    embed: {
        error: "Errore",
        noVoiceChannel: "- Devi essere in un canale vocale per usare questo comando.",
        playlistNotFound: "- Playlist non trovata.",
        accessDenied: "Accesso negato",
        noPermission: "- Non hai permesso di riprodurre questa playlist privata.",
        emptyPlaylist: "- La playlist è vuota.",
        playingPlaylist: "Riproduzione Playlist!",
        playlistPlaying: "- La playlist **{playlistName}** è ora in riproduzione.\n- Usa i pulsanti per controllare la riproduzione",
        errorResolvingSong: "- Errore nella risoluzione della canzone.",
        errorPlayingPlaylist: "- Si è verificato un errore durante la riproduzione della playlist."
    },
    commandDescription: "Inserisci il nome della playlist"
  },
  queue: {
    embed: {
        queueEmpty: "Coda Vuota",
        queueEmptyDescription: "- La coda è attualmente vuota. Aggiungi canzoni usando il comando `/play`.",
        currentQueue: "Coda Attuale",
        noMoreSongs: "- Non ci sono più canzoni nella coda.",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante il recupero della coda."
    }
  },
  remove: {
    embed: {
        queueEmpty: "Coda Vuota",
        queueEmptyDescription: "- La coda è attualmente vuota. Aggiungi canzoni usando il comando `/play`.",
        invalidPosition: "Errore",
        invalidPositionDescription: "- Posizione non valida. Inserisci un numero tra 1 e {queueLength}.",
        songRemoved: "Canzone Rimossa",
        songRemovedDescription: "- La canzone: **{songTitle}** è stata rimossa dalla coda.",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante la rimozione della canzone dalla coda."
    }
  },
  resume: {
    embed: {
        noActivePlayer: "Errore",
        noActivePlayerDescription: "- Nessun player attivo trovato.",
        resumed: "Ripresa!",
        resumedDescription: "**- La riproduzione è stata ripresa!**",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante l'elaborazione della tua richiesta."
    }
  },
  showsongs: {
    embed: {
        error: "Errore",
        playlistNotFound: "- Playlist non trovata.",
        accessDenied: "Accesso negato",
        noPermission: "- Non hai permesso di visualizzare questa playlist privata.",
        noSongs: "- Nessuna canzone in questa playlist.",
        songsInPlaylist: "Canzoni in {playlistName}",
        songsInPlaylistPage: "Canzoni in {playlistName} (Pagina {currentPage}/{totalPages})",
        errorDescription: "- Si è verificato un errore durante la visualizzazione delle canzoni."
    }
  },
  shuffle: {
    embed: {
        queueEmpty: "Coda Vuota",
        queueEmptyDescription: "- La coda è attualmente vuota. Aggiungi canzoni usando il comando `/play`.",
        queueShuffled: "Coda Mescolata",
        queueShuffledDescription: "- La coda è stata mescolata con successo.",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante la mescolatura della coda."
    }
  },
  skip: {
    embed: {
        noActivePlayer: "Errore",
        noActivePlayerDescription: "- Nessun player attivo trovato.",
        songSkipped: "Canzone Saltata!",
        songSkippedDescription: "**- Il player riprodurrà la prossima canzone!**",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante l'elaborazione della tua richiesta."
    }
  },
  stop: {
    embed: {
        noActivePlayer: "Errore",
        noActivePlayerDescription: "- Nessun player attivo trovato.",
        musicHalted: "Musica Interrotta!",
        musicHaltedDescription: "**- La riproduzione è stata interrotta e il player distrutto!**",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante l'elaborazione della tua richiesta."
    }
  },
  support: {
    embed: {
        authorName: "Server di Supporto",
        description: "➡️ **Unisciti al nostro server Discord per supporto e aggiornamenti:**\n- Discord - {supportServerLink}\n\n➡️ **Seguici su:**\n- X - {githubLink}\n- TikTok - {replitLink}\n- YouTube - {youtubeLink}",
        error: "Errore",
        errorDescription: "- Si è verificato un errore durante l'elaborazione della tua richiesta."
    }
  },
  volume: {
    embed: {
        noActivePlayer: "Errore",
        noActivePlayerDescription: "- Nessun player attivo trovato.",
        volumeUpdated: "Volume Aggiornato!",
        volumeUpdatedDescription: "- Il volume è stato impostato su **{volume}%**",
        error: "Errore",
        errorDescription: "Si è verificato un errore durante l'impostazione del volume."
    },
    volumeRangeError: "Il livello del volume deve essere tra 0 e 100."
  },
    errors: {
      noPermission: "Non hai permesso di usare questo comando.",
      generalError: "- Errore: {error}"
    }
  };
