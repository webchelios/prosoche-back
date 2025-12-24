export class UpdateNoteDto {


    private constructor(
        public id: string,
        public title: string,
        public content: string,

    ) { }

    get values() {
        const returnObj: { [key: string]: any } = {}

        if (this.title) returnObj.title = this.title
        if (this.content) returnObj.content = this.content

        return returnObj
    }

    static create(object: { [key: string]: any }): [string?, UpdateNoteDto?] {
        const { id, title, content } = object

        if (!title) throw 'Title is required'
        if (!content) throw 'Content is required'

        return [undefined, new UpdateNoteDto(id, title, content)]
    }
}