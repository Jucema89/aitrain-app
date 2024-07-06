import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../database/prisma';
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {

    switch (req.method) {
        case 'GET':
            if(req.query.id){
                getOneTrain(req, res)
            } else {
                getTrains(req, res)
            }
            break;
        case 'POST':
            createTrain(req, res)
            break;
        case 'PUT':
            updateTrain(req, res)
            break;
        case 'DELETE':
            _deleteTrain(req, res)
            break;
    
        default:
            getTrains(req, res)
            break;
    }
}

const getTrains = async (req: NextApiRequest, res: NextApiResponse) => {
    const trains = await prisma.trainDocs.findMany()
    res.json(trains)
}

const getOneTrain = async (req: NextApiRequest, res: NextApiResponse) => {   
    try {
        const { id } = req.query 
        const idTrain = id as string

        const trainings = await prisma.trainDocs.findUnique({
            where: {
                id: idTrain
            }
        })

        res.status(200).json({
            success: true,
            data: trainings
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error
        })
    }
}

const createTrain = async (req: NextApiRequest, res: NextApiResponse) => { 
    try {
        const { id } = req.query
        
    } catch (error) {
        
    }
}

const updateTrain = async (req: NextApiRequest, res: NextApiResponse) => {   
    const { id } = req.query

}

const _deleteTrain = async (req: NextApiRequest, res: NextApiResponse) => {   
    const { id } = req.query
    
}

