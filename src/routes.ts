import { Router } from 'express';
import multer from 'multer';
import { multerConfig } from './config/upload';
import { OrphanagesController } from './controllers/OrphanagesController';

const upload = multer(multerConfig)
const router = Router();

router.get('/orphanages', OrphanagesController.index);
router.get('/orphanages/:id', OrphanagesController.show);
router.post('/orphanages', upload.array('images'), OrphanagesController.create);

export { router };
