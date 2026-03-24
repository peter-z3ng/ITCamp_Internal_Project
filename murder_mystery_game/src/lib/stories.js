export const STORIES = {
  sterling_estate: {
    id: 'sterling_estate',
    title: 'The Murder at the Sterling Estate',

    casefile: {
      headline: 'The Master of the House Found Dead in His Study',
      overview: `
Reginald Sterling, the iron-fisted master of the Sterling estate, was discovered dead in his private study at 2:00 PM. 

It was supposed to be a quiet afternoon. His wife was tending to matters indoors, the staff were going about their daily routines, and his son was expected for a visit. But behind closed doors, a violent confrontation took place. 

The killer tried to cover their tracks, slipping through the shadows of the estate and putting on a performance for the rest of the household. Yet, everyone in the house has their own secrets, and the estate's staff—from the meticulous maid to the quiet gardener—each hold a piece of the puzzle.

Someone in the Sterling household thought they could get away with murder.
      `,
      objective: `
Interrogate the family and staff. Pay close attention to their timelines, their physical state, and what they claim to have seen. Pierce through their personal lies to uncover the hidden truth.

When you are certain, make your accusation.
      `
    },

    truth: {
      murderer: 'son',
      weapon: 'heavy paperweight',
      motive: 'Rage over discovering his father was changing the will to cut him off entirely.'
    },

    setting: {
      location: 'The Sterling Estate',
      atmosphere: 'A sprawling, wealthy mansion with manicured gardens, a grand driveway, and a quiet, tense interior.',
      time: 'Early afternoon, a cool day. The critical window is between 1:10 PM and 2:00 PM.'
    },

    backstory: {
      familyHistory: 'The Sterling fortune is vast, but the family dynamics are strained by greed and emotional distance.',
      hiddenScandal: 'Arthur, the sole heir, is bleeding money at high-stakes clubs and is desperate for cash.',
      financialPressure: 'Reginald was in the process of rewriting his will to protect his assets from his son.',
      recentEvent: 'Arthur showed up unannounced to "borrow" money from his father\'s safe.'
    },

    timeline: {
      13.10: 'Arthur enters via the Side Gate. Eleanor sees him from the Dining Hall.',
      13.30: 'Violent argument in the Study. Arthur murders Reginald.',
      13.35: 'Eleanor, frightened by the shouting, retreats to the kitchen with Maria.',
      13.45: 'Arthur tries to clean up. Gary the Gardener sees his shadow in the Study window.',
      13.50: 'Arthur slips out the Side Gate, leaving it ajar.',
      13.55: 'Arthur "arrives" at the front door. Tommy notices his muddy shoes. Gary locks the Side Gate.',
      14.00: 'Maria brings tea to the Study, finds the body, and screams.'
    },

    victim: {
      name: 'Reginald Sterling',
      role: 'Master of the Estate',
      personality: 'Strict, wealthy, commanding.',
      reputation: 'A successful businessman who ruled his household with an iron fist.'
    },

    environmentClues: {
      study: [
        'A heavy paperweight is missing from the desk.',
        'Signs of frantic, rushed cleaning on the desk and floor.'
      ],
      exterior: [
        'The Side Gate was found unlocked and slightly ajar at 1:55 PM.',
        'Dark garden mulch is present on the front foyer floor.'
      ]
    },

    characters: {
      wife: {
        id: 'wife',
        name: 'Eleanor Sterling',
        role: 'The Wife',
        personality: 'Sophisticated, Stoic, Observant.',
        alibi: 'In the kitchen with the maid getting calming tea.',
        secrets: [
          'She has been secretly siphoning money from Reginald\'s accounts.',
          'She heard the violent shouting from the study but was too afraid to intervene.'
        ],
        lies: [
          'Claims she was in the greenhouse all afternoon to avoid admitting she was near the study.'
        ],
        knows: [
          'Saw Arthur walking outside at 1:10 PM but he never came through the front door.'
        ],
        subtleClues: {
          surface: [
            'Visibly upset, shaking, and pale long before the body was discovered.'
          ]
        },
        relationships: {
          son: 'Frets over his happiness, blindly protective.',
          maid: 'Relies on her for emotional support and comfort.'
        }
      },

      son: {
        id: 'son',
        name: 'Arthur Sterling',
        role: 'The Son',
        personality: 'Arrogant, Desperate, Sharp.',
        alibi: 'Claims his car broke down on the back dirt road and he jogged to the house.',
        secrets: [
          'He used an old key to sneak in through the side gate at 1:10 PM.',
          'He killed his father with a paperweight after learning about the will.'
        ],
        lies: [
          'Claims the garden mulch and sweat are from jogging through the woods after his car died.',
          'Denies ever being inside the study before 2:00 PM.'
        ],
        knows: [
          'Knows the contents of the new will his father was drafting.'
        ],
        subtleClues: {
          surface: [
            'Sweating profusely despite the cool weather.',
            'Keeps checking his flashy luxury watch nervously.'
          ]
        },
        relationships: {
          victim: 'Deep resentment over money and control.',
          driver: 'Acts overly casual with him to establish his fake arrival time.'
        }
      },

      maid: {
        id: 'maid',
        name: 'Maria Rossi',
        role: 'The Maid',
        personality: 'Meticulous, Observant, Sharp-tongued.',
        alibi: 'In the kitchen preparing afternoon tea from 1:35 PM to 2:00 PM.',
        secrets: [
          'She was snooping through Reginald\'s bedroom at 12:30 PM looking for loose cash.'
        ],
        lies: [
          'Lies about her exact cleaning schedule to cover up her snooping.'
        ],
        knows: [
          'Saw a car matching Arthur\'s hidden behind trees down the road at 12:30 PM.',
          'Noticed the locked side gate was wide open at 1:30 PM.'
        ],
        subtleClues: {
          surface: [
            'Gets highly defensive if asked about the master bedroom.'
          ]
        },
        relationships: {
          wife: 'Acts as her confidant, but secretly judges her.',
          gardener: 'Noticed his break schedule to sneak into the upstairs rooms.'
        }
      },

      driver: {
        id: 'driver',
        name: 'Thomas "Tommy" Miller',
        role: 'The Driver',
        personality: 'Loyal, Stoic, Apathetic.',
        alibi: 'In the garage buffing the car wax and listening to the radio.',
        secrets: [
          'Reginald had threatened to fire him next week because his eyesight is failing.'
        ],
        lies: [
          'Might pretend he didn\'t hear the argument because he resents Reginald.'
        ],
        knows: [
          'Arthur arrived on foot looking disheveled and out of breath at 1:50 PM.',
          'Arthur ducked behind a hedge to wipe his face before approaching the door.'
        ],
        subtleClues: {
          surface: [
            'Squints frequently; cleans his glasses more than necessary.'
          ]
        },
        relationships: {
          son: 'Observes his erratic behavior but doesn\'t usually intervene.'
        }
      },

      gardener: {
        id: 'gardener',
        name: 'Gary',
        role: 'The Gardener',
        personality: 'Quiet, Introverted, Nature-loving.',
        alibi: 'Tending to the flowers in the West Garden.',
        secrets: [
          'He avoids social interaction at all costs, which is why he didn\'t report the open gate immediately.'
        ],
        lies: [
          'Initially denies seeing anything near the study to avoid getting involved with the police.'
        ],
        knows: [
          'Saw the usually locked side gate slightly ajar and locked it himself around 1:55 PM.',
          'Saw a distinct shadow moving frantically inside the study at 1:45 PM.'
        ],
        subtleClues: {
          surface: [
            'Keeps his head down, avoids eye contact when spoken to, grips his hat tightly.'
          ]
        },
        relationships: {
          maid: 'Avoids her; works his schedule around others to be entirely alone.'
        }
      }
    }
  },
  knives_out: {
    id: 'knives_out',
    title: 'The Blood on the Estate',

    casefile: {
      headline: 'Famed Mystery Author Found Dead in His Study',
      overview: `
Harlan, a massively wealthy crime novelist, was found dead in his attic study the morning after his 85th birthday party. His throat was slit, and the knife was still in his hand. 

At first glance, it looks like a tragic suicide. However, an anonymous tip brought the police back to the estate. The family had been gathering to celebrate, but tensions were high, and Harlan had been having private, heated conversations with his children all night. 

The most crucial piece of the puzzle is the coroner's report: despite rumors of a medical emergency, Harlan's toxicology report came back completely clean. No drugs, no poison. 

Just a house full of greedy relatives, a terrified nurse, and a lot of muddy footprints.
      `,
      objective: `
Interrogate the family and the nurse. Someone in this house orchestrated this death, but their plan didn't go exactly as they intended. Compare their assumptions against the hard facts of the police report.

When you catch the mastermind in a lie they cannot explain, make your accusation.
      `,
      crimeSceneNotes: [
        'Cause of death: A single self-inflicted knife wound to the neck.',
        'Toxicology Report: 100% clean. Zero traces of poison or medication in the bloodstream.',
        'A piece of the wooden trellis outside the study window is snapped.',
        'There are traces of dried mud on the study windowsill.'
      ]
    },

    truth: {
      murderer: 'hugh',
      weapon: 'Tampered medicine bottles (failed), leading to suicide',
      motive: 'Harlan cut him out of the will entirely. He wanted to frame the nurse to invalidate the new will.'
    },

    setting: {
      location: 'The Thrombey Estate',
      atmosphere: 'A massive, gothic mansion filled with fake prop weapons, hidden windows, and dark wood paneling. It feels like a giant Clue board.',
      time: 'The morning after the birthday party. The critical window is midnight to 2:00 AM.'
    },

    backstory: {
      familyHistory: 'Harlan built a publishing empire from nothing. His family is entirely dependent on his wealth.',
      hiddenScandal: 'Harlan changed his will the night he died, leaving absolutely everything to his nurse.',
      financialPressure: 'Harlan cut off his son\'s allowance, fired his other son from the company, and discovered his son-in-law was cheating.',
      recentEvent: 'Harlan had a massive, screaming fight with his grandson, Hugh, who stormed out of the party early.'
    },

    timeline: {
      23.30: 'Harlan and Marta go upstairs to the study to play Go. The rest of the family goes to bed.',
      23.45: 'Marta administers Harlan\'s medication. Harlan slits his own throat.',
      "00.00": 'Marta leaves through the front door, seen by Walt.',
      "00.15": 'Marta sneaks back onto the estate, climbs the broken trellis, and puts on a disguise to be seen by Lin.',
      "01.00": 'Hugh sneaks onto the estate to retrieve the tampered medicine bottles but is scared off by the dogs.'
    },

    victim: {
      name: 'Harlan',
      role: 'The Patriarch',
      personality: 'Brilliant, stubborn, dramatic.',
      reputation: 'A genius writer who finally decided to stop coddling his spoiled family.'
    },

    characters: {
      nurse: {
        id: 'nurse',
        name: 'Marta',
        role: 'The Caregiver',
        personality: 'Kind, anxious, terrified.',
        alibi: 'Claims she left at midnight and drove straight home.',
        secrets: [
          'She thinks she accidentally gave Harlan a lethal overdose of morphine because the labels were switched.',
          'She knows Harlan killed himself to protect her from a manslaughter charge.',
          'She climbed the trellis to fake Harlan\'s time of death.'
        ],
        lies: [
          'She will lie about the timeline and the broken trellis to protect Harlan\'s final plan.'
        ],
        knows: [
          'She physically cannot lie without becoming violently nauseous.'
        ],
        subtleClues: {
          surface: [
            'Sweats profusely and covers her mouth when asked direct questions about her timeline.'
          ]
        },
        relationships: {
          victim: 'Loved him like a father; is devastated by his death.',
          grandson: 'Wary of Hugh, but desperate enough for help to trust him.'
        }
      },

      grandson: {
        id: 'grandson',
        name: 'Hugh',
        role: 'The Mastermind',
        personality: 'Arrogant, smug, privileged.',
        alibi: 'Claims he left the party at 10:00 PM after a fight and drove into the city.',
        secrets: [
          'He switched the medicine labels to trick Marta into killing Harlan with morphine.',
          'He sneaked back at 1:00 AM to steal the bottles back, but the dogs barked at him.'
        ],
        lies: [
          'Claims he has no idea why Harlan killed himself or what happened with the will.'
        ],
        knows: [
          'He believes, with absolute certainty, that Harlan died of a morphine overdose before slitting his throat.'
        ],
        subtleClues: {
          surface: [
            'Acts completely unbothered by the death; wears an expensive, thick cable-knit sweater.'
          ]
        },
        relationships: {
          victim: 'Hated him for cutting him out of the will.',
          nurse: 'Pretends to be her ally, but is secretly framing her.'
        }
      },

      daughter: {
        id: 'daughter',
        name: 'Lin',
        role: 'The Eldest Daughter',
        personality: 'Fierce, protective, intimidating.',
        alibi: 'Was asleep in her room on the second floor.',
        secrets: [
          'Harlan was about to expose her husband for having an affair.'
        ],
        lies: [
          'Might downplay the tension in the family to protect their public image.'
        ],
        knows: [
          'She woke up at 12:15 AM and saw "Harlan" (actually Marta in a disguise) walk past the study window.'
        ],
        subtleClues: {
          surface: [
            'Speaks very highly of her self-made business, deeply defensive of her father.'
          ]
        },
        relationships: {
          victim: 'Deeply respected him; they communicated through secret invisible ink letters.'
        }
      },

      son: {
        id: 'son',
        name: 'Walt',
        role: 'The Youngest Son',
        personality: 'Insecure, desperate, weak-willed.',
        alibi: 'Smoking a cigar on the porch at midnight.',
        secrets: [
          'Harlan fired him from the publishing company that very night.'
        ],
        lies: [
          'Claims he and Harlan had a great conversation and a mutual parting of ways.'
        ],
        knows: [
          'He saw Marta leave the house at exactly midnight.'
        ],
        subtleClues: {
          surface: [
            'Fidgets with his cane, gets incredibly defensive about his role in the publishing company.'
          ]
        },
        relationships: {
          victim: 'Resented him for never letting him have real control over the business.'
        }
      }
    }
  },
  sim_it_club: {
    id: 'sim_it_club',
    title: 'Fatal Error at the SIM IT Club',

    casefile: {
      headline: 'IT Club President Found Dead During Workshop Planning Break',
      overview: `
Fuku, the beloved and dedicated President of the SIM IT Club, was found dead in Seminar Room 4. 

The EXCO, who are a very close-knit group of friends, was having a long meeting to finalize their flagship annual workshop. Fuku, who always looked out for his team's well-being, called a 15-minute break at 7:00 PM so everyone could rest. Some members left the freezing room, while others stayed behind. 

When the break ended at 7:15 PM, Fuku was slumped over the meeting table, dead from a fast-acting poison slipped into his tea. 

Fuku was a genuinely nice guy who treated his EXCO like family and led with kindness. While everyone loved him, the club's prestige made the President title incredibly valuable in the tech industry. Someone decided their resume needed that title more than they needed a friend.
      `,
      objective: `
Interrogate the 4 remaining EXCO members. Pay close attention to their timelines during the 15-minute break, specifically where they claim to have been and what they physically experienced. 

Cross-reference the suspects' statements. When you catch the killer in a physical contradiction about their timeline, make your accusation.
      `,
      crimeSceneNotes: [
        'Cause of death: Cyanide poisoning, ingested via the victim\'s tea.',
        'The aircon in Seminar Room 4 was set to a freezing 18°C.',
        'The weather outside the campus building was warm and humid.',
        'The victim was found wearing his thick club windbreaker.'
      ]
    },

    truth: {
      murderer: 'vp',
      weapon: 'Cyanide dropped into the tea',
      motive: 'Blinding ambition. They were all good friends, but Michelle desperately needed the prestigious President title on her resume to secure an elite tech internship.'
    },

    setting: {
      location: 'SIM Campus - Seminar Room 4',
      atmosphere: 'A freezing cold project room scattered with half-eaten snacks, laptops, and whiteboard markers. The hum of the 18°C aircon is loud.',
      time: 'Evening. The critical window is the 15-minute break between 7:00 PM and 7:15 PM.'
    },

    backstory: {
      familyHistory: 'The SIM IT Club is highly prestigious. Leading the flagship workshop practically guarantees a top-tier tech internship.',
      hiddenScandal: 'Michelle (the VP) recently found out she was rejected from her dream internship because she lacked "top leadership experience."',
      financialPressure: 'The club needs this workshop to be a huge success to maintain their university funding, and Fuku had it running perfectly.',
      recentEvent: 'Before the break, Fuku excitedly announced that the workshop planning was almost 100% complete, meaning Michelle was running out of time to step up and claim the ultimate credit.'
    },

    timeline: {
      19.00: 'Break is called. Rey goes to the washroom. Winston goes out to the campus planters to game. Michelle stays behind briefly under the guise of helping Fuku.',
      19.05: 'Yanmei, still in the room with headphones on, notes Fuku is alive and typing.',
      19.08: 'Michelle drops the poison into Fuku\'s tea and leaves the freezing room.',
      19.10: 'Winston sees Michelle in the hallway, shivering violently and complaining about the cold.',
      19.15: 'Rey returns, opens the door, and screams.'
    },

    victim: {
      name: 'Fuku',
      role: 'IT Club President',
      personality: 'Kind, dedicated, supportive.',
      reputation: 'A genuinely sweet guy, a brilliant coder, and a loyal friend who always put the team first.'
    },

    characters: {
      vp: {
        id: 'vp',
        name: 'Michelle',
        role: 'Vice-President (The Mastermind)',
        personality: 'Soft-spoken, ambitious, calculating.',
        alibi: 'Claims she walked straight out to the warm campus planters at exactly 7:00 PM to get fresh air.',
        secrets: [
          'She truly valued Fuku\'s friendship, but she panicked about her future and let her ambition take over to save her career trajectory.',
          'She stayed in the freezing seminar room until 7:08 PM to poison the tea, which is why her body temperature dropped so much.'
        ],
        lies: [
          'Will adamantly claim she was outside in the warm humid air the entire 15 minutes and left the room at the exact same time as Rey.'
        ],
        knows: [
          'She knows Fuku drank the tea, but will pretend she has no idea what happened.'
        ],
        subtleClues: {
          surface: [
            'Acts genuinely heartbroken over losing her friend, but occasionally lets slip how much "prestige" and "resumes" matter to her.'
          ]
        },
        relationships: {
          victim: 'Considered him a genuinely good friend and a great leader, but let her career panic blind her to everything else.',
        }
      },

      partnership: {
        id: 'partnership',
        name: 'Winston',
        role: 'Partnership EXCO',
        personality: 'Loves gaming, busy, affable.',
        alibi: 'Was out by the campus planters and the hallway grinding ranked matches on his phone to decompress.',
        secrets: [
          'He was actually hiding from a stressful email from their biggest sponsor, using his game as an escape. He feels incredibly guilty for not being in the room to help Fuku.'
        ],
        lies: [
          'Will pretend he was outside drafting a sponsorship pitch, even though his eyes were glued to his game.'
        ],
        knows: [
          'He saw Michelle walking in the hallway at 7:10 PM. She was shivering, rubbing her arms, and complaining about how freezing cold she was.'
        ],
        subtleClues: {
          surface: [
            'Taps his phone screen rhythmically with his thumbs out of habit; seems to use his cheerful demeanor to mask how rattled and sad he is.'
          ]
        },
        relationships: {
          vp: 'Thinks Michelle is a great, hardworking friend who takes things a little too seriously.',
        }
      },

      secretary: {
        id: 'secretary',
        name: 'Rey',
        role: 'Secretary',
        personality: 'Shy, cheerful, cat lover.',
        alibi: 'Went to the campus washroom from 7:00 PM to 7:15 PM.',
        secrets: [
          'He was drafting a text to Fuku asking for a lighter workload because he felt overwhelmed. Now he feels immense guilt, wishing he had just been more supportive.'
        ],
        lies: [
          'None; he is genuinely heartbroken and traumatized by finding his friend\'s body.'
        ],
        knows: [
          'Knows for a fact that Michelle did NOT leave the room at 7:00 PM. Michelle told Fuku she was going to stay behind for a minute to help him format a document.'
        ],
        subtleClues: {
          surface: [
            'Fidgets anxiously with a little plush cat keychain on his bag, avoids eye contact, and looks like he\'s holding back tears.'
          ]
        },
        relationships: {
          victim: 'Loved him as a friend and deeply appreciated how supportive he was of her shyness.',
        }
      },

      technical: {
        id: 'technical',
        name: 'Yanmei',
        role: 'Technical EXCO',
        personality: 'Critical, smart, judgmental.',
        alibi: 'Never left the room. Put her noise-canceling headphones on and was coding in the corner.',
        secrets: [
          'She was secretly optimizing Fuku\'s backend code as a surprise gift for the workshop launch. Now she is devastated he will never get to see it.'
        ],
        lies: [
          'Claims she was just doing her own assigned tasks because she is too proud to admit she was making a surprise for him.'
        ],
        knows: [
          'Even with her headphones on, she glanced up at 7:05 PM and saw Fuku alive, perfectly fine, and typing on his laptop.'
        ],
        subtleClues: {
          surface: [
            'Sighs critically and crosses her arms, using her usual judgmental attitude as a shield to keep from crying in front of everyone.'
          ]
        },
        relationships: {
          victim: 'They playfully bickered over coding styles all the time, but she deeply respected his dedication and considered him a true equal.'
        }
      }
    }
  }
};