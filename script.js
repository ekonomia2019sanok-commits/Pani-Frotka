const facebookUrl = "https://www.facebook.com/profile.php?id=100089048411165";
const instagramUrl = "https://www.instagram.com/pani_frotka";

const fallbackProducts = {
  "box": {
    "meta": {
      "name": "Box",
      "description": "Prezentowe zestawy handmade pakowane z dbałością o detale.",
      "image": "zdjecia-kategorii/boxy.jpg"
    },
    "Zestawy prezentowe": [
      {
        "image": "images/box/Zestawy/wzor-1.jpg",
        "title": "Box prezentowy"
      }
    ]
  },
  "breloki": {
    "meta": {
      "name": "Breloki",
      "description": "Galeria breloków jest na razie pusta — uzupełnimy ją wkrótce.",
      "image": "zdjecia-kategorii/breloki.jpg"
    },
    "items": []
  },
  "frotki": {
    "meta": {
      "name": "Frotki",
      "description": "Delikatne dla włosów, lekkie i szyte w krótkich seriach.",
      "image": "zdjecia-kategorii/frotki.jpg"
    },
    "Pastelowe": [
      {
        "image": "images/frotki/Pastelowe/wzor-1.jpg",
        "title": "Frotka pastelowa"
      }
    ]
  },
  "kosmetyczka": {
    "meta": {
      "name": "Kosmetyczka",
      "description": "Poręczne kosmetyczki z kobiecymi motywami na co dzień i w podróż.",
      "image": "zdjecia-kategorii/kosmetyczki.jpg"
    },
    "Delikatne wzory": [
      {
        "image": "images/kosmetyczka/Delikatne/wzor-1.jpg",
        "title": "Kosmetyczka delikatna"
      }
    ]
  },
  "torby": {
    "meta": {
      "name": "Torby",
      "description": "Ręcznie szyte torby z motywami, które mają charakter.",
      "image": "zdjecia-kategorii/torby.jpg"
    },
    "Afrykański styl": [
      {
        "image": "zdjecia-produktow/torby/Afrykański styl/SA_01.png"
      },
      {
        "image": "zdjecia-produktow/torby/Afrykański styl/SA_02.png"
      },
      {
        "image": "zdjecia-produktow/torby/Afrykański styl/SA_03.png"
      },
      {
        "image": "zdjecia-produktow/torby/Afrykański styl/SA_04.png"
      },
      {
        "image": "zdjecia-produktow/torby/Afrykański styl/SA_05.png"
      },
      {
        "image": "zdjecia-produktow/torby/Afrykański styl/SA_06.png"
      },
      {
        "image": "zdjecia-produktow/torby/Afrykański styl/SA_07.png"
      },
      {
        "image": "zdjecia-produktow/torby/Afrykański styl/SA_08.png"
      },
      {
        "image": "zdjecia-produktow/torby/Afrykański styl/SA_09.png"
      },
      {
        "image": "zdjecia-produktow/torby/Afrykański styl/SA_10.png"
      },
      {
        "image": "zdjecia-produktow/torby/Afrykański styl/SA_11.png"
      },
      {
        "image": "zdjecia-produktow/torby/Afrykański styl/SA_12.png"
      }
    ],
    "Anioły Bieszczadzkie": [
      {
        "image": "zdjecia-produktow/torby/Anioły Bieszczadzkie/ANI_01.png"
      },
      {
        "image": "zdjecia-produktow/torby/Anioły Bieszczadzkie/ANI_02.png"
      },
      {
        "image": "zdjecia-produktow/torby/Anioły Bieszczadzkie/ANI_03.png"
      },
      {
        "image": "zdjecia-produktow/torby/Anioły Bieszczadzkie/ANI_04.png"
      }
    ],
    "Bieszczady": [
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_01.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_02.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_03.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_04.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_05.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_06.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_07.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_08.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_09.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_10.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_11.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_12.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_13.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_15.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_16.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_17.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_18.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_19.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_20.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_21.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_22.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_23.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_24.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_25.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_26.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_27.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_28.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_29.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_30.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczady/BIES_31.png"
      }
    ],
    "Bieszczadzki klimat": [
      {
        "image": "zdjecia-produktow/torby/Bieszczadzki klimat/BZWK_01_wilk.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzki klimat/BZWK_02_wilk.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzki klimat/BZWK_03_niedźwiedź.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzki klimat/BZWK_04_rys.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzki klimat/BZWK_05_ żubr.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzki klimat/BZWK_06_jeleń.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzki klimat/BZWK_07_jastrząb.png"
      }
    ],
    "Bieszczadzkie zwierzęta": [
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_01.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_02.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_03.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_04.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_05.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_06.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_07.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_08.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_09.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_10.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_11.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_12.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_13.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_14.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_15.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_16.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_17.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_18.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_19.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_20.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_21.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_22.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_23.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_24.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_25.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_26.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_27.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_28.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_29.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_30.png"
      },
      {
        "image": "zdjecia-produktow/torby/Bieszczadzkie zwierzęta/BIESZ_31.png"
      }
    ],
    "Kolorowe Ptaki": [
      {
        "image": "zdjecia-produktow/torby/Kolorowe Ptaki/KP_01.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe Ptaki/KP_02.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe Ptaki/KP_03.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe Ptaki/KP_04.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe Ptaki/KP_05.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe Ptaki/KP_06.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe Ptaki/KP_07.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe Ptaki/KP_08.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe Ptaki/KP_09.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe Ptaki/KP_10.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe Ptaki/KP_11.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe Ptaki/KP_12.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe Ptaki/KP_13.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe Ptaki/KP_14.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe Ptaki/KP_15.png"
      }
    ],
    "Kolorowe zwierzaki": [
      {
        "image": "zdjecia-produktow/torby/Kolorowe zwierzaki/KZ_01.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe zwierzaki/KZ_02.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe zwierzaki/KZ_03.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe zwierzaki/KZ_04.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe zwierzaki/KZ_05.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe zwierzaki/KZ_06.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe zwierzaki/KZ_07.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe zwierzaki/KZ_08.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe zwierzaki/KZ_09.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe zwierzaki/KZ_10.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe zwierzaki/KZ_11.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe zwierzaki/KZ_12.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe zwierzaki/KZ_13.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe zwierzaki/KZ_14.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe zwierzaki/KZ_15.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe zwierzaki/KZ_16.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe zwierzaki/KZ_17.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kolorowe zwierzaki/KZ_18.png"
      }
    ],
    "Konie": [
      {
        "image": "zdjecia-produktow/torby/Konie/KO_01.png"
      },
      {
        "image": "zdjecia-produktow/torby/Konie/KO_02.png"
      },
      {
        "image": "zdjecia-produktow/torby/Konie/KO_03.png"
      }
    ],
    "Kwiaty": [
      {
        "image": "zdjecia-produktow/torby/Kwiaty/KW_01.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kwiaty/KW_02.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kwiaty/KW_03.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kwiaty/KW_04.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kwiaty/KW_05.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kwiaty/KW_06.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kwiaty/KW_07.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kwiaty/KW_08.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kwiaty/KW_09.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kwiaty/KW_10.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kwiaty/KW_11.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kwiaty/KW_12.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kwiaty/KW_13.png"
      },
      {
        "image": "zdjecia-produktow/torby/Kwiaty/KW_14.png"
      }
    ],
    "Miasta": [
      {
        "image": "zdjecia-produktow/torby/Miasta/LESKO.png"
      },
      {
        "image": "zdjecia-produktow/torby/Miasta/SANOK.png"
      },
      {
        "image": "zdjecia-produktow/torby/Miasta/ZAGÓRZ.png"
      }
    ],
    "Motoryzacja": [
      {
        "image": "zdjecia-produktow/torby/Motoryzacja/MOTO_01.png"
      },
      {
        "image": "zdjecia-produktow/torby/Motoryzacja/MOTO_02.png"
      },
      {
        "image": "zdjecia-produktow/torby/Motoryzacja/MOTO_03.png"
      },
      {
        "image": "zdjecia-produktow/torby/Motoryzacja/MOTO_04.png"
      }
    ],
    "Owady": [
      {
        "image": "zdjecia-produktow/torby/Owady/OW_01.png"
      },
      {
        "image": "zdjecia-produktow/torby/Owady/OW_02.png"
      },
      {
        "image": "zdjecia-produktow/torby/Owady/OW_03.png"
      },
      {
        "image": "zdjecia-produktow/torby/Owady/OW_04.png"
      },
      {
        "image": "zdjecia-produktow/torby/Owady/OW_05.png"
      },
      {
        "image": "zdjecia-produktow/torby/Owady/OW_06.png"
      },
      {
        "image": "zdjecia-produktow/torby/Owady/OW_07.png"
      },
      {
        "image": "zdjecia-produktow/torby/Owady/OW_08.png"
      },
      {
        "image": "zdjecia-produktow/torby/Owady/OW_09.png"
      },
      {
        "image": "zdjecia-produktow/torby/Owady/OW_10.png"
      },
      {
        "image": "zdjecia-produktow/torby/Owady/OW_11.png"
      },
      {
        "image": "zdjecia-produktow/torby/Owady/OW_12.png"
      },
      {
        "image": "zdjecia-produktow/torby/Owady/OW_13.png"
      }
    ],
    "Retro Bieszczady": [
      {
        "image": "zdjecia-produktow/torby/Retro Bieszczady/BRET_01.png"
      },
      {
        "image": "zdjecia-produktow/torby/Retro Bieszczady/BRET_02.png"
      },
      {
        "image": "zdjecia-produktow/torby/Retro Bieszczady/BRET_03.png"
      },
      {
        "image": "zdjecia-produktow/torby/Retro Bieszczady/BRET_04.png"
      },
      {
        "image": "zdjecia-produktow/torby/Retro Bieszczady/BRET_05.png"
      }
    ],
    "Rzuć wszystko i jedź w Bieszczady": [
      {
        "image": "zdjecia-produktow/torby/Rzuć wszystko i jedź w Bieszczady/RZWB_01.PNG"
      },
      {
        "image": "zdjecia-produktow/torby/Rzuć wszystko i jedź w Bieszczady/RZWB_02.PNG"
      },
      {
        "image": "zdjecia-produktow/torby/Rzuć wszystko i jedź w Bieszczady/RZWB_03.png"
      },
      {
        "image": "zdjecia-produktow/torby/Rzuć wszystko i jedź w Bieszczady/RZWB_04.png"
      },
      {
        "image": "zdjecia-produktow/torby/Rzuć wszystko i jedź w Bieszczady/RZWB_05.png"
      },
      {
        "image": "zdjecia-produktow/torby/Rzuć wszystko i jedź w Bieszczady/RZWB_06.png"
      },
      {
        "image": "zdjecia-produktow/torby/Rzuć wszystko i jedź w Bieszczady/RZWB_07.png"
      },
      {
        "image": "zdjecia-produktow/torby/Rzuć wszystko i jedź w Bieszczady/RZWB_08.png"
      },
      {
        "image": "zdjecia-produktow/torby/Rzuć wszystko i jedź w Bieszczady/RZWB_09.png"
      },
      {
        "image": "zdjecia-produktow/torby/Rzuć wszystko i jedź w Bieszczady/RZWB_10.png"
      },
      {
        "image": "zdjecia-produktow/torby/Rzuć wszystko i jedź w Bieszczady/RZWB_11.png"
      },
      {
        "image": "zdjecia-produktow/torby/Rzuć wszystko i jedź w Bieszczady/RZWB_12.png"
      },
      {
        "image": "zdjecia-produktow/torby/Rzuć wszystko i jedź w Bieszczady/RZWB_13.png"
      },
      {
        "image": "zdjecia-produktow/torby/Rzuć wszystko i jedź w Bieszczady/RZWB_14.png"
      },
      {
        "image": "zdjecia-produktow/torby/Rzuć wszystko i jedź w Bieszczady/RZWB_15.png"
      },
      {
        "image": "zdjecia-produktow/torby/Rzuć wszystko i jedź w Bieszczady/RZWB_16.png"
      }
    ],
    "Warzywa": [
      {
        "image": "zdjecia-produktow/torby/Warzywa/WAR_01.png"
      },
      {
        "image": "zdjecia-produktow/torby/Warzywa/WAR_02.png"
      },
      {
        "image": "zdjecia-produktow/torby/Warzywa/WAR_03.png"
      },
      {
        "image": "zdjecia-produktow/torby/Warzywa/WAR_04.png"
      },
      {
        "image": "zdjecia-produktow/torby/Warzywa/WAR_05.png"
      }
    ],
    "Zwierzęta profilem": [
      {
        "image": "zdjecia-produktow/torby/Zwierzęta profilem/ZWPR_01.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta profilem/ZWPR_02.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta profilem/ZWPR_03.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta profilem/ZWPR_04.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta profilem/ZWPR_05.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta profilem/ZWPR_06.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta profilem/ZWPR_07.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta profilem/ZWPR_08.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta profilem/ZWPR_09.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta profilem/ZWPR_10.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta profilem/ZWPR_11.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta profilem/ZWPR_12.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta profilem/ZWPR_13.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta profilem/ZWPR_14.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta profilem/ZWPR_15.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta profilem/ZWPR_16.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta profilem/ZWPR_17.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta profilem/ZWPR_18.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta profilem/ZWPR_19.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta profilem/ZWPR_20.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta profilem/ZWPR_21.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta profilem/ZWPR_22.png"
      }
    ],
    "Zwierzęta żółte tło": [
      {
        "image": "zdjecia-produktow/torby/Zwierzęta żółte tło/ZWZ_01.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta żółte tło/ZWZ_02.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta żółte tło/ZWZ_03.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta żółte tło/ZWZ_04.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta żółte tło/ZWZ_05.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta żółte tło/ZWZ_06.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta żółte tło/ZWZ_07.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta żółte tło/ZWZ_08.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwierzęta żółte tło/ZWZ_09.png"
      }
    ],
    "Zwięrzęta Afryki": [
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_01.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_02.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_03.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_04.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_05.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_06.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_07.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_08.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_09.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_10.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_11.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_12.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_13.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_14.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_15.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_16.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_17.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_18.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_19.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_20.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_21.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_22.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_23.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_24.png"
      },
      {
        "image": "zdjecia-produktow/torby/Zwięrzęta Afryki/AF_25.png"
      }
    ]
  },
  "workoplecak": {
    "meta": {
      "name": "Workoplecak",
      "description": "Lekki worek na plecy, który lubi codzienne wyjścia.",
      "image": "zdjecia-kategorii/workoplecaki.jpg"
    },
    "Klasyczne": [
      {
        "image": "kolekcje/W_2.png",
        "title": "Workoplecak klasyczny"
      }
    ]
  }
};

const categoryGrid = document.querySelector("#categoryGrid");
const catalog = document.querySelector("#katalog");
const catalogEyebrow = document.querySelector("#catalogEyebrow");
const catalogTitle = document.querySelector("#catalogTitle");
const catalogDescription = document.querySelector("#catalogDescription");
const seriesGrid = document.querySelector("#seriesGrid");
const seriesView = document.querySelector("#seriesView");
const galleryView = document.querySelector("#galleryView");
const patternGrid = document.querySelector("#patternGrid");
const seriesTitle = document.querySelector("#seriesTitle");
const backToSeries = document.querySelector("#backToSeries");
const productSelect = document.querySelector("#productSelect");
const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector("#navLinks");
const year = document.querySelector("#year");

let productData = {};
let activeCategoryKey = "";

if (year) {
  year.textContent = new Date().getFullYear();
}

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.addEventListener("click", () => {
  navLinks.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
});

function getCategoryMeta(categoryKey, category) {
  const readableName = toTitle(categoryKey);
  return {
    name: category.meta?.name || readableName,
    description: category.meta?.description || "Ręcznie wykonane projekty w ciepłym stylu Pani-frotka.",
    image: category.meta?.image || firstProductImage(category)
  };
}

function getSeriesEntries(category) {
  return Object.entries(category).filter(([key, value]) => key !== "meta" && Array.isArray(value));
}

function firstProductImage(category) {
  const firstSeries = getSeriesEntries(category)[0];
  return firstSeries?.[1]?.[0]?.image || "";
}

function toTitle(text) {
  return String(text)
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\p{L}/gu, (letter) => letter.toLocaleUpperCase("pl-PL"));
}

function titleFromFile(path) {
  const file = String(path).split("/").pop()?.split("\\").pop() || "";
  const withoutExtension = file.replace(/\.[^.]+$/, "");
  const withoutLeadingCode = withoutExtension.replace(/^[A-Za-z]+[_-]?\d*[_-]?\s*/u, "");
  return toTitle(withoutLeadingCode || withoutExtension);
}

function createImage(src, alt) {
  if (!src) {
    const placeholder = document.createElement("div");
    placeholder.className = "image-placeholder";
    placeholder.textContent = "♡";
    return placeholder;
  }

  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  image.loading = "lazy";
  image.addEventListener("error", () => {
    const placeholder = document.createElement("div");
    placeholder.className = "image-placeholder";
    placeholder.textContent = "♡";
    image.replaceWith(placeholder);
  });
  return image;
}

function renderCategories() {
  categoryGrid.innerHTML = "";
  if (productSelect) {
    productSelect.innerHTML = '<option value="">Wybierz produkt</option>';
  }

  Object.entries(productData).forEach(([categoryKey, category]) => {
    const meta = getCategoryMeta(categoryKey, category);
    const card = document.createElement("a");
    card.className = "category-card category-card--image-only";
    card.href = `kategorie/${categoryKey}.html`;
    card.setAttribute("aria-label", `Zobacz kategorie ${meta.name}`);
    card.innerHTML = `
      <div class="category-card__image"></div>
      ${!meta.image || meta.image.startsWith("assets/category-crops/") ? `<span class="category-card__label">${meta.name}</span>` : ""}
    `;
    card.querySelector(".category-card__image").appendChild(createImage(meta.image, meta.name));
    categoryGrid.appendChild(card);

    const option = document.createElement("option");
    option.value = meta.name;
    option.textContent = meta.name;
    productSelect?.appendChild(option);
  });
}

function showCategory(categoryKey) {
  activeCategoryKey = categoryKey;
  const category = productData[categoryKey];
  const meta = getCategoryMeta(categoryKey, category);

  catalog.hidden = false;
  seriesView.hidden = false;
  galleryView.hidden = true;
  catalogEyebrow.textContent = "Kategoria";
  catalogTitle.textContent = meta.name;
  catalogDescription.textContent = meta.description;
  seriesGrid.innerHTML = "";

  getSeriesEntries(category).forEach(([seriesName, products]) => {
    const previewImage = products[0]?.image || meta.image;
    const card = document.createElement("article");
    card.className = "series-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Zobacz serie ${seriesName}`);
    card.innerHTML = `
      <div class="series-card__image"></div>
      <div class="series-card__body">
        <div class="series-card__topline">
          <h3>${seriesName}</h3>
          <span class="card-arrow" aria-hidden="true">→</span>
        </div>
        <p>${products.length} ${products.length === 1 ? "wzór" : "wzorów"}</p>
      </div>
    `;
    card.querySelector(".series-card__image").appendChild(createImage(previewImage, seriesName));
    card.addEventListener("click", () => showSeries(seriesName));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showSeries(seriesName);
      }
    });
    seriesGrid.appendChild(card);
  });

  catalog.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showSeries(seriesName) {
  const category = productData[activeCategoryKey];
  const products = category?.[seriesName] || [];

  seriesView.hidden = true;
  galleryView.hidden = false;
  seriesTitle.textContent = seriesName;
  patternGrid.innerHTML = "";

  products.forEach((product) => {
    const title = product.title || titleFromFile(product.image);
    const card = document.createElement("article");
    card.className = "pattern-card";
    card.innerHTML = `
      <div class="pattern-card__image"></div>
      <div class="pattern-card__body">
        <h3>${title}</h3>
      </div>
    `;
    card.querySelector(".pattern-card__image").appendChild(createImage(product.image, title));
    patternGrid.appendChild(card);
  });

  catalog.scrollIntoView({ behavior: "smooth", block: "start" });
}

backToSeries?.addEventListener("click", () => {
  seriesView.hidden = false;
  galleryView.hidden = true;
  catalog.scrollIntoView({ behavior: "smooth", block: "start" });
});

async function loadProducts() {
  try {
    const response = await fetch("products.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Brak products.json");
    }
    productData = await response.json();
  } catch (error) {
    productData = window.PANI_FROTKA_PRODUCTS || fallbackProducts;
  }

  renderCategories();
}

loadProducts();
