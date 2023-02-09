const db = require("../services/db");
const helper = require("../helper");

// Get all users
async function getAllUser(req, res) {
  const rows = await db.query(`SELECT * from user`);
  const data = helper.emptyOrRows(rows);

  return res.json(data);
}

// create user
async function createUser(req, res) {
  const {
    firstname,
    lastname,
    mobilenumber,
    email,
    address,
    qualification,
    usercourseid,
    userrole,
    userstatus,
    usercreatedat,
    userupdated,
    usersubscription,
    usersubscriptionid,
  } = req.body;

  const result = await db.query(
    `INSERT INTO user (
        firstname, 
        lastname, 
        mobilenumber, 
        email, 
        address, 
        qualification, 
        usercourseid, 
        userrole, 
        userstatus, 
        usercreatedat, 
        userupdated, 
        usersubscription, 
        usersubscriptionid) 
        VALUES (
            '${firstname}', 
            '${lastname}', 
            '${mobilenumber}', 
            '${email}', 
            '${address}', 
            '${qualification}', 
            ${usercourseid}, 
            '${userrole}', 
            ${userstatus}, 
            '${usercreatedat}', 
            '${userupdated}', 
            ${usersubscription}, 
            ${usersubscriptionid})`
  );

  let message = "Error in creating user";

  if (result.affectedRows) {
    message = "User created successfully";
  }

  return res.json({ data: message });
}

// get user by id
async function getUserById(req, res) {
  const { userid } = req.query;

  const rows = await db.query(`SELECT * from user where userid = ${userid}`);
  const data = helper.emptyOrRows(rows);

  return res.json(data);
}

module.exports = { getAllUser, createUser, getUserById };
