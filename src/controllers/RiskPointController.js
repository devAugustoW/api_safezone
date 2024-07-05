import RiskPoint from '../models/RiskPoint';

class RiskPointController{
  // Cria ponto de risco na Tabela
  async store(req, res){
    const { ref, title, location, description, status, image, statusDescription } = req.body

    let riskPoint = await RiskPoint.create({ 
      ref, 
      title, 
      location, 
      description, 
      status, 
      statusDescription,
      image 
    });

    return res.json({ 
      id: riskPoint._id,
      ref: riskPoint.ref,
      title: riskPoint.title,
      location: riskPoint.location,
      description: riskPoint.description,
      status: riskPoint.status,
      statusDescription: riskPoint.statusDescription,
      image: riskPoint.image,
      createdAt: riskPoint.createdAt,
      updatedAt: riskPoint.updatedAt 
    })

    // return res.json({ riskPoint });
  }
  
  // Atualiza Ponto de Risco
  async update(req, res){    
    const { id } = req.params;
    const {ref, title, location, description, status, statusDescription, image} = req.body;

    const existingRiskPoint = await RiskPoint.findById(id);

    if (!existingRiskPoint) {
      return res.status(404).json({ error: 'Ponto de risco não encontrado' });
    }

    // Atualizando o documento no MongoDB
    const updatedRiskPoint = await RiskPoint.findByIdAndUpdate(
      id,
      { ref, title, location, description, status, statusDescription, image }
    );
    
    return res.json({
      id: updatedRiskPoint._id,
      ref: updatedRiskPoint.ref,
      title: updatedRiskPoint.title,
      location: updatedRiskPoint.location,
      description: updatedRiskPoint.description,
      status: updatedRiskPoint.status,
      statusDescription: updatedRiskPoint.statusDescription,
      image: updatedRiskPoint.image,
      createdAt: updatedRiskPoint.createdAt,
      updatedAt: updatedRiskPoint.updatedAt
    })

    // return res.json(updatedRiskPoint);
  }

  // Resgata os pontos de risco
  async index(req, res) {
    const riskPoints = await RiskPoint.find({});

    if (!riskPoints) {
      return res.status(404).json({ error: 'Falha ao listar Pontos de Risco.'});
    }

    return res.json(riskPoints);  
  }

  // Deleta ponrto de risco
  async delete(req, res) {
    const { id } = req.params;
    console.log('Recebendo pedido para deletar ID:', id);

    const riskPoint = await RiskPoint.findByIdAndDelete(id);

    if (!riskPoint) {
      return res.status(404).json({ message: 'ID do Ponto de risco não encontrado' });
    }
  
    return res.json({ message: 'Ponto de risco deletado com sucesso!' });    
  }

  // Resgata as coordenadas de localicação para renderizar pontos no mapa
  async getLocations(req, res) {

    const locations = await RiskPoint.find({}, 'location'); 

    if (!locations){
      return res.status(404).json({ error: 'Falha ao resgatar localizações.'})
    }

    return res.json(locations);    
  }

}

export default new RiskPointController();