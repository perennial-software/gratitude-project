import axios from "axios";
import api from "@/api/api";

jest.mock("axios");

test("should fetch message by id", () => {
  const message = {
    id: "54321"
  };
  axios.get.mockResolvedValue(message);

  api
    .getGratitudeMessage(message.id)
    .then(response => expect(response.id).toEqual(message.id));
});
