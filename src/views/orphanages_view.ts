import { Orphanage } from "../models/Orphanage";
import { ImagesView } from './images_view';

export class OrphanagesView {
    static render(orphanage: Orphanage) {
        return {
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends,
            images: ImagesView.renderMany(orphanage.images)
        };
    }

    static renderMany(orphanages: Orphanage[]) {
        return orphanages.map(orphanage => OrphanagesView.render(orphanage));
    }
}