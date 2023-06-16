import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function authenticateToken(req: any, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.sendStatus(401);
    }

    const SECRET = process.env.SECRET || 'm21d8d21n1b237421bws9ds78dsa277436hk';

    jwt.verify(token, SECRET, (err: any, user: any) => {
        if (err) {
            return res.status(403)
                .json({ error: "Unauthorized!" })
                .send();
        }
        req.user = user;

        next();
    });
}