import { AplicationError } from "protocols";

export function notFoundError(): AplicationError {
  return {
    name: "NotFoundError",
    message: "No result for this search!",
  };
}
