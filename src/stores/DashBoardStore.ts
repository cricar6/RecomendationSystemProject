import { observable, action, computed } from 'mobx';
import { store } from './Stores';

export class DashBoardStore {

    @observable searchVar : string = "";

    @observable userID : string = '';

    @observable showHood: boolean = false;

    @observable showSelector : boolean = false;

    @observable showIngredients : boolean = false;

    @action ondragstart (e: any, id: string) {
        this.userID = id;
        console.log (this.userID);
    }
    @action search () {
        if (store.operations.userArrayBackup.some((e: any) => {
            return e.name.toLowerCase() == this.searchVar.toLowerCase();
        })) {
  
            /*Here it is filtering, it will show a list with all the elements 
            that have a casuality with the string written in the input*/
            console.log("This is filtering");

            store.operations.userArrayBackup = store.operations.userArrayBackup.filter((e: any) => {
                return e.name.toLowerCase().includes(this.searchVar.toLowerCase());
            })
            console.log(store.operations.userArrayBackup);

        } else {
            console.log("This is not filtering");
            store.operations.userArrayBackup = store.operations.userArray;
        }
    }

    @action modifyVar (searchVar:string) {
        this.searchVar = searchVar;
    }
}