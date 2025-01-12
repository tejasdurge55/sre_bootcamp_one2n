const request = require("supertest");

describe("Student CRUD API", () => {
  it("should return healthcheck status", async () => {
    const res = await request("http://localhost:3000").get(
      "/api/v1/healthcheck"
    );
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("status", "OK");
  });
});
