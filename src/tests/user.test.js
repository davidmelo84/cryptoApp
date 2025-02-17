const request = require("supertest");
const app = require("../server"); // Agora usamos o app sem iniciar um novo servidor
const mongoose = require("mongoose");

beforeAll(async () => {
  await mongoose.connection.dropDatabase(); // Limpa o banco antes dos testes
});

afterAll(async () => {
  await mongoose.connection.close(); // Fecha a conexão após os testes
});

describe("Testes da API de Usuários", () => {
  it("Deve criar um usuário", async () => {
    const res = await request(app).post("/api/users").send({
      nome: "Teste Usuário",
      email: "teste@example.com",
      senha: "senha123",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("token");
  });

  it("Deve buscar usuários", async () => {
    const loginRes = await request(app).post("/api/auth/login").send({
      email: "teste@example.com",
      senha: "senha123",
    });

    console.log("Resposta do login:", loginRes.body); // 🔍 Verificando login

    const token = loginRes.body.token;
    console.log("Token recebido:", token); // 👀 Verificando se o token está vindo corretamente

    const res = await request(app)
      .get("/api/users")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
  it("Deve criar um usuário", async () => {
    const res = await request(app).post("/api/users").send({
      nome: "Teste Usuário",
      email: "teste@example.com",
      senha: "senha123",
    });
  
    console.log("Resposta ao criar usuário:", res.body); // 🔍 Debugando o erro
  
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("token");
  });
  
});
