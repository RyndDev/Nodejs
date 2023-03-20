import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
export const getAll = async (req, res) => {
    try {
        const { data: users } = await axios.get(`${process.env.API_URI}`);
        if (users.length === 0) {
            res.status(404).json({
                message: "khong co san pham nao"
            });
        }
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};

export const get = async (req, res) => {
    try {
        const data = await axios.get(`${process.env.API_URI}/${req.params.id}`
        );
        const { data: user } = data
        if (!user) {
            return res.status(404).json({
                message: "not found"
            });
        }
        return res.status(200).json({
            message: "user found",
            data: product
        });

    } catch (error) {
        return res.status(500).json({
            message: "loi server"
        })
    }
}
export const create = async (req, res) => {
    try {
        const { data: user } = await axios.post(`${process.env.API_URI}`, req.body);
        if (!user) {
            return res.status(400).json({
                message: "khong the them moi nguoi dung"
            })
        }
        return res.status(201).json({
            message: "Them moi nguoi dung thanh cong",
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}
export const remove = async (req, res) => {
    try {
        await axios.delete(`${process.env.API_URI}/${req.params.id}`);
        return res.status(200).json({
            message: "user da duoc xoa thanh cong ",
        });
    } catch (error) {
        return res.status(500).json({
            message: error
        });
    }
}
export const update = async (req, res) => {
    try {
        const { data: user } = await axios.patch(
            `${process.env.API_URI}/${req.params.id}`,
            req.body
        );
        if (!user) {
            return res.status(404).json({
                message: "Không tìm thấy user",
            });
        }
        return res.status(200).json({
            message: "Sản phẩm đã được cập nhật thành công",
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};

export const put = async (req, res) => {
    try {
        const { data: user } = await axios.put(
            `${process.env.API_URI}/${req.params.id}`,
            req.body
        );
        console.log(data);
        if (!user) {
            return res.status(404).json({
                message: "Không tìm thấy user",
            });
        }
        return res.status(200).json({
            message: "user đã được cập nhật thành công",
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};
