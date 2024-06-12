import RiskPoint from '../models/RiskPoint';

class RiskPointController{

    // Cria ponto de risco na Tabela
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

    // Resgata as coordenadas de localicação
    async getLocations(req, res) {

        try{
            const locations = await RiskPoint.find({}, 'location'); 
            console.log('Pegou locations: ', locations)
            return res.json(locations);

        }catch(error){
            console.error('Erro ao buscar localizações:', err);
            return res.status(500).json({ error: 'Erro ao buscar localizações' });

        }

    }

    // Resgata os pontos de risco
    async getriskpoint(req, res) {
        try {
            const riskPoints = await RiskPoint.find({});
            return res.json(riskPoints);

        } catch (error) {
            console.error('Erro ao buscar pontos de risco:', error);
            return res.status(500).json({ error: 'Erro ao buscar pontos de risco' });
        
        }
    }

    // Atualiza Ponto de Risco
    async updateRiskPoint(req, res){
        const { id, ref, title, location, description, status, image } = req.body;

        try {
            // Verificar se o documento existe
            const existingRiskPoint = await RiskPoint.findById(id);

            if (!existingRiskPoint) {
                return res.status(404).json({ error: 'Ponto de risco não encontrado' });
            }

            // Atualizando o documento no MongoDB
            const updatedRiskPoint = await RiskPoint.findByIdAndUpdate(id,
                { ref, title, location, description, status, image }
            );
        
            if (!updatedRiskPoint) {
                return res.status(404).json({ error: 'Ponto de risco não encontrado' });
            }
        
            return res.json(updatedRiskPoint);

        } catch (error) {
            console.error('Erro ao atualizar Ponto de Risco:', error);
            return res.status(500).json({ error: 'Erro ao atualizar Ponto de Risco' });
        }

    }

    // Deleta ponrto de risco
    async destroy(req, res) {
        const { id } = req.params;
        console.log('Recebendo pedido para deletar ID:', id);

        try {
            const riskPoint = await RiskPoint.findByIdAndDelete(id);
        
            if (!riskPoint) {
                return res.status(404).json({ message: 'ID do Ponto de risco não encontrado' });
            }
        
            return res.json({ message: 'Ponto de risco deletado com sucesso' });
        
        } catch (err) {
            return res.status(500).json({ message: 'Erro ao deletar ponto de risco' });
        
        }
    }
}

export default new RiskPointController();