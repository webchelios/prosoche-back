export class NoteEntity {
    constructor(
        public readonly id: number,
        public readonly title: string,
        public readonly content: string,
        public readonly createdAt: Date,

    ) { }


}