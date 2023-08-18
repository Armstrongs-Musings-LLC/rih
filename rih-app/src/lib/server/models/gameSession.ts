import { Guid } from 'guid-typescript';

export class GameSession {
    id: Guid;
    cabalId: Guid;
    name: string;
    defaultRules: boolean;
    dateCreated: Date;
    dateModified: Date;
    constructor(cabalId: Guid, name: string, defaultRules: boolean) {
        this.id = Guid.create();
        this.cabalId = cabalId;
        this.name = name;
        this.defaultRules = defaultRules;
        this.dateCreated = new Date();
        this.dateModified = new Date();
    }
}
