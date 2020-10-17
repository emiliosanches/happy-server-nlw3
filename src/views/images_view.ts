import { Image } from "../models/Image";

export class ImagesView {
    static render(image: Image) {
        return {
            id: image.id,
            url: `http://192.168.100.6:25565/uploads/${image.path}`
        };
    }

    static renderMany(images: Image[]) {
        return images.map(image => ImagesView.render(image));
    }
}