export class CreateNoteDto {


    private constructor(
        public title?: string,
        public content?: string,

    ) { }

    static create(object: { [key: string]: any }): [string?, CreateNoteDto?] {
        const { title, content } = object

        return [undefined, new CreateNoteDto(title, content)]
    }
}