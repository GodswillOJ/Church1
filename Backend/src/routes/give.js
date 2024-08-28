import express from 'express';


const router = express.Router();


router.use(express.urlencoded({ extended: true }));
router.use(express.json());

export default router;
