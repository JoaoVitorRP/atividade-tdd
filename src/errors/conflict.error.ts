import { AplicationError } from "protocols";

export function conflictError(): AplicationError {
  return {
    name: "ConflictError",
    message: "This information already exists in our database!",
  };
}
