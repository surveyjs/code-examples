import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { createSurvey, deleteSurvey, getSurveyItems } from "../WebdataService";

interface SurveyListItem {
    name: string;
    id: number;
}

@Component({
    templateUrl: "./survey-list.component.html",
    selector: "survey-list"
})
export class SurveyListComponent {
    constructor(private router: Router) {}
    public items: Array<SurveyListItem> = []
    public addNewSurvey() {
        createSurvey((newItem) => {
            this.router.navigate(["/editsurvey"], {queryParams: { id: newItem.id.toString() }});
        });
    }
    public removeSurvey(id: number) {
        deleteSurvey(id, (currentItems) => {
            this.items = currentItems;
        });
    }
    ngOnInit() {
        getSurveyItems((currentItems) => {
            this.items = currentItems;
        });
    }
}