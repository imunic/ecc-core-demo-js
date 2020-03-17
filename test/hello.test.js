const supertest = require("supertest");
const app = require("../src/app");

const request = supertest(app);

describe("Route: hello", () => {
  it("GET /api/hello", async () => {
    const res = await request.get("/api/hello");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual("Hello Stranger!");
  });

  it("GET /api/hello?name=Friend", async () => {
    const res = await request.get("/api/hello?name=Friend");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual("Hello Friend!");
  });
});
