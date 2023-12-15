import pg from "pg";

const pool = new pg.Pool({
  port: 5432,
  host: "localhost",
  user: "postgres",
  password: "admin95",
  database: "PERN",
});

pool.on("connect", () => {
  console.log("New connection aquired");
});

export default pool;
