import { Request, Response, Router } from 'express';

const router = Router();

router.post(
    '/',
    ( Request, Response): Response => {
        return Response.status(201)
);

router.get();

export default router;
