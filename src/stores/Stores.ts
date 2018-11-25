import { OperationStore } from "./operationStore";
import { DataStore } from "./dataStore";
import { DashBoardStore } from "./DashBoardStore";

class Stores {
    operations = new OperationStore();
    data = new DataStore();
    dash = new DashBoardStore();

}

export const store = new Stores();