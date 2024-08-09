"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handler;
var _postgres = require("@vercel/postgres");
async function handler(request, response) {
  try {
    const result = await (0, _postgres.sql)`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
    return response.status(200).json({
      result
    });
  } catch (error) {
    return response.status(500).json({
      error
    });
  }
}
//# sourceMappingURL=create-pets-table.js.map