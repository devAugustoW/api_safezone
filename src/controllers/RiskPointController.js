import RiskPoint from '../models/RiskPoint';

class RiskPointController{

    async store(req, res){
        const { ref, title, location, description, status, image } = req.body
        
        try {
            let riskPoint = await RiskPoint.create({ 
                ref, 
                title, 
                location, 
                description, 
                status, 
                image 
            });
        
            return res.json(riskPoint);

        } catch (err) {
            return res.status(500).json ({ messagem: 'Erro ao inserir ponto de risco na TABELA'});

        }     
    }
}

export default new RiskPointController();