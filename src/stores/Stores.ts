import { OperationStore } from "./operationStore";
import { DataStore } from "./dataStore";

class Stores {
    operations = new OperationStore();
    data = new DataStore();

}

export const store = new Stores();