import { Response, Request, NextFunction } from "express";
import jwt from 'jsonwebtoken'



export const isLoggedMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]
        jwt.verify(token as string,process.env.JWT_SECRET as string, (err: any, decoded: any) => {
            req.userEmail = decoded.email
            console.log(req.userEmail)
            next()
        })
    } catch (error) {
        if( error instanceof Error){
            return res.status(401).json({message: "invalid token"})
        }
    }
}