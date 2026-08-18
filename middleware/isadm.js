export default function isAdmin(req, res, next) {

    if (req.user.typeUser !== "admin") {
        return res.status(400).send({ message: "Acesso restrito a administradores" });
    }

    next();
}