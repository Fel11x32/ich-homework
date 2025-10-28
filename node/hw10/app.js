import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const SECRET_JWT = process.env.SECRET_JWT;
const PORT = process.env.PORT || 3000;
if (!SECRET_JWT) throw new Error("SECRET_JWT не определён в .env");

const app = express();
app.use(express.json());

//Временная "БД" — массив пользователей в памяти.
const users = [
  {
    id: 1,
    username: "alex",
    email: "example@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    role: "admin",
  },
  {
    id: 2,
    username: "maria",
    email: "maria@gmail.com",
    password: bcrypt.hashSync("password", 10),
    role: "user",
  },
];
function generateToken(user){
    const payload ={
        userId:user.id,
        username:user.username,
        email:user.email,
        role:user.role,
    };
    return jwt.sign(payload,SECRET_JWT,{expiresIn:"15m"});
};

//Midleware
function authenticateJWT(req,res,next){
    const authHeader = req.headers.authorization;
        if(!authHeader)return res.status(401).json({message:'Токен не предоставен'})
    const token = authHeader && authHeader.split(' ')[1];
        if(!token)return res.status(401).json({message:"Токен не предоставен"})
    jwt.verify(token, SECRET_JWT,(err, user)=>{
        if(err)return res.status(403).json({ message: "Токен недействителен или истёк" });
    req.user = user;
    next()
});
};
function authorizeRole(requiredRole) {
    return(req,res,next)=>{
        if(!req.user) return res.status(401).json({ message: "Нет данных пользователя" });
        if(req.user.role !== requiredRole)return res.status(403).json({ message: "У вас нет прав для этого действия" });
        next();
    }
};

app.get("/", (_, res) => res.send("Home API"));

app.post('/login', async(req, res)=>{
    const {email, password}= req.body;
    if (!email || !password) return res.status(400).json({ message: "email и password обязательны" });

    const user = users.find(u=>u.email === email);
    if (!user) return res.status(404).json({ message: "Пользователь не найден" });

    const match = bcrypt.compareSync(password, user.password);
    if (!match) return res.status(401).json({ message: "Неверный пароль" });

    const token = generateToken(user);
    return res.json({
      message: "Успешный вход",
      token,
      playload:user,
    });
});

app.post('/change-email', authenticateJWT, (req,res)=>{
    const {newEmail} = req.body;
    if (!newEmail ) return res.status(400).json({ message: "email обязательный" });

    const userId = req.user.id
    const user = users.find(u=> u.id === userId);
    if(!user) return res.status(404).json({message:'Пользователь не найден'});
    
    user.email = newEmail;
    const newToken = generateToken(user);
  return res.json({
    message: "Email успешно обновлён",
    token: newToken,
    user,
});

})

app.delete('/delete-account', authenticateJWT,(req,res)=>{
  const userId = req.user.id
  const user = users.find(u=> u.id === userId);
  if(!user) return res.status(404).json({message:'Пользователь не найден'});
  if(!users.filter(u=>u.id !== userId)) return res.json({ message: "Аккаунт успешно удалён" });
});

app.post('/update-role', authenticateJWT, authorizeRole('admin'),(req,res)=>{
  const { id, role } = req.body;
  if (!id || !role) return res.status(400).json({ message: "id и role обязательны" });
  users = users.filter((u) => u.id !== userId);
  user.role= role;
  return res.json({
      message: "Успешно изменён role",
      token,
      playload:user,
    });
});

app.post('/refresh-token', (req,res)=>{
  const authHeader = req.headers.authorization;
        if(!authHeader)return res.status(401).json({message:'Токен не предоставен'})
    const token = authHeader && authHeader.split(' ')[1];
        if(!token)return res.status(401).json({message:"Токен не предоставен"})
    jwt.verify(token, SECRET_JWT,(err, user)=>{
        if(err)return res.status(403).json({ message: "Токен недействителен или истёк" });
      });
    const user = users.find(u=>u.email === email);
      if (!user) return res.status(404).json({ message: "Пользователь не найден" });
    const newToken = generateAccessToken(user);
      return res.json({ message: "Токен обновлён", token: newToken });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
