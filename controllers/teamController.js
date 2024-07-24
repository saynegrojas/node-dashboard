import Team from '../models/team.js';

const getAllTeam = async (request, response) => {
  try {
    const team = await Team.getAll();
    response.status(200).json(team);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const createTeamMember = async (request, response) => {
  try {
    const { username, password, email } = request.body;
    const userId = await Team.create({ username, password, email });
    response.status(201).json({ userId });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export { getAllTeam, createTeamMember };
