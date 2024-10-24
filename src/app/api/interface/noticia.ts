export default interface Noticia {
    id?:string,
    autor:string,
    titulo:string,
    descripcion:string,
    imagenURL:string,
    meGusta:string[],
    noMeGusta:string[]
}
