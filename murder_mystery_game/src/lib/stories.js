export const STORIES = {
  manor_murder: {
    id: 'manor_murder',
    title: 'The Murder at Blackwood Manor',

    casefile: {
      headline: 'A Patriarch Falls During a Final Toast',
      overview: `
Reginald Blackwood, iron-willed patriarch of the Blackwood estate, collapsed mid-toast during a private family dinner. The storm outside trapped everyone inside the manor — no one entered, no one left.

He had gathered the household to announce revisions to his will. Tensions were already simmering: failing investments, buried family scandals, and a legacy built more on control than affection.

Only three people stood to gain — or lose — from what he was about to reveal.

The wine was poured.
The toast was made.
And within minutes, the most powerful man in the room was dead.

Someone inside Blackwood Manor decided his story would end that night.
      `,
      objective: `
Interrogate the suspects. Observe what they avoid. Notice the emotional fractures beneath the surface.

When you are certain, make your accusation.
      `
    },

    truth: {
      murderer: 'butler',
      weapon: 'poisoned wine',
      motive: 'Revenge for a lifetime of erasure and a final will that would erase him forever.'
    },

    setting: {
      location: 'Blackwood Manor',
      atmosphere: 'An ancestral estate isolated by wind-swept moors. Portraits of stern ancestors line the halls. The storm outside feels less violent than the tension within.',
      time: 'Late autumn. The night Reginald intended to announce revisions to his will.'
    },

    backstory: {
      familyHistory: 'The Blackwood fortune was built through ruthless industrial expansion.',
      hiddenScandal: 'Years ago, a maid left the manor quietly with a child.',
      financialPressure: 'The estate is no longer as solvent as it appears.',
      recentEvent: 'Reginald summoned everyone to dinner to formalize a rewritten will.'
    },

    timeline: {
      18.30: 'Guests arrive. Storm intensifies.',
      19.10: 'Argument in the study.',
      19.40: 'Wine poured.',
      19.52: 'Reginald collapses.'
    },

    victim: {
      name: 'Reginald Blackwood',
      role: 'Patriarch',
      personality: 'Immaculately mannered, emotionally frigid, obsessed with legacy.',
      reputation: 'Publicly admired. Privately feared.'
    },

    environmentClues: {
      diningRoom: [
        'Reginald’s glass shows crystalline residue.',
        'The decanter slightly misplaced.'
      ]
    },

    characters: {
      butler: {
        id: 'butler',
        name: 'Edmund Vale',
        role: 'Butler',
        personality: 'Controlled, observant, precise.',
        alibi: 'Overseeing dinner service.',
        secrets: [
          'He is Reginald’s illegitimate son.',
          'He altered ledger entries to conceal toxin purchase.'
        ],
        lies: [
          'Claims never to have touched Reginald’s glass.'
        ],
        knows: [
          'Clara feared disinheritance.'
        ],
        subtleClues: {
          surface: [
            'Composure cracks when his mother is mentioned.'
          ]
        },
        relationships: {
          heir: 'Half-sister.',
          guest: 'Discussed finances privately.'
        }
      },

      heir: {
        id: 'heir',
        name: 'Clara Blackwood',
        role: 'Daughter',
        personality: 'Intelligent, proud, reactive.',
        alibi: 'In her room.',
        secrets: [
          'She suspected Edmund’s true parentage.'
        ],
        lies: [
          'Claims she never left her room.'
        ],
        knows: [
          'Her father accused Edmund of altering accounts.'
        ],
        subtleClues: {
          surface: [
            'Glances at Edmund when inheritance is discussed.'
          ]
        },
        relationships: {
          butler: 'Resentment mixed with guilt.',
          guest: 'Past romantic involvement.'
        }
      },

      guest: {
        id: 'guest',
        name: 'Arthur Hawthorne',
        role: 'Family Friend',
        personality: 'Smooth, socially adept.',
        alibi: 'Outside briefly.',
        secrets: [
          'Deeply indebted to Reginald.'
        ],
        lies: [
          'Denies discussing inheritance with Edmund.'
        ],
        knows: [
          'Edmund handled the decanter.'
        ],
        subtleClues: {
          surface: [
            'Avoids eye contact about finances.'
          ]
        },
        relationships: {
          butler: 'Financial discussions.',
          heir: 'Romantic tension.'
        }
      }
    }
  },

  lighthouse_mystery: {
    id: 'lighthouse_mystery',
    title: 'Death at Stormwatch Lighthouse',

    casefile: {
      headline: 'A Fall from the Lantern Room',
      overview: `
Dr. Sylvia North was found unconscious at the base of the lighthouse stairs during a violent winter storm. She had last been seen near the lantern room at the top of the tower.

The storm made escape impossible. The lighthouse stood isolated against crashing waves. Inside were only a handful of people — each carrying private tensions.

There were raised voices earlier that evening.
A crash echoed through the tower.
Then silence.

Was it an accident?
Or did someone ensure she would never leave the lighthouse alive?
      `,
      objective: `
Question carefully. Listen to what is avoided. The truth may be hidden in hesitation.

When you are certain — accuse.
      `
    },

    truth: {
      murderer: 'keeper',
      weapon: 'struck by a falling lantern',
      motive: 'Jealousy over inheritance and a secret affair.'
    },

    setting: {
      location: 'Stormwatch Lighthouse',
      atmosphere: 'Perched on jagged cliffs during a relentless storm.',
      time: 'Winter night during inspection.'
    },

    victim: {
      name: 'Dr. Sylvia North',
      role: 'Researcher',
      personality: 'Curious, meticulous, secretive.',
      reputation: 'Respected but guarded.'
    },

    characters: {
      keeper: {
        id: 'keeper',
        name: 'Gideon Hawthorn',
        role: 'Lighthouse Keeper',
        personality: 'Stern, methodical.',
        alibi: 'Maintaining lighthouse.',
        secrets: [
          'Jealous of victim’s relationship with his spouse.'
        ],
        lies: [
          'Claims he never left the lantern room.'
        ],
        knows: [
          'Arguments occurred earlier.'
        ],
        subtleClues: {
          surface: [
            'Fidgets with lantern mechanisms.'
          ]
        },
        relationships: {
          guest1: 'Professional tension.',
          guest2: 'Distrust.'
        }
      },

      guest1: {
        id: 'guest1',
        name: 'Dr. Leonard Fisk',
        role: 'Scientist',
        personality: 'Analytical, skeptical.',
        alibi: 'In guest quarters.',
        secrets: [
          'Knew about hidden romance.'
        ],
        lies: [
          'Denies leaving quarters.'
        ],
        knows: [
          'Saw victim near lantern room.'
        ],
        subtleClues: {
          surface: [
            'Sweats when questioned.'
          ]
        },
        relationships: {
          keeper: 'Wary.',
          victim: 'Professional respect.'
        }
      },

      guest2: {
        id: 'guest2',
        name: 'Marina Wells',
        role: 'Visitor',
        personality: 'Outgoing, adventurous.',
        alibi: 'In kitchen.',
        secrets: [
          'Saw argument before crash.'
        ],
        lies: [
          'Claims she stayed downstairs.'
        ],
        knows: [
          'Heard crash from top floor.'
        ],
        subtleClues: {
          surface: [
            'Laughs nervously.'
          ]
        },
        relationships: {
          keeper: 'Distrustful.',
          guest1: 'Friendly rivalry.'
        }
      }
    }
  }
};