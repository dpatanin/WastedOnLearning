export default function TEXT(file: File): Promise<number> {
    return file.text().then((text)=> text.split(" ").length)
}
