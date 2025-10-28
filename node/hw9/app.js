import express from 'express';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

let users = [
    {
  id: 1,
  email: "anna@mail.com",
  password: "123456",
  role: "admin",
  mustChangePassword: true
}
];

app.get("/users", (req, res) => {
  res.json(users);
});


function isAuth(req,res,next){
    try {
    const {userId} = req.body;
    if (!userId) return res.status(401).json({ message: "Нужен userId" });
    const user = users.find(u=> u.id === userId);
    if (!user) return res.status(401).json({ message: "Пользователь не найден" });
    req.user = user;
    next();
    } catch (error) {
        next(error)
    }
};
function checkMustChangePassword(req,res,next){
if (req.user.mustChangePassword) {
    return res.status(403).json({ message: "Вы должны сменить пароль" });
  }
  next();
};
function checkRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ message: "Доступ запрещён" });
    }
    next();
  };
}

app.post('/register',async(req,res)=>{
try {
    const {email, password}= req.body;
    const existing = users.find(u=> u.email === email);
    if (existing) return res.status(400).json({ message: "Email уже зарегистрирован" });

    const hash = await bcrypt.hash(password, 10);
    const newUser = {
    id: users.length + 1,
    email,
    password: hash,
    role: "user",
    mustChangePassword: false
  };
  users.push(newUser);
  res.json({ message: "Регистрация успешна", userId: newUser.id });
} catch (error) {
    next(error)
}
});

app.post('/change-password', isAuth, async(req,res)=>{
    const {newPassword} = req.body;

    const newHash = await bcrypt.hash(newPassword, 10);
    req.user.password = newHash;
    req.user.mustChangePassword = false;

    res.json({ message: "Пароль изменён" });
})

app.post("/delete-account", isAuth, checkMustChangePassword, async (req, res) => {
    const {password} = req.body;
    console.log("password из body:", password, typeof password);
    console.log("user.password из req.user:", req.user.password, typeof req.user.password);


    const match = await bcrypt.compare(password, req.user.password);
    if (!match) return res.status(400).json({ message: "Неверный пароль" });

    users = users.filter( u => u.id !== req.user.id)
    res.json({ message: "Аккаунт удалён" });
});

app.get("/admin", isAuth, checkRole("admin"), (req, res) => {
  res.json({ message: "Добро пожаловать, админ!" });
});

app.post("/change-email", isAuth, async (req, res) => {
  const { newEmail, password } = req.body;

    const match = await bcrypt.compare(password, req.user.password);
    if (!match) return res.status(400).json({ message: "Неверный пароль" });

    const existing = users.find(u=> u.email === newEmail);
    if (existing) return res.status(400).json({ message: "Email уже зарегистрирован" });

    req.user.email = newEmail;
    res.json({ message: "Email обновлён" });
});

app.use((err, _, res, next)=>{
    console.error(err.message);
    res.status(500).send({success:false, message:err.message});
})

app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});