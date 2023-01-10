const surveyListDataName = "SurveyJSExampleList";
const timeOutDelay = 300;
const newSurveyName = "New Survey";
const newSurveyJSON = {};
const emptySurveyJSON = { pages: [{}] };

type CallBackFunc = (...arg: any) => void;

// Get the survey list. Each object contains the following properties: `id`, `name`, and `json`
export function getSurveyItems(onCallback: CallBackFunc) {
  setTimeout(() => { onCallback(getSurveyItemsInternal()) }, timeOutDelay);
}
// Create a new survey and return it
export function createSurvey(onCallback: CallBackFunc) {
  setTimeout(() => { onCallback(createSurveyInternal()) }, timeOutDelay);
}
// Delete a survey by `id` and return the updated survey list
export function deleteSurvey(id: number, onCallback: CallBackFunc) {
  deleteSurveyInternal(id);
  setTimeout(() => { onCallback(getSurveyItemsInternal()) }, timeOutDelay);
}
// Get a survey JSON definition by survey `id`
export function getSurveyJSON(id: number, onCallback: CallBackFunc) {
  setTimeout(() => { onCallback(getSurveyJSONInternal(id)) }, timeOutDelay);
}
// Get a survey name by survey `id`
export function getSurveyName(id: number, onCallback: CallBackFunc) {
  setTimeout(() => { onCallback(getSurveyNameInternal(id)) }, timeOutDelay);
}
// Set a survey JSON definition by survey `id`
export function saveSurveyJSON(id: number, json: any, onCallback: CallBackFunc) {
  setSurveyJSONInternal(id, json);
  setTimeout(() => { onCallback() }, timeOutDelay);
}
// Set a survey name by survey `id`
export function saveSurveyName(id: number, name: string, onCallback?: CallBackFunc) {
  setSurveyNameInternal(id, name);
  if (!!onCallback) {
    setTimeout(() => { onCallback() }, timeOutDelay);
  }
}

var surveyData: any[];

function getSurveyItemsInternal(): any[] {
  if (!surveyData) {
    const str = window.localStorage.getItem(surveyListDataName) || "";
    surveyData = !!str ? JSON.parse(str) : [];
  }
  return surveyData;
}
function setSurveyItemsInternal() {
  if (!!surveyData) {
    window.localStorage.setItem(surveyListDataName, JSON.stringify(surveyData));
  }
}
function getSurveyJSONInternal(id: number) {
  const res = getSurveyInfoInternal(id);
  return !!res && !isObjectEmpty(res.json) ? res.json : emptySurveyJSON;
}
function setSurveyJSONInternal(id: number, json: any) {
  const res = getSurveyInfoInternal(id);
  if (!!res) {
    res.json = json;
    setSurveyItemsInternal();
  }
}
function getSurveyNameInternal(id: number) {
  const res = getSurveyInfoInternal(id);
  return !!res ? res.name : "";
}
function setSurveyNameInternal(id: number, name: string) {
  const res = getSurveyInfoInternal(id);
  if (!!res) {
    res.name = name;
    setSurveyItemsInternal();
  }
}
function createSurveyInternal() {
  var nextId = 1;
  const list = getSurveyItemsInternal();
  for (var i = 0; i < list.length; i++) {
    if (list[i].id >= nextId) nextId = list[i].id + 1;
  }
  const newItem = { id: nextId, name: newSurveyName, json: newSurveyJSON };
  list.push(newItem);
  setSurveyItemsInternal();
  return newItem;
}
function deleteSurveyInternal(id: number) {
  const list = getSurveyItemsInternal();
  for (var i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      list.splice(i, 1);
      break;
    }
  }
  setSurveyItemsInternal();
}
function getSurveyInfoInternal(id: number) {
  const list = getSurveyItemsInternal();
  for (var i = 0; i < list.length; i++) {
    if (list[i].id === id) return list[i];
  }
  return null;
}
function isObjectEmpty(obj: Object) {
  return (
    obj &&
    Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
}
