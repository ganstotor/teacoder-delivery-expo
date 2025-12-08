export const generateSlug = (value: string): string => {
  return value
    .toString()
    .normalize('NFKD')               // убираем диакритику (й → i, é → e)
    .replace(/[\u0300-\u036f]/g, '') // чистим хвосты после normalize
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')     // всё, что не буквы/цифры → "-"
    .replace(/^-+|-+$/g, '');        // убираем "-" в начале и конце
}
