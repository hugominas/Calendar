import axios from "axios";
import dispatcher from "../dispatcher";
import CalendarStore from "../stores/CalendarStore";

export function getCalendar() {
  dispatcher.dispatch({
    type: "GET_CALENDAR"
  });
}
export function filterCalendar(filter) {
  dispatcher.dispatch({
    type: "GET_CALENDAR",
    filter,
  });
}
export function getFilters() {
  dispatcher.dispatch({
    type: "GET_FILTERS"
  });
}
export function setToday(today) {
  dispatcher.dispatch({
    type: "SET_TODAY",
    today
  });
}
export function reloadFilters() {

   axios(CalendarStore.getFiltersURL()).then((data) => {
     console.log("got the data!", data);
   })

   dispatcher.dispatch({type: "FETCH_FILTERS"});
   setTimeout(() => {
     dispatcher.dispatch({type: "RECEIVE_FILTERS", filters: {"class":{"601":{"name":"POSTURA E ALONGAMENTOS","category_id":34,"category_name":"Mind &amp; Body","color_class":"classColorMindBody"},"600":{"name":"PILATES","category_id":34,"category_name":"Mind &amp; Body","color_class":"classColorMindBody"},"599":{"name":"YOGA","category_id":34,"category_name":"Mind &amp; Body","color_class":"classColorMindBody"},"598":{"name":"BODYBALANCE","category_id":34,"category_name":"Mind &amp; Body","color_class":"classColorMindBody"},"597":{"name":"MUAY THAI","category_id":33,"category_name":"Martial Arts","color_class":"classColorMartialArts"},"596":{"name":"KICKBOXING","category_id":33,"category_name":"Martial Arts","color_class":"classColorMartialArts"},"595":{"name":"TAI CHI","category_id":33,"category_name":"Martial Arts","color_class":"classColorMartialArts"},"594":{"name":"KRAV MAGA","category_id":33,"category_name":"Martial Arts","color_class":"classColorMartialArts"},"593":{"name":"BOXE","category_id":33,"category_name":"Martial Arts","color_class":"classColorMartialArts"},"592":{"name":"WARRIOR","category_id":33,"category_name":"Martial Arts","color_class":"classColorMartialArts"},"591":{"name":"DANCE","category_id":31,"category_name":"Dance","color_class":"classColorDance"},"590":{"name":"STEP","category_id":31,"category_name":"Dance","color_class":"classColorDance"},"589":{"name":"ZUMBA","category_id":31,"category_name":"Dance","color_class":"classColorDance"},"588":{"name":"BODYJAM","category_id":31,"category_name":"Dance","color_class":"classColorDance"},"587":{"name":"KIZOMBA","category_id":31,"category_name":"Dance","color_class":"classColorDance"},"586":{"name":"FREECYCLE","category_id":50,"category_name":"Cycle","color_class":"classColorMartialArts"},"585":{"name":"ICYCLE","category_id":50,"category_name":"Cycle","color_class":"classColorMartialArts"},"584":{"name":"CROSS TRAINING","category_id":32,"category_name":"Conditioning","color_class":"classColorConditioning"},"583":{"name":"CORE","category_id":32,"category_name":"Conditioning","color_class":"classColorConditioning"},"582":{"name":"CX WORX","category_id":32,"category_name":"Conditioning","color_class":"classColorConditioning"},"581":{"name":"BODYSTEP","category_id":32,"category_name":"Conditioning","color_class":"classColorConditioning"},"580":{"name":"BODYPUMP","category_id":32,"category_name":"Conditioning","color_class":"classColorConditioning"},"579":{"name":"X-CELERATE","category_id":32,"category_name":"Conditioning","color_class":"classColorConditioning"},"578":{"name":"SPARTANS","category_id":32,"category_name":"Conditioning","color_class":"classColorConditioning"},"577":{"name":"TOTAL CONDICIONAMENTO","category_id":32,"category_name":"Conditioning","color_class":"classColorConditioning"},"576":{"name":"MIB","category_id":32,"category_name":"Conditioning","color_class":"classColorConditioning"},"575":{"name":"AIR FIT","category_id":32,"category_name":"Conditioning","color_class":"classColorConditioning"},"574":{"name":"RUNNING CLASSES","category_id":32,"category_name":"Conditioning","color_class":"classColorConditioning"},"573":{"name":"ACTIVATE","category_id":32,"category_name":"Conditioning","color_class":"classColorConditioning"},"572":{"name":"HIDROGIN\u00c1STICA","category_id":30,"category_name":"Aqua","color_class":"classColorAqua"},"570":{"name":"NATA\u00c7\u00c3O KIDS","category_id":30,"category_name":"Aqua","color_class":"classColorAqua"},"569":{"name":"FAMILY SWIMMING","category_id":30,"category_name":"Aqua","color_class":"classColorAqua"},"568":{"name":"AQUA INTENSE","category_id":30,"category_name":"Aqua","color_class":"classColorAqua"}},"spas":{"487":"Oeiras","459":"asd","348":"Cascais Linha"},"locations":{"spas":{"Oeiras":[487],"":[459],"Linha":[348]}}}});
   }, 1000);
}
export function reloadCalendar() {


   axios(CalendarStore.getScheduleURL()).then((data) => {
     console.log("got the data!", data);
   })

  dispatcher.dispatch({type: "FETCH_CLASSES"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_CLASSES", classes: {
      "2000": [{
                  "duration": "",
                  "pt": "",
                  "repeat": [1,2,3],
                  "startDate": "02-08-2016",
                  "endDate": "02-08-2017",
                  "intensity": 2,
                  "zona": 1,
                  "club": 2,
                  "category": 3,
                  "room": 1
                },
                {
                  "duration": "",
                  "pt": "",
                  "repeat": [1,3,5],
                  "startDate": "02-08-2016",
                  "endDate": "02-08-2017",
                  "intensity": 2,
                  "zona": 1,
                  "club": 3,
                  "category": 4,
                  "room": 3
              }],
      "2100": [{
                  "duration": "",
                  "pt": "",
                  "repeat": [6],
                  "startDate": "02-08-2016",
                  "endDate": "02-08-2017",
                  "intensity": 2,
                  "zona": 1,
                  "club": 3,
                  "category": 4,
                  "room": 3
        }],
        "1400": [{
                    "duration": "",
                    "pt": "",
                    "repeat": [1,2,3],
                    "startDate": "02-08-2016",
                    "endDate": "02-08-2017",
                    "intensity": 2,
                    "zona": 1,
                    "club": 2,
                    "category": 3,
                    "room": 1
                  },
                  {
                    "duration": "",
                    "pt": "",
                    "repeat": [1,3,5],
                    "startDate": "02-08-2016",
                    "endDate": "02-08-2017",
                    "intensity": 2,
                    "zona": 1,
                    "club": 3,
                    "category": 4,
                    "room": 3
                }],
        "1500": [{
                    "duration": "",
                    "pt": "",
                    "repeat": [1,2,3],
                    "startDate": "02-08-2016",
                    "endDate": "02-08-2017",
                    "intensity": 2,
                    "zona": 1,
                    "club": 2,
                    "category": 3,
                    "room": 1
                  },
                  {
                    "duration": "",
                    "pt": "",
                    "repeat": [1,3,5],
                    "startDate": "02-08-2016",
                    "endDate": "02-08-2017",
                    "intensity": 2,
                    "zona": 1,
                    "club": 3,
                    "category": 4,
                    "room": 3
                }],

        "900": [{
                    "duration": "",
                    "pt": "",
                    "repeat": [3],
                    "startDate": "02-08-2016",
                    "endDate": "02-08-2017",
                    "intensity": 2,
                    "zona": 1,
                    "club": 3,
                    "category": 4,
                    "room": 3
          }]
    }});
  }, 1000);
}
