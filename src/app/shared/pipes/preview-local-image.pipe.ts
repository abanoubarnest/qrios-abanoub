import { Pipe, PipeTransform } from '@angular/core';
import { readFileAsync } from '../helpers/file-reader';
@Pipe({
    name: 'previewLocalImage'
})
export class PreviewLocalImagePipe implements PipeTransform {

    async transform(src: File): Promise<string> {
        return await readFileAsync(src);
    }
}
