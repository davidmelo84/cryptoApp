const express = require('express');
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/userController');

const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', createUser); // Criar usuário (registro)
router.get('/', authMiddleware, getUsers); // Buscar todos os usuários (somente autenticado)
router.get('/:id', authMiddleware, getUserById); // Buscar um usuário pelo ID
router.put('/:id', authMiddleware, updateUser); // Atualizar usuário
router.delete('/:id', authMiddleware, deleteUser); // Deletar usuário

module.exports = router;
