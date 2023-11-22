import { faker } from "@faker-js/faker";
import { generateProtocolForPacient } from "../../src/protocols-generator";

jest.mock("uuid", () => {
  return {
    v4: () => { return "0000-0000-0000"}
  }
})

describe("Protocol Generator", () => {
  it("should create an protocol", async () => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()

    const protocol = generateProtocolForPacient(firstName, lastName, true)
    expect(protocol).toEqual({
      priority: true,
      date: expect.any(Date),
      pacient: `${firstName} ${lastName}`,
      protocol: "0000-0000-0000",
    })
  });
});